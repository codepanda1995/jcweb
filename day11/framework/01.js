// 引入express框架
const express = require("express");
// 创建网络服务器
const app = express();
//当客户端发送请求时，服务器进行相应
app.get("/",(rea,res)=>{
    //send()
    // 1.send方法内部会检测响应内容的类型
    // 2.send方法会自动设置http状态码
    // 3.send方法会帮我们自动设置响应的内容类型及编码
    res.send("hello express");
})

// 监听端口
app.listen(3000);
// 
console.log("服务器正在运行中...");