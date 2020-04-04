module.exports = (req, res) => {
    // 标识 用来标记当前访问的页面是用户管理页面还是文章管理页面
    req.app.locals.currentLink = "article";
    //对文章编辑页面进行渲染
    res.render("admin/article-edit.art");
}