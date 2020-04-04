const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/playground", {
    useNewUrlParser: true
}).then(() => {
    console.log("数据库连接成功")
}).catch((err) => {
    console.log(err, "数据连接失败")
});

//用户集合规则
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

// 文章集合规则
const postSchema = new mongoose.Schema({
    title:{
        type:String,

    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"//关联集合
    }
});
// 用户集合 
const User = mongoose.model("User",userSchema);
// 文章集合
const Post = mongoose.model("Post",postSchema);


// 创建用户
// User.create({
//     name:"鲍烈"
// },{
//     name: "彭珍"
// }).then(result=>{
//     console.log(result,"创建用户成功")
// });

// 创建文章
// Post.create({
//     title:"python",
//     author:"5e439109941f76270c979712"
// },{
//     title: "java",
//     author: "5e439109941f76270c979713"
// }).then(result=>{
//     console.log(result,"创建文章成功")
// });

// Post.find().then(result=>{
//     console.log(result);
// });
// [
// {
//     _id: 5e439180a2da9453386d2ba2,
//         title: 'python',
//             author: 5e439109941f76270c979712,
//                 __v: 0
// },
// {
//     _id: 5e439180a2da9453386d2ba3,
//         title: 'java',
//             author: 5e439109941f76270c979713,
//                 __v: 0
// }
// ]

Post.find().populate("author").then(result => {
    console.log(result);
});