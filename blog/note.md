
1.项目结构
    (1)建立项目所需文件夹
        public 静态资源
        model 数据库操作
        route 路由
        views 模板
    (2)初始化项目描述文件
        npm init -y
    (3)下载项目所需第三方模块
        npm install express mongoose art-template express-art-template
    (4)创建网站服务器
        //引入express框架
        const express = require("express");
        //建立服务器
        const app = express();
        //监听端口
        app.listen(80);
        console.log("服务器正在运行中...");
    (5)将所有admin和home下的art文件中头部和侧边栏进行替换，提取公共部分
2.项目功能的实现
    (1)登录
        |--创建用户集合，初始化用户
            |--连接数据库
            |--创建用户集合
            |--初始化用户
        |--
            npm install body-parser
        |--根据邮箱地址查询用户信息
            |--用户不存在，则对客户端做出响应，阻止程序向下进行
            |--用户存在，将用户和密码进行比对
            |--比对成功，用户登录成功
            |--比对失败，用户登录失败
        |--密码加密bcrypt 哈希密码:只能加密不能解密
            |--依赖环境
                |--python 
                |--npm install -g node-gyp
                |--npm install --global --production windows-build-tools 需要使用管理员权限进行安装
    (2)cookie和session
        |--cookie:浏览器在电脑硬盘中开辟的一块空间，主要供服务器存储数据
            |--cookie中的数据是以域名的形式进行区分的
            |--cookie中的数据是有过期时间的，超过时间数据会被浏览器自动删除
            |--cookie中的数据会随着请求自动发送到服务器端

            客户端------->邮件地址、密码(验证请求参数)------->服务器端
                 <--存储在客户端的cookie中(生成sessionID)<--  

            客户端------->cookie----(获取cookie中的sessionid，验证身份)--->服务器端
                 <--响应只有用户登录后才能获取的数据<--      
        |--session：实际上就是一个对象，存储在服务器端的内存中，在session对象中也可以存储多条数据，每条数据都有一个sessionId作为唯一标识。
        |--cookie使用 npm install express-session
            |-- // 引入express-session模块
                const session = require("express-session");
                // 配置session
                app.use(session({ secret:"secret key"}));
    (3)新增用户
        |--为用户列表页面的新增用户按钮添加链接
        |--添加一个链接对应的路由，在路由处理函数中渲染新增用户模板
        |--为新增用户表单指定请求地址、请求方式、为表单添加name属性
        |--增加实现新用户的功能路由
        |--接收到客户端传递过来的请求参数
        |--对请求参数的格式进行验证
        |--验证当前要注册的邮箱地址是否已经注册过
        |--对密码进行加密处理
        |--将用户信息添加到数据库中
        |--重定向页面到用户列表页面

    (2)用户信息修改
        |--将要修改的用户ID传递到服务器
        |--建立用户信息修改对应的路由
        |--接收客户端表单传递过来的请求参数
        |--根据id查询用户信息，并将客户端传递过来的密码和数据库进行比对
            |--如果比对失败，对客户端做出响应
            |--如果比对成功，将用户信息更新到数据库中
    (3)用户信息删除
        |--在确认删除框中添加隐藏域用来存储要删除用户的id值
        |--为删除按钮添加自定义属性用以存储要删除用户的is值
        |--为删除按钮添加点击事件，在点击事件处理函数中获取自定义属性中存储的id值并将id值存储在表单的隐藏域中
        |--为删除表单添加地址和提交方式
        |--在服务器建立删除功能路由
        |--接收客户端传递过来的id参数
        |--根据id删除用户
3、文章管理
    (1)formidable
        |--作用：用于解析表单，支持get请求参数，post请求参数，文件上传
            npm install formidable
        |--使用：
            //创建表单解析对象
            const form = new formidable.IncomingForm();
            // 配置上传文件的存放位置
            form.uploadDir = path.join(__dirname,"../","../","public","uploads");
                                                                                                                                                     // 保留上传文件的后缀
            form.keepExtensions = true;
            // 解析表单
            form.parse(req,(err,fields,files)=>{
                // err：错误对象，如果表单解析失败，err里面存储错误信息，如果表单解析成功，err将不会打印
                // fields：对象类型，保存普通表单数据
                // files：对象类型，保存了和上传文件相关的数据
                res.send(files);
            })
    (2)数据分页
        npm install mongoose-sex-page
        使用
        let articles = await pagination(Article).find().page(page).size(2).display(3).populate("author").exec();
        // page 指定当前页
        // size 指定每页显示的数据条数
        // display 指定客户端要显示的页码数量
        // exec 向数据库中发送查询请求
4、开发环境和生产环境
    (1)在电脑系统环境中设置NODE_ENV=development开发环境或者项目环境
    (2)

    (3)morgan模块 获取请求信息
        |--安装 npm install morgan
        |--使用 app.use(morgan("dev"));
        |--打印 GET /admin/article?page=4 302 9.122 ms - 68
            |--GET：请求方式 
            |--/admin/article?page=4 请求路径
            |--304 HTTP状态码
            |--9.122ms 使用时间
    (4)config
        |--作用：将配置信息抽离到单独文件，模块检测当前运行环境，并读取相应排至信息。
        |--使用：
            |--使用npm install config命令下载模块
            |--在项目的根目录下新建config文件夹
            |--在config文件夹下新建defult.json development.json production.js文件
            |--在项目中通过require方法，将模块导入
            |--使用模块内部提供的get方法获取配置信息
        |--将敏感信息存储在环境变量中
            |--在config文件夹中建立custom-environment-variables.json文件
            |--配置项属性的值填写系统变量的名字
            |--在项目运行时config模块查找系统环境变量，并读取其值作为当前配置项属于的值
                |--custom-environment-variables.json
                    {
                        "db":{
                            "pwd":"APP_PASSWORD"
                        }
                    }