import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import Loading from './components/loading'
import animate from 'animate.css'
import stores from './store/'
import axios from 'axios'
Vue.use(VueRouter);
Vue.use(Loading);
require('./assets/css/base.css');
require('./assets/js/zepto.min.js');
require('./assets/js/rem.js');
require('./assets/css/swiper.min.css');
const router=new VueRouter({
	routes
});
axios.interceptors.request.use(function(config){
	stores.dispatch('showLoading')
	return config;
},function(error){
	return Promise.reject(error);
});
axios.interceptors.response.use(function(response){
	stores.dispatch('hideLoading')
	return response;
},function(error){
	return Promise.reject(error);
});
Vue.prototype.$http=axios;
new Vue({
  el: '#app',
  router,
  store:stores,
  render: h => h(App)
})
