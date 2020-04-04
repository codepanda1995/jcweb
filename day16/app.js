// 引入express框架
const express = require("express");
// 引入路径处理模块path
const path = require("path");
// 向其他服务器端请求数据模块
const request = require("request");

// 建立服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname,"public")));

// 首页路由
app.get("/",(req,res)=>{
    res.send("ok");
})

// 服务运行路由
app.get("/server",(req,res)=>{
    // response响应信息
    request("http://localhost:3001/cross",(err,response,body)=>{
    res.send(body);
    })
});




// 监听端口
app.listen(3000);
// 
console.log("A服务器正在运行中...");