// 引入express框架
const express = require("express");
// 导入path模块
const path = require("path");
// 创建web服务器
const app = express();
// 导入body-parser模块
const bodyParser = require("body-parser");
// 导入系统处理模块fs
const fs = require("fs");
// 
app.use(bodyParser.json())

// 静态资源访问服务器
app.use(express.static(path.join(__dirname,"public")));
// 默认首页
app.get("/", (req, res) => {
    res.send("hello 首页");
})
// ajax初体验
app.get("/first",(req,res)=>{
    res.status(400).send("hello ajax");
})
// 处理服务器返回的数据
app.get("/responseData",(req,res)=>{
    res.send({ "msg": "responseData"});
})

// 
app.get("/get",(req,res)=>{
    res.send(req.query);
})

app.post("/post", (req, res) => {
    res.send(req.body);
});

// 对应于ajax05.html
app.get("/readystate",(req,res)=>{
    res.send("hello");
})

// 对应于ajax06.html
app.get("/error",(req,res)=>{
    res.status(400).send("not ok");
});

// 对应于ajax07.html
app.get("/cache",(req,res)=>{
    fs.readFile("./hello.txt",(err,result)=>{
        res.send(result);
    })
})

app.listen(3000);
console.log("服务器正在运行中...");
