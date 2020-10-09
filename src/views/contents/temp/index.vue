<template>
	<div class="text-center" >
		임시 - storage 연습용<br>
    로그인 상태에서만 write 가능<br>
    read 하면 write 한 파일 화면에 렌더링
		<v-sheet>

        <v-textarea v-model="text"></v-textarea>
		<v-btn @click="write">write</v-btn>
    <v-btn @click="read">read</v-btn>
		</v-sheet>

	</div>

</template>

<script>
import axios from 'axios'

export default {
	data () {
		return {
      text : '',
      url : ''
		}
	},
	methods: {
		async write () {
			const sn = await this.$firebase.storage().ref().child('xxx.test').putString('abcd')
      const url = await sn.ref.getDownloadURL()
      this.url = url
      },
    async read() {
      const r = await axios.get(this.url)
      console.log(r)
      this.text = r.data
    }
  }
}
</script>
