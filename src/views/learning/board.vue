<!--
    각 content 게시판들의 공통이자 게시판 메인 컴포넌트

    동적 라우팅 파라미터로 받은 document 값을
    props : ['document'] 로 받아서
    renderer.vue 에서 document 값에 따라 알맞은 게시판으로 동적으로 렌더링해준다.

    게시물들의 리스트를 보여주기 위해 article-list.vue 를 컴포넌트로 사용한다
-->

<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="accent" dense flat dark>
        <v-toolbar-title v-text="info.title"></v-toolbar-title>
      <v-spacer/>
      <template v-if="user">
        <v-btn color="#81C784" @click="board_write" class="mr-2" v-if="user.level == 'admin'" ><v-icon>mdi-pencil</v-icon>강의실 정보 수정</v-btn> <!-- 강의실 정보 수정 -->
        <v-btn color="#81C784" @click="article_write" v-if="user.level == 'admin'"><v-icon>mdi-plus</v-icon>게시물 작성</v-btn> <!-- 게시물 작성 버튼 -->
      </template>
      </v-toolbar>
      <v-card-text v-if="info.createdAt">
        <v-alert icon="mdi-information-outline" text elevation="5" border="top" color="green lighten-2" dark dismissible>
          <div style="white-space: pre-line">{{info.description}}</div>
          <!--
          <div class="text-right font-italic caption">작성일: {{info.createdAt.toDate().toLocaleString()}}</div>
          <div class="text-right font-italic caption">수정일: {{info.updatedAt.toDate().toLocaleString()}}</div>
          -->
        </v-alert>
      </v-card-text>
      <v-card-text>
        게시물
      </v-card-text>
      <!-- 게시물 목록 컴포넌트 -->
      <article-list :info="info" :document="document" ></article-list>
      <!---->
    </v-card>
  </v-container>
</template>
<script>
import ArticleList from './article/article-list'

export default {
	components: { ArticleList },
	props: ['document'], // document 는 라우터 파라미터 값
	// ex ) /learning/daily_history 주소로 접속하면 ,
	// document == 'daily_history' , collection == 'learning' 이다.
	data () {
		return {
			unsubscribe: null, // 초기값은 null 로 주고, subscribe 시 unsubscribe 에 값을 저장한다.
			info: {
				category: '',
				title: '',
				description: ''
			},
			loading: false
		}
	},
	watch: {
		document () { // document 값이 변화할 때마다 (= 다른 종류의 게시판으로 들어갈 때마다) subscribe() 함수 실행
			this.subscribe()
		}
	},
	computed: {
		user () { // Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
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
			if (this.unsubscribe) this.unsubscribe()
			const ref = this.$firebase.firestore().collection('learning').doc(this.document)
			this.unsubscribe = ref.onSnapshot(doc => {
				if (!doc.exists) return this.board_write() // 해당 게시판의 title 과 description 이 없으면 게시판 정보를 작성하는 페이지로 이동시킨다.
				this.info = doc.data()
			})
		},
		async board_write () {
			this.$router.push(this.$route.path + '/board-write')
			// '/board-write' 는 action 라우트 파라미터로 들어감
			// board-form.vue 를 렌더링하게 된다.
		},
		async article_write () {
			this.$router.push(
				{
					path: this.$route.path + '/article-write',
					query: { articleId: '' }
					// 쿼리문을 이용 ( ex.  /article-write?articleId='foo' )
					// article/article-form.vue 를 렌더링하게 된다.
				}
			)
		}
	}
}
</script>
