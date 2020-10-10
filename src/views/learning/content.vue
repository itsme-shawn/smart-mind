<template>
  <v-container fluid>
    <v-card>
      <v-toolbar color="accent" dense flat dark>
        <v-toolbar-title v-text="info.title"></v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click="write"><v-icon>mdi-pencil</v-icon></v-btn> <!-- 강의실 정보 수정 -->
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
        article
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  props: ['document'],
  // ex ) /learning/daily_history 주소로 접속하면 ,
  // document == 'daily_history' , collection == 'learning' 이다.
  data () {
    return {
      unsubscribe: null,  // 초기값은 null 로 주고, subscribe 시 unsubscribe 에 값을 저장한다.
      info: {
        category: '',
        title: '',
        description: ''
      },
      loading: false
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
    subscribe () {
      if (this.unsubscribe) this.unsubscribe()
      const ref = this.$firebase.firestore().collection('learing').doc(this.document)
      this.unsubscribe = ref.onSnapshot(doc => {
        if (!doc.exists) return this.write()
        this.info = doc.data()
      })
    },
    async write () {
      this.$router.push(this.$route.path + '/write')
    }
  }
}
</script>
