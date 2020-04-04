//引入express框架
const express = require("express");
const app = express();
const path = require("path");

// 实现静态资源访问功能 /static是设置的虚拟静态文件路径
app.use("/static",express.static(path.join(__dirname,"public")));
//端口监听
app.listen(3000);
console.log("服务器正在运行中...");