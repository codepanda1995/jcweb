// 导入express框架
const express = require("express");

const app = express();
//创建路由对象
const home = express.Router();
// 将路由和请求路径进行匹配
app.use("/home",home);
//在home路由下继续创建二级路由
home.get("/index",(req,res)=>{
    res.send("欢迎来到博客展示页面");
});

app.listen(3000);
console.log("服务器正在运行中...");