// 
const express = require("express");

const app = express();

app.get("/request",(req,res,next)=>{
    req.name = '明月';
    next();
});

app.get("/request",(req,res)=>{
    res.send(req.name);
})

app.listen(3000);
console.log("网站服务器正在运行中...");