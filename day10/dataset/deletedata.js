const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/playground",{
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

// 查找一条文档并且删除,并返回被删除的信息
// 如果查询条件匹配多条信息，则会删除第一条信息
// User.findByIdAndDelete({ _id:"5e437c21df25b335984935ed"}).then(result=>console.log(result));


// { n: 5, ok: 1, deletedCount: 5 } n:当前删除了几条数据 ok:表示删除成功
User.deleteMany({}).then(result=>console.log(result));


