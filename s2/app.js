// 引入express框架
const express = require("express");
// 路径处理模块
const path = require('path');
// 接收post请求参数
const formidable = require('formidable');
// 实现session功能
var session = require('express-session');
// 创建web服务器
const app = express();
// 接收post请求参数
// 实现session功能
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));


// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, "public")));

// 首页路由
app.get("/", (req, res) => {
    res.send("ok");
});

// cross跨域请求
app.get("/cross",(req,res)=>{
    res.send("ok");
});

// 拦截所有请求--中间件
app.use((req, res, next) => {
    // 1、允许哪些客户端访问我 *表示所有客户端均可访问
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    // 2、允许客户端使用哪些请求方法访问我
    res.header('Access-Control-Allow-Methods', 'get,post')
    // 3、允许客户端发送跨域请求时携带cookie信息
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


// 跨域登录
app.post("/login",(req,res)=>{
    // 创建表单解析对象
    var form = formidable.IncomingForm();
    // 解析表单
    form.parse(req,(err,fields,file)=>{
        // 接收客户端传递过来的用户名和密码
        const {username,password} = fields;
        // 用户名、密码比对
        if(username == "super" && password == "1234"){
            // 设置session
            req.session.isLogin = true;
            res.send({message:"登录成功"});

        }else{
            res.send({message:"登录失败，用户名或密码错误"});
        }
    })
});

// 进行监测用户登录状态
app.get('/checkLogin', (req, res) => {
    // 判断用户是否处于登录状态
    if (req.session.isLogin) {
        res.send({ message: '处于登录状态' })
    } else {
        res.send({ message: '处于未登录状态' })
    }
});




// 监听端口
app.listen(3001);
// 
console.log("B服务器正在运行中...");