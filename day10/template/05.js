const template = require("art-template");
const path = require("path");
const dateFormat = require("dateformat");

// 配置默认的文件根路径
template.defaults.root = path.join(__dirname, "views");
// 导入模板引擎
template.defaults.imports.dateFormat = dateFormat;
// 配置模板的默认后缀
template.defaults.extname = ".html";
const html = template("04", {
    time: new Date()
});

console.log(html);