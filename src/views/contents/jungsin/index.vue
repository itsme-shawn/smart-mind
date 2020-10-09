<!-- views/contents/index.vue : 주간정신전력교육 컨텐츠 -->

<template>
	<v-card >정신전력교육 컨텐츠 목록 테스트
		<v-data-table
			:headers="headers"
			:items="items"
			:items-per-page="5"
			:options.sync="options"
			class="elevation-1"
			loading
			loading-text = "Loading.... Please wait"
		>
			<template v-slot:item.id="{item}" >
				<v-icon small class="mr-2" @click="openDialog(item)">mdi-pencil</v-icon>
				<v-icon small @click="openDeleteDialog(item)">mdi-delete</v-icon>
			</template>
		</v-data-table>
		<v-card-actions>
			<v-btn @click="openDialog(null)" ><v-icon left>mdi-pencil</v-icon>작성</v-btn> <!-- 쓰기 폼 생성 -->
		</v-card-actions>

		<!-- dialog -->
		<v-dialog max-width="500" v-model="dialog">
			<v-card>
				<v-form>
					<v-card-text>
						제목<v-text-field v-model="form.title"></v-text-field>
						내용<v-text-field v-model="form.content"></v-text-field>
					</v-card-text>
					<v-card-actions>
						<v-spacer/>
						<v-btn @click="update" v-if="selectedItem">수정</v-btn> <!-- 수정 -->
						<v-btn @click="add" v-else>저장</v-btn> <!-- 쓰기 -->
					</v-card-actions>
				</v-form>
			</v-card>
		</v-dialog>
		<!--dialog end-->

		<!-- dialog 삭제할 때 삭제할 건지 한 번 더 묻는 dialog-->
		<v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">이 글을 지우시겠습니까?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">취소</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(tempForm)">예</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
		<!--dialog end-->
	</v-card>
</template>

<script>
export default {
	data () {
		return {
			headers: [
				{ value: 'title', text: '제목' }, // value : 파라미터기능 , text : 실제 표시되는 내용
				{ value: 'content', text: '내용' },
				{ value: 'createdAt', text: '작성일' },
				{ value: 'id', text: '수정/삭제', sortable: false }
			],
			items: [], // created 훅에 의해서 DB에 있던 정보들이 저장됨
			form: {
				title: '',
				content: ''
			},
			tempIndex: -1,
			tempForm: {
				title: '',
				content: '',
				id: ''
			},
			dialog: false,
			dialogDelete: false,
			selectedItem: null,
			unsubscribe: null,
			unsubscribeCount: null,
			options: {
				sortBy: ['createdAt'],
				sortDesc: [true] // 처음 default 값은 내림차순으로
			}
		}
	},
	created () {
		this.subscribe() // 데이터를 실시간으로 리스닝(read)
	},
	destroyed () {
		if (this.unsubscribe) this.unsubscribe() // 다른 페이지로 가면 DB구독해지
		if (this.unsubscribeCount) this.unsubscribeCount()
	},
	methods: {
		openDialog (item) {
			this.selectedItem = item
			this.dialog = true
			if (!item) { // item 파라미터에 null 이 넘어오면 폼을 비운채로 렌더링
				this.form.title = ''
				this.form.content = ''
			} else { // item 파라미터가 넘어온다는 것은 수정한다는 의미
				this.form.title = item.title
				this.form.content = item.content
			}
		},
		openDeleteDialog (item) {
			// 정말 삭제할건지 묻는 dialog 띄움
			this.dialogDelete = true
			// 삭제를 위해 임시로 담아두는 변수 -> tempForm
			this.tempForm = item
			// console.log('item id : ', item.id)
			console.log(this.tempForm.title, this.tempForm.content, this.tempForm.id)
		},
		closeDelete () {
			// 취소 버튼 눌렀을 때 그냥 띄워진 dialog 닫으면 됨
			this.dialogDelete = false
		},
		deleteItemConfirm (tempForm) {
			// 확인 버튼 눌렀을 때 실제로 삭제해야 함
			this.remove(tempForm)

			// 정말 삭제할건지 묻는 dialog 내림
			this.closeDelete()
		},

		subscribe () { // read 기능
			// eslint-disable-next-line no-unused-expressions
			this.unsubscribe = this.$firebase.firestore().collection('boards').onSnapshot((sn) => {
				if (sn.empty) {
					this.items = []
					return
				}
				// 불편하므로 map 함수를 사용해서, items 객체에 v.id 와 v.data() 묶어버림
				this.items = sn.docs.map(v => {
					const item = v.data()
					return {
						id: v.id, title: item.title, content: item.content, createdAt: this.convert(item.createdAt)

					}
				})
			// eslint-disable-next-line no-sequences
			}),

			this.unsubscribeCount = this.$firebase.firestore().collection('meta').doc('boards').onSnapshot((doc) => {
				if (!doc.exitsts) return
				this.serverItemsLength = doc.data().count
			})
		},

		add () { // create 기능
			const item = {}
			Object.assign(item, this.form)
			item.createdAt = new Date()
			this.$firebase.firestore().collection('boards').add(item)
			this.dialog = false
		},

		update () { // update 기능
			this.$firebase.firestore().collection('boards').doc(this.selectedItem.id).update(this.form)
			this.dialog = false
		},

		remove (item) { // delete 기능
			this.$firebase.firestore().collection('boards').doc(item.id).delete()
		},

		convert (timestamp) {
			var d = new Date(timestamp * 1000) // Convert the passed timestamp to milliseconds
			var yyyy = d.getFullYear() - 1969
			var mm = ('0' + (d.getMonth() + 1)).slice(-2) // Months are zero based. Add leading 0.
			var dd = ('0' + d.getDate()).slice(-2) // Add leading 0.
			var hh = d.getHours()
			var h = hh
			var min = ('0' + d.getMinutes()).slice(-2) // Add leading 0.
			var ampm = 'AM'
			var time

			if (hh > 12) {
				h = hh - 12
				ampm = 'PM'
			} else if (hh === 12) {
				h = 12
				ampm = 'PM'
			} else if (hh === 0) {
				h = 12
			}

			// ie: 2013-02-18, 8:35 AM
			time = yyyy + '년' + mm + '월' + dd + '일 ' + h + ':' + min + ' ' + ampm

			return time
		}
	}
}
</script>
