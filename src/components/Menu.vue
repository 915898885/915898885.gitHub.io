<template>
	<div id="menu">
		<div class="menu">
			<router-link tag="a" to="/home"><img src="../assets/images/last_white.png"></router-link>
			<span>菜单</span>
		</div>
		<div class="chioce">
			<div :class={active:isActive1} @click="highlight1">{{topLeft}}</div>
			<div :class={active:isActive2} @click="highlight2">{{topRight}}</div>
		</div>
		<SetOne v-show="SetOneShow"></SetOne>
		<SetTwo v-show="SetTwoShow"></SetTwo>
	</div>
</template>
<script>
	import SetOne from './SetOne.vue'
	import SetTwo from './SetTwo.vue'
	export default{
		components:{
			SetOne,
			SetTwo
		},
		data(){
			return{
				imgChange:true,
				topLeft:'设置首页',
				topRight:'导航',
				isActive1:true,
				isActive2:false,
				SetOneShow:true,
				SetTwoShow:false
			}
		},
		methods:{
			highlight1(){
				this.isActive1=true,
				this.isActive2=false,
				this.SetOneShow=true,
				this.SetTwoShow=false
			},
			highlight2(){
				this.isActive1=false,
				this.isActive2=true
				this.SetOneShow=false,
				this.SetTwoShow=true
			}
		}
	}
</script>
<style>
	@import '../assets/css/Menu.css'
</style>