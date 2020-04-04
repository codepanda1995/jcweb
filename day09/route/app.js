//1、引用系统模块
const http = require("http");
const url = require("url");//方便对路径进行解析
//2、创建网络服务器
const app = http.createServer();


app.on("request",(req,res)=>{
    //获取请求方式 将大写的字母转为小写的
    const method = req.method.toLowerCase();
    //获取请求路径 对url进行解析
    const pathname = url.parse(req.url).pathname;

    //状态码
    res.writeHead(200,{
        "content-type":"text/html;charset=utf8"
    });

    if(method == "get"){
        if(pathname == "/" || pathname == "/index"){
            res.end("欢迎来到字节跳动");
        }else if(pathname == "/list"){
            res.end("欢迎来到今日头条");
        }else{
            res.end("你访问的页面不存在");
        }
    }else if(method == "post"){

    }
});

app.listen(3000);
console.log("服务器正在运行中");