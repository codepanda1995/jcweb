// 向服务器端发送请求，获取评论列表数据
$.ajax({
    type:"get",
    url:"/comments",

    success:(response)=>{
        console.log(response);
        var html = template("commentTpl",response);
        $("#commentBox").html(html);
        var page = template("pageTpl",response);
        $("#pageBox").html(page);
    }
});

// 实现分页
function changePage(page){
    $.ajax({
        type:"get",
        url:"/comments",
        data:{page:page},
        success:(response)=>{
            console.log(response);
            var html = template("commentTpl", response);
            $("#commentBox").html(html);
            var page = template("pageTpl", response);
            $("#pageBox").html(page);
        }
    })
};

// 处理日期时间格式
function formateDate(date) {
    // 将日期时间字符串转换成日期对象
    date = new Date(date);
    return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
};

// 当审核按钮被点击的时候
$("#commentBox").on("click",".state",function(){
    // 获取当前评论的状态
    var state = $(this).attr("data-state");
    // 向服务器端发送请求，更改评论状态
    var id = $(this).attr("data-id");
    $.ajax({
        type:"put",
        url:"/comments/" + id,
        data:{
            state: state == 0 ? 1 : 0
        },
        success:()=>{
            location.reload();
        }
    })
});

// 当删除按钮被点击时
$("#commentBox").on("click", ".delete", function () {
    // 弹出删除确认框 和管理员确定是否真的要进行删除操作
    if (confirm("宁真的要进行删除操作吗?")) {
        // 获取到管理员要删除的文章id
        var id = $(this).attr("data-id");
        // 向服务器端发送请求 执行删除操作
        $.ajax({
            type: "delete",
            url: "/comments/" + id,
            success: () => {
                location.reload();
            }
        })
    }
});

// 
