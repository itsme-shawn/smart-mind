import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// firebase.js 에서 setFireUser, setUser 호출

export default new Vuex.Store({
	state: {
		fireUser: null,
		user: null,
		routeTo: null
	},
	mutations: {
		setFireUser (state, fu) {
			state.fireUser = fu // fu : firebaseUser
		},
		setUser (state, user) {
			state.user = user
			// console.log(state.user)
		},
		setRouteTo (state, to) {
			state.routeTo = to
		}
	},
	actions: {
	},
	modules: {
	}
})
