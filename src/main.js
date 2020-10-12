import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/firebase.js'
import './error'
import './plugins/editor'
import EnlargeableImage from '@diracleo/vue-enlargeable-image'

import './components/hello.css'

Vue.config.productionTip = false


new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')

