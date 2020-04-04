const {User} = require("../../model/user");

module.exports = async (req,res)=>{
    // 获取要删除用户的Id
    // res.send(req.query.id);
    // 根据id删除用户
    await User.findOneAndDelete({_id:req.query.id})
    //用户删除成功后重新加载到该页面
    res.redirect("/admin/user");
}