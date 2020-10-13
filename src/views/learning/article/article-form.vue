<!--
    views/learning/article/article-form.vue 기능 설명

    board.vue(게시판 메인)에서 글 생성버튼을 누르면 렌더링 되는 페이지 코드이다.
    즉, 실질적인 강의자료나 게시물들을 작성하는 form 이다. ( toast editor (위지윅 모드) 사용)

    이 컴포넌트 안에서 게시물 최초 작성과 수정을 할 수 있게끔 하였다. (v-if 이용)
-->


<template>
  <v-container fluid>
    <v-form>
      <v-card :loading="loading">
        <v-toolbar color="accent" dense flat dark>
          <v-toolbar-title>게시물 작성</v-toolbar-title>
        <v-spacer/>
        <v-btn icon @click="$router.push('/learning/' + document)"><v-icon>mdi-arrow-left</v-icon></v-btn> <!-- 뒤로가기 -->
        <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field v-model="form.title" outlined label="제목"></v-text-field>
          <!-- articleId 가 없다는 것은 글 최초 작성 -->
          <editor v-if="!articleId" initialEditType='wysiwyg' :options="editor_options" :initialValue="form.content" ref="editor"></editor>
          <!-- aritcleId 가 있다는 것은 글 수정, 따라서 기존의 title 과 content 를 렌더링해줘야한다. -->
          <template v-else>
            <editor v-if="form.content" initialEditType='wysiwyg' :options="editor_options" :initialValue="form.content" ref="editor"></editor>
            <!-- v-else 로 들어온다는 것은 아직 form.content에 값이 안들어온 것(axios로 데이터 가져오는데 시간필요)이므로 로딩 ui 생성 -->
            <v-container v-else>
              <v-row justify="center" align="center">
                <v-progress-circular indeterminate></v-progress-circular>
              </v-row>
            </v-container>
          </template>
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
	props: ['document', 'action'],
	data () {
		return {
			editor_options: {
				language: 'ko',
        hideModeSwitch: true
			},
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
			return this.$route.query.articleId // articleId 는 board.vue 에서 넘어온 쿼리값 (수정할때만 id 값이 넘어온다)
		}
	},
	watch: { // document 값이 바뀔 때, fetch() 함수를 실행시켜서 일회성으로 DB 에서 데이터 받아옴
		document () {
			this.fetch()
		}
	},
	created () {
		this.fetch()
	},
	methods: {
		async fetch () {
			this.ref = this.$firebase.firestore().collection('learning').doc(this.document)

			// articleId 쿼리값이 없을 때 ( 글 최초작성)
			if (!this.articleId) return

			// articleId 쿼리값이 있을 때 ( 글 수정)
			const doc = await this.ref.collection('articles').doc(this.articleId).get()
			this.exists = doc.exists
			if (!this.exists) return // doc 가 없으면 종료
			const item = doc.data() // 임시변수 item 사용
			this.form.title = item.title
			const r = await axios.get(item.url)
			this.form.content = r.data
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