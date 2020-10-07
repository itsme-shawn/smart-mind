<template>
	<div class="text-center" style="font-size:50px">
		임시 - storage 연습용

		<v-sheet>
		<v-btn @click="write">write</v-btn>
		</v-sheet>

	</div>



</template>

<script>
export default {
	data() {
		return {
			text : ''
		}
	},
	methods: { // gc 로 corn 해야함
		async write() {
			const sn = await this.$firebase.storage().ref().child('xxx.test').putString('abcd')
			console.log(sn)
			}
  }
}
</script>
