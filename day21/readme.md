2020.03.16 函数
    1.函数的定义方式
        (1)自定义函数(命名函数)
            function(){};
        (2)函数表达式(匿名函数)
            var fun = function(){};
        (3)利用构造函数
            var fun = new Function("参数1","参数2","函数体");

                                Function.prototype
                Function构造函数---------------------------->Function原型对象
                    |       <----------------------------           ^
                    |          Function原型对象.constructor          |
                    |                                               |f.__proto__
                    |                                               |
                    |----------------->f对象实例-------------------->|     

    2.函数的调用方式 this指向
        (1)普通函数 this指向的是window对象
            function fn(){
                console.log("我是普通函数" + this);
            }
            fn(); //fn.call()也可以进行函数调用
        (2)对象的方式(对象中函数就是方法)  this指向的是o这个对象(该方法所属对象)
            var o = {
                sayHi:function(){
                    console.log("我是方法" + this);
                }
            }
            o.sayHi(); //对象.方法
        (3)构造函数 this指向的是实例对象wawo,原型指向的也是实例对象wawo
            function Star(){};
            Star.prototype.sing = function(){

            }
            var wawo = new Star();
            
        (4)绑定事件函数 this指向的是button这个元素
            btn.onclick = function(){};//点击按钮就可以调用函数
        (5)定时器函数   this指向的也是window
            setInterval(function(){

            },1000);//这个函数自动一秒钟调用一次
        (6)立即执行函数 自动调用 this指向window
            (function(){
                console.log("我是立即执行函数");
            })();
    3.改变this的指向: call() apply() bind()
        (1) call() 作用： 第一个可以调用函数,第二个可以改变函数的this指向
                var o = {
                    name:"andy"
                }
                function fn(a,b){//a b是形参
                    console.log(this);//this指向的是o对象
                    console.log(a+b);
                };
                fn.call(o,1,2);
            call()的主要作用是可以实现继承
                function Father(uname, age, sex){
                    this.uname = uname;
                    this.age = age;
                    this.sex = sex;
                }

                function Son(uname,age,sex){
                    Father.call(this, uname, age, sex);//继承父类的属性，但是this指向的是子类
                }
                var son = new Son("pink",18,"male");
        (2)apply() 参数必须是数组(包含伪数组)
            作用：  第一个也是调用函数 第二个是改变函数内部的this指向        
                var o = {
                    name:"andy"
                };

                function fn(arr){
                    console.log(this);//指向的是对象o
                    console.log(arr);//"pink"
                };
                fn.apply(o,["pink"]);
            主要作用：可以使用apply借助于数学内置对象求得最大值Math.max()
                var arr = [1,66,3,99,4];
                var array = ["blue","pink"];
                // var max = Math.max.apply(null,arr);//当不需要改变指向的时候，可以使用null
                var max = Math.max.apply(Math,arr);
                var min = Math.min.apply(Math,arr);
                console.log(max,min);
        (3)bind(thisArg,arr1,arr2) 
            作用：不会调用原来的函数，但是可以改变原来函数内部this的指向。返回的是原函数是改变this之后产生的新函数。
                var o = {
                    name:"andy"
                };
                function fn(a,b){
                    console.log(this);
                    console.log(a + b);
                };
                var f = fn.bind(o,1,2);
                f();
            如果有的函数我们不需要立即调用，但是又想改变这个函数内部的this指向此时用bind
                var btn = document.querySelector("button");
                btn.onclick = function(){
                    this.disabled = true;//this指向的是btn
                    setTimeout(function(){
                        // this.disabled = false;//如果没有绑定bind，则此时this指向的是window
                        this.disabled = false;//this指向的是btn对象
                    }.bind(this),2000);//this指向的是btn对象

                }
    4.严格模式   "use strict"
        (1)变量名必须先声明再使用
        (2)不能随意删除已经声明好的变量
        (3)严格模式下全局作用域中函数的this是undefined
        (4)严格模式下，如果构造函数不加new调用，this会报错
        (5)定时器中this还是指向的是window对象
        
        |--函数变化
            (6)函数的参数不允许有重名现象
    5.高阶函数：对其他函数操作的函数，它接收函数作为参数或者将函数作为返回值。
        (1)闭包：指的是有权访问另一个函数作用域中变量的函数。
            一个作用域可以访问另一个函数的局部变量。
            主要作用：延伸了变量的作用范围
        (2)案例：点击li输出索引号
    6.递归函数：函数内部自己调用自己，这个函数就是递归函数。

        // 递归函数：函数自己调用自己
        var num = 1;
        function fn(){
            console.log("我要打印6句话");
            // 添加递归终止条件
            if(num == 6){
                return;//
            }
            num ++;
            fn();
            
        };
        fn();
    7.浅拷贝和深拷贝
        (1)浅拷贝：只拷贝一层，更深层次对象级别的只拷贝引用(也就是内存地址)
            var data = {
                id: 1,
                name: "panda",
                arr:["red","pink"],
                obj:{
                    gender:"female"
                }
            }
            // 定义一个新对象
            var newObj = {}
            // 遍历旧对象
            for(var k in data){
                newObj[k] = data[k];
            }
            console.log(newObj);

            或者：
            Object.assign(newObj, data);
            console.log(newObj);
        (2)深拷贝：拷贝多层，每一级别数据都会被拷贝。


