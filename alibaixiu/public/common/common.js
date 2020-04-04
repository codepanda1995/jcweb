// 退出登录
$("#logout").on("click", () => {
    var isConfirm = confirm("您真的要退出吗");
    if (isConfirm) {
        // 用户点击退出
        $.ajax({
            type: "post",
            url: "/logout",
            success: () => {
                location.href = "login.html";
            },
            error: () => {
                alert("退出失败");
            }
        })
    }
});

// 向服务器端发送请求，索要登录信息
$.ajax({
    type:"get",
    url:"/users/" + userId,
    success:(response)=>{
        console.log(response);
        //
        $(".avatar").attr("src",response.avatar);
        $(".profile .name").html(response.nickName);
    }
})