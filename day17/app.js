// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 导入bodyParser模块
const bodyParser = require('body-parser');

// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
// 处理post请求参数
app.use(bodyParser.json()); 

app.get('/base', (req, res) => {
    res.send({
        name: 'zhangsan',
        age: 30
    })
});

app.post('/base', (req, res) => {
    res.send({
        name: 'zhaoliu',
        age: 35
    })
});

app.get('/user', (req, res) => {
    res.send(req.query);
});

app.post('/user', (req, res) => {
    res.send(req.body)
});

// jsonp请求
app.get("/jsonp",(req,res)=>{
     const cb = req.query.cb;
     const data = cb + "({name:'zeping'})";
     res.send(data);
})

// 监听端口
app.listen(3000);
console.log("服务器正在运行中...");