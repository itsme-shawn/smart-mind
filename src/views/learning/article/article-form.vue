<template>
  <v-container fluid>
    <v-form>
      <v-card :loading="loading">
        <v-toolbar color="accent" dense flat dark>
          <v-toolbar-title>게시물 작성</v-toolbar-title>
        <v-spacer/>
        <v-btn icon @click="$router.push('/learning/' + document)"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field v-model="form.title" outlined label="제목"></v-text-field>
          <editor initialEditType='wysiwyg' :options="editor_options" :initialValue="form.content" ref="editor"></editor>
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
export default {
	props: ['document', 'action'],
	data () {
		return {
			editor_options: {
				language: 'ko'
			},
			unsubscribe: null,
			form: {
				title: '',
				content: '' // content 는 이미지,동영상 같은 파일들이므로 Storage 에 넣어야 함
			},
			exists: false,
			loading: false,
			ref: null
		}
	},
	computed: {
		articleId () {
			return this.$route.query.articleId // articleId 는 board.vue 에서 넘어온 쿼리값
		}
	},
	watch: {
		document () { // document 값이 바뀔 때마다, subscribe() 함수를 실행시켜줌으로써 화면에 실시간 렌더링
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
		subscribe () {
			this.ref = this.$firebase.firestore().collection('learning').doc(this.document)

			// articleId 쿼리값이 없을 때
			if (!this.articleId) return

			// articleId 쿼리값이 있을 때 ( 문서의 id 값이 존재)

			if (this.unsubscribe) this.unsubscribe()
			this.unsubscribe = this.ref.collection('articles').doc(this.articleId).onSnapshot(doc => {
				this.exists = doc.exists
				if (this.exists) {
					this.form.title = doc.data().title
				}
			})
		},
		async save () { // 비동기 로직 포함 ( firestore DB에 저장 )
			this.loading = true
			try {
				const now = new Date()
				const id = now.getTime().toString() // 작성시간을 id로 사용
				const content = this.$refs.editor.invoke('getHtml') // 에디터에서 작성한 글 (html 파일로 변환)
				const sn = await this.$firebase.storage().ref().child('learning').child(this.document).child(id + '.html').putString(content)
				const url = await sn.ref.getDownloadURL()
				const doc = {
					title: this.form.title,
					updatedAt: now,
					url: url
				}

				const batch = await this.$firebase.firestore().batch()

				if (!this.articleId) { // 새로 작성할 때
					doc.createdAt = now
					batch.set(this.ref.collection('articles').doc(id), doc)
					batch.update(this.ref, { count: this.$firebase.firestore.FieldValue.increment(1) })
				} else { // 기존 게시물을 수정할 때
					batch.update(this.ref.collection('articles').doc(this.articleId), doc)
				}
				await batch.commit()
			// eslint-disable-next-line brace-style
			}
			/* 나중에 에러핸들링 추가해야함
        catch {
				// console.error('로그인이 필요합니다')
      }
      */
			finally {
				this.loading = false
				this.$router.push('/learning/' + this.document)
			}
			/* to do : 1. firestore 레퍼런스 더 읽어보기
                 2. 위지윅 에디터로 content 를 fire 스토리지에 저장하기
                  3. async / await 사용해야할때를 명확히 파악하기
      */
		}
	}
}
</script>
