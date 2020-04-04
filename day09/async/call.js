const fs = require("fs");
//reject result本质上时函数
let promise = new Promise((resolve,reject)=>{
    fs.readFile("./100.txt","utf8",(err,result)=>{
        if(err!=null){
            reject(err);
        }else{
            resolve(result);
        }
    });
});

promise.then((result)=>{
    console.log(result);
}).catch(//链式编程 抛出错误
    (err)=>{
        console.log(err);
    }
)