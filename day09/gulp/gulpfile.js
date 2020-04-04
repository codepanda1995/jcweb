//引用gulp模块
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const fileinclude = require("gulp-file-include");
const less = require("gulp-less");
const csso = require("gulp-csso");
//使用gulp.task建立任务
//1、任务的名称
//2、任务的回调函数
gulp.task("first",()=>{
    console.log("我们人生的第一个gulp文件");
    //1、使用gulp.src获取要处理的文件
    gulp.src("./src/css/base.css")
    //2、使用.pipe进行下一步操作
    .pipe(gulp.dest("dist/css"));
});

//html任务
    // 1、html文件中代码的压缩操作
    // 2、抽取html文件中的公共代码
gulp.task("htmlmin",()=>{
    gulp.src("./src/*.html")
    .pipe(fileinclude())//公共代码抽取
    //压缩html代码
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest("dist"));
});

//css任务
// 1、less语法转换
// 2、css代码压缩
gulp.task("cssmin",()=>{
    gulp.src(["./src/css/*.less","./src/css/*.css"])
    .pipe(less())
    .pipe(csso())
    .pipe(gulp.dest("dist/css/"))
})