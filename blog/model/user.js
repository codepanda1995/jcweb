// 引入mongoose模块
const mongoose = require("mongoose");
//导入Joi模块
const Joi = require("joi");

// 创建集合规则
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        // 保证邮箱地址插入数据库唯一
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{//角色用户 admin normal
        type: String,
        required: true
    },
    state:{
        type:Number,
        default:0//0 启用状态 1 禁用状态
    }

});

// 创建集合
const User = mongoose.model("User",userSchema);

// 创建数据
function createUser(){
    User.create({
        username:"赵舜",
        email:"zhaoshun@jc.com",
        password:"1234",
        role:"admin",
        state: 0
    }).then(()=>{
        console.log("用户创建成功");
    }).catch(()=>{
        console.log("用户创建失败");
    });
}

// 创建用户
// createUser();

// 验证用户信息
const validateUser = async (user) =>{
    // 定义对象的验证规则
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error("用户名不符合规则")),
        email: Joi.string().email().required().error(new Error("邮箱地址不符合规则")),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error("密码不符合规则")),
        role: Joi.string().valid("normal", "admin").required().error(new Error("角色不符合规则")),
        state: Joi.number().valid(0, 1).required().error(new Error("状态不符合规则")),
    };

    // 验证信息
    await Joi.validate(user, schema);
}


// 导出
module.exports = {
    User: User,
    validateUser:validateUser
};
