//引入express框架
const express = require("express");
//建立服务器
const app = express();
// 处理路径
const path = require("path");
// 引入body-parser模块 用于处理post请求参数
const bodyParser = require("body-parser");
// 引入express-session模块
const session = require("express-session");
// 引入art-template模板引擎
const template = require("art-template");
// 导入时间格式化模块
const dateFormat = require("dateformat");
// 导入Morgon第三方模块
const morgan = require("morgan");
// 导入config模块
const config = require("config");
// 获取
console.log(config.get("title"));

// 获取系统变量，返回值是对象 判断系统是开发环境还是生产环境
if (process.env.NODE_ENV == "development"){
    console.log("运行环境：当前是开发环境...");
    // 在开发环境中，将客户端发送到服务端的请求信息打印到控制台中
    app.use(morgan("dev"));
} else{
    console.log("运行环境：当前是生产环境...");
   
}



// 处理post请求参数 extended设置为false，则默认使用的是queryString函数
app.use(bodyParser.urlencoded({ extended: false }))//只能处理客户端请求的普通数据，不能进行处理二进制数据

// 配置session
app.use(session({ 
    secret: 'secret key',
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// 连接数据库
require("./model/connect");
// 创建用户数据
require("./model/user");



// 告诉express框架模板所在的位置
app.set("views",path.join(__dirname,"views"));
// 告诉express框架模板的默认后缀是什么
app.set("view engine","art");
// 当渲染后缀为art的模板时，所使用的的模板引擎是什么
app.engine("art",require("express-art-template"));
// 向模板文件中导入时间格式变量
template.defaults.imports.dateFormat = dateFormat;


// 开放静态资源文件
app.use(express.static(path.join(__dirname,"public")));

//引入路由模块
const home = require("./route/home");
const admin =require("./route/admin");

//拦截请求 判断用户的登录状态
app.use("/admin",require("./middleware/loginGuard"))

//为路由匹配请求路径
app.use("/home",home);
app.use("/admin",admin);

//
app.use((err,req,res,next)=>{
    // 重定向回用户添加页面
    // JSON.parse将字符串转为对象
    const result = JSON.parse(err);
    let params = [];
    for(let attr in result){
        if(attr != "path"){
            params.push(attr + "=" + result[attr]);
        }
    }

    res.redirect(`${result.path}?${params.join('&')}`);
})

//监听端口
app.listen(3000);
console.log("服务器正在运行中...");
