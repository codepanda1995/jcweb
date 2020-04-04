// 将评论集合构造函数导入
const {Comment} = require("../../model/comment");

module.exports = (req,res)=>{
    const {content,uid,aid} = req.body;
    // 将评论信息存储在评论集合中
    Comment.create({
        content:content,
        uid:uid,
        aid:aid,
        time:new Date()
    });

    // 将页面重定向到评论页面
    res.redirect("/home/article?id=" + aid);
}