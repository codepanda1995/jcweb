//导入express框架
const express = require("express");

const admin = express.Router();

admin.get("/index", (req, res) => {
    res.send("欢迎来到博客首页...");
});

module.exports = admin;