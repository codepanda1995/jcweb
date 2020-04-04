//导入第三方包
const mongoose = require("mongoose");
//进行数据库连接
mongoose.connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功");
}).catch(err =>
    console.log(err, "数据库连接失败")
)

//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

//使用规则创建集合
const Course = mongoose.model("Course", courseSchema);//courses

//向集合中插入文档
// Course.create({
//     name:"python",
//     author:"orange",
//     isPublished:false
// },(err,result)=>{
//     //打印错误信息
//     console.log(err);
//     //打印文档信息
//     console.log(result);
// });

//使用promise方法进行插入文档
Course.create({
    name:"go",
    author:"yellow",
    isPublished:true
}).then(result=>{
    console.log(result);
})