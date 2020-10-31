const functions = require('firebase-functions')

var admin = require('firebase-admin')

var serviceAccount = require('./key.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: functions.config().admin.db_url // "https://osam-hackathon.firebaseio.com"
})

// realtime db control
const db = admin.database()

// firestore DB control
const fdb = admin.firestore()

// 사용자가 로그인할 때, db와 fdb에 사용자 정보를 저장
exports.createUser = functions.auth.user().onCreate(async (user) => {
	const { uid, email, displayName, photoURL } = user // uid 는 고유한 값
	const time = new Date()
	const u = {
		email,
		displayName,
		photoURL,
		createdAt: time,
    uid,
    level : 'admin'
		// level: email === functions.config().admin.email ? 'admin' : 'normal' // 관리자(admin) 와 일반사용자(normal) 구분
	}
	await fdb.collection('users').doc(uid).set(u)
	u.createdAt = time.getTime() // fdb 에는 타임스탬프 타입으로 저장불가
	await db.ref('users').child(uid).set(u)
})

exports.deleteUser = functions.auth.user().onDelete(async (user) => {
	const { uid } = user
	await fdb.collection('users').child(uid).delete()
	await db.ref('users').child(uid).remove()
})

// incrementBoardCount() : 게시판의 글 갯수 증가 fdb 에 반영
// decrementBoardCount() : 게시판의 글 갯수 감소 fdb 에 반영

exports.incrementBoardCount = functions.firestore
	.document('learning/{bid}') // firestore 컬렉션 주소
	.onCreate(async (snap, context) => {
		try {
			await fdb.collection('meta').doc('learning').update('count', admin.firestore.FieldValue.increment(1))
		} catch (e) {
			await fdb.collection('meta').doc('learning').set({ count: 1 })
		}
	})

exports.decrementBoardCount = functions.firestore
	.document('learning/{bid}') // firestore 컬렉션 주소
	.onDelete(async (snap, context) => {
		await fdb.collection('meta').doc('learning').update('count', admin.firestore.FieldValue.increment(-1))
	})
