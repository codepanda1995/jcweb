// 路由模块
const express = require("express");
const router = express.Router();
const service = require("./service");

//查询图书列表
router.get("/books",service.getAllBooks);
// 添加图书信息
router.post("/books",service.addBook);
// 跳转到编辑图书页面
router.get("/books/:id",service.toEditBook);
// 进行图书编辑提交
router.put("/books/:id",service.editBook);
// 删除指定id的图书信息
router.delete("/books/:id",service.deleteBook);

module.exports = router;