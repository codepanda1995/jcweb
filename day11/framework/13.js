const express = require("express");
const path = require("path");
const app = express();
// art 模板后缀  
// express-art-template 使用的模板引擎
app.engine("art",require("express-art-template"));
// 渲染模板存放目录
// views 虚拟位置
// path.join(__dirname,"views") 具体位置
app.set("views",path.join(__dirname,"views"));
//渲染模板时不写后缀，默认拼接art后缀
app.set("view engine","art");
//
app.locals.users = [{
    name: "张三",
    age: 20
},{
    name:"李四",
    age: 21
}]

app.get("/index",(req,res)=>{
    // 1.拼接模板路径
    // 2.拼接模板后缀
    // 3.哪一个模板和哪一个数据进行拼接
    // 4.将拼接结果响应给客户端
    // 渲染模板
    res.render("index",{
        msg:"首页"
    })
});

app.get("/list",(req,res)=>{
    res.render("list",{
        msg:"列表页"
    })
})

app.listen(3000);
console.log("服务器正在运行中...");