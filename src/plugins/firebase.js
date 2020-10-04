import Vue from 'vue'
import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firebase-database'
import 'firebase/firebase-firestore'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'

firebase.initializeApp(firebaseConfig)

// 로그인하면 fu 에 user 객ㅊ ㅔ저장
firebase.auth().onAuthStateChanged( (fu) => store.commit('setFireUser', fu) )

Vue.prototype.$firebase = firebase // $ : 전역으로 선언