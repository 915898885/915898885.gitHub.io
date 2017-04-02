<template>
	<div id="setOne">
		<div class="Set">
			<div class="noImg">
				<div class="fonts">无图模式</div>
				<div class="set1 active" @click="change1">
					<img :src="noImgClose" v-show="show1">
				</div>
			</div>
			<div class="inTell Hei">
				<div class="fonts">智能模式<h6>智能模式会根据您的阅读偏好自动展示首页内容</h6></div>
				<div class="set2 active" @click="change2">
					<img :src="noImgClose" v-show="show2">
				</div>
			</div>
			<div class="address Hei">
				<div class="fonts">当前城市 [河北秦皇岛]<h6>首页会根据您的选择展示地方新闻站</h6></div>
				<div class="set2">
					<img src="../assets/images/nowCity.png">
				</div>
			</div>
		</div>
		<div class="sub">
			保存
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				noImgClose:require('../assets/images/set_close.jpg'),
				show1:true,
				show2:true
			}
		},
		methods:{
			change1(){
				this.show1=!this.show1;
			},
			change2(){
				this.show2=!this.show2;
			}
		}
	}
</script>
<style>
	@import '../assets/css/SetOne.css'
</style>