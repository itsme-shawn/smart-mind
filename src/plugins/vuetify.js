import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import en from 'vuetify/es5/locale/en'
import ko from 'vuetify/es5/locale/ko'

Vue.use(Vuetify)

// eslint-disable-next-line no-unused-vars
const VuetifyObj = new Vuetify({
	lang: {
		locales: { en, ko },
		current: 'ko'
	}
})

export default new Vuetify({
})
