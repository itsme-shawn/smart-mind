import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/firebase.js'
import './error'
import './plugins/editor'
import './plugins/moment'
import EnlargeableImage from '@diracleo/vue-enlargeable-image'

import '.././public/css/hello.css'
import '.././public/css/animate.css'
import '.././public/js/wow.min.js'
Vue.config.productionTip = false

new WOW().init();

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
