// 引入joi模块
const Jio = require("joi");
// 引入用户集合的构造函数
const { User, validateUser} = require("../../model/user");

module.exports = async (req,res,next)=>{
    // res.send("ok");
    try{
        // 验证信息
        await validateUser(req.body);
    }catch(e){
        // 验证未通过
        // 重定向回用户添加页面
        // return res.redirect(`/admin/user-edit?message=${e.message}`)
        return next(JSON.stringify({path:"/admin/user-edit",message:e.message}));
        // JSON.stringify() 将对象数据类型转换成字符串数据类型
    
    }
    
    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({email:req.body.email});
    // 如果用户已经存在 邮箱已经被占用
    if(user){
        // 重定向回用户添加页面
        return next(JSON.stringify({path:'/admin/user-edit', message:"邮箱地址已经被占用"}));
    }

   
    // 将用户信息添加到数据库中
    await User.create(req.body);
    // res.send(user);
    // 重定向到用户管理页面
    res.redirect("/admin/user");
}