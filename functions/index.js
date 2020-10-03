const functions = require('firebase-functions');

var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: functions.config().admin.db_url //"https://osam-hackathon.firebaseio.com"
});

const db = admin.database()

// 사용자가 로그인할 때, realtime DB 에 사용자 정보를 저장
exports.createUser = functions.auth.user().onCreate(async(user) => {
  const { uid, email, displayName, photoURL} = user // uid 는 고유한 값
	const u = {
		email,
		displayName,
		photoURL,
		level: email === functions.config().admin.email ? 0 : 5 // admin 계정의 level 이 0
	}
	db.ref('users').child(uid).set(u)
});

exports.deleteUser = functions.auth.user().onDelete(async(user) => {
  const {uid} = user
	db.ref('users').child(uid).remove()
	
});