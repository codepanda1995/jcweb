React/Vue

        登陆拦截：
        <!-- 导入login文件中登录状态 -->
        <script src="/login/status"></script>
        <script>
        // 如果未进行登录，则跳转到登录页面
        if (!isLogin) location.href = 'login.html';
        </script>