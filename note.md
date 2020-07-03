2020.1.8 HTML基础+CSS基础
    1.HTML基础
        ()块元素和内联元素
            
            div是块级元素
                一个单纯的块级元素，该标签没有任何语义，没有任何预置样式。主要用于页面布局。
                p、h1、h2、div等是一个块级元素，会独占一行，无论多少内容。
            span是一个内联元素
                只占自身大小的元素，不会占用一行，会进行自动换行。
                span没有任何语义，span用于选中文字，进行样式设计。
                常见的内联元素有：a img iframe span
            注意：
                |-->块元素主要用于页面中的布局，内联元素用来设置文本样式。
                |-->一般情况下都是块元素包含内联元素，而不会用内联元素去包含块元素。
                |-->a元素可以包含除了a元素本身的任何元素。
                |-->p元素不能包含其他的任何块元素。
    2.CSS基础
        ()选择器
            |-->元素选择器
                作用：通过元素选择器可以选择页面中所有的指定元素。
                语法：标签名{}
            |-->id选择器
                作用：通过元素的Id属性选中唯一的一个元素
                语法：#id{}
            |-->类选择器
                作用：通过元素的class属性值选中一组元素
                语法：.class{}
                注意：拥有class属性值的元素，被称作一组元素
                    一个元素可以同时设置多个class属性值，通过空格进行隔开。
            |-->通配选择器
                作用：可以用来选择页面所有元素
                语法：*{}
            |-->选择器分组：
                作用：选择器分组可以同时选择多个选择器进行元素设置
                语法：选择器1,选择器2,选择器3{}
            |-->符合选择器(交集选择器)
                作用：可以选中同时满足多个选择器的元素(对于id选择器，不适合使用)
                语法：选择器1选择器2选择器3{}
            |-->属性选择器 当鼠标移入到该元素中，元素中title属性的值会作为提示文字显示
                作用：可以根据元素中的属性或者属性值来选取指定元素
                语法：
                    元素[属性名]{

                    }
                    元素[属性名="属性值"]{
                        
                    }
2020.1.9 HTML基础+CSS基础
    品优购项目 html+css

    1首页布局
        (1)文件夹布局
            |--品优购
                |--img
                |--js 
                |--css
        (2)网站标题优化
            标题
            <title>江川商城(JCBuy.COM)-正品低价、品质保障、配送及时、轻松购物！</title>
            描述
            <meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!">
            关键词
            <meta name="keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东">
        (3)字体图标
            icomoon 追加 selection.json
            iocnfont
        水平居中text-align:center
        垂直居中line-hight:40px

    1.CSS基础
        (1)元素之间的关系
            |-->父元素：直接包含子元素的元素
            |-->子元素：直接被父元素包含的元素
            |-->兄弟元素
            注意：父元素、子元素同时存在时，才有父元素、子元素之分
            |-->后代元素选择器
                作用：选中指定元素的指定后代元素
                语法：祖先元素 后代元素{}
            |-->子元素选择器
                作用：选中指定父元素的指定子元素
                语法：父元素>子元素
        (2)伪类：专门用来表示元素的一种特殊状态，当我们需要为处在这些特殊状态的元素设置样式时，就可以使用伪类。
            |-->a:link 表示普通的链接(未访问过的链接)
            |-->a:visited 表示访问过的链接(通过浏览器历史记录判断，涉及用户隐私只可以设置字体颜色)
            |-->a:hover 
            |-->a:active 表示超链接被点击的状态

            |-->focus 文本框获取焦点
            |-->selection 为p标签选中的内容使用样式
            |-->p:first-letter给p元素的第一个文字设置样式
            |-->p:before{//表示p元素最前面的部分
                content:"";
            }
        (3)
            子元素选择器 元素:first-child{

            }
        (4)
2020.1.10 品优购项目

2020.2.2 品优购项目
    <em> 标签告诉浏览器把其中的文本表示为强调的内容。对于所有浏览器来说，这意味着要把这段文字用斜体来显示。

2020.2.3 HTML5
    1、H5新增多媒体标签
        |--audio 音频播放 
            <audio src="media/snow.mp3" controls></audio>
            进行兼容处理
            <audio>
                <source src="media/snow.mp3" type="audio/mpeg">
                <source src="media/snow.ogg" type="audio/ogg">
            </audio>
        |--video 视频播放 
            |-- autoplay 自动播放 必须先进行静音
            |-- controls 显示控件
            |-- loop 循环播放
            |-- muted 进行静音
            <video autoplay controls loop muted>
                <source src="vedio/vedio.mp4" type="video/mp4">
                <source src="vedio/vedio.ogg" type="video/ogg">
            </video>
        |--input 输入表单属性
            |-- required 不能为空
            |-- placeholder 占位文字信息
            |-- autofocus 自动聚焦
            <input type="text" required placeholder="请输入账号" autofocus name="username" autocomplete>
            |-- 多文件选择
            <input type="file" multiple>
        |--类选择器、属性选择器、伪类选择器，权重为10
            <!-- disabled 是禁用我们的技能 -->
            <button>按钮</button>
            <button>按钮</button>
            <button disabled>按钮</button>
            <button disabled>按钮</button>
            <style>
                /* 属性选择器使用方法 */
                button[disabled]{
                    cursor: default;
                }
                button{
                    cursor: pointer;
                }
            </style> 
        |-- li:first-child  li:last-child li:nth-child(n)指定第几个元素 li:nth-child(odd even)
        |-- div span:first-of-type span:last-of-type span:nth-of-type(n)
        |-- span::before span::after 在元素内部的前面插入内容，在元素内部的后面插入内容
            span::before{
                content:"我";
                display:inline-block;
                width:100px;
                height:100px;
                background-color:pink;
            }
            添加图标
            p::after{
                content:"\ea50";
                position: absolute;
                top: 10px;
                right: 10px;
                font-family: "icomoon";
            }

    2、CSS-2D转换 平移 旋转 放缩
        |--translate 里面的参数是可以使用百分比的，相对于自身所在的盒子组件中
            |-- 移动x,y坐标
            div{
                <!-- 移动x、y坐标 -->
                transform:translate(10px,10px);
                <!-- 仅移动x坐标 -->
                transform:translateX(10px);
                <!-- 仅移动y坐标 -->
                transform:translateY(10px);
            }
        |--rotate 进行旋转 deg 是度数  正数为顺时针，负数是逆时针
            |-- 进行旋转 以中心点为原点
                transform: rotate(340deg);
            |-- 进行旋转 指定坐标点作为原点旋转
                transform-origin: x y;
                x,y 可以是像素点，单位为px
                    可以是方位词 left right bottom top center
                    可以是百分数 50% 50%
        |--scale 放缩
            |--里面的数字可以不接单位，代表的是原先的倍数变化。
                transform:scale(0.5,0.5);
                transform:scale(0.5);表示的是高宽等比变化
            |--不会影响其他盒子，而且可以设置缩放的中心点
        当同时具有位移和其他属性的时候，需要把位移放到最前面。
    2020.02.04 CSS3
        1、动画 animation 0%(from) 100%(to) 动画序列
            0% 25% 50% 75% 100% 时间
        |--定义动画
        @keyframes 动画名称{
            0%{//动画开始
                width:0%;
            }
            100%{//动画完成
                width:100%;
            }
        }
        |--调用动画
        div{
            //动画名称
            animation-name:动画名称;
            //持续时间
            animation-duration:2s;
            //运动曲线
            animation-timing-function: ease;
            //何时开始
            animation-delay: 0;
            //重复次数 infinite 无限循环
            animation-iteration-count:重复次数 ;
        }
        |--动画序列

        |--animation-play-state: running;
    2、动画进行简写
        animation:动画名称 动画方向 运动曲线 何时开始 重复次数 
        animation: name duration timing-function delay iteration-count direction fill-mode;

2020.02.05 3D动画
    1、3d动画
        |--translate3d(x,y,z)  x,y,z不可进行省略，如果没有就写0
            transform: translate3d(0,100px,100px);

        |--perspective 透视 模拟肉眼去查看物体,近大远小
            透视写到要被观察的父盒子上
            
        |--translateZ 
            写到要做改动的盒子上，
    2、3D旋转  左手定则
        |--rotateX(45deg)
        |--rotate3d(x,y,z,deg) deg即旋转的角度
    3、3D呈现 transfrom-style 写给父级盒子，影响的是当前子盒子
        控制子元素是否开启三维立体环境
        |--transform-style: flat;//子元素不开启3d立体空间
        |--transform-style: preserve-3d;//子元素开启立体空间
    4、私有前缀  
        -moz-: 代表火狐
2020.03.05 移动页面开发
    1、视口：浏览器显示页面内容的屏幕区域
        |--视口=布局视口+视觉视口+理想视口
            |--布局视口：页面布局宽度
            |--视觉视口：用户在移动设备可以看到的区域
            |--理想视口：用户能看到区域=页面布局区域
        |--meta视口标签
            |--name="viewport" 视口
            |--width=device-width 页面宽度设置为设备宽度
            |--initial-scale=1.0 初始缩放比
            |--maximum-scale=1.0 最大放缩比
            |--minimum-scale=1.0 最小放缩比
            |--user-scalable=no 用户是否可以放缩 no(0)-禁止 1-允许
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
    2、二倍图
        |--物理像素、像素比
            |--物理像素：屏幕显示的最小颗粒，是设备真实物理存在的像素单位，就是屏幕的分辨率。
                |--PC端：1px=1个物理像素
                |--移动端：1px=
            |--像素比：1px下能显示的物理像素点的个数，称为物理像素比或者屏幕像素比
        |--二倍图
            |--对于需要一张50px*50px(像素)的图片，直接放到手机会进行放大两倍，会产生模糊。对于这种情况，我们需要先采用一个100px*100px的图片，然后手动地进行缩小到50*50。这就是二倍图。
    3、背景图缩放
        /* background-size: 图片宽度 图片高度; */
        /* background-size: 500px 200px; */
        /* background-size: 500px; 默认的是图片宽度 高度等比例进行缩放*/
        /* background-size: contain; 高度和宽度等比例拉伸，直到宽度或者高度铺满盒子 */
        
        /* background-size: cover; 宽高会等比进行放缩，直到整个图片覆盖盒子 */
    4、移动开发选择
        |--响应式+单独开发式
    5、移动端技术解决方案
        /* 将盒子变成CSS3中的盒子模型，padding和border不会再撑开盒子 */
        box-sizing: border-box;
        /* 盒子还是传统盒子内容区域就是盒子本身大小 */
        box-sizing: content-box;
         /* 点击高亮需要进行清除，设置transparent完成透明 */
        -webkit-tap-highlight-color: transparent;
        /* 在移动端浏览器默认的外观在ios上加上这个属性才能给那妞和输入框自定义样式 */
        -webkit-appearance: none;
        /* 禁用长按页面时的弹出菜单 */
        -webkit-touch-callout: none;
    6、移动端布局
        |--流式布局:百分比布局，并非固定页面尺寸布局。
            为了不让页面在伸缩的时候将内容挤下，因此需要进行设定最大值、最小值
            max-width: 最大宽度;
            min-width: 最小宽度;
        |--弹性布局
    7、京东移动端首页
        二倍精灵图做法
            |--在firework里面把精灵图等比例缩放到原先的一半
            |--之后在进行测量坐标
            |--注意代码里面background-size也要编写：精灵原来的一半

2020.02.06 flex布局
    1、flex布局：弹性布局，任何一个盒子都可以指定成flex布局。
        采用flex布局的元素，称为flex容器，简称容器。
        而盒子里的成员，称为flex项目，简称项目。
            |--设置主轴子元素排列方式
                /* display: flex; 设置页面布局为弹性布局 */
                display: flex;
                /* flex-direction: row; 设置弹性布局主轴为x轴 */ column 主轴为y轴
                /* flex-direction: column-reverse; 设置弹性布局的主轴为Y州，布局方向为自下而上 */
            |--align-items 设置侧轴子元素排列方式，在子项为单列元素使用
                /* justify-content: center;设置主轴居中 */
                justify-content: center;
                /* align-items: center; 设置侧轴居中 */
                align-items: center;
                /* align-items: flex-start; 沿着侧轴方向，进行排列居于开头 */
                /* align-items: flex-end; */
                /* align-items: stretch; 进行盒子拉伸至父盒子 */
                align-items: stretch;
            |--align-content 设置侧轴子元素排列方式，在子项为多列元素使用
                display: flex;
                /* 换行 */
                flex-wrap: wrap;
                /* 因为有了换行，此时侧轴控制子元素的对齐方式可以使用align-content */
                /* align-content: flex-start; 自上而下居于侧轴头部 */
                /* align-content: center; 在侧轴居中 */
                /* align-content: space-between; 子项在侧轴上下边紧贴 */
                /* align-content: space-around; 子项在侧轴剩余空间平分*/
                /* align-content: stretch; 设置子项元素高度平分父元素高度 */
            |--align-items和align-content的区别
                |--align-items适用于单列(只有上对齐、下对其、居中、拉伸) 
                |--align-content适用于多列(可以设置上对齐、下对齐、居中、拉伸以及平分侧轴剩余空间)
            |--flex-flow:row wrap;可以用于设置复合属性
            |--flex:num; 可以用于进行弹性等分成num份
            |--align-self:flex-end;用于控制子项自己在侧轴上的排列顺序
            |--order:num;num越小越靠前
    2、渐变色
        background: -webkit-linear-gradient(方位名词,颜色1,颜色2);
        background: -webkit-linear-gradient(left,#4b90ed,#53b3ed);

2020.02.07 rem布局-移动布局
    
    1、rem- 相对于html元素字体大小而言,通俗讲就是相对于html元素的倍数
        em- 相对于父元素字体大小而言，父元素比较多
        |--rem的优点在于可以通过修改html中的文字大小来改变页面中元素的大小，可以进行整体控制
    2、media-  media query媒体查询
        |---@media 媒体类型(all、screen、print) 操作(and、not) (max-width、min-width)
        @media screen and (max-width: 800px){
            body{
                background-color: pink;
            }
            
        }
    3、引入资源 针对不同屏幕尺寸 引入不同css样式文件
        <link rel="stylesheet" href="style.css" media="screen and (min-width: 320px)">
    4、less是一种预处理语言以及解析器
        |--安装node
        |--cmd中输入node -v查看是否安装成功
        |--cmd中输入npm install less进行安装less
        |--cmd中输入lessc -v查看less是否安装成功
    5、less变量
        @变量名:值;
        |--不可以使用特殊字符
        |--不可以使用数字开头
        |--大小写敏感
    6、less编译
        使用vscode中插件 Easyless
    7、less嵌套
        |--子元素的样式直接写在父元素里面就行
        |--如果有伪类、交集选择器、伪元素选择器，则需要在前面添加符号&
    8、less运算
        |--在使用运算符号的时候，必须在左右使用一个空格隔开
        |--两个不同单位的参数进行运算的时候，最后的结果以第一个值的而单位为准
        |--如果只有一个参数有符号，则运算结果取该单位
    9、less导入 
        |--@import  在一个less文件中导入另一个样式文件,使用@import "文件名"
    10、rem适配方案
        |--选一套标准尺寸
        |--使用屏幕尺寸 / 划分的份数，得到了html里面的文字大小
        |--页面元素的rem值 = 页面元素在标准尺寸下的px值 / html里面的文字大小
    11、案例：苏宁网移动端首页设计
        |--进行不同屏幕下html文字设置
            |--less+媒体查询+rem
            |--flexible.js+rem 使用插件cssrem


2020.02.09 响应式布局
    1、Bootstrap前端开发框架
        |--框架：一套架构，一套比较完善的网页功能解决方案，而且控制权在框架本身，有预制样式库、组件和插件，使用者需要按照框架规定进行开发。
    2、响应式布局容器 .container容器  固定显示宽度
        |-- .col-xs- (超小)  .col-sm- (小型) .col-md- (中等) .col-lg- (超大)
    3、流式布局容器 .container-fluid 百分百显示宽度 适合移动端开发
    4、栅格系统
        |--就是将页面布局划分成等宽的列，然后通过列数的定义进行模块化定义页面布局。Bootstrap自动划分成12份。
        |--列嵌套下，最好添加一个row，可以将父元素padding进行取消。
        |--列偏移 .col-md-offset-n n=12-(左盒子+右盒子)
        |--列排序 .col-md-push- .col-md-pull- 可以将左右进行换顺序
    5、响应式工具
        |--.hidden-xs .hidden-sm .hidden-md .hidden-lg
        |--.visible-xs .visible-sm .visible-md .visible-lg
    6、项目流程
        |--屏幕划分 先对md屏幕以上进行布局设计

2020.02.09 javascript
    1、javascript
        |--javascript= EMCA + DOM(浏览器模型对象) +BOM
    2、输入输出框 prompt("输入框"); arlt("弹出输出框"); console.log("控制台输出框");
    3、变量
        |--变量：本质上是内存上申请一块区域进行存储数据。
        |--var 变量名 = 变量值; //声明变量-->变量赋值
    4、字符串类型
        |--str.length; //进行计算字符串的长度
        |--字面量：源代码中一个固定值进行表示
    5、数据类型转换
        |--转换字符串
            str.toString(); String(); num+"字符串";
        |--字符串转成数字型
            parseInt(num);
    6、标识符、关键字、保留字
    7、递增递减 必须配合变量使用
        |-- ++num 先自增后运算，先自增完后返回+1后的值
        |-- num++ 先运算后自增，先进行num返回原值在自增
    8、==判等号，会变型 ===全等，类型值全一样
    9、逻辑运算符 优先级 非>与>或
    10、while先判断后执行 do...while...先执行一次循环在判断
    11、continue和break continue是终止本次循环，继续下次循环判断 break跳出整个循环，不再执行

2020.02.10 js基础
    对象：自定义对象、内置对象、浏览器对象
    1、js对象
        |--对象：具体的事物。
        |--属性：事物的特征。
        |--方法：事物的行为。
    2、创建对象
        |--利用字面量创建对象
            对象字面量：使用花括号{}里面包含表达这个具体事物对象的属性和方法。
            var obj = {

            };
        |--利用new Object创建对象
            |--利用 等号= 赋值的方法，添加对象的属性和方法
            |--每个属性和方法之间用分号隔开
            var obj = new Object();
            obj.name = "小可爱";
        |--利用构造函数
    3、变量属性函数方法的区别
        |--变量和属性的相同点：二者都是不存储数据的
            |--变量 单独声明并赋值，使用的时候直接写变量名单独存在
            |--属性 在对象里面不需要声明，使用的时候必须是 对象.属性
        |--函数和方法的相同点：二者都是实现某种功能、做某件事情
            |--函数 单独声明，调用的函数名()是单独存在的
            |--方法 在对象中，调用的时候 对象.方法()
            在外面的是函数，在里面的是方法
    4、构造函数
        |--可以使用构造函数的方法去实现重复的属性和方法，而这个方法称为构造函数
        |--构造函数 就是将对象里面一些相同的属性和代码进行抽象封装到一个函数里面
            |--构造函数首字母要大写
            |--构造函数不需要return就可以返回结果
            |--构造函数的使用必须new
            |--构造函数的方法和属性前必须使用this
        |--构造函数的语法格式
            function 构造函数名(){
                this.属性 = 值;
                this.方法 = function(){

                }
            }
            new 构造函数名();
    5、new关键字
        |--new在执行时会做四件事情
            |--在内存中创建一个新的对象
            |--让this指向这个新的对象
            |--执行构造函数里面的代码，给这个新对象添加属性和方法
            |--返回这个对象(构造函数不需要return)
    6、遍历对象 for...in
        |--语法格式
            for(变量 in 对象){

            }
    7、内置对象
        |--js语言中自带的一些对象，对象可以提供给开发者使用，并提供常用的基本功能
        (1)Math对象
            |--Math.abs()       求绝对值
            |--Math.floor()     向下取整
            |--Math.ceil()      向上取整
            |--Math.round()     四舍五入(5特殊，往大取)
            |--Math.random()    返回的是随机的小数[0,1),方法里不跟参数
        (2)Date对象
            |--Date 是构造函数，必须使用new进行创建对象
                var date = new Date();
            |--格式化日期
            |--获取Date总的毫秒数(时间戳) 是以1970年1月1日为标准
                |-- 通过valueOf() getTime()
                    var date = new Date();
                    date.valueOf();
                |-- 简单写法 最常用
                    var date = +new Date();
                    date
                |-- H5新增的，获取总的毫秒数 Date.now();
    8、数组
        (1)创建数组
            |--利用数组字面量 var arr = [];
            |--利用new Array[];
        (2)检测数组
            |--instanceof 运算符2，用来检测是否为数组
            |--Array.isArray(参数); 是数组返回true,不是数组返回false
        (3)添加、删除数组元素的方法
            |--添加  arr.push() 在末尾进行添加一个或者多个数组元素
                |--push是可以给数组追加新的元素
                |--push()参数直接写数组元素即可
                |--push()完毕之后，返回的结果是新数组的长度
                |--原数组也会发生变化
            |--添加 unshift 在数组起始，添加一个或者多个数组元素
                |--unshift是可以给数组前面追加新的元素
                |--unshift() 参数直接写数组元素就可以了
                |--unshift完毕之后，返回的结果是新的数组长度
                |--原始数组也会发生变化
            |--删除 pop()删除数组最后一个元素
                |--pop是删除数组的最后一个元素，记住只能删除一次
                |--pop()没有参数
                |--pop完毕之后，返回的结果是 删除的那个元素
                |--原数组也会发生变化
            |--删除 shift()删除数组第一个元素
                |--shift()是删除数组的第一个元素，记住只能删除一次
                |--shift()没有参数
                |--shift()完毕之后，返回的结果是 删除的那个元素
                |--原数组也会发生变化
            |--数组排序 reverse() sort()
                |--reverse() 颠倒数组中的元素顺序，无参数 会改变原来的数组，返回新数组
                |--sort() 对数组的元素进行排序，不改变原来的数组，返回新数组
            |--数组索引 index() lastIndexOf()
                |--index() 数组中查找给定元素第一个索引 如果存在返回索引号，则返回-1
                |--lastIndexOf() 在数组中的最后一个索引 如果存在返回索引号，则返回-1
            |--数组转换成字符串
                |--arr.toString() 把数组转换成字符串，逗号分隔每一项 返回一个字符串
                |--arr.join("分隔符") 方法用于把数组所有元素转换成一个字符串 返回一个字符串
            |--连接、截取、删除数组 concat() slice() splice()
                |--concat() 连接两个或多个数组，不影响原数组 返回一个新数组
                |--slice() 数组截取slice(begin,end) 返回被截取项目的新数组
                |--splice() 数组删除splice(第几个开始，要删除几个) 返回被删除项目的新数组，注意会影响原先的数组
    9、字符串对象
        (1)基本包装类型
            |--基本包装类型就是把简单数据类型包装成复杂数据类型，这样基本数据类型就有了属性和方法。
                |--a.生成临时变量，把简单数据类型包装成复杂数据类型
                    var temp = "xiaokeai";
                |--b.赋值给我们声明的字符变量
                    str = temp;
                |--c.销毁临时变量
                    temp = null;
        (2)字符串的不可变性
        (3)字符转换成数组 split("分隔符") 
            

2020.02.10 WebAPI
    1、API和WebAPI
        |--API 应用程序接口，是一些预定义的函数，目的是提供应用程序与开发人员基于某软件或者硬件访问一组例程的能力。
            API是给程序员提供的一种工具，以便能够更轻松的实现想要完成的功能。
    2、DOM
        (1)DOM简介
            |--DOM：文档对象模型，处理可扩展语言的标准接口。
            |--DOM树 
        (2)获取元素
            |--document.getElementId() 根据id获取元素， 返回的是一个元素对象
                |--console.dir() 打印返回的是元素对象，更好的查看属性和方法
            |--document.getElementsByTagName("div");  根据元素类型获取元素
                |--返回的是获取到的元素对象的集合，我们可以采取遍历的方式进行获取 返
                |--回的元素是动态的 以伪数组的方式进行存储
            |--document.getElementsByClassName("类名"); 根据元素的类名进行获取元素，返回的是对象集合
            |--document.querySelector("选择器"); 根据指定选择器返回第一个元素对象 .div #nav 切记要加选择器符号
            |--document.querySelectorAll("选择器"); 根据指定选择器返回所有元素对象集合
        (3)获取特殊元素
                |--document.body //返回的是body对象
                |--document.documentElement.html // 返回的是html元素对象
        (4)事件
            |--事件三要素：事件源、事件类型、事件处理程序
                |--事件源：事件被触发的对象
                |--事件类型：如何触发一个事件
                |--事件处理程序：通过一个函数赋值的方式完成
            |--执行事件步骤：获取事件源-->绑定事件、注册事件-->添加事件处理程序


            

2020.02.11  gulp
    1、gulp能做什么
        (1)
        |--项目上线，html、css、js压缩
        (2)gulp使用
            |--使用npm install gulp库文件
            |--在项目根目录下简历gulpfile.js文件
            |--在项目目录下的文件夹结构src目录放置源代码文件，dist目录放置构建后的文件
            |--在gulpfile.js文件中编写任务
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
        (3)gulp中提供的方法
            |--gulp.src()   获取任务要处理的文件
            |--gulp.dest()  输出文件
            |--gulp.task()  建立gulp任务
            |--gulp.watch() 监控文件的变化
        (4)
            |--npm install gulp-cli -g
            |--gulp filename
        (5)
    2、
        (1)gulp插件
            |--gulp-htmlmin  html文件压缩
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
                @@include("./common/div.html")
            |--gulp-csso     css文件压缩
            |--gulp-babel    javascript语法转化
            |--gulp-less     less语法转化
            |--gulp-uglify   压缩混淆js文件
            |--gulp-file-include 公共文件包含
            |--browersync浏览器实时同步
        (2)package.json
            |--node_modules文件夹的问题
                |--文件夹以及文件过多过碎，当我们将项目整体拷贝给别人的时候，传输过慢
                |--复杂的模块依赖关系需要被记录，确保模块的版本与当期那保持一致，否则会导致当前项目运行过慢
            |--package.json文件的作用
                |--项目描述文件，记录了当前项目信息，例如项目名称、版本等信息，使用npm init -y命令生成
                    {
                        "name": "description",//项目名称
                        "version": "1.0.0",//版本信息
                        "description": "",//描述信息
                        "main": "index.js",//主业文件
                        "scripts": {
                            "test": "echo \"Error: no test specified\" && exit 1"
                        },
                        "keywords": [],//关键字
                        "author": "",//作者
                        "license": "ISC",//格式
                        "dependencies": {//第三方依赖
                            "formidable": "^1.2.1",
                            "mine": "^0.1.0"
                        }
                    }
                |--项目依赖
                    |--在项目的开发阶段和线上运营阶段，都需要依赖的第三方包，被称为项目依赖
                    |--使用npm install包名命令下载的文件都会默认被添加到package.json文件的dependencies中
                        "dependencies": {//第三方依赖
                            "formidable": "^1.2.1",
                            "mine": "^0.1.0"
                        }
                    |--单独运行 npm install --production，只会生成项目依赖文件
                |--开发依赖
                    |--在项目的开发阶段，和线上运营阶段不需要依赖的第三方包，被称为开发依赖
                    |--使用npm install包名命令下载的文件都会默认被添加到package.json文件的devDependencies中
                        "devDependencies": {
                            "gulp": "^4.0.2"
                        }
            |--package-lock.json文件的作用
                |--锁定包的版本，确保下次下载时候不会因为版本不一样而产生的问题
                |--加快下载速度，因为该文件中已经记录了项目所依赖的第三方包的树状结构和包的下载地址，重新安装时只需要下载即可，不需要做额外的工作
            |--描述中使用别名进行运行文件 npm run build
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "build": "nodemon app.js"//别名
                },
    3、nodejs中，模块加载机制
        (1)模块查找规则-当模块拥有路径但是没有后缀时
            require("./find.js")
            require("./find")
            |--require方法根据模块路径查找模块，如果完整路径，直接引入模块
                |--如果模块后缀省略，先找同名js文件再找同名js文件夹
                    |--如果找到同名文件夹，找文件夹下的index.js文件
                        |--如果文件夹下没有Index.js文件，就会去去当前文件夹下的package.js文件中查找main选项中的入口文件
                            |--如果指定的入口文件不存在或者没有指定入口文件，就会报错，文件未找到
        (2)模块查找规则-当模块没有路径且没有后缀时
            require("find")
            |--nodejs会假设他是系统模块，会去Node_modules文件中查找
                |--看是否有find.js文件
                    |--看是否有find文件夹
                        |--看find文件夹下是否有find.js文件
                        |--如果find文件夹下没有index.js文件，查看该文件夹下的package.json中main选项确定模块入口文件
                |--否则报错
    4、
        (1)web网络原理
        (2)搭建服务器
            //引用系统模块
            const http = require("http");
            //创建web模块
            const app = http.createServer();
            //当客户端发送请求来的时候
            app.on("request",(req,res)=>{
                //响应
                res.end("<h1>wuqi</h1>");
            });
            //监听3000端口
            app.listen(3000);
            console.log("服务器已启动");
        (3)HTTP协议
            |--HTTP协议的概念
                HTTP：超文本协议，规定如何从网站服务器传输超文本到本地浏览器，它基于客户端服务器架构工作，是客户端(用户)和服务器端(网站)请求和应答的标准。
            |--报文
                在HTTP请求和响应的过程中传递的数据块叫报文，包括要传递的数据和一些附加信息，并且要遵守规定好的格式。
            |--请求报文 req.method()可以进行获取请求方式
                |--请求方式
                    GET     请求数据
                    POST    发送数据
                |--请求地址
                    |--req.headers //获取请求报文
                    req.headers["accept"]
                    |--req.url     //获取请求地址
                        //获取请求地址
                        console.log(req.url);
                        if(req.url == "/index" || req.url == "/"){
                            res.end("welcome to home");
                        }else if(req.url == "/list"){
                            res.end("welcome to list");
                        }else{
                            res.end("not found");
                        }
                    |--req.method  //获取请求方式
            |--响应报文 
                |--http状态码
                    |--200 请求成功
                    |--404 请求的资源没有找到
                    |--500 服务器端错误
                    |--400 客户端请求有语法错误
                |--内容类型
                    |--text/html
                        res.writeHead(200,{
                            "content-type":"text/html;charset=utf8"
                        });
                    |--text/css
                    |--application/jepg
                    |--image/jpeg
                    |--application/json
            |--Http请求与响应处理
                |--请求参数
                    |--客户端向服务器发送请求时，有时需要携带一些客户信息，客户信息需要通过请求参数的形式传递到服务器端，比如登录操作。
                    |--GET请求参数
                        |--参数被放置在浏览器地址栏中，例如：http://localhost:3000/?name=zhangsan&age=20
                        let {query,pathname} = url.parse(req.url,true);
                        console.log(query.name);
                        console.log(query.age);
                    |--POST请求参数
                        |--参数被放置在请求体中进行传输
                        |--获取POST参数需要使用data事件和end事件
                        |--使用queryString系统模块将参数转换成对象格式
                        //客户端有请求来的时候
                        app.on("request",(req,res)=>{
                            //post参数是通过事件的方式来接受的
                            //data 当请求参数传递的时候触发data事件
                            //end 当参数传递完成的时候
                            let postParams = "";
                            req.on("data",params=>{
                                postParams += params;
                            });
                            req.on("end",()=>{
                                console.log(postParams);
                                
                            })

                            res.end("ok");
                        });
                |--路由
                    |--http://localhost:3000/index
                    |--http://localhost:3000/login
                    |--路由是指客户端请求地址与服务器端程序代码的对应关系。即：请求什么响应什么。
                        app.on("request",(req,res)=>{
                            //获取请求方式 将大写的字母转为小写的
                            const method = req.method.toLowerCase();
                            //获取请求路径 对url进行解析
                            const pathname = url.parse(req.url).pathname;

                            //状态码
                            res.writeHead(200,{
                                "content-type":"text/html;charset=utf8"
                            });

                            if(method == "get"){
                                if(pathname == "/" || pathname == "/index"){
                                    res.end("欢迎来到字节跳动");
                                }else if(pathname == "/list"){
                                    res.end("欢迎来到今日头条");
                                }else{
                                    res.end("你访问的页面不存在");
                                }
                            }else if(method == "post"){

                            }
                        });
                |--静态资源
                    |--服务器端不需要处理，可以直接响应给客户端的资源就是静态资源，例如css、js、image文件
                    |--请求外链资源

                |--动态资源
                    |--相同的请求地址下不同的响应资源，这种资源就是动态资源
                    |--http://www/jc.com/name?id=1 http://www/jc.com/name?id=2
        (4)nodejs异步编程
            |--同步api:只有当前api执行完成之后，才能继续执行下一个api
                |--console.log("before");
                |--console.log("before");
            |--异步api:当前api的执行不会阻塞后续代码的执行
                console.log("before");
                //
                setTimeout(function(){
                    console.log("last");
                },2000);

                console.log("after");
            |--异步API和同步API的差异
                |--(获取返回值)
                    |--同步API可以从返回值中拿到执行的结果，但是异步API不可以
                    |--可以通过回调函数进行解决
                        function getData(callback){
                            callback("123");
                        }

                        getData(function(msg){
                            console.log("callback函数被回调了");
                            console.log(msg);
                        });
                |--代码执行顺序
                    |--同步API是从上到下依次执行，前面的代码会阻塞后面的代码
                    |--异步API不会等待API执行完后后再向下执行代码
            |--Promise
                |--Promise出现的目的是解决nodejs异步编程中回调地狱的问题
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
                }).catch(//链式编程 捕获异常
                    (err)=>{
                        console.log(err);
                    }
                )

                ##具体：看call.js promise.js文件
        (5)异步函数
            在普通函数前加async就能将函数转为异步函数
            |--await关键字
                |--await关键字只能出现在异步函数中
                |--await promise await后面只能写promise对象，写其他类型的api是不可以的
                |--await关键字可以暂停异步函数向下执行，指导promise返回结果
                    async function p1(){
                        return "p1";
                    };

                    async function p2() {
                        return "p2";
                    };

                    async function p3() {
                        return "p3";
                    };

                    async function run(){
                        let r1 = await p1();
                        let r2 = await p2();
                        let r3 = await p3();
                        console.log(r1);
                        console.log(r2);
                        console.log(r3);

                    }

                    run();
                |--普通函数定义前加async关键字，普通函数变成异步函数
                |--异步函数默认返回promise对象
                |--在异步函数内部使用return关键字进行结果返回，结果会被包裹的promise对象中，return关键字代替了resolve方法
                |--在异步函数内部使用throw关键字抛出异常
                |--调用异步函数再进行链式调用then方法获取异步函数执行结果
        ()promisify方法
            const fs = require("fs");

            //改造现有异步函数api,让其返回promise对象，从而支持异步函数语法
            const promisify = require("util").promisify;
            //调用promisify方法改造现有异步api 让其返回promise对象
            const readFile = promisify(fs.readFile);

            async function run(){
                let r1 = await readFile("./1.txt","utf8");
                let r2 = await readFile("./2.txt", "utf8");
                let r3 = await readFile("./3.txt", "utf8");
                console.log(r1);
                console.log(r2);
                console.log(r3);
            };

            run();


2020.02.11 MangoDB+express
    1、数据库：存储数据的仓库，可以将数据分门别类的存储。
        |--dataset 数据库，可以建立多个数据库
        |--collection 集合，一组数据的集合
        |--document 文档，一条具体的数据
        |--field
    2、mangoDB使用数据库
        |--使用nodejs操作数据库需要依赖第三方包 mangoose
            npm install mongoose 安装第三方包
            net stop mongoose 停止使用数据库连接
            net start mongoose 开始进行数据库连接
                //导入第三方包
                const mongoose = require("mongoose");
                //进行数据库连接
                mongoose.connect("mongodb://localhost/playground",{
                    useNewUrlParser:true,
                    useUnifiedTopology: true
                }).then(()=>{
                    console.log("数据库连接成功");
                }).catch(err=>
                    console.log(err,"数据库连接失败")
                )
    3、MangoDB增删改查
        (1)创建集合
            |--对集合设定规则
            |--创建集合(创建mongoose.Schema构造函数的实例即可创建集合)
                //创建集合规则
                const courseSchema = new mongoose.Schema({
                    name: String,
                    author: String,
                    isPublished: Boolean
                });

                //使用规则创建集合
                const Course = mongoose.model("Course",courseSchema);//courses
        (2)创建文档：向文件中插入数据
            |--创建集合实例
            |--调用实例对象的save方法将数据保存到数据库中
                //添加数据
                const course = new Course({
                    name: "nodejs",
                    author: "pink",
                    isPublished: true
                });

                //保存数据
                course.save();
            |--
                //向集合中插入文档
                // Course.create({
                //     name:"python",
                //     author:"orange",
                //     isPublished:false
                // },(err,result)=>{
                //     //打印错误信息
                //     console.log(err);
                //     //打印文档信息
                //     console.log(result);
                // });
            |--
                //使用promise方法进行插入文档
                Course.create({
                    name:"go",
                    author:"yellow",
                    isPublished:true
                }).then(result=>{
                    console.log(result);
                })
        (3)导入数据
            
            |--先对mongoDBimport文件进行环境变量配置
            |--预先准备数据json文件
            |--在cmd下输入 mongodaimport -d 数据库名称 -c 集合名称 -file 要导入的数据文件
        (4)查询数据
            |--查找整个文档信息
                // 查询用户集合中的所有文档
                User.find().then(result=>console.log(result));
            |--查找单条信息
                // 通过_id字段查找文档
                User.find({ _id:"5e43760a8c3de74d20d0dbe7"}).then(result=>{
                    console.log(result);
                })

                //findOne方法返回一条文档，默认返回当前集合中的第一条文档
                User.findOne().then(result=>{
                    console.log(result);
                });

                //花括号中可以指定查找对象
                User.findOne({ name: "铁头"}).then(result=>{
                    console.log(result);
                });
            |--匹配条件查找对象
                // 匹配大于 小于
                User.find({age:{$gt:12,$lt:14}}).then(result=>{console.log(result);});

                //查找包含该信息的文档
                User.find({hobbies:{$in:["打篮球"]}}).then(result=>{console.log(result);}); 

                //根据指定字段查找信息  -字段 表示该字段不查询
                User.find().select("name email -_id").then(result => { console.log(result); }); 

                // 根据字段进行排序 -字段降序排列
                User.find().sort("-age").then(result => { console.log(result); });

                // 根据序号skip跳过多少条数据，Limit限制显示数量
                User.find().skip(1).limit(2).then(result=>{console.log(result)});
        (5)删除数据
            // 查找一条文档并且删除,并返回被删除的信息
            // 如果查询条件匹配多条信息，则会删除第一条信息
            // User.findByIdAndDelete({ _id:"5e437c21df25b335984935ed"}).then(result=>console.log(result));


            // { n: 5, ok: 1, deletedCount: 5 } n:当前删除了几条数据 ok:表示删除成功
            User.deleteMany({}).then(result=>console.log(result));

        (6)更改数据
            // 更新集合中的文档(只更新第一个) { n: 1, nModified: 1, ok: 1 } n:更新了一个 nModified: 1影响了一个
            User.updateOne({name:"文波"},{name:"二狗"}).then(result=>console.log(result));
            // 更新集合中的多个文档 
            User.updateMany({},{age:16}).then(result=>console.log(result));

    4、mongoose验证
        |--设定mongoose验证规则
            const postSchema = new mongoose.Schema({
                title:{
                    type:String,
                    required:[true,"请输入标题"],
                    minlength:[2,"标题长度不可以小于2"],
                    maxlength: [5, "标题长度不可以大于5"],
                    trim:true//删除文字内容中的空格
                },
                age:{
                    type:Number,
                    min:18,
                    max:100
                },
                publishDate:{
                    type:Date,
                    default:Date.now
                },
                category:{
                    type:String,
                    //枚举 列举出当前字段拥有的值
                    enum: ["html","css","js","nodejs"]
                },
                author:{
                    type:String,
                    validate:{//自定义验证器
                        validator: v =>{//v 当前用户传递进来的值
                            // 返回布尔值 true 成功 false 验证失败
                            return v && v.length > 4
                        },
                        // 自定义验证错误信息
                        message:"当前字段传递的值不符合规则"
                    }
                }
            });
        |--将错误信息获取打印
            Post.create({
                title:"电路与案例",
                age:20,
                
                category:"java",
                author:"刘玉玲真棒"

            }).then(result=>console.log(result))
            .catch(error=>{
                // 获取错误信息对象
                const err = error.errors;
                //循环错误信息对象
                for(var attr in err){
                    // 将错误信息打印到控制台中
                    console.log(err[attr]["message"]);
                } 
            });
    5、集合关联查询
        (1)集合关联

            // 文章集合规则
            const postSchema = new mongoose.Schema({
                title:{
                    type:String,

                },
                author:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User"//关联集合
                }
            });
            // 创建文章
            // Post.create({
            //     title:"python",
            //     author:"5e439109941f76270c979712"
            // },{
            //     title: "java",
            //     author: "5e439109941f76270c979713"
            // }).then(result=>{
            //     console.log(result,"创建文章成功")
            // });

        (2)集合查询
            Post.find().populate("author").then(result => {
                console.log(result);
            });
    6、模板引擎
        npm install art-template
        (1)模板引擎语法
            |--标准语法 {{数据}}
                |--{{@ 数据}} 会将包含的标签进行显示解析
                |--if语句判断
                    {{if age > 20}}
                        明月老妹大于20岁
                    {{else if age < 10}}
                        明月老妹小于10岁
                    {{else}}
                        明月老妹年龄未知
                    {{/if}}
                |--for循环
                    {{each users}}
                    <li>
                        {{$value.name}}
                        {{$value.age}}
                    
                    </li>
                    {{/each}}
                |--子模板
                    {{ include './common/header.html' }}
                    <div>{{ msg }}</div>
                    {{ include './common/footer.html' }}
                |--模板继承
                    |--主显示页面预留位置
                        {{block 'header'}}{{block 'header'}}
                        {{block 'content'}}{{/block}}
                    |--要显示内容插入页面
                        {{extend "./common/layout.art"}}
                        {{block 'header'}}
                        <p>{{msg}}</p>
                        {{/block}}
            |--原始语法 <%=数据 %>
        (2)模板配置
            |--向模板中导入变量 template.defaults.imports.变量名 = 变量值;
                // 配置默认的文件根路径
                template.defaults.root = path.join(__dirname, "views");
                // 导入模板引擎
                template.defaults.imports.dateFormat = dateFormat;
                // 配置模板的默认后缀
                template.defaults.extname = ".html";
                const html = template("04", {
                    time: new Date()
                });
        
        npm install nrm -g下载nrm
        查询可用下载地址nrm ls
        切换npm下载地址nrm use 下载地址名称
    7、案例：学生信息管理系统
        (1)制作流程
            |--建立项目文件夹并生成项目描述文件
            |--创建网站服务器实现客户端和服务端通信
            |--连接数据库并根据需求设计学院信息表
            |--创建路由并实现页面模板呈递
            |--实现静态资源访问
            |--实现学生信息添加功能
            |--实现学生信息展示功能
        (2)创建路由
            |--获取路由对象
                //引入router模块
                const getRouter = require("router");
            |--调用路由对象提供的方法进行创建路由
                const router = getRouter();
                router.get("/test",(req,res)=>{
                    res.end("test");
                });
            |--启用路由，使路由生效
                // 当客户端访问服务器端的时候
                app.on("request",(req,res)=>{
                    router(req,res,()=>{})
                });
        (3)第三方模块
            |--功能：实现静态资源访问服务
            |--步骤：   
                |--引入serve-static模块获取创建静态资源服务功能的方法
                |--调用方法创建静态资源服务并指定静态资源服务目录
                |--启动静态资源服务功能
        (4)添加学生信息功能分析
            |--在模板的表单中指定请求地址与请求对象
            |--为每一个表单项添加name属性
            |--添加实现学生信息功能路由
            |--接收客户端传递过来的学生信息
            |--将学生信息添加到数据库中
            |--将页面重定向到学生信息列表页面

2020.02.13 express框架
    1、express框架
        (1)express
            |--express是一个基于Node平台的web应用开发框架，帮助创建各种web应用。
            |--使用npm install express命令进行下载
        (2) express框架特性
            |--提供了方便简洁的路由定义方式
            |--对获取http请求参数进行了简化处理
            |--对模板引擎支持程度高，方便渲染动态html页面
            |--提供中间件机制有效控制http请求
            |--拥有大量第三方中间件对功能进行扩展
        (3) send()
            // 1.send方法内部会检测响应内容的类型
            // 2.send方法会自动设置http状态码
            // 3.send方法会帮我们自动设置响应的内容类型及编码
        (4)中间件
            |--中间件就是一堆方法，可以接收客户端发来的请求，可以对请求作出响应，也可以将请求继续交给下一个中间件继续处理。
            |--中间件主要由两部分构成，中间件放阿飞以及请求处理函数。
            |--中间件方法由express提供，负责拦截请求，请求处理函数由开发人员提供，负责处理请求。
                |--app.get("请求路径","处理函数");//接收并处理get请求
                |--app.post("请求路径","处理函数");//接收并处理post请求
                    |--可以针对同一个请求设置多个中间件，对同一个请求可以进行多次处理。
                    |--默认情况下，请求从上到下依次匹配中间件，一旦匹配成功，终止匹配。
                    |--可以调用Next方法将请求的控制权交给下一个中间件，直到遇到结束请求的中间件。
                |--app.use("请求路径",(req,res,next)=>{});
                    app.use((req,res,next)=>{
                        console.log("请求走了app.use中间件");
                        next();
                    });
                |--中间件的作用
                    |--路由保护，客户端在访问需要登录页面时，可以先使用中间件判断用户登录状态，用户未登录则拦截请求，直接响应禁止用户登录页面。
                    |--网站维护
                    |--自定义404页面
                |--错误中间件
                    |--在程序执行的过程中，错误处理中间件是一个集中处理错误的地方。
                        //错误处理中间件
                        app.use((err,req,res,next)=>{
                            res.status(500).send(err.message);
                        });
                    |--当程序出现错误时，调用next()方法，并且将错误信息通过参数形式传递给next()方法，即可触发错误中间件。
                        app.get("/index",(req,res,next)=>{
                            // throw new Error("程序发生了未知错误...");
                            fs.readFile("./01.js","utf8",(err,result)=>{
                                if(err!=null){
                                    next(err);
                                }else{
                                    res.send(result);
                                }
                            
                            });

                            // res.send("程序正常运行中...");
                        })
                |--创建二级路由
                    //创建路由对象
                    const home = express.Router();
                    // 将路由和请求路径进行匹配
                    app.use("/home",home);
                    //在home路由下继续创建二级路由
                    home.get("/index",(req,res)=>{
                        res.send("欢迎来到博客展示页面");
                    });
        (5)Express请求处理
            |--GET参数的获取
                Express框架中使用req.query即可获取GET参数，框架内部会将GET参数转换成对象并返回。
                req.query 获取GET参数，接收地址栏问号后面的参数
                // 地址栏输入 http://localhost:3000/index?name=xiaokeai&age=20
                // {"name":"xiaokeai","age":"20"}
            |--POST参数的获取
                npm install body-parser
                app.use(bodyParser.urlencoded({extended:false}))
            |--静态资源处理express.static()

        
        (6)模板引擎
            |--为了使得art-template模板引擎能够更好的和Express框架结合，模板引擎express-art-template
            |--使用npm install express-art-template art-template安装
            // art 模板后缀  
            // express-art-template 使用的模板引擎
            app.engine("art",require("express-art-template"));
            // 渲染模板存放目录
            // views 虚拟位置
            // path.join(__dirname,"views") 具体位置
            app.set("views",path.join(__dirname,"views"));
            //渲染模板时不写后缀，默认拼接art后缀
            app.set("view engine","art");
            //
            app.get("/index",(req,res)=>{
                // 1.拼接模板路径
                // 2.拼接模板后缀
                // 3.哪一个模板和哪一个数据进行拼接
                // 4.将拼接结果响应给客户端
                // 渲染模板
                res.render("index",{
                    msg:"message"
                })
            });
        (7)app.local对象
            ���变量设置到app.locals对象下面，这个数据在所有模板中都可以获取到。
            app.locals.users = [{
                name: "张三",
                age: 20
            },{
                name:"李四",
                age: 21
            }]

2020.2.18 面向对象
    1.面向过程和面向对象
    2.继承
        (1)extends子类继承父类(就近原则)
            |--如果实例化子类输出一个方法，先看子类中有没有这个方法
                |--如果有就先执行子类的方法
                |--如果没有就去查找父类有没有该方法，有就进行调用父类方法
        (2)super()可以调用父类中的构造函数  
            |--super()必须在子类的this前面进行调用，就是先调用父类的构造函数，再调用子类构造函数
        (3)使用类注意事项
            |--类里面的公有属性和方法一定要加this调用
            |--ES6中没有变量提升，所以先要定义类，再进行实例化对象
            |--constructor里面的this指向实例对象，方法里面的this指向这个方法的调用者


2020.2.21 jquery
    1.jquery使用
        (1)入口函数
            <script>
                // 在页面DOM加载完毕后执行代码
                $(function(){
                    $("div").hide();
                });
                // 在页面DOM加载完毕后执行代码
                $(document.ready(function(){
                    $("div").hide();
                }))
            </script>
            <div></div>
        (2)jquery顶级对象
            // $是juqery顶级对象($是别称)
            $(function(){

            });
            jQuery(function(){

            });
        (3)DOM对象和jquery对象
            |--DOM对象：用原生js获取的对象就是DOM对象
            |--jquery对象：用jquery方式获取的对象是，本质上时对DOM元素进行了封装
            |--jquery只能使用jquery方法，DOM只能使用DOM方法



2020.2.22 ES6
    1、ES6：脚本语言规范
        (1)let关键字
            |--let声明的关键字只能在所处于的块级有效
                if(true){
                    let a = 0;
                    console.log(a);//打印为0
                }
                console.log(a);//错误，不可访问

            |--防止循环变量编程全局变量
            |--不存在变量提升：只能先声明在使用
            |--暂时性死区
                var num = 10;
                if (true) {//该块级区域不可使用外部变量，变成死区
                
                    console.log(num);
                    let num = 20;
                }

                <!-- 打印报错 -->
        (2)const关键字：声明常量就是值(内存地址)不能变得量
            |--具有块级作用域,不存在变量提升
            |--声明常量必须赋值
            |--常量赋值后，不能进行修改值
        (3)let、var、const的区别
            |--var：函数级作用域、变量提升、值可更改
            |--let：块级作用域、不存在变量提升、值可更改
            |--const：块级作用域、不存在变量提升、值不可更改
    2、解构赋值
        (1)数组解构：数组中进行一一对应地进行赋值
            let arr = [1,2,3];
            let [a,b,c] = arr;
        (2)对象解构：使用变量的名字匹配对象的值
            |--方式一
                let person = {name:xiao,age:12};
                let {name,age} = person;
            |--方式二
                let person = {name:xiao,age:12};
                let {name:myname} = person;
    3、箭头函数
        (1)语法：()=>{}
            const fn = ()=>{};//声明函数
            fn();//调用函数
        (2)在箭头函数，如果函数体中只有一句代码，并且代码的执行结果就是函数的返回值，可以省略{}
            const fn = (num1,num2) => num1+num2;
            fn(1,2);
        (3)在箭头函数，如果形参只有一个，就可以直接省略()
            const fn => v => {alert(v)};
            fn(1);
        (4)箭头函数中不绑定this关键字，箭头函数中的this指向函数定义位置的上下文的this
        (5)对象不产生作用域
            var obj = {
                age:20,
                say:()=>{
                    alert(this.age);
                }
            }

            obj.say();
            <!-- 打印结果为 undefined -->
    4、扩展运算符...
        (1)扩展运算符可以将数组拆分成以逗号隔开的参数序列
            let arr = ["a","b","c"];
            console.log(...arr);
            <!-- 打印结果为 "a","b","c" -->
        (2)扩展方法
            扩展运算符可以用于数组合并
            |--方法一：
                let arr1 = [1,2,3];
                let arr2 = [4,5,6];
                let arr = [...arr1,...arr2];
                console.log(arr);
            |--方法二：
                arr1.push(...arr2);
        (3)可以将伪数组转为真正的数组
            <div>1</div>
            <div>2</div>
            let oDivs = document.getElementsByTagName("div");
            oDivs = [...oDivs];
    5、实例方法
        (4)构造函数 Array.from()
            |--方法可以接收第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理的值放入返回的数组中。
            let arrayLike = {
                "0":1,
                "1":2,
                "length":2
            }

            let newArr = Array.from(arrayLike,item=>item*2);
        (5)实例方法 find()
            |--用于找到第一个符合条件的数组成员，如果没有找到返回undefined
            let arr = [{
                id:1,
                name:"小凡"
            },{
                id:2,
                name:"文波"
            }];

            let target = arr.find((item,index)=>item.id = 2);
        (6)实例方法 findIndex()
            let arr = [10,20,30];
            let index = arr.findIndex(item=>item>5);
            console.log(index);
        (7)实例方法 includes()
            表示某个数组是否包含给定的值，返回布尔值。
            [1,2,3].includes(2);//true
            [1,2,3].includes(4);//false
        (8)String的扩展方法
            模板字符串中解析变量
            let name = "zhangsan";
            let sayHi = `hello,${name}`;
            console.log(sayHi);

            let result = {
                name:"zhangsan",
                age:20,
                sex:"男"
            };
            let html = `
            <div>
                <span>${result.name}</span>    
                <span>${result.age}</span> 
                <span>${result.sex}</span> 
            </div>`;

            console.log(html);

            const sayHello = ()=>"哈哈哈";
            let great = `${sayHello()} 哈哈哈`;
            console.log(great);
        (9)startsWith和endsWith判断字符串的开头和结尾,返回布尔值
            let str = "hello world!";
            let start = str.startsWith("hello");
            let end = str.endsWith("!");
            console.log(start);
            console.log(end);
        (10)repeat复制字符串n次
            "x".repeat(n);
    6、set数据结构
        (1)数据结构set，类似于数组，但是成员的值都是唯一的，没有重复的值。
            |--set本身是一个构造函数，用来生成set数据结构
            const s = new Set();
            |--set函数可以作为一个数组作为参数，用来初始化
            const set =new Set([1,2,3,4,4]);

            const s1 = new Set();
            console.log(s1.size);
            // 向set数据结构中添加值
            s1.add("2").add("3");
            console.log(s2.size);
            // 向set数据结构中删除值
            const s3 = s2.delete("1");
            console.log(s3.size);
            // 向set数据结构中是否包含值
            s3.has("3");
            console.log(s3.size);
            // 向set数据结构中清空值
            s3.clear();
            console.lgo(s3);
            // 遍历取值
            const s5 = new Set(["a","b","c"]);
            s5.forEach(v=>{
                console.log(v);
            })


2020.2.24 ajax
    1、ajax简介
        ()初体验
            // 创建ajax对象
            var xhr = new XMLHttpRequest();
            // 告诉ajax对象要向那儿发送请求
            // xhr.open("请求方式","请求地址");
            xhr.open("get","http://localhost:3000/first");
            // 发送请求
            xhr.send();
            // 获取服务器端相应到客户端的数据
            xhr.onload = function(){
                console.log(xhr.responseText);
            }
        (2)服务器端的数据格式
            |--服务器端大多数会以JSON对象作为响应数据格式。当客户端拿到响应数据时，要将JSON数据和HTML字符串进行拼接，然后将拼接数据展现在页面。
            |--在http请求与响应中，无论是请求参数还是响应内容，如果对象类型，最终都会被转成对象字符串进行传输。
            JSON.parse() //将json字符串转换成json对象
        (3)请求参数传递
            |-- 请求报文：在HTTP请求和响应的过程中传递的数据块叫做报文，包括要传送的数据和一些附加信息，这些数据和信息要遵守规定好的格式
            |-- GET请求方式
                xhr.open("get", "http://localhost:3000/get?username=wenbo&password=123");
            |-- POST请求方式
                 xhr.open("post", "http://localhost:3000/post");
                // 设置请求头
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        (4)获取服务器响应的另一种方式
            |--ajax状态码：在创建ajax对象，配置ajax对象，发送请求以及接受服务器响应数据时，这个过程中的每一个步骤都会产生一个值，这个值就是ajax状态码.
                |--0 请求未初始化(还未调用open)
                |--1 请求已经建立，通常响应中已经有了部分数据可用
                |--2 请求已经发送
                |--3 请求正在进行处理中，通常响应中已经有了部分数据可以使用
                |--4 响应已经完成，可以获取并使用服务器的响应了
            |--onreadystatechange事件：当ajax状态码发生变化时将自动触发该事件。
                 var xhr = new XMLHttpRequest();
                // 0 已经创建ajax对象，但是还没有对ajax对象进行配置
                console.log(xhr.readyState);
                xhr.open("get","http://localhost:3000/readystate");
                // 1 已经对ajax对象进行配置，但是还没有发送请求
                console.log(xhr.readyState);
                // 当ajax状态码发生变化时触发事件
                xhr.onreadystatechange = function(){
                    // 2 请求已经发送了
                    // 3 已经接收到服务器的部分数据
                    // 4 服务器的响应数据已经接收完毕
                    console.log(xhr.readyState);
                    if(xhr.readyState == 4){
                        console.log(xhr.responseText);
                    }
                };

                xhr.send();
        (5)两种获取服务器响应方式的对比：
            onload事件：不兼容IE低版本，不需要判断ajax状态码，只需要调用一次
            onreadystatechange事件：兼容IE低版本，需要判断状态码，需要被多次调用
        (6)ajax错误处理
            |--网络畅通，服务器能接受请求，服务器返回的结果不是预期结果
                |--可以判断服务器返回的状态码，分别进行处理.xhr.status获取http状态码
            |--网络畅通，服务器没有接收到请求，返回404状态码
                |--检查请求地址错误
            |--网络畅通，服务器端能接收到请求，服务器端返回500状态码
                |--服务器错误，找后端进行沟通
            |--网络中断，请求无法发送到服务器
                |--会触发xhr对象下的onerror事件，在事件处理函数中对错误进行处理
        (7)低版本IE浏览器的缓存问题
            |--在低版本的IE浏览器中，ajax存在严重的缓存问题，即在请求地址不发生变化时，只有第一次请求会真正发送到服务器，后续请求会从浏览器的缓存获取结果，即使服务器的数据更新了，客户端依然拿到的是缓存中的旧数据。
            |--解决方案：在请求地址后面添加请求参数，保证每一次请求中的请求参数值不同。
             xhr.open("get", "http://localhost:300/cache?t" + Math.random());
        (8)js中事件处理函数也是回调函数的一种
    2、ajax异步编程
        (1)ajax封装
            问题：发送一次请求代码过多，发送多次请求diamante荣誉重复
            解决：将请求代码封装到函数中，发请求时进行调用函数
             // 定义函数
            function ajax(options){
                // 创建ajax对象
                var xhr = new XMLHttpRequest();
                // 配置ajax对象
                xhr.open(options.type,options.url);
                // 发送请求
                xhr.send();
                // 监听xhr对象在的onload事件
                xhr.onload = function(){
                    options.success(xhr.responseText);
                }

            }
            ajax({
                // 请求方式
                type:"get",
                // 请求地址
                url:"http://localhost:3000/first",

                success:function(data){
                    console.log("这是success函数"+ data);
                }
            })
        (2)将data数据进行提取
            // 定义函数
            function ajax(options) {
                // 创建ajax对象
                var xhr = new XMLHttpRequest();
                // 拼接请求参数的变量
                var params = "";
                // 循环用户传递进来的对象格式参数
                for(var attr in options.data){
                    // 将参数转换为字符串格式
                    params += attr + "=" + options.data[attr] + "&";
                }
                // 将参数的最后一个&进行截取,将参数重新复制给params
                params=  params.substr(0,params.length-1);

                // 判断请求方式
                if(options.type == "get"){
                    options.url = options.url + "?" + params;
                }

                // 配置ajax对象
                xhr.open(options.type, options.url);

                // 如果请求方式是post
                if(options.type == "post"){
                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                    xhr.send(params);
                }else{
                    // 发送请求
                    xhr.send();
                }
            
                // 监听xhr对象在的onload事件
                xhr.onload = function () {
                    options.success(xhr.responseText);
                }

            }
            ajax({
                // 请求方式
                type: "get",
                // 请求地址
                url: "http://localhost:3000/first",
                data:{
                    name:"xiao",
                    age:20
                },
                success: function (data) {
                    console.log("这是success函数" + data);
                }
            })


2020年2月25日 ajax
    1、使用模板引擎
        <!-- 1 导入模板引擎文件 -->
        <script src="/js/template-web.js"></script>
        <div id="container"></div>
        <!-- 2 准备art-tempalate模板 -->
        <script type="text/html" id="tpl">
            <h2>{{username}} {{age}}</h2>
        </script>
        <script type="text/javascript">
            // 3 告诉模板引擎将哪个数据和哪个模板进行拼接
            // 1) 模板id 2)数据-对象类型
            // 方法的返回值是拼接好的html字符串
            var html = template("tpl",{username:"zhangsan",age:30});
            document.getElementById("container").innerHTML = html;
        </script>
    2、案例：
        (1)邮箱地址验证
            |--获取文本框并为其添加离开焦点事件
            |--离开焦点时，检测用户输入的邮箱地址是否符合规则
            |--如果不符合规则，阻止程序向下执行并给出提示信息
            |--向服务器端发送请求，检测邮箱地址是否被别人注册
            |--根据服务器端返回值决定客户端显示何种提示信息
        (2)搜索框内容自动提示
            |--获取搜索框并为其添加用户输入事件
            |--获取用户输入的关键字
            |--向服务器端发送请求并携带关键字作为请求参数
            |--将响应数据显示在搜索框底部
            
2020年02月26日 ajax
    1、FormData对象的作用
        |--模拟HTML表单，相当于将HTML表单映射成表单对象，自动将表单对象中的数据拼接成请求参数的格式
        |--异步上传二进制文件
        |--FormData对象的使用
            // get("key") 获取表单对象属性的值
            console.log(formData.get("username"));
            // set("key","value") 设置表单对象属性的值
            // 如果表单对象存在，则修改值
            formData.set("username","chaobang");
            // 如果表单对象不存在，则添加属性和值
            formData.set("age",200);
            // delete("key") 删除指定表单对象
            formData.delete("password");
            // append("key","value") 向表单对象中追加属性值
            formData.append("bendan","shadan");
        |--set和append方法区别：在属性名已存在的情况下，set会覆盖已有键名的值，append会保留两个值(需要在浏览器的Network查看)
    2、同源政策
        (1)如果两个页面拥有相同的协议、域名和端口，那么这两个页面就属于同一个源，只要其中一个不同则不为同源。
        (2)jsonp是json with padding的缩写，它不属于ajax请求，但是可以模拟ajax请求
            |--将不同源的服务器请求地址写在script地址的src属性中
            |--服务器响应数据必须是一个函数的调用，真正发给客户端的数据需要作为函数的参数
            |--在客户端全局作用域下定义函数fn
            |--在fn函数内部对服务器返回的数据进行处理
        (3)CORS跨域资源共享
            |--CORS：全称Cross-origin resource sharing，即跨域资源共享，它允许浏览器向跨域服务器发送ajax请求，克服ajax只能同源使用的限制。
            |--原理
                            请求(请求头origin)
                浏览器 ----------------------------------------->服务器
                    <--------------------------------------------
                        响应(响应头Access-Cntrol-Access-Origin)
        (4)withCredentials属性
            |--在使用ajax技术发送跨域请求时，默认情况下不会在请求中携带cookie信息
            |--withCredentials：指定在涉及到跨域请求时，是否携带cookie信息，默认值为falase
            |--Access-Cntrol-Access-withCredentials：true允许客户端发送请求时携带cookie

2020.02.27 jquery中的ajax
    1、
        ()serilize方法
            |--作用:将表单中的数据自动拼接成字符串类型的参数
        (2)$.post $.get
            // $.get("/base","name=zhangsan&age=30",(response)=>{
            //     console.log(response);
            // })

            $.post("/base", "name=zhangsan&age=30",(response)=>{
                console.log(response);
            })
    2、Todos案例
        (1)创建数据库
        (2)展示任务列表
            |--准备一个放置任务列表的数组
            |--向服务器发送请求，获取已存在的任务
            |--将已存在的任务存储在任务列表数组中
            |--通过模板引擎将任务列表数组中的任务显示在页面中
        (3)添加任务
            |--为文本框绑定键盘抬起事件，在事件处理函数中判断用户敲击的是否是回车键
            |--当用户敲击回车键的时候，判断用户在文本框中是否输入了任务名称
            |--向服务器中发送请求，将用户输入的任务名称添加到数据库中，同时将任务添加到任务数组中
            |--通过模板引擎将任务列表数组中的任务显示在页面中
    3、全局事件
        (1)全局事件 
            |--只要页面中有ajax请求被发送，对应的全局事件就会被触发
                |-- .ajaxStart()  当请求开始发送时触发
                |-- .ajaxComplete()  当请求完成时触发
        (2)NProgress
            |--纳米级进度条
                <link rel="stylesheet" href="./js/nprogress/nprogress.css">
                <script src="/js/nprogress/nprogress.js"></script>
            |-- NProgress.start();  进度条开始运动
            |-- NProgress.done();   进度条结束运动
    4、RESTful风格的API
        (1)传统请求地址
            |--获取用户列表
            |--获取某一个用户信息
            |--修改用户信息
            |--删除用户信息
        (2)RESTful风格的API
            |--GET 获取数据
            |--POST 添加数据
            |--PUT 更新数据
                app.put("/users/:id", (req, res) => {
                // 获取客户端传递过来的用户id
                    const id = req.params.id;
                    res.send(`当前是编辑id为${id}用户列表信息的路由`);
                })
            |--DELETE 删除数据
        (3)xml基础
            |--xml：可扩展标记语言，传输和存储信息。

2020.02.29
    1、模板引擎
        (1)渲染模板
            <script type="text/html" id="tpl">
                <div>
                    <!-- template里有两个变量,index和value -->
                    <span>姓名：{{name}}</span>
                    <span>年龄：{{age}}</span>
                </div>
            </script>
            <!-- 先导入模板引擎文件 -->
            <script src="./js/template-web.js"></script>
            <script>
                // 先获取box容器
                var box = document.getElementById("box");
                // 渲染数据
                var data = {
                    name:"杰西",
                    age: 20
                };
                // template("tpl",data) 第一个参数是要显示的模板,第二个参数是要显示的数据
                var html = template("tpl",data);
                // 将要显示的html文件呈现出去
                box.innerHTML = html;
            </script>
        (2)条件判断
            {{if age>18}}
                <div>您已经成年</div>
            {{else}}
                <div>您尚未成年</div>    
            {{/if}}
        (3)原文输出
            <span>姓名：{{@name}}</span>
            // 渲染数据
            var data = {
                name: '<b>赵舜</b>',
                age: 20
            };
        (4)循环
             // 渲染数据
            var data = {data:[{
                name: '赵舜',
                age: 20
            }, {
                name: '明月',
                age: 23
            }, {
                name: '文波',
                age: 25
            }]};
            <ul>
                {{each data}}
                <li>
                    <span>姓名：{{$value.name}}</span>
                    <span>年龄：{{$value.age}}</span>
        
                </li>
                {{/each}}
            </ul>

2020.3.13 VUE 渐进式javascript框架
    声明式渲染-->组件-->客户端路由-->集中式状态管理-->项目构建
    1、初识vue
        (1)vue的使用步骤
            |--提供标签用于填充数据
            |--引入vue.js文件
            |--可以使用Vue语法做功能
            |--把vue提供的数据填充到标签里面
        (2)示范
            <div id="app">
                <div>{{msg}}</div>
            </div>
            <script type="text/javascript" src="js/vue.js"></script>
            <script type="text/javascript">
                var vm = new Vue({
                    el:"#app",//元素挂载的位置(可以是css选择器或者DOM元素)
                    data:{//模型数据(值是一个对象)
                        msg:'hello world'
                    }
                });
            </script>
    2、模板语法
        (1)指令：本质就是自定义属性
            |--格式：以v- 开始(v-cloak)
            
        (2)v-cloak指令用法
            |--插值表达式存在的问题：闪动
            |--闪动问题的解决：v-cloak
            |--解决原理：先隐藏，替换好值后再显示最终的值
            |-- [v-cloak]{
                    display: none;
                }
        (3)数据绑定指令
            |-- v-text 填充纯文本
                相比插值表达式更简洁
            |-- v-html 填充html片段
                存在安全问题，本网站内部数据可以使用，来自第三方数据不可使用
            |-- v-pre 填充原始信息
                显示原始信息，跳过编译过程
            |--实例：
                <div v-text="msg"></div> hello world
                <div v-html="html"></div> 超可爱
                <div v-pre>{{msg}}</div> {{msg}}
        (4)双向数据绑定
            |-- v-model 两个标签之前的值进行绑定，相互影响
                msg:"hello world"
                <input type="text" v-model="msg">
            |-- MVVM设计思想
                M(model) V(view) VM(view-model)
        (5)事件绑定
            |-- v-on 简写：@
                <input type="button" v-on:click="num++" value="+1">
                <input type="button" @click="num--" value="-1">
            |--直接绑定函数名称
                <button @click="handle">加法</button>
            |--直接调用函数
                <button @click="handle()">加法二</button>
            |--事件函数参数传递
                |--直接绑定函数名称：默认会传递事件对象作为事件函数的第一个参数
                <button v-on:click="handle2">点击1</button>
           
                |--直接调用函数：事件对象必须作为最后一个参数显示传递，并且事件名称必须是$event
                <button @click="handle1(12,23,$event)">点击2</button>
            |--实例：
                <button @click="handle()">加法</button>
                <button @click="handle">加法二</button>
                methods:{
                handle:function (){
                    // 这里的this指的是vm
                    console.log(this === vm);
                    this.num++;
                    }
                }
          
        (6)自定义按键事件修饰符
            |-- 自定义按键修饰符名字是自定义的，但是对应的值必须是按键对应event.keyCodes值
            Vue.config.keyCodes.s = 83;
        (7)属性绑定
            |-- v-bind指令用法
                <a v-bind:href="baidu" v-text="text"></a>
                <a :href="baidu" v-text="text"></a>
            |-- v-model的底层实现原理
                <input v-bind:value="msg" v-on:input="msg=$event.target.value">
        (8)样式绑定
            |-- class样式处理
                |-- 对象语法
                    <div v-bind:class="{active: isActive}">
                |-- 数组语法
                    <div v-bind:class="[activeClass, errorClass]">
                |-- 对象绑定和数组绑定可以结合使用
                    class绑定的值可以进行简化操作
                    默认的class会进行保留
            |-- style样式绑定
                |-- 对象语法
                    <div v-bind:style="{color: activeColor, fontsize: fontSize}"></div>
                |-- 数组语法
                    <div v-bind:style="[baseStyle, newStyle]"></div>
        (9)分支判断
            |-- v-if v-else-if v-else
            |-- v-show="true/false" 原理：控制元素样式是否显示display:none
            |-- v-if 控制元素是否渲染到页面 v-show控制元素是否显示(已经渲染到了页面)
        (10)循环结构 
            |-- x-for遍历数组  v-for=" item,index in 循环数组名称"
                <li v-for="item in list">{{item}}</li>
                <li v-for="(item,index) in list">{{item}}+"--"+{{index}}</li>
            |-- key的作用：帮助vue区分不同的元素，从而提高性能
                <li :key="item.id" v-for="(item,index) in list"></li>
        (11)表单域修饰符
            |-- number: 转化为数值
            |-- trim: 去掉开始和结尾的空格，但是字符之间的空格不能删除
            |-- lazy: 将input事件切换为change事件,失去焦点的时候进行显示
            <niput v-model.numer.trim="age" type="number">
    3.自定义指令
        (1)为什么需要自定义指令：因为内置指令已经不能满足需求
            |-- el表示指令所绑定的元素
                <input type="text" v-focus v-model="message">
                Vue.directive("focus",{
                    inserted: function(el){
                        // 获取元素的焦点,
                        el.focus();
                    }
                })
        (2)带参数的自定义指令
            |-- el指的是指令所绑定的元素，而binding指的是形参
                <input type="text" v-color="msg">
                Vue.directive("color",{
                    bind:function(el,binding){
                        // el指的是指令所绑定的元素，而binding指的是形参
                        // console.log(binding.value.color);
                        el.style.backgroundColor = binding.value.color;
                    }
                });
        (3)局部指令
            |-- 局部指令：只作用于本组件中，而不能进行全局调用
                <input type="text" v-color="msg">
                <input type="text" v-focus>
                var vm = new Vue({
                    el:'#app',
                    data:{
                        msg:{
                            color:"pink"
                        }
                    },
                    directives:{
                        color:{
                            bind:function(el,binding){
                                el.style.backgroundColor = binding.value.color;
                            }
                        },
                        focus:{
                            inserted:function(el){
                                el.focus();
                            }
                        }
                    }
                });
    4.计算属性
        (1)表达式的计算逻辑比较复杂，使用计算属性可以使得模板内容更加简洁
        (2)用法：
            computed:{
                reversedMessage:function(){
                    return this.msg.split("").reserse().join("");//将字符串的字符进行翻转
                }
            }
        (3)计算属性和方法的区别：
            |--计算属性是基于他们的依赖进行缓存的
            |--方法不存在缓存
            |--同样对计算属性和方法进行调用两次，计算属性的值使用缓存，方法不使用缓存
    5.侦听器watch:数据一旦发生变化就通知侦听器所绑定方法。
        (1)侦听器的应用场景：
            数据变化时执行异步或者开销较大的操作
        (2)侦听器的用法：
            watch:{
                firstName: function(val){
                    //val表示变化之后的值
                    this.fullName = val + this.lastName;
                },
                lastName: function(val){
                    this.fullName = this.firstName + val;
                }
            }
    6.过滤器
        (1)作用：格式化数据，如：将字符串自行大小写转换
        (2)自定义过滤器：
            vue.filter("过滤器名称",function(value){
                //过滤器业务逻辑
            })
        (3)过滤器的使用：msg作为数据的输入 | 后面是过滤规则
            <div >{{msg | lower}}</div>
            <div>{{msg | lower | upper}}</div>
            <div :aaa="msg | upper">测试数据</div>
        (4)局部过滤器：
            filters:{
                lower:function(value){

                }
            }
        (5)带参数的过滤器
            Vue.filter("format",function(value,arg){
                //value就是过滤器传递过来的参数
            })
        (6)带参数的过滤器的使用
            <div>{{date | format("yyyy-MM-dd")}}</div>

2020.3.15 
    1. 数组相关API
        (1)编译方法(修改原有数据)
            push pop shift unshift splice sort reserve
        (2)替换数组(生成新的数组)
            filter concat slice
    2.修改数组响应式数据
        (1)Vue.set(vm.list,2,'lemon');
        (2)vm.$set(vm.list,1,"bamboo");
        (3)参数：
            参数一：表示要处理的数组名称
            参数二：表示要处理的数组索引
            参数三：表示要处理的数组值
    3.vue全家桶 组件化开发
        (1)组件注册
            |--data必须是一个函数
            |--组件模板内容必须是单个根元素
            |--组件模板内容可以使用模板字符串(es6支持)
            |--在使用驼峰式进行组件命名，那么在使用组件的时候，只能在字符串模板中用驼峰式使用组件，但是在普通标签模板中，必须使用短横线的方式使用组件
            |--局部组件注册：局部组件只能在注册他的父组件中使用
        (2)实例：
            |--组件使用
                <button-counter></button-counter>
            |--组件定义
                Vue.component("button-counter",{//button-counter是组件名称
                    data:function(){//data数据必须是函数
                        return {
                            count : 0
                        }
                    },
                    //模板内容
                    template:`
                        <div>
                            <button @click="handle">点击了{{count}}次</button>
                            <button>测试代码</button>
                        </div>
                    `,
                    //组件方法
                    methods:{
                        handle:function(){
                            this.count += 2;
                        }
                    }
                });
        (3)组件间的数据交互
        |--父组件向子组件传递信息
            |-- props是用来接收父组件传递来的数据
                Vue.component("menu-item",{
                    props:["title","content"],
                    data:function(){
                        return {
                            msg: "子组件的数据"
                        }
                    },
                    template:`
                        <div>{{msg + "----" + title + "----" + content}}</div>
                    `
                })
            |-- 父组件通过属性将值传递给子组件
                <menu-item :title="ptitle"></menu-item>
                <menu-item :title="ptitle" content="hello"></menu-item>

            |-- props属性名规则
                #在props中使用驼峰形式，模板中需要使用短横线的形式
                #字符串形式的模板中没有这个限制
                <menu-item menu-title="nihao"></menu-item>
                Vue.component("menu-item",{
                    // 在javascript中是驼峰的
                    props:["menuTitle"],
                    template:`
                        <div>{{menuTitle}}</div>
                    `
                })
        |-- 子组件向父组件传递值
            |-- 子组件通过自定义事件向父组件进行传递信息
                <button @click="$emit('enlarge-text')"></button>
            |-- 父组件监听子组件的事件
                <menu-item @enlarge-text="fontSize += 2"></menu-text>
        |-- 兄弟组件间传值
            |-- 单独的事件中心管理组件间的通信
                var eventHub = new Vue();
            |-- 监听事件与销毁事件
                eventHub.$on("add-todo",addTodo);
                eventHub.$off("add-todo");
            |-- 触发事件
                eventHub.$emit("add-todo",id);
        (4)组件插槽
        |-- 基本用法
            |--插槽位置
                 Vue.component("alert-box",{
                    template:`
                        <div>
                            <strong>ERROR:</strong>
                            <slot></slot>
                        </div>
                    `
                })
            |--插槽内容:当插槽内容为空的时候，会输入默认内容
                <alert-box>有BUG发生</alert-box>
                <alert-box>有一个警告</alert-box>
        |--具名插槽
            |--插槽定义
                Vue.component("base-layout",{
                    template:`
                        <div>
                            <header>
                                <slot name="header"></slot>
                            </header>
                            <main>
                                <slot></slot>
                            </main>
                            <footer>
                                <slot name="footer"></slot>
                            </footer>
                        </div>
                    `
                });
            |--插槽内容
                <base-layout>
                    <p slot="header">标题信息</p>
                    <p>主要内容1</p>
                    <p>主要内容2</p>
                    <p slot="footer">底部信息</p>
                </base-layout>
                <base-layout>
                    <template slot="header">
                        <p>头部信息1</p>
                        <p>头部信息2</p>
                    </template>
                </base-layout>
        |--作用插槽：父组件对子组件的内容进行加工处理
            |--插槽定义
                Vue.component("panda-list",{
                    props:["list"],
                    template:`
                        <div>
                            <li :key="item.id" v-for="item in list">
                                <slot :info="item">{{item.name}}</slot>
                            </li>
                            
                        </div>
                    `
                })
            |--插槽内容
                <panda-list :list="list">
                    <!-- slot-scope是用来获取子组件传递过来的值 -->
                    <template slot-scope="slotProps">
                        <strong v-if="slotProps.info.id == 2" class="current">{{slotProps.info.name}}</strong>
                        <span v-else>{{slotProps.info.name}}</span>
                    </template>
                </panda-list>
            
2020.03.19 vue前后端交互
    1 url地址格式
        格式：schema://host:port/path?query#fragment
            |--schema:协议。例如：http https ftp等
            |--host:域名或IP地址
            |--port:端口，http默认端口80，可以进行省略
            |--path:路径，例如/abc/a/b/c
            |--query:查询参数,例如：uname=lisi&age=12
            |--fragment:锚点(哈希),用于定位页面的某个位置

    2 异步调用
        (1)异步效果分析
            |--定时任务
            |--ajax
            |--事件函数
        (2)多次异步调用的以来分析
            |--多次异步调用的结果额顺序是不确定的
            |--异步调用结果如果存在依赖需要进行嵌套

    3 Promise
        (1)概述：Promise是一种异步编程的解决方案，从语法而言，Promise是一个对象，从它可以获取异步操作的消息。
        (2)优点：
            |--可以避免多层异步调用嵌套问题(回调地狱)
            |--Promise对象提供了简介的API，使得控制异步操作更加容易
        (3)基本用法
            |--实例化Promise对象，构造函数中传递函数，该函数中用于处理异步任务
            |--resolve和reject两个参数用于处理成功和失败两种情况，并通过p.then获取处理结果
                //实例化Promise对象
                var p = new Promise((resolve,reject)=>{
                    // 成功时调用
                    resolve();
                    // 失败时调用
                    reject();
                });
                // 进行调用
                p.then(
                    (ret)=>{
                    // 从resolve得到正常结果
                    },
                    (ret)=>{
                    // 从reject得到错误结果

                });
        (4)处理ajax请求
            function queryData(url){
                // 实例化Promise对象
                var p = new Promise((resolve,reject)=>{
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function(){
                        if(xhr.readyState != 4) return;
                        if(xhr.readyState == 4 && xhr.status == 200){
                            // 处理正常情况
                            resolve(xhr.responseText);
                        }else{
                            // 处理异常情况
                            reject("服务器异常");
                        }
                    };
                    xhr.open("get",url);
                    xhr.send(null);
                });
                return p;
            };
            //单ajax请求
            queryData("http://localhost:3000/data")
            .then((data)=>{
                console.log(data);
            },(info)=>{
                console.log(info);
            });

            //多ajax请求
            queryData("http://localhost:3000/data")
            .then((data)=>{
                console.log(data);
                return queryData("http://localhost:3000/data");
            })
            .then((data) => {
                console.log(data);
                return queryData("http://localhost:3000/data");
            })
            .then((data) => {
                console.log(data);
            })
        (5)then参数中的函数返回值
            |--返回Promise实例对象
                返回的该实例对象会调用下一个then
            |--返回普通值
                返回的普通值会直接传递给下一个then，通过then参数中函数的参数接收这个值
                queryData("http://localhost:3000/data").then(function(data){
                    return queryData("http://localhost:/data1");
                }).then((data)=>{
                    return new Promise(function(resolve,reject){
                        setTimeout(()=>{
                            resolve(123);
                        },1000);
                    })
                }).then((data)=>{
                    return "hello";
                }).then((data)=>{
                    console.log(data);
                    
                })
        (6)Promise常用的API
            |--实例方法
                |--p.then() 得到异步任务的正确结果
                |--p.catch() 得到异常信息
                |--p.finally() 成功与否都会执行(尚且不是正式标准)
                queryData().then((data)=>{
                    console.log(data);
                }).catch((data)=>{
                    console.log(data);
                }).finally(()=>{
                    console.log("finished");
                    
                });
            |--对象方法
                |--Promise.all() 并发处理多个异步任务，所有任务都执行完成之后才能得到结果
                    Promise.all([p1,p2,p3]).then((result)=>{
                        console.log(result);
                    })
                |--Promise.race() 并发处理多个一部任务，只要一个任务完成就可以得到结果  
                    Promise.race([p1,p2,p3]).then((result)=>{
                        console.log(result);
                    })
        (7)fetch用法
            |--基本用法
                fetch("http://localhost:3000/data").then(data=>{
                    //text()方法属于fetchAPI的一部分，它返回一个Promise实例对象，用于获取后台返回的数据                    
                    return data.text();//返回的是一个对象
                }).then(ret=>{
                    //ret是获取的真实的数据
                    console.log(ret)
                })
            |--常用配置选项
                |--method(String):http请求方式，默认为GET
                |--以下是put、post必须设置的
                    |--body(String):http的请求参数
                    |--headers(Object):http的请求头，默认为{}
            |--请求参数
                |--get/delete
                fetch("http://localhost:3000/data/123",{
                    method:"get"//method:"delete"
                }).then((data)=>{
                    return data.text();
                }).then(data=>{
                    console.log(data);
                });
                                |--post/put
                                    普通格式
                fetch("http://localhost:3000/data/123",{
                    method:"post"//method:"put"
                    body: "uname=lisi$pwd=123",
                    headers:{
                        "Content-Type":"application/x-www-form-urlcoded"
                    }
                }).then((data)=>{
                    return data.text();
                }).then(data=>{
                    console.log(data);
                });
                                    JSON格式
                fetch("http://localhost:3000/data/123",{
                    method:"post"//method:"put"
                    body: JSON.stringify{
                        uname:"lisi",
                        pwd:123
                    },
                    headers:{
                        "Content-Type":"application/json"
                    }
                }).then((data)=>{
                    return data.text();
                }).then(data=>{
                    console.log(data);
                });
            |--fetch获取的数据格式
                text():返回体处理成字符串类型
                json格式
                fetch("http://localhost:3000/data/123").then(
                    (data)=>{
                        return data.json();
                        //return data.text() 使用时对应下面JSON.parse(data)
                    }
                }).then(data=>{
                    console.log(data.uname);
                    //var obj = JSON.parse(data)
                    //console.log(obj.uname)

                });
(8)axios接口调用
    |--基本用法
        axios.get("http://localhost:3000/data").then(
            ret=>{
                console.log(ret.data);//data属性名称是固定的，用于获取后台响应的数据
            }
        )
    |--参数传递
        |--get/delete
        // 通过url进行传递参数
        axios.get("http://localhost:3000/data?id=123").then(
            ret=>{
                console.log(ret.data);
            }
        )
        
        axios.get("http://localhost:3000/data/123").then(
            ret => {
                console.log(ret.data);
            }
        )
        
        // 通过params选项传递参数
        axios.get("http://localhost:3000/data",{
             params:{
                 id:123
             }
        }).then(
            ret => {
                console.log(ret.data);
            }
        )

        |--post请求参数处理
        // 通过post请求
        axios.post("http://localhost:3000/data",{
            uname:"lisi",
            pwd:123
        }).then(ret=>{
            console.log(ret.data);
            
        });

        var params = new URLSearchParams();
        params.append("uname","lidi");
        params.append("pwd","123");
        axios.post("http://localhost:3000/data",params).then(
            ret=>{
                console.log(ret.data);
                
            }
        );

        |--put参数处理
        axios.post("http://localhost:3000/data/123",{
            uname:"lisi",
            pwd:123
        }).then(ret=>{
            console.log(ret.data);
            
        }); 
    |--拦截器
        // 请求拦截器：在请求发出之前设置一些信息
        axios.interceptors.request.use(
            config=>{
                console.log(config.url);//获取url信息
                config.headers.mytoken = "nihao";//设置头部的token值
                return config;
                
            },
            err=>{
                console.log(err);
                
            }
        );
        // 响应拦截器：在获取响应数据之前对数据进行加工处理
        axios.interceptors.response.use(
            res=>{//res是一个对象
                console.log(res.data);//打印响应数据
                var data= res.data;
                return data; //返回响应数据
            },
            err=>{
                console.log(err);//处理错误信息
                
            }
        )

        axios.get("http://localhost:3000/data").then(
            data=>{
                console.log(data);    
            }
        ) 
(9)接口调用async和await用法
    |--async/await是es7引入的新语法，可以更加方便的进行一步操作
    |--async关键字用于函数上(async函数的返回值是promise实例对象)
    |--await关键字用于async函数当中(await可以得到异步结果)
    axios.defaults.baseURL = "http://localhost:3000";//设置默认url路径

    async function queryData(){
        var ret = await axios.get("/data");//设置接口
        return ret.data;
    };

    queryData().then(data=>{
        console.log(data);
        
    });

    //多个异步函数处理
    async function queryData(){
        var info = await axios.get("data");//设置接口
        var ret = await axios.get("data2?info=" + info.data);
        return ret.data;
    };

2020.03.21 模块化、工程化
    1、模块化：
        (1)定义：就是把单独的一个功能封装到一个模块中，模块之间相互隔离，但是可以通过特定的接口公开内部成员，也可以依赖别的模块。
        (2)好处：方便代码的重用，从而提高开发效率，并且方柏霓后期维护。
    2、被舍弃的模块化规范：
        (1)浏览器模块化规范
            AMD require.js 舍弃
            CMD sea.js 舍弃
        (2)服务器端 commonJS
            模块分为单文件模块和包
            模块成员导出：module.exports和exports
            模块成员导入：require("模块标识符")
    3、大一统模块化规范-es6
        (1)定义
            每个js文件都是独立的模块
            导入模块成员使用import关键字
            导出模块成员使用export关键字
        (2)流程
            |-- npm install --save-dev @babel/core @babel/cli @babel/preset-env  @babel/node
            |-- npm install --save @babel/polyfill
            |-- 在项目根目录下创建文件abel.config.js
                const presets = [
                    ['@babel/env',{
                        targets:{
                            edge:"17",
                            firefox:"60",
                            chrome:"67",
                            safari:"11.1"
                        }
                    }]
                ]

                module.exports = {presets};
            |-- 通过npx babel-node index.js 执行文件
(3)语法导入和导出
默认导出语法：export default 默认导出的成员
默认导入语法：import 接收名称 form "模块标识符"
注意：每个模块中，只允许使用唯一一次export default，否则会报错。
(4)按需导出和按需导入
按需导出：export let aa =10;
按需导入：import {aa} from "./chance.js"
注意：每个模块中，可以多次使用按需导出
(5)直接导入并执行模块代码
有时候指向单纯执行某个模块的代码，并不想得到模块中向外暴露的成员，可以使用直接导入并执行模块

//loop.js
for(let i =0; i <3;i++){
    console.log(i);
    
}

//index.js
import "./loop.js"

4、webpack打包
    (1)概述
        webpack是一个流行的前端项目构建工具(打包工具),提供了有好的模块化支持，以及代码压缩混淆、处理js兼容性问题、性能优化等强大的功能，从而让程序员把工作重心放在具体功能实现，高开发效率和项目的可维护性。
    (2)流程
        |--创建项目目录 npm init -y
        |--新建src源代码目录
        |--新建src->index.html文件
        |--初始化首页基本结构
        |--运行 npm install jquery -S 安装jquery
    (3)在项目中安装和配置webpack
        |--运行npm install webpack webpack-cli -D 命令，安装webpack相关的包
        |--在项目根目录下，创建 webpack.config.js 配置文件
        |--在webpack.config.js文件中，初始化以下配置
module.exports = {
    mode:"development"  //mode用来指定开发模式development projection
}
        |--在package.json中设置
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack"
}
        |--在终端中运行npm run dev，进行打包
(4)配置打包的入口和出口
    |--默认
        打包入口 src->index.js
        打包出口 dist->main.js
    |--修改 webpack.config.js
        module.exports = {
            // 编译模式
            mode:"development",//development production
            entry:path.join(__dirname,"./src/index.js"),//入口文件,绝对路径
            output:{
                path:path.join(__dirname,"./dist"),//出口文件，绝对路径
                filename:"bundle.js"//输出文件名称
            }
        }

(5)配置webpack自动打包功能
    |--npm install webpack-dev-server -D，安装支持自动打包的工具
    |--修改package.json -> scripts中的dev
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "webpack-dev-server"
        },
    |--将src->index.html 中，引用路径改为/buldle.js
    |--运行npm run dev 重新打包
    |--使用localhost:8080/src/进行查看自动打包效果


    注意：webpack-dev-server会启动一个实时打包的http服务器
        webpack-dev-server会打包生成的输出文件，默认房子啊项目根目录下
(6)配置html-webpack-plugin生成预览页面
    |--运行 npm install html-webpack-plugin -D，生成预览页面
    |--修改webpack.config.js 文件头部区域，添加
        // 导入生成预览页面的插件，得到一个构造函数
        const HtmlWebpackPlugin =  require("html-webpack-plugin");
        const htmlPlugin = new HtmlWebpackPlugin({//创建插件的实例对象
            template:"./src/index.html",//指定要用到的模板文件
            filename:"index.html"//指定生成的文件名称，该文件存在于内存中，在目录中不显示


        })
    |--修改webpack.config.js 文件中向量暴露的配置对象，新增如下配置节点
        plugins:[htmlPlugin]//plugins数组是打包期间会用到一些插件列表
(7)配置自动打包的相关参数
    --open 打包完成后自动打开浏览器页面
    --host 配置ip地址
    --port 配置端口号
        "dev": "webpack-dev-server --open --host 127.0.0.1 --port 3000"
(8)通过loader打包非js文件
    在实际开发中，webpack默认只能打包处理以js后缀结尾的模块
    打包处理css文件
        运行 npm i style-loader css-loader -D
        在webpack.config.js的module->rules数组，添加规则
        module:{
            rules: [
                //test：要匹配的文件类型 use：对应要调用的loader
                { test: /\.css$/, use: ['style-loader', 'css-loder'] }
            ]
        }
    打包处理less文件
        npm install less-loader less -D
        { test: /\.less$/, use: ['style-loader', 'css-loader', "less-loader"] }
    打包处理scss文件
(9)配置postCSS自动添加css前缀
    npm i postcss-loader autoprefixer -D
    在根目录下创建postcss.config.js文件
        const autoprofixer = require("autoprefixer");//导入自动添加前缀的插件
        module.exports = {
            plugins:[autoprofixer]//挂载插件
        }
    在webpack.config.js的module->rules数组中，修改css的loader规则
    module:{
        rules:[
            { test: /\.css$/, use: ['style-loader', 'css-loader',"postcss-loader"] }
        ]
    }
(10)打包样式表中的图片和字体文件
    npm i url-loader file-loader -D
    module->rules
        {test:/\.jpg|png|gif$/,use:"url-loader?limit=45066"}
    ?后面的loader的参数 limit用来指定图片大小，单位byte 只有小于limit的图片才会转为base64图片
(11)打包处理js文件中的高级语法
    安装babel转换器相关的包 npm i babel-loader @babel/core @babel/runtime -D
    安装babel语法插件相关包 npm i @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
    在项目根目录下，创建label.config.js并初始化基本配置
    module.exports = {
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties"]
    }
    在webpack.config.js目录下，module->rules
        //exclude是排除项，表示不用处理了/node_modules/下的js文件
        { test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            
2020年3月22日 vue单文件组件
    单文件组件的组成结构
    template 组件的模板区域
    script 业务逻辑区域
    style 样式区域
    npm i vue-loader vue-template-compiler -D
    { test: /\.vue$/,use:"vue-loader"}

    const VueLoaderPlugin = require("vue-loader/lib/plugin");
    plugins:[
        htmlPlugin,
        new VueLoaderPlugin()//
    ],//plugins数组是打包期间会用到一些插件列表

    npm i vue -S
    在index.js文件中设置
        import Vue from "vue"//导入vue安装包
        // 导入单文件组件
        import App from "./components/App.vue"

        const vm = new Vue({
            // 指定vm实例要控制的页面区域
            el:"#app",
            // 通过render函数，把指定组件渲染到el区域中
            render:h=>h(App)
        })
    
    在package.json文件中设置
        "build":"webpack -p"
        npm run build


Vue脚手架
    (1)vue脚手架：
        用于快速生成Vue项目基础架构，官网网址： https://cli.vuejs.org/zh/
    (2)安装：
        npm install -g @vue/cli
    (3)脚手架用法：必选项：Babel Router Linter/Formatter 使用配置文件
        |-- 基于交互式命令行，创建新版vue项目
            vue create projectName 
        |-- 基于图形化界面的方式，创建新版vue项目
            vue ui
        |-- 基于2.x版本的旧模式，创建旧版vue项目
            npm install -g @vue/cli-lint
            vue init webpack projectName
        npm run serve 进行运行项目
    (4)脚手架的自定义配置
        |-- 不建议使用 package.json
            "vue":{
                "devServer":{
                "port":3000,
                "open":true
                }
            }
        |-- 推荐使用 在根目录下创建vue.config.js
            module.exports = { 
                "devServer":{
                "port":3000,
                "open":true
                }
            }

Element-UI使用
    1.基于命令手动安装
        (1)npm i element-ui -S
        (2)手动配置element-ui
            import ElementUI from "element-ui";
            import "element-ui/lib/theme-chalk/index.css";
            Vue.use(ElementUI)
    2.以上的都是垃圾玩意，这才是王道
        vue create my-app
        cd my-app
        vue add element

        vue.config.js下配置端口号和自动打开页面
        module.exports = { 
                "devServer":{
                "port":3000,
                "open":true
                },
                lintOnSave: false//用于关闭烦人的eslint的方法
            }
        npm install less
        npm install less-loader
    
        npm add babel-plugin-component  --only=dev

项目：
    1.初始化
        vue create my-app
        cd my-app
        vue add element
        npm install axios
    

git使用
    (1)初次使用
        echo "# heima" >> README.md
        git init
        git add README.md // 文件夹已有内容 git add ./
        git commit -m "first commit"
        git remote add origin git@github.com:codepanda1995/heima.git
        git push -u origin master
    (2)再次使用
        git remote add origin git@github.com:codepanda1995/heima.git
        git push -u origin master

user.name=liujiangchuan
user.email=liujiangchuan1995@163.com
credential.helper=store

git status
git add ./
git status
git commit -m "完成了登录页面"
git branch
git merge login
git push
git checkout login
git branch
git push -u origin login

git checkout -b users创建新分支

git push -u origin master
git merge users
git push

 创建新分支
git checkout -b rights
将分支推送到Github
git push -u origin rights





3.切换到主分支；

git checkout master

4.把分支的代码merge到主分支；

git merge hellomonkey

5.git push推上去ok完成,现在 你自己分支的代码就合并到主分支上了。

git push


npm i vue-table-with-tree-grid -S

<!-- 富文本组件 -->
npm vue-quill-editor
npm install vue-quill-editor
<!-- 深拷贝工具 -->
lodash

<!-- 安装echarts -->
npm i echarts

<!-- 安装进度条 -->
npm install nprogress

<!-- 将代码中console.log相关代码 -->
npm install babel-plugin-transform-remove-console --save-dev

<!-- 按需移除console -->
// 这是项目发布阶段需要使用的label插件
const proPlugins = []
if(process.env.NODE_ENV === "production"){
  proPlugins.push("ransform-remove-console")
}

  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    // 发布产品时的插件数组
    ...proPlugins
  ]
}
<!-- 查看报表 -->

npm install vue-cli-service build --report
<!-- 自定义打包入口 -->
 chainWebpack: config => {
    // 产品发布
    config.when(process.env.NODE_ENV === "production",config=>{
      config.entry("app").clear().add("./src/main-prod.js")
    })
    // 产品开发
    config.when(process.env.NODE_ENV === "development", config => {
      config.entry("app").clear().add("./src/main-dev.js")
    })
  }

  <!-- 路由懒加载 -->
  <!-- 安装 -->
  npm install @babel/plugin-syntax-dynamic-import
  <!-- 声明 -->
plugins:["@babel/plugin-syntax-dynamic-import"]
  <!-- 使用 -->
  // import Report from "./components/report/Report.vue"


  day26 Vuex

vue组件之间的共享数据方式
    (1)父向子传值：v-bind属性绑定
    (2)子向父传值：v-on事件绑定
    (3)兄弟组件之间共享数据：EventBus
        |--$on 接收数据的那个组件
        |--$emit 发送数据的那个组件

VueX是实现组件全局状态管理的一种机制，可以方便的实现组件之间数据的共享。
一般情况下，只有组件之间共享的数据，才有必要存储在vuex中；对于组件的私有数据，已久存储在组件自身的data中即可。

使用vuex统一管理状态的好处
    (1)能够在vuex中集中管理共享的数据，易于开发和后期维护
    (2)能够高效地实现组件之间的数据共享，提交开发效率
    (3)存储在vuex中的数据都是响应式的，能够实时保持数据页面的同步


vue ui 创建vuex项目
    vue ui
    手动配置项目
    勾选Babel、Vuex、Linter/Formatter、使用配置文件
    勾选ESLint+Standard config

公共组件数据存储，所有共享的数据都要统一地放到Store的State中进行存储。



Mutation

this.$store.commit()是触发mutations的第一种方式
store.js
mutations: {
add(state) {
    state.count++
},
addN(state,step) {
    state.count += step
},
},

addition.vue
methods:{
    btnAddNum(){
        this.$store.commit("add")
    },
    // 这是触发mutation的第一种方式
    btnAddNumN(){
        // commit的作用就是调用某个mutation函数
        this.$store.commit("addN",3)
    }
}

只有mutations中才能够去操作state中的数据

触发mutations的第一种方式
// 从Vuex中按需导入mapMutations函数
import {mapMutations} from "vuex"
// 使用mutations
methods:{
    // 将指定的mutation函数，映射到当前组件的Methods函数
    ...mapMutations(["sub","subN"]),
    btnSubNum(){
    this.sub()
    },
    btnSubNumN(){
    this.subN(3)
    }
    
}

注意：mutations中不能使用异步函数
actions中可以用来建立异步函数

store.js
// 可以用来存储异步函数
actions: {
addAsync(context){
    setTimeout(()=>{
    // 在actions中，不能直接修改state中的数据
    // 必须通过 context.commit()进行触发某个mumation才行
    context.commit('add')
    },1000)
}
},

add.js

触发actions的第一种方式
 // 异步地让count自增+1
btnAddNumAuto(){
    // 这里的dispatch函数，专门用来触发action
    this.$store.dispatch("addAsync");
}

触发actions的第二种方式
// 从vuex中按需导入mapActions函数
import {mapActions} from "vuex"
// 
...mapActions(["subAsync"]),

<button @click="btnAddNumAuto">Auto+1</button>



Getter

Getter用于对Store中的数据进行加工处理后形成新的数据
    Getter可以对Store中已有的数据加工处理后形成新的数据，类似于Vue的计算属性
    Store中数据发生变化，Getter的数据也会发生变化


安装库文件
ant-design-vue