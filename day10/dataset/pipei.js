const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/playground",{
    useNewUrlParser:true
}).then(()=>{
    console.log("数据库连接成功")
}).catch((err)=>{
    console.log(err,"数据连接失败")
});

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"请输入标题"],
        minlength:[2,"标题长度不可以小于2"],
        maxlength: [5, "标题长度不可以大于5"],
        trim:true//删除文字内容中的空格
    },
    age:{
        type:Number,
        min:18,
        max:100
    },
    publishDate:{
        type:Date,
        default:Date.now
    },
    category:{
        type:String,
        //枚举 列举出当前字段拥有的值
        enum: {
            values: ["html", "css", "js", "nodejs"],
            message:"输入的文件类型不符合"
        }
    },
    author:{
        type:String,
        validate:{//自定义验证器
            validator: v =>{//v 当前用户传递进来的值
                // 返回布尔值 true 成功 false 验证失败
                return v && v.length > 4
            },
            // 自定义验证错误信息
            message:"当前字段传递的值不符合规则"
        }
    }
});

const Post = mongoose.model("Post",postSchema);

Post.create({
    title:"电路与案例",
    age:20,
    
    category:"java",
    author:"刘玉玲真棒"

}).then(result=>console.log(result))
.catch(error=>{
    // 获取错误信息对象
    const err = error.errors;
    //循环错误信息对象
    for(var attr in err){
        // 将错误信息打印到控制台中
        console.log(err[attr]["message"]);
    } 
});