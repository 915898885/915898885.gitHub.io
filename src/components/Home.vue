<template>
	<div>
	<!-- header -->
		<div id="header">
			<div class="icon"><img src="../assets/img/icon.png" ></div>
			<div class="edition">
				<a href="#" :class={active:isActive1} @click="active1">{{slowly}}</a>
				<a href="#" :class={active:isActive2} @click="active2">{{quickly}}</a>
			</div>
			<div class="mine">
				<li><img src="../assets/img/season.png"></li>
				<router-link tag="li" to="/login">
					<img src="../assets/img/mine.png">
				</router-link>
				<router-link tag="li" to="/menu">
					<img src="../assets/img/more.png">
				</router-link>
			</div>
		</div>
		<!-- banner -->
		<BannerView></BannerView>
		<!-- slider -->
		<lunboView></lunboView>
		<!-- content -->
		<div id="content">
		<ul>
			<div class="sub1">
				<div class="left1"></div>
				<strong>今日要闻</strong>
			</div>
			<li v-for="item1 in arrList" class="content_li">
				<dt>
					<img :src="item1.img" v-show="xianshi">
					<dd>{{item1.title}}
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png" />
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="more">
				展开更多
			</li>
		</ul>
		<!-- 猜你喜欢 -->
		<ul>
			<div class="sub1">
				<div class="left1"></div>
				<strong>猜你喜欢</strong>
			</div>
			<li v-for="item in arrList" class="content_li">
				<dt>
					<img :src="item.img" v-show="xianshi">
					<dd>{{item.title}}
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png" />
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="more">
				展开更多	
			</li>
		</ul>
		</div>
	</div>
	</div>
</template>
<script>
	import BannerView from './Banner.vue'
	import lunboView from './lunbo.vue'
	export default{
		components:{
			BannerView,
			lunboView
		},
		data(){
			return{
				slowly:'触摸版',
				quickly:'极速版',
				isActive1:true,
				isActive2:false,
				xianshi:true,
				arrList:[],
				arrList1:[]
			}
		},
		mounted(){
			// this.slider();
			this.fetchData();
			// console.log(typeof(this.arrList['img']));
			this.fetchData1();
		},
		methods:{
			active1(){
				this.isActive1=true,
				this.isActive2=false,
				this.xianshi=true
			},
			active2(){
				this.isActive1=false,
				this.isActive2=true,
				this.xianshi=false
			},
			fetchData(){
				var _this=this;
				this.$http.get('./src/data/home.data').then(function(res){
					_this.arrList=res.data;
					
				}).catch(function(err){
					console.log(err);
				})
			},
			fetchData1(){
				var _this=this;
				this.$http.get('./src/data/home1.data').then(function(res){
					_this.arrList1=res.data;
					
				}).catch(function(err){
					console.log(err);
				})
			}
		},
	}
</script>
<style>
	@import '../assets/css/Home.css'
</style>