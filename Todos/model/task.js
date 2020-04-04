// 引入mongoose模块
const mongoose = require("mongoose");

// 创建集合规则
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
}, { versionKey: false });

// 创建task集合
const Task = mongoose.model("Task",taskSchema);

// 创建数据
function createTask(){
    Task.create({
        title:"zhaoshun",
        completed:false

    }).then(() => {
        console.log("用户创建成功");
    }).catch(() => {
        console.log("用户创建失败");
    });
}

// createTask();

// 将集合构造函数开放出去
module.exports = Task;