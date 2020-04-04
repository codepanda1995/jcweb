const {User} = require("../../model/user");
module.exports = async (req,res,next) =>{
    //接收客户端传递过来的请求参数 解构
    const {username,email,role,state,password} = req.body;
    
    // 即将要修改的用户id
    const id = req.query.id;
    // 将密码打印到网页上
    // res.send(body.password);

    let user = await User.findOne({_id:id});
    // 密码比对
    const isValid = password == user.password;
    if(isValid){
        // 密码比对成功
        // res.send("密码比对成功");
        // 将要修改的用户信息存储到数据库中
        await User.updateOne({_id:id},{
            username:username,
            email:email,
            role:role,
            state:state
        });

        // 将页面重定向到用户列表页面
        res.redirect("/admin/user");
        
    }else{
        // 密码比对失败
        // res.send("密码比对失败");
        let obj = {
            path:"/admin/user-edit",
            message:"密码比对失败，不能进行用户信息的修改",
            id:id
        };
        next(JSON.stringify(obj));
     
    }
    // res.send(user);


}