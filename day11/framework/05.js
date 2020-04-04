// 引入express框架
const express = require("express");
const fs = require("fs");
// 创建服务器
const app = express();

app.get("/index",(req,res,next)=>{
    // throw new Error("程序发生了未知错误...");
    fs.readFile("./01.js","utf8",(err,result)=>{
        if(err!=null){
            next(err);
        }else{
            res.send(result);
        }
    
    });

    // res.send("程序正常运行中...");
})

//错误处理中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
});

app.listen(3000);
console.log("服务器正在运行中...");