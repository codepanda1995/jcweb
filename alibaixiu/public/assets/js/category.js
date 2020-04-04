// 当添加分类表单发生提交行为时
$("#addCategory").on("submit",function(){
    // 获取用户在表单中输入的内容
    var formData = $(this).serialize();
    // 向服务器端发送请求 添加分类
    $.ajax({
        type:"post",
        url:"/categories",
        data:formData,
        success:()=>{
            // 重新加载页面
            location.reload();
        }
    });
    // 阻止表单默认提交行为
    return false;
});

// 发送ajax请求向服务器所有的分类列表数据
$.ajax({
    type:"get",
    url:"/categories",
    success:(response)=>{
        // 将服务器端返回的数据和html模板进行拼接
        var html = template("categoryListTpl",{
            data:response
        });
        // 将拼接好的数据进行渲染
        $("#categoryBox").html(html);
    }
})

// 为编辑按钮添加点击事件 事件委托
$("#categoryBox").on("click",".edit", function(){
    // 获取要修改的分类里数据的id
    var id = $(this).attr("data-id");
    // 根据id获取分类数据的详细信息
    $.ajax({
        type:"get",
        url:"/categories/" + id,
        success:(response)=>{
            console.log(response);
            // 将获取的分类数据进行拼接
            var html = template("modifyCategoryTpl",response);
            // 将html拼接到网页上
            $("#formBox").html(html);
        }
    })
});

// 当修改分类数据表单发生提交行为的时候
$("#formBox").on("submit","#modifyCategory",function(){
    // 获取管理员在表单中输入的内容
    var formData = $(this).serialize();
    // 获取要修改的分类id
    var id = $(this).attr("data-id");
    // 发送请求 修改分类数据
    $.ajax({
        type:"put",
        url:"/categories/" + id,
        data: formData,
        success:(response)=>{
            // 刷新当前页面
            location.reload();
        }
    })
    // 阻止表单默认提交行为
    return false;
});

// 当点击删除按钮时
$("#categoryBox").on("click",".delete",function(){
    
    // 判断是否确定删除
    if(confirm("您真的要执行删除操作吗？")){
        // 获取要进行删除的数据id
        var id = $(this).attr("data-id");
        // 发送ajax数据请求 删除数据
        $.ajax({
            type:"delete",
            url:"/categories/" + id,
            success:()=>{
                // 数据删除后进行页面刷新
                location.reload();
            }
        })
    }
});