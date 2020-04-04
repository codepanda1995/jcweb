import $ from 'jquery'
import './css/rule.css'
import "./css/rule.less"
import Vue from "vue"//导入vue安装包
// 导入单文件组件
import App from "./components/App.vue"

const vm = new Vue({
    // 指定vm实例要控制的页面区域
    el:"#app",
    // 通过render函数，把指定组件渲染到el区域中
    render:h=>h(App)
})

$(function(){
    $("li:odd").css("backgroundColor","yellow");
    $("li:even").css("backgroundColor", "orange");
});

class Person{
    static info = "aaa";
}

console.log(Person.info);
