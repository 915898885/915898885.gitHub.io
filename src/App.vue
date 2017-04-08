<template>
  <div id="app">
  	<loading v-if="loading"></loading>
  	<img src='./assets/img/top.png' @click="goTop" to="./home" v-show="topShow" height="48" width="48">
  	<transition>
  		<router-view></router-view>
  	</transition>
  </div>
</template>
<script>
import HomeView from './components/Home.vue'
import loading from './components/loading/Loading.vue'
import {mapGetters,mapActions} from 'vuex'
export default{
	components:{
		HomeView,
	},
	computed:mapGetters([
		'loading'
	]),
	data(){
		return{
			topShow:false
		}
	},
	mounted(){
		var _this=this;
		window.addEventListener('scroll',function(){
			var y=window.pageYOffset;
			if(y>=500){
				_this.topShow=true
			}else{
				_this.topShow=false
			}
		})
	},
	methods:{
		goTop(){
			document.body.scrollTop=0;
		}
	}
}

</script>

<style>
#app{
	width:6.4rem;
	overflow: hidden;
}
#app>img{
	position:fixed;
	right:0.3rem;
	bottom:1rem;
	z-index:1;
}
</style>
