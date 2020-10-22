import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

Vue.use(VueToast, {
	position: 'top'
})

Vue.config.errorHandler = e => {
	console.error(e.message)
	Vue.$toast.open({
		message: e.message,
		type: 'error'
	})
	//console.log('Here')
}
