// 向服务器端发送请求，获取文章列表数据
$.ajax({
    type:"get",
    url:"/posts",
    success:(response)=>{
        console.log(response);
        var html = template("postsTpl",{data:response});

        $("#postsBox").html(html);
        // 页码
        var page = template("pageTpl",{data:response});
        $("#pageBox").html(page);
    }
});

// 数据分页
function changePage(page){
    // 向服务器端发送请求，获取文章列表数据
    $.ajax({
        type: "get",
        url: "/posts",
        data:{
            page:page
        },
        success: (response) => {
            console.log(response);
            var html = template("postsTpl", response);

            $("#postsBox").html(html);
            // 页码
            var page = template("pageTpl", response);
            $("#pageBox").html(page);
        }
    });
}

// 处理日期时间格式
function formateDate(date){
    // 将日期时间字符串转换成日期对象
    date = new Date(date);
    return date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日";
};

// 向服务器端发送请求，索要分类数据
$.ajax({
    type:"get",
    url:"/categories",
    success:(response)=>{
        console.log(response);
        var html = template("categoryTpl",{data:response});
        $("#categoryBox").html(html);
    }
});

// 当用户进行文章列表筛选的时候
$("#filterForm").on("submit",function(){
    // 获取管理员选择的过滤条件
    var formData = $(this).serialize();
    // 向服务器端发送请求，根据条件索要文章列表数据
    $.ajax({
        type: "get",
        url: "/posts",
        data: formData,
        success: (response) => {
            console.log(response);
            var html = template("postsTpl", response);

            $("#postsBox").html(html);
            // 页码
            var page = template("pageTpl", response);
            console.log(page);
            $("#pageBox").html(page);
        }
    });
    //阻止表单默认提交事件
    return false;
});

// 当删除按钮被点击时
$("#postsBox").on("click",".delete",function(){
    // 获取到管理员要删除的文章id
    var id = $(this).attr("data-id");
    // 弹出删除确认框 和管理员确定是否真的要进行删除操作
    if(confirm("宁真的要进行删除操作吗?")){
        
        // 向服务器端发送请求 执行删除操作
        $.ajax({
            type:"delete",
            url:"/posts/" + id,
            success:()=>{
                location.reload();
            }
        })
    }
})