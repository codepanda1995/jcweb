//引用系统模块
const http = require("http");
//引用url模块
const url = require("url");
//创建web模块
const app = http.createServer();

//客户端有请求来的时候
app.on("request",(req,res)=>{
    //post参数是通过事件的方式来接受的
    //data 当请求参数传递的时候触发data事件
    //end 当参数传递完成的时候
    let postParams = "";
    req.on("data",params=>{
        postParams += params;
    });
    req.on("end",()=>{
        console.log(postParams);
        
    })

    res.end("ok");
});
app.listen(3000);

console.log("服务器正在运行中...");