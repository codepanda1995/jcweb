// 
const express = require("express");

const app = express();

app.use("/admin",(req,res,next)=>{
    // 用户没有登录
    let isLogin = true;
    // 如果用户登录成功
    if(isLogin){
        // 让请求继续向下执行
        next();
    }else{
        // 如果用户没有登录，直接对客户端做出响应
        res.send("登录失败，请重新登录");
    }
});

app.get("/admin",(req,res)=>{
    res.send("你已经登录成功，可以访问当前页面");
})

app.use((req,res,next)=>{
    res.status(404).send("当前访问的页面不存在");
})

app.listen(3000);
console.log("网站服务器正在运行中...");