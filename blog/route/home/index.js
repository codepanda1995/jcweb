const {Article} = require("../../model/article");
// 导入分页模块
const pageination = require("mongoose-sex-page");

module.exports = async (req, res) => {

    //接收客户端传递过来的页码
    const page = req.query.page;
    // res.send("欢迎来到博客首页");
    // 将文章集合查询出来
    let result = await pageination(Article).page(page).size(2).display(2).find().populate("author").exec();
    // 将文章数据响应到页面
    // res.send(result);
    // return;

    // 进行首页页面渲染
    res.render("home/default.art",{
        result:result
    });
}