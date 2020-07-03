// 从地址栏中获取文章id
var postId = getUrlParams("id");
// 评论是否已经开启
var review;

// 向服务器端发送请求，根据文章id获取文章信息
$.ajax({
    type:"get",
    url:"/posts/" + postId,
    success:(response)=>{
        console.log(response);
        var html = template("postTpl",response);
        $("#postBox").html(html);
    }
});


// 当点赞按钮发生事件触发时
$("#postBox").on("click","#like",function(){
    // 向服务器发送请求数据，执行点赞操作
    $.ajax({
        type:"post",
        url:"/posts/fabulous/" + postId,
        success:()=>{
            alert("点赞成功，感谢你的支持");
            location.reload();
        }
    })
});

// 获取网站的配置信息
$.ajax({
    type: 'get',
    url: '/settings',
    success: function (response) {
        console.log(response);
        
        review = response.review
        console.log(review);
        
        // 判断管理员是否开启的评论功能
        if (response.comment) {
            // 管理员开启了评论功能 渲染评论模板
            var html = template('commentTpl');
            // 渲染评论模板
            $('#comment').html(html);
        }
    }
});

// 当评论表单发生提交行为的时候
$('#comment').on('submit', 'form', function () {
    // 获取用户输入的评论内容
    var content = $(this).find('textarea').val();
    console.log(content);
    
    // 代表评论的状态
    var state;

    if (review) {
        // 要经过人工审核
        state = 0;
    } else {
        // 不需要经过人工审核
        state = 1;
    }

    // 向服务器端发送请求 执行添加评论操作
    $.ajax({
        type: 'post',
        url: '/comments',
        data: {
            content: content,
            post: postId,
            state: state
        },
        success: function () {
            alert('评论成功')
            location.reload();
        },
        error: function () {
            alert('评论失败')
        }
    })

    // 阻止表单默认提交行为
    return false;
})