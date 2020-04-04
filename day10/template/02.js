const template = require("art-template");
const path = require("path");

const views = path.join(__dirname, "views", "index.art");

const html = template(views, {
    users:[{
        name: "明月",
        age: "26"
    },{
        name: "赵舜",
        age: "27"
    },{
        name: "彭珍",
        age: "25"
    }]
})

console.log(html);