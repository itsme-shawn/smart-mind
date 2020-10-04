import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
=======
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
	
		// 컨텐츠 대시보드
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/contents/dashboard/index.vue')
	},
	
		// 주간정신전력교육
	{
		path: '/jungsin',
		name: 'ContentsJungsin',
		component: () => import('../views/contents/jungsin/index.vue')
	},
	
		// 데일리 역사상식(가제)
	{
		path: '/daily_history',
		name: 'DailyHistory',
		component: () => import('../views/contents/daily_history/index.vue')
	},
	
		// 컨텐츠 3
	{
		path: '/temp',
		name: 'Temp',
		component: () => import('../views/contents/temp/index.vue')
	},
	
		// 가이드
	{
		path: '/guide',
		name: 'Guide',
		component: () => import('../views/help/guide/index.vue')
	},
	
		// FAQ
	{	
		path: '/FAQ',
		name: 'FAQ',
		component: () => import('../views/help/FAQ/index.vue')
	},
	
		// 기획의도
	{
		path: '/intentions',
		name: 'Intentions',
		component: () => import('../views/help/intentions/index.vue')
>>>>>>> c01435daf1c40d3b83887e7d67ed78289caf4f68
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
