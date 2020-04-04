// 引入formidable第三方模块
const formidable = require("formidable");
const path = require("path");
const {Article} = require("../../model/article")

module.exports = (req,res)=>{
    //创建表单解析对象
    const form = new formidable.IncomingForm();
    // 配置上传文件的存放位置
    form.uploadDir = path.join(__dirname,"../","../","public","uploads");
    // 保留上传文件的后缀
    form.keepExtensions = true;
    // 解析表单
    form.parse(req,(err,fields,files)=>{
        // err：错误对象，如果表单解析失败，err里面存储错误信息，如果表单解析成功，err将不会打印
        // fields：对象类型，保存普通表单数据
        // files：对象类型，保存了和上传文件相关的数据

        // res.send(files.cover.path.split("public")[1])

        Article.create({
            title:fields.title,
            author:fields.author,
            publishDate:fields.publishDate,
            cover: files.cover.path.split("public")[1],
            content:fields.content
        })
        
        //将页面重定向到文章列表首页
        res.redirect("/admin/article");
    });
    // res.send("ok");

}