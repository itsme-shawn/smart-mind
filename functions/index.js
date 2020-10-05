const functions = require('firebase-functions')

var admin = require('firebase-admin')

var serviceAccount = require('./key.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: functions.config().admin.db_url // "https://osam-hackathon.firebaseio.com"
})

// realtime db control

const db = admin.database()

// 사용자가 로그인할 때, realtime DB 에 사용자 정보를 저장
exports.createUser = functions.auth.user().onCreate(async (user) => {
	const { uid, email, displayName, photoURL } = user // uid 는 고유한 값
	const u = {
		email,
		displayName,
		photoURL,
		level: email === functions.config().admin.email ? 0 : 5 // admin 계정의 level 이 0
	}
	db.ref('users').child(uid).set(u)
})

exports.deleteUser = functions.auth.user().onDelete(async (user) => {
	const { uid } = user
	db.ref('users').child(uid).remove()
})

// firestore DB control

const fdb = admin.firestore()

// incrementBoardCount() : 게시판의 글 갯수 증가 fdb 에 반영
// decrementBoardCount() : 게시판의 글 갯수 감소 fdb 에 반영

exports.incrementBoardCount = functions.firestore
	.document('boards/{bid}') // firestore 컬렉션 주소
	.onCreate(async (snap, context) => {
		try {
			await fdb.collection('meta').doc('boards').update('count', admin.firestore.FieldValue.increment(1))
		} catch (e) {
			await fdb.collection('meta').doc('boards').set({ count: 1 })
		}
	})

exports.decrementBoardCount = functions.firestore
	.document('boards/{bid}') // firestore 컬렉션 주소
	.onDelete(async (snap, context) => {
		await fdb.collection('meta').doc('boards').update('count', admin.firestore.FieldValue.increment(-1))
	})
