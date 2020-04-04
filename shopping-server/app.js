const express = require("express")
const compression = require("compression")
// const https = require("https")
// const fs = require("fs")
const app = express()

// const options = {
//     cert: fs.readFileSync("./full_chain.pem"),
//     key: fs.readFileSync("./private.key")
// }
// 一定要将这行代码，写到静态资源托管之前
// 使用zgip压缩
app.use(compression())

app.use(express.static("./dist"))

app.listen(80,()=>{
    console.log("server running at http://127.0.0.1");
    
})

// 
// https.createServer(options,app).listen(443)

