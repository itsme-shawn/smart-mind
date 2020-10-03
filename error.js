// catch 문이 필요없도록 error 핸들링 파일 작성

import Vue from 'vue'


Vue.config.errorHandler = e => {
	console.error(e.message)
}