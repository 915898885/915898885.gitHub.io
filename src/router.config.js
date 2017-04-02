import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Menu from './components/Menu.vue'
import News from './components/News.vue'
import Finan from './components/Finan.vue'
import Wan from './components/Wan.vue'
import Junshi from './components/Junshi.vue'
import Mp4 from './components/Mp4.vue'
import Blog from './components/Blog.vue'
import Keji from './components/Keji.vue'
import Nba from './components/Nba.vue'
import Car from './components/Car.vue'
import House from './components/House.vue'
import Gam from './components/Gmy.vue'
export default[
	{
		path:'/login',
		component:Login
	},
	{
		path:'/',
		component:Home,
	},
	{
		path:'/menu',
		component:Menu
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/News',
		component:News
	},
	{
		path:'/Gam',
		component:Gam
	},
	{
		path:'/Wan',
		component:Wan
	},
	{
		path:'/Junshi',
		component:Junshi
	},
	{
		path:'/Mp4',
		component:Mp4
	},
	{
		path:'/Blog',
		component:Blog
	},
	{
		path:'/Keji',
		component:Keji
	},
	{
		path:'/Nba',
		component:Nba
	},
	{
		path:'/Car',
		component:Car
	},
	{
		path:'/House',
		component:House
	},
	{
		path:'/Finan',
		component:Finan
	}
]