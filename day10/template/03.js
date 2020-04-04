const template = require("art-template");
const path = require("path");

const views = path.join(__dirname, "views", "02.html");

const html = template(views, {
    msg: '我是首页'
})

console.log(html);