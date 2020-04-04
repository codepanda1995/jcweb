// 引入express框架
const express = require("express");
// 创建网站服务器
const app = express();
// 创建路由对象
const home = require("./route/home");
const admin =require("./route/admin");
app.use("/home",home);
app.use("/admin",admin);
app.listen(3000);
console.log("服务器正在运行中...");