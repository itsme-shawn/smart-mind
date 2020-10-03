import Vue from 'vue'
import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firebase-database'
//import 'firebase/firestore'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase // $ : 전역으로 선언