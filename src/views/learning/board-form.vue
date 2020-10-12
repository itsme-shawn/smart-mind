<template>
  <v-container fluid>
    <v-form>
      <v-card :loading="loading">
        <v-toolbar color="accent" dense flat dark>
          <v-toolbar-title>강의실 정보 작성</v-toolbar-title>
        <v-spacer/>
        <v-btn icon @click="$router.push('/learning/' + document)"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <v-btn icon @click="save"><v-icon>mdi-content-save</v-icon></v-btn>
        </v-toolbar>
        <v-card-text>
          <!--<v-text-field v-model="form.category" outlined label="종류"></v-text-field>-->
          <v-text-field v-model="form.title" outlined label="제목"></v-text-field>
          <v-textarea v-model="form.description" outlined label="설명"></v-textarea>
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
        description: ''
      },
      exists: false,
      loading: false,
      ref: null
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
      this.ref = this.$firebase.firestore().collection('learning').doc(this.document)
      this.unsubscribe = this.ref.onSnapshot(doc => {
        this.exists = doc.exists
        if (this.exists) {
          this.form.title = doc.data().title
          this.form.description = doc.data().description
        }
      })
    },
    async save () { // 비동기로 처리해줘야하는 로직을 포함하고있음
      const form = {
        title: this.form.title,
        description: this.form.description,
        updatedAt: new Date()
      }
      this.loading = true
      try {
        if (!this.exists) {
          form.createdAt = new Date()
          form.count = 0  // 해당 컨텐츠의 article 의 갯수를 저장
          await this.ref.set(form)
        } else {
          this.ref.update(form)
        }
        this.$router.push('/learning/'+ this.document)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
