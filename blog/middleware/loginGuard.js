const guard = (req, res, next) => {
    // 判断用户访问的是否是登录页面 判断用户的登录状态

    if (req.url != "/login" && !req.session.username) {
        // 如果不是用户登录 将重定向到登录页面
        res.redirect("/admin/login");
    } else {
        // 如果用户处于登录状态，并且是个普通用户
        if(req.session.role == "normal"){
            // 跳转到博客首页，阻止程序向下执行
            return res.redirect("/home/");
        }
        
        // 如果用户是登录的，将请求放行
        next();
    }
};

module.exports = guard;