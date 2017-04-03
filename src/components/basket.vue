<template>
	<div>
		<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><div class="left">上证 3222.51 +0.38%</div><div class="right">恒指 24181.99 +0.30%</div></div>
            <div class="swiper-slide"><div class="right">深成 10428.72 +0.78%</div><div class="right">道指 20663.22 -0.31%</div></div>
        </div>
        <!-- Add Pagination -->
    </div>
	</div>
</template>
<script scoped>
export default{
    mounted(){
        this.silder();
    },
    methods:{
        silder(){
            var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        autoplay:2000
    });
        }
    }
}
	
</script>
<style scoped>
	 .swiper-container {
        width: 100%;
        height: 0.7rem;
    }
    .swiper-slide {
        text-align: center;
        background: #fff;
        font-size:0.25rem;
        line-height: 0.7rem;
        width:6rem;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        margin-left:0.2rem;
    }
    .swiper-slide div{
        width:3rem;
        float:left;
        text-align: center;
    }
    .swiper-slide div.left{
        color:#117e09;
    }
    .swiper-slide div.right{
        color:#fe4444;
    }
</style>