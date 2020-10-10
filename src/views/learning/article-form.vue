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
          <editor :initialValue="form.content"></editor>
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
      // articleId 쿼리값이 없을 때
      if(!this.articleId) return

      // articleId 쿼리값이 있을 때

      if (this.unsubscribe) this.unsubscribe()
      this.ref = this.$firebase.firestore().collection('learing').doc(this.document).collection('articles').doc(this.articleId)
      this.unsubscribe = this.ref.onSnapshot(doc => {
        this.exists = doc.exists
        if (this.exists) {
          this.form.title = doc.data().title
        }
      })
    },
    async save () { // 비동기
      this.loading = true
      /* to do : 1. firestore 레퍼런스 더 읽어보기
                 2. 위지윅 에디터로 content 를 fire 스토리지에 저장하기
                  3. async / await 사용해야할때를 명확히 파악하기
      */

    }
  }
}
</script>
