<template>
	<div id="login">
		<div class="head">
			<router-link tag="a" to='/home'>
				<img src="../assets/images/last.png">
			</router-link>
		</div>
		<div class="headpro">
			<img src="../assets/img/login.png">
		</div>
		<div class="messages">
			<form>
				<input type="text" class="put" placeholder="用户名/手机/邮箱"><br>
				<input type="text" class="put" placeholder="密码"><br>
				<input type="button" class="btn" value="登 录">
			</form>
		</div>
		<div class="teng">
			<img src="../assets/images/qq.jpg">
			<span>QQ账号登录</span>
		</div>
		<div class="other">
			<div class="oleft">换个账号</div>
			<div class="oright">忘记密码</div>
		</div>
		<div class="regist">
			<div><span>还没有账号？</span><span class="regists">立即注册</span></div>
		</div>	
	</div>
</template>
<style>
	@import '../assets/css/Login.css'
</style>