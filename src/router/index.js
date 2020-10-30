import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},

	{
		path: '/login',
		component: () => import('../views/auth/sign.vue')
	},

	{
		path: '/mypage/account',
		component: () => import('../views/mypage/account/index.vue'),
		// mypage 같은 페이지들은 라우팅하기 전에 로그인 상태인지 체크하고 로그인이 안돼있으면, 강제로 로그인페이지로 리다이렉션 시킴.
		beforeEnter: function (to, from, next) {
			if (!store.state.user) {
				router.push('/login').catch(() => {})
				store.commit('setRouteTo', to)
			} else next()
		}
	},

	{
		path: '/mypage/budae',
		component: () => import('../views/mypage/budae/index.vue'),
		// mypage 같은 페이지들은 라우팅하기 전에 로그인 상태인지 체크하고 로그인이 안돼있으면, 강제로 로그인페이지로 리다이렉션 시킴.
		beforeEnter: function (to, from, next) {
			if (!store.state.user) {
				router.push('/login').catch(() => {})
				store.commit('setRouteTo', to)
			} else next()
		}
	},
	{
		path: '/mypage/status',
		component: () => import('../views/mypage/status/index.vue'),
		// mypage 같은 페이지들은 라우팅하기 전에 로그인 상태인지 체크하고 로그인이 안돼있으면, 강제로 로그인페이지로 리다이렉션 시킴.
		beforeEnter: function (to, from, next) {
			if (!store.state.user) {
				router.push('/login').catch(() => {})
				store.commit('setRouteTo', to)
			} else next()
		}
	},
	{
		path: '/learning/dashboard',
		component: () => import('../views/learning/dashboard/index.vue'),
		// mypage 같은 페이지들은 라우팅하기 전에 로그인 상태인지 체크하고 로그인이 안돼있으면, 강제로 로그인페이지로 리다이렉션 시킴.
		beforeEnter: function (to, from, next) {
			if (!store.state.user) {
				router.push('/login').catch(() => {})
				store.commit('setRouteTo', to)
			} else next()
		}
	},

	// 동적 라우팅 생성 ( renderer.vue 를 통해 렌더링 )

	// ex ) /learning/jungsin : collection == 'learning' , document == 'jungsin'
	{
		path: '/:collection/:document',
		name: 'Dynamic routing',
		component: () => import('./renderer.vue'),
		beforeEnter: function (to, from, next) {
			if (!store.state.user) {
				router.push('/login').catch(() => {})
				store.commit('setRouteTo', to)
			} else next()
		}

	},

	// action (read,write 등) 동적라우터 추가
	{
		path: '/:collection/:document/:action',
		component: () => import('./renderer.vue'),
		beforeEnter: function (to, from, next) {
			if (!store.state.user) {
				router.push('/login').catch(() => {})
				store.commit('setRouteTo', to)
			} else next()
		}
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
