const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/playground", {
    useNewUrlParser: true
}).then(
    () => {
        console.log("数据库连接成功");
    }
)//连接失败，捕获异常
    .catch((err) => {
        console.log(err, "数据库连接失败");
    });

// 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]

});

//使用规则创建集合
const User = mongoose.model("User", userSchema);

// 更新集合中的文档(只更新第一个) { n: 1, nModified: 1, ok: 1 } n:更新了一个 nModified: 1影响了一个
User.updateOne({name:"文波"},{name:"二狗"}).then(result=>console.log(result));
// 更新集合中的多个文档 
User.updateMany({},{age:16}).then(result=>console.log(result));