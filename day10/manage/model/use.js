const mongoose = require("mongoose");
// 创建用户集合规则
const UserSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 60
    },
    password: String,
    email: String,
    hobbies: [String]
});
// 使用用户集合
const User = mongoose.model("User", UserSchma);
// 创建用户数据
// User.create().then(result=>console.log(result));
// 开放出去
module.exports = User;