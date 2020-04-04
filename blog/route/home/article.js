// 导入文章集合构造函数
const {Article} = require("../../model/article");
// 导入评论集合构造函数
const {Comment} = require("../../model/comment");

module.exports = async (req, res) => {
    // 获取客户端请求中id值
    const id = req.query.id;
    // res.send(id);
    // 根据客户端发送的id进行查询信息
    let article = await Article.findOne({_id:id}).populate("author");
    // 查询当前文章所对应的评论信息
    let comments = await  Comment.find({aid:id}).populate("uid");

    // res.send(article);
    // res.send("欢迎来到文章详情展示页面");
    // 进行首页页面渲染
    res.render("home/article.art",{
        article:article,
        comments:comments
    });


}