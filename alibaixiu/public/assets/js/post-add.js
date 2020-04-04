// 向服务器端请求文章分类数据
$.ajax({
    url:"/categories",
    type:"get",
    success:(response)=>{

        // 将数据拼接到模板中
        var html = template("categoryTpl",{data:response});
        // 将数据渲染到网页
        $("#category").html(html);
    }
})

// 当点击文件上传按钮时触发事件
$('#feature').on("change",function(){
    // 获取OA管理员选择到的文件
    var file = this.files[0];
    // 创建formData对象 实现二进制文件上传
    var formData = new FormData();
    // 将管理员选择到的文件追加到formData对象中
    formData.append("cover",file);
    //实现文章封面上传
    $.ajax({
        type:"post",
        url:"/upload",
        data:formData,
        // 告诉ajax不要处理data属性对应的参数
        processData:false,
        // 告诉ajax不要设置参数类型
        contentType:false,
        success:(response)=>{
            $("#thumbnail").val(response[0].cover);
        }
    })
});

// 当添加文章表单提交时
$("#addForm").on("submit",function(){
    // 获取管理员在表单中的输入内容
    var formData = $(this).serialize();
    
    // 向服务器端发送请求 实现文章添加功能
    $.ajax({
        type:"post",
        url:"/posts",
        data:formData,
        success:()=>{
            // 文章添加成功，跳转到文章列表页面
            location.href = "/admin/posts.html"
        }
    })
    // 阻止表单默认提交事件
    return false;
});

// 获取浏览器地址栏中的is参数
var id = getUrlParams("id");
// 当前管理员是在做修改文章操作
if(id != -1){
    // 根据id获取文章的详细信息
    $.ajax({
        type:"get",
        url:"/posts/" +id,
        success:(response)=>{
            // 向服务器端请求文章分类数据
            $.ajax({
                url: "/categories",
                type: "get",
                success: (categories) => {
                    response.categories = categories;
                    console.log(response);
                    var html = template("modifyTpl", response);
                    $("#modifyBox").html(html);
                }
            })
           
        }
    })
}

// 从浏览器的地址栏中获取查询参数
function getUrlParams(name){
    // 将地址栏参数进行分割存储到数组中
    var paramsAry = location.search.substr(1).split("&");
    // 循环数据
    for(var i = 0; i < paramsAry.length; i++){
        var temp = paramsAry[i].split("=");
        if(temp[0] == name){
          
            return temp[1];
        }
    }
    // 找不到数据时
    return -1;

};

// 当修改文章信息表单发生提交行为时
$("#modifyBox").on("submit","#modifyForm",function(){
    // 获取管理员在表单中输入的内容
    var formData = $(this).serialize();
    // 获取管理员正在修改的文章id值
    var id = $(this).attr("data-id");
    $.ajax({
        type:"put",
        url:"/posts/"+id,
        data:formData,
        success:()=>{
            location.href = "/admin/posts.html";
        }
    })
    // 阻止表单默认提交事件
    return false;
});