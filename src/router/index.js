import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},

	{
		path: '/login',
		component: () => import('../views/login.vue')
	},

	// 동적 라우팅 생성 ( renderer.vue 를 통해 렌더링 )

	// ex ) /learning/jungsin : collection == 'learning' , document == 'jungsin'
	{
		path: '/:collection/:document',
		name: 'Dynamic routing',
		component: () => import('./renderer.vue')
	},

	// action (read,write 등) 동적라우터 추가
	{
		path: '/:collection/:document/:action',
		component: () => import('./renderer.vue')
	},

	// 지정하지 않은 라우터 => 에러처리
	{
		path: '*',
		name: 'error',
		component: () => import('../views/error_page')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
