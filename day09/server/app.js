//引用系统模块
const http = require("http");
//引用url模块
const url = require("url");
//创建web模块
const app = http.createServer();
//当客户端发送请求来的时候
app.on("request",(req,res)=>{
    //获取请求方式req.method
    console.log(req.method);

    //
    res.writeHead(200,{
        "content-type":"text/html;charset=utf8",
        "hello":"world"
    });

    //获取请求地址
    console.log(req.url);
    //1)要解析的url地址
    //2)将查询参数解析成对象形式
    // let params = url.parse(req.url,true).query;
 

    let {query,pathname} = url.parse(req.url,true);
    console.log(query.name);
    console.log(query.age);

    if(pathname == "/index" || pathname == "/"){
        res.end("<h1>欢迎来到英雄联盟</h1>");
    }else if(pathname == "/list"){
        res.end("welcome to list");
    }else{
        res.end("not found");
    }

    //获取请求方式
    if(req.method == "POST"){
        res.end("post");
    }else if(req.method == "GET"){
        res.end("get");
    }
    //响应
    // res.end("<h1>wuqi</h1>");
});
//监听3000端口
app.listen(3000);
console.log("服务器已启动");