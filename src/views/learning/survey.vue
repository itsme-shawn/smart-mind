<!--
  @/components/display-content.vue 의 자식 컴포넌트
-->

<template >
  <v-container class="mt-5 mx-auto pa-5">
    <v-divider/>
    <br/>
    <h2 style="color:rgb(21, 179, 137)">의견 제출</h2>
    <h5 style="color:rgb(21, 179, 137)">자신의 생각을 작성해보세요</h5>
    <br/>
    <h3>1. {{q1}}</h3>
    <v-textarea v-model="answer.a1" class="mt-3" auto-grow solo clearable clear-icon="mdi-close-circle" label="작성해주세요" ></v-textarea>
    <h3>2. {{q2}}</h3>
    <v-textarea v-model="answer.a2" class="mt-3" auto-grow solo clearable clear-icon="mdi-close-circle" label="작성해주세요" ></v-textarea>
    <div align="right">
    <v-btn  @click="submitOwn" dark rounded color="rgb(21, 179, 137)" large>제출</v-btn>
    </div>
  </v-container>

</template>

<script>
export default {
	props: ['question', 'document', 'collection', 'item'], // 부모가 넘겨주는 속성
	data () {
		return {
			unsubscribe: null,
			answer: {
				a1: '',
				a2: ''
			},
			ref: '', // firestore 주소
			exists: false,
			loading: false,
			subject_kr: ''
		}
	},
	computed: {
		q1 () {
			return this.question.Q1
		},
		q2 () {
			return this.question.Q2
		},
		user () { // Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		}
	},
	watch: {
		document () {
			this.subscribe()
		}
	},
	created () {
		this.subscribe()
	},
	destroyed () {
		if (this.unsubscribe) this.unsubscribe()
	},
	methods: {
		async subscribe () {
			if (this.unsubscribe) this.unsubscribe() // unsubscribe 가 참이면 unsubscribe 에 DB 정보를 담게된다.
			const temp = await this.$firebase.firestore().collection(this.collection).doc(this.document).get()
			this.subject_kr = temp.data().title // survey_result 컬렉션에 subject의 한글이름을 저장하기 위함
			// 사용자들의 survey 제출결과가 저장될 DB 주소 : survey_result > jungsin > [article_id] > [uid]
			// survey_result 의 하위 문서(ex. jungsin) 를 만들어준다.
			this.$firebase.firestore().collection('survey_result').doc(this.document).set({
				count: ''
			})
			this.ref = this.$firebase.firestore().collection('survey_result').doc(this.document).collection(this.item.article_id).doc(this.user.uid)
			this.unsubscribe = this.ref.onSnapshot(doc => {
				this.exists = doc.exists
				if (this.exists) {
					this.answer.a1 = doc.data().a1
					this.answer.a2 = doc.data().a2
					// this.subject = doc.data().title
				}
			})
		},
		async submitOwn () { // DB에 a1,a2(병사들의 의견)을 save
			// console.log(this.a1, this.a2)
			if (!this.user) throw Error('로그인 후 제출 가능합니다') // 권한 확인
			const answer = {
				a1: this.answer.a1,
				a2: this.answer.a2,
				updatedAt: new Date()
			}
			this.loading = true
			try {
				if (!this.exists) { // 최초 제출
					answer.submittedAt = new Date()
					answer.subject_en = this.document
					answer.subject_kr = this.subject_kr
					answer.submitAuthor = this.user // submit 한 user 정보
					await this.ref.set(answer)
				} else {
					await this.ref.update(answer)
				}
				// this.$router.push('/' + this.collection + '/' + this.document)
			} finally {
				this.loading = false
				this.$emit('submit')
			}
		}
	}
}
</script>
