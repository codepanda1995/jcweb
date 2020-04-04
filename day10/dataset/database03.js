//导入模块
const mongoose = require("mongoose");


//建立数据库连接
mongoose.connect("mongodb://localhost/playground",{
    useNewUrlParser:true
})
//连接成功
.then(()=>{
    console.log("数据库连接成功");
})
//连接失败，捕获异常
.catch((err)=>{
    console.log(err,"数据库连接失败");
});

// 创建集合规则
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String,
    hobbies:[String]

});

//使用规则创建集合
const User = mongoose.model("User",userSchema);

//使用promise方法进行插入文档
User.create({
    name: "博文",
    age: 15,
    email: "bowen@163.com",
    password: "123",
    hobbies: ["打篮球","打游戏","唱歌","打飞机"]
}, {
    name: "文波",
    age: 16,
    email: "wenbo@163.com",
    password: "123",
    hobbies: ["打篮球", "打游戏", "唱歌", "打飞机","rap"]
}, {
    name: "赵舜",
    age: 15,
    email: "zhaoshun@163.com",
    password: "123",
    hobbies: ["打篮球", "打游戏", "唱歌", "打飞机","跳"]
}).then(result => {
    console.log(result);
})

// 查询用户集合中的所有文档
// User.find().then(result=>console.log(result));


// 通过_id字段查找文档
// User.find({ _id:"5e43760a8c3de74d20d0dbe7"}).then(result=>{
//     console.log(result);
// });

//findOne方法返回一条文档，默认返回当前集合中的第一条文档
// User.findOne({ name: "铁头"}).then(result=>{
//     console.log(result);
// });

// 匹配大于 小于
// User.find({age:{$gt:12,$lt:14}}).then(result=>{console.log(result);});
//查找包含该信息的文档
// User.find({hobbies:{$in:["打篮球"]}}).then(result=>{console.log(result);});

//根据指定字段查找信息
// User.find().select("name email -_id").then(result => { console.log(result); });

// 根据字段进行排序 -字段降序排列
// User.find().sort("-age").then(result => { console.log(result); });

// 根据序号skip跳过多少条数据，Limit限制显示数量
// User.find().skip(1).limit(2).then(result=>{console.log(result)});