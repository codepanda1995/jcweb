// 引入http模块
const http = require("http");
// 引入router
const router = require("./route/index");
// 引入模板引擎
const template = require("art-template");
// 引入路径处理模块path
const path = require("path");
// 引入静态资源访问模块
const serveStatic = require("serve-static");

// 导入日期处理模块
const dateformat = require("dateformat");

// 将数据库操作导入文件
require("./model/connect");

// 实现静态资源访问服务
const serve = serveStatic(path.join(__dirname,"public"));

//配置模板的默认日期格式
template.defaults.imports.dateformat = dateformat;

// 配置模板根目录
template.defaults.root = path.join(__dirname,"views");

//创建网站服务器
const app = http.createServer();
// 当客户端访问服务器端的时候
app.on("request",(req,res)=>{
    // 启动路由功能
    router(req,res,()=>{})
    // 启动静态资源访问服务功能
    serve(req,res,()=>{})
});


app.listen(80);
console.log("服务器正在运行中...");