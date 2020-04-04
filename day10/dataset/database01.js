//导入第三方包
const mongoose = require("mongoose");
//进行数据库连接
mongoose.connect("mongodb://localhost/playground",{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("数据库连接成功");
}).catch(err=>
    console.log(err,"数据库连接失败")
)

//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

//使用规则创建集合
const Course = mongoose.model("Course",courseSchema);//courses

//添加数据
const course = new Course({
    name: "nodejs",
    author: "pink",
    isPublished: true
});

//保存数据
course.save();