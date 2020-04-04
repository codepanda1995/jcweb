// 将用户集合信息进行导入
const { User } = require("../../model/user");

const login = async (req, res) => {
    // 接收请求参数
    // res.send(req.body);
    const { email, password } = req.body;
    // 如果用户没有输入邮件地址
    // if (email.trim().length == 0 || password.trim().length == 0){
    //     res.status(400).send("<h4>邮件地址未输入</h4>");
    // };
    // 此处内容需要在浏览器的Javascript进行网站设置 为禁止
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render("admin/error", { msg: "邮件地址或密码输入为空" });
    }

    //根据邮箱地址查询用户信息
    let user = await User.findOne({ email });

    if (user) {// 如果查询到了用户 User变量的值为对象类型 对象中的存储信息是用户信息
        let isValid =  (password == user.password);
        if (isValid) {
            // 将用户名称保存在请求对象中 session需要通过express-session模块进行调用
            req.session.username = user.username;
            // 将用户的角色保存在请求对象中
            req.session.role = user.role;
            // res.send(user);
            //登陆成功
            // res.send("登录成功");
            req.app.locals.userInfo = user;
            // 对用户的角色进行判断
            if (user.role == 'admin') {
                // 重定向到用户列表页面
                res.redirect('/admin/user');
            } else {
                // 重定向到博客首页
                res.redirect('/home/');
            }
        } else {
            // 登录失败
            res.status(400).render("admin/error", { msg: "邮件地址或密码输入错误" });
        }
    } else {// 如果没有查询到用户 User变量的值为空
        res.status(400).render("admin/error", { msg: "邮件地址或密码输入错误" });
    }
};

module.exports = login;