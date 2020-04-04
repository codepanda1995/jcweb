function getData(callback){
    callback("123");
}

getData(function(msg){
    console.log("callback函数被回调了");
    console.log(msg);
});