import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
