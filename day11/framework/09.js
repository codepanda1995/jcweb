// 引入express框架
const express = require("express");
// 创建网站服务器
const app = express();

app.get("/index",(req,res)=>{
    // 获取get请求参数
    res.send(req.query);
})

app.listen(3000);
console.log("服务器正在运行中...");

// 地址栏输入 http://localhost:3000/index?name=xiaokeai&age=20
// {"name":"xiaokeai","age":"20"}