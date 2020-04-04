// 导入mongoose模块
const mongoose = require("mongoose");
// 导入config第三方模块
const config = require("config");

// 当使用了数据库密码账号、config使用
// mongoose.connect("mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.port')}/${config.get('db.name')}", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// 连接数据库
mongoose.connect("mongodb://localhost/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("数据库连接成功");
})
.catch(()=>{
    console.log("数据库连接失败");
})

