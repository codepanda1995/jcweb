// 引入express框架
const express = require("express");
// 路径处理模块
const path = require("path");
// 导入bodyParser模块
const bodyParser = require('body-parser');

// 建立服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname,"public")));
// 处理post请求参数
app.use(bodyParser.json()); 

// 默认进入首页
app.get("/",(req,res)=>{
    res.send("正在todo首页");
});



// 引入todo路由
const todoRouter = require("./route/todo");
// 当客户端的请求路径以/todo开头时
app.use("/todo",todoRouter);

// 获取用户列表信息
app.get("/users",(req,res)=>{
    res.send("当前是获取用户列表信息的路由");
});

// 获取某个用户具体信息路由
app.get("/users/:id", (req, res) => {
    // 获取客户端传递过来的用户id
    const id = req.params.id;

    res.send(`当前是获取id为${id}用户列表信息的路由`);
})

// 获取用户列表信息
app.delete("/users/:id", (req, res) => {
    // 获取客户端传递过来的用户id
    const id = req.params.id;

    res.send(`当前是删除id为${id}用户列表信息的路由`);
  
})

// 获取用户列表信息
app.put("/users/:id", (req, res) => {
    // 获取客户端传递过来的用户id
    const id = req.params.id;
    res.send(`当前是编辑id为${id}用户列表信息的路由`);
})

// xml文件路由
app.get("/xml",(req,res)=>{
    // 设置请求头
    res.header("content-type","text/xml");
    res.send("<message><title>super</title></message>")
});


// 监听端口
app.listen(3000);
// 服务器正在运行中
console.log("服务器正在运行中...");