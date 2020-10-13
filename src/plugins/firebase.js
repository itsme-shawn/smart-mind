import Vue from 'vue'
import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firebase-database'
import 'firebase/firebase-firestore'
import 'firebase/firebase-storage'
import firebaseConfig from '../../firebaseConfig'
import store from '../store/index'

firebase.initializeApp(firebaseConfig)
let unsubscribe = null

const subscribe = (fu) => {
	const ref = firebase.firestore().collection('users').doc(fu.uid)
	unsubscribe = ref.onSnapshot(doc => {
		if (doc.exists) store.commit('setUser', doc.data()) // commit : vuex 상태 변화
	}, console.error)
}

// 로그인하면 fu 에 user 객체 저장
firebase.auth().onAuthStateChanged((fu) => {
	store.commit('setFireUser', fu)
	if (!fu) { // fu 가 null 일 때
		store.commit('setUser', null)
		if (unsubscribe) unsubscribe()
		return
	}
	subscribe(fu)
})

Vue.prototype.$firebase = firebase // $ : 전역으로 선언
