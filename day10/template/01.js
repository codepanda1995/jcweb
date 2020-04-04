const template = require("art-template");
const path = require("path");

const views = path.join(__dirname,"views","index.html");

const html = template(views,{
    name:"明月",
    age:"26"
})

console.log(html);