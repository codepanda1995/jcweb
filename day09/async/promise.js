const fs = require("fs");

function p1(){
    return new Promise((res,rej)=>{
        fs.readFile("./1.txt","utf8",(err,result)=>{
            res(result);
        })
    });
};

function p2() {
    return new Promise((res, rej) => {
        fs.readFile("./2.txt", "utf8", (err, result) => {
            res(result);
        })
    });
};

function p3() {
    return new Promise((res, rej) => {
        fs.readFile("./3.txt", "utf8", (err, result) => {
            res(result);
        })
    });
};


p1().then((r1)=>{
    console.log(r1);
    return p2();
}).then(
    (r1)=> {
        console.log(r1);
        return p3();
    }
).then(
    (r3)=>{
        console.log(r3);
    }
)