// 向服务器端发送请求,索要轮播图数据
$.ajax({
    type:"get",
    url:"/slides",
    success:(response)=>{
        console.log(response);
        var html = template("slidesTpl",{data:response});
        $("#slidesBox").html(html);
        // 后面部分内容需要在前面轮播图资源加载完毕之后再执行显示样式
        var swiper = Swipe(document.querySelector('.swipe'), {
            auto: 3000,
            transitionEnd: function (index) {
                // index++;

                $('.cursor span').eq(index).addClass('active').siblings('.active').removeClass('active');
            }
        });

        // 上/下一张
        $('.swipe .arrow').on('click', function () {
            var _this = $(this);

            if (_this.is('.prev')) {
                swiper.prev();
            } else if (_this.is('.next')) {
                swiper.next();
            }
        })
    }
});

// 向服务器端发送请求，索要最新发布数据
$.ajax({
    type:"get",
    url:"/posts/lasted",
    success:(response)=>{
        console.log(response);
        var html = template("lastedTpl",{data:response});
        $("#lastedBox").html(html);
    }
});

// 处理日期时间格式
function formateDate(date) {
    // 将日期时间字符串转换成日期对象
    date = new Date(date);
    return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
};

