<template>
	<div id="banner">
			<ul>
				<router-link tag="li" to="/News">新闻</router-link>
				<router-link tag="li" to="/Finan">财经</router-link>
				<router-link tag="li" to="/Gam">体育</router-link>
				<router-link tag="li" to="/Wan">娱乐</router-link>
				<router-link tag="li" to="/Junshi">军事</router-link>
				<router-link tag="li" to="/Mp4">视频</router-link>
				<router-link tag="li" to="/Blog">博客</router-link>
				<router-link tag="li" to="/Keji">科技</router-link>
				<router-link tag="li" to="/Nba">NBA</router-link>
				<router-link tag="li" to="/Car">汽车</router-link>
				<router-link tag="li" to="/House">房产</router-link>
				<li class="banner_more" @click="bannerMore">{{moreName}}</li>
			</ul>
			<ul v-show="showMore">
				<li>股票</li>
				<li>教育</li>
				<li>图片</li>
				<li>星座</li>
				<li>女性</li>
				<li>历史</li>
				<li>健康</li>
				<li>时尚</li>
				<li>小说</li>
				<li>游戏</li>
				<li>直播</li>
				<li @click="bannerLess"><img src="../assets/img/shang.png"></li>
			</ul>
			
		</div>
</template>
<script>
	export default{
		data(){
			return{
				showMore:false,
				moreName:'更多'
			}
		},
		methods:{
			bannerMore(){
				this.showMore=true,
				this.moreName="微博"
			},
			bannerLess(){
				this.showMore=false,
				this.moreName="更多"
			}
		}
	}
</script>
<style>
	@import '../assets/css/Banner.css' 
</style>