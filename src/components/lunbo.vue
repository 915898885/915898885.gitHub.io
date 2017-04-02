<template>
	<div id="lunbo">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="../assets/images/slide1.jpg">
				</div>
				<div class="swiper-slide">
					<img src="../assets/images/slide2.jpg">
				</div>
				<div class="swiper-slide">
					<img src="../assets/images/slide3.jpg">
				</div>
				<div class="swiper-slide">
					<img src="../assets/images/slide4.jpg">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<style>
	@import "../assets/css/lunbo.css"
</style>
<script>
	export default{
		mounted(){
			this.slider();
		},
		methods:{
			slider(){
				var swiper=new Swiper('.swiper-container',{
					pagination: '.swiper-pagination',
        			paginationClickable: true,
        			continuous:true,
        			autoplay:1000,
        			autoplayDisableOnInteraction:false
				});
			}
		}
	}
</script>