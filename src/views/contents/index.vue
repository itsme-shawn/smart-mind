<!-- views/contents/index.vue : 메인컨텐츠들이 모여있는 대시보드 -->

<template>
	<v-card>대시보드 테스트
		<v-data-table
			:headers="headers"
			:items="items"
		>
			<template v-slot:item.id="{item}">
				<v-btn icon @click="openDialog(item)"><v-icon>mdi-pencil</v-icon></v-btn> <!-- 수정 폼 생성 -->
				<v-btn icon @click="remove(item)"><v-icon>mdi-delete</v-icon></v-btn> <!-- 삭제 -->
			</template>
		</v-data-table>
		<v-card-actions>
			<v-btn @click="read" ><v-icon left>mdi-page-next</v-icon></v-btn> <!-- 읽기 -->
			<v-btn @click="openDialog(null)" ><v-icon left>mdi-pencil</v-icon></v-btn> <!-- 쓰기 폼 생성 -->
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
						<v-btn @click="update" v-if="selectedItem">update</v-btn> <!-- 수정 -->
						<v-btn @click="add" v-else>add</v-btn> <!-- 쓰기 -->
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
			headers: [
				{ value: 'title', text: '제목'}, // value : 파라미터기능 , text : 실제 표시되는 내용
				{ value: 'content', text: '내용'},
				{ value: 'id', text: 'id'}
			],
			items: [], // created 훅에 의해서 DB에 있던 정보들이 저장됨
			form: {
				title: '',
				content: ''
			},
			dialog: false,
			selectedItem : null
		}
		
	},
	created() {
		this.read()
	},
	methods: {
		openDialog(item) {
			this.selectedItem = item
			this.dialog = true
			if(!item){ // item 파라미터에 null 이 넘어오면 폼을 비운채로 렌더링
				this.form.title = ''
				this.form.content = ''
			} else{ // item 파라미터가 넘어온다는 것은 수정한다는 의미
				this.form.title = item.title
				this.form.content = item.content
			}
		},
		add(){
			this.$firebase.firestore().collection('boards').add(this.form)
			this.dialog = false
		},
		update(){
			this.$firebase.firestore().collection('boards').doc(this.selectedItem.id).update(this.form)
			this.dialog = false
		},
		remove(item){
			this.$firebase.firestore().collection('boards').doc(item.id).delete()
			this.dialog = false
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
