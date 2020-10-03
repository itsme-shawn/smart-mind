<!-- views/contents/index.vue : 메인컨텐츠들이 모여있는 대시보드 -->

<template>
	<v-card>대시보드 테스트
		<v-card-actions>
			<v-btn @click="read" ><v-icon left>mdi-page-next</v-icon></v-btn>
			<v-btn @click="openDialog" ><v-icon left>mdi-pencil</v-icon></v-btn>
		</v-card-actions>
		<v-dialog max-width="500" v-model="dialog">
			<v-card>
				<v-form>
					<v-card-text>
						<v-text-field v-model="form.title"></v-text-field>
						<v-text-field v-model="form.content"></v-text-field>
					</v-card-text>
					<v-card-actions>
						<v-spacer/>
						<v-btn @click="save">save</v-btn>
					</v-card-actions>
				</v-form>
			</v-card>
		</v-dialog>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			items: [],
			form: {
				title: '',
				content: ''
			},
			dialog: false
		}
		
	},
	methods: {
		openDialog() {
			this.dialog = true
		},
		save(){
			this.$firebase.firestore().collection('boards').add(this.form)
		},
		async read(){
			const sn = await this.$firebase.firestore().collection('boards').get()
			/*
			sn.docs.forEach(v => {
				console.log(v.id) // zgPoncu7ftCraiPBvhkT
				console.log(v.data()) // {title: "a1", content: "b1"}
			})
			*/
			
			// 불편하므로 map 함수를 사용해서, items 객체에 v.id 와 v.data() 묶어버림
			this.items = sn.docs.map(v => {
				const item = v.data()
				return {
					id : v.id, title : item.title, content: item.content
				}
			})
			console.log(this.items)
		}
	}
}
</script>
