<template>
	<div>
	<!-- header -->
		<div id="News">
			<router-link class="icon" to='/home'><img src="../assets/images/lastHome.png" height="32" width="32" ></router-link>
			<div class="edition">
				<p>财经</p>
			</div>
			<div class="mine">

			</div>
		</div>
		<!-- banner -->
		<BannerView></BannerView>
		<!-- slider -->
			<lunboView></lunboView>
		<!-- content -->
		<div id="content1">
		<ul>
			<div class="sub">
				<div class="left1"></div>
				<strong>今日要闻</strong>
			</div>
			
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada4.jpg" v-show="xianshi" height="90" width="120">
					<dd>外媒：美对朝动武或至百万人丧生 中国卷入其中
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada5.jpg" v-show="xianshi" height="90" width="120">
					<dd>人教社：新教材不收《爱迪生救妈妈》等争议文章
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada6.jpg" v-show="xianshi" height="90" width="120">
					<dd>这家劣迹斑斑的企业何以在地铁建设领域一路畅行？
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada7.jpg" v-show="xianshi" height="90" width="120">
					<dd>水花40分勇士收下5连胜 公牛猛龙爆发最残暴群架
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada.jpg" v-show="xianshi" height="90" width="120">
					<dd>习近平的法治"金句"
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada2.jpg" v-show="xianshi" height="90" width="120">
					<dd>韩国今日向中方归还28具志愿军军人遗骸
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada3.jpg" v-show="xianshi" height="90" width="120">
					<dd>河南踩踏是事故学校教师：考前集中上厕所发生踩踏
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
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
			<div class="sub">
				<div class="left1"></div>
				<strong>猜你喜欢</strong>
			</div>
			<li class="content_li">
				<dt>
					<img src="../assets/images/love1.jpg" v-show="xianshi" height="90" width="120">
					<dd>俄罗斯经济搞那么差 普京支持率为何还那么高
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/love2.png" v-show="xianshi" height="90" width="120">
					<dd>展锋：震荡收跌，有小幅反弹预期
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/love3.jpg" v-show="xianshi" height="90" width="120">
					<dd>德罗赞一站超猛龙昔日两巨头 队友干架他变身范甘迪
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/love4.jpg" v-show="xianshi" height="90" width="120">
					<dd>20万买啥SUV？这两款车都有值得入手的理由
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/love5.jpg" v-show="xianshi" height="90" width="120">
					<dd>日本房地产的今天，是中国地产的明天吗？
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/love6.jpg" v-show="xianshi" height="90" width="120">
					<dd>胖妞当伴娘被自己丑哭 用这一技巧甩肉 身材傲人
						<div>
							<span class="mess">201</span>
							<span>
								<img src="../assets/images/mess.png">
							</span>
						</div>
					</dd>
				</dt>
			</li>
			<li class="content_li">
				<dt>
					<img src="../assets/images/xidada7.jpg" v-show="xianshi" height="90" width="120">
					<dd>水花40分勇士收下5连胜 公牛猛龙爆发最残暴群架
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
				xianshi:true
			}
		},
		// mounted(){
		// 	this.slider()
		// },
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
			}
			// slider(){
			// 	// $(function(){
			// 		var mySwipe=new Swipe($('.banner')[0],{
	  //    				// slidesPerView:'auto',
	  //    				// centeredSlides:true,
	  //    				// paginationClickable:true,
	  //    				// spaceBetween:2,
	  //    				// auto:2000,
	  //    				// autoplay:2000,
	  //    				// loop:true,
	  //    				// loopedSlides:2,
	  //    				// autoplayDisableOnInteraction:false,

	  //         			callback(index,element){
	  //         				$('.banner ol li').removeClass('active');
	  //         				$('.banner ol li').eq(index).addClass('active');
	  //         			}
			// 		})
			// 	// })
			// }
		}
	}
</script>
<style>
	@import '../assets/css/News.css'
</style>