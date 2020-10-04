import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
=======
  state: {
		fireUser: null
  },
  mutations: {
		setFireUser (state, fu) {
			state.fireUser = fu // fu : firebaseUser
		}
  },
  actions: {
  },
  modules: {
  }
>>>>>>> c01435daf1c40d3b83887e7d67ed78289caf4f68
})
