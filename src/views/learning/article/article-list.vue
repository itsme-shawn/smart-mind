<template>
  <v-container fluid v-if="items.length" class="pa-5" >
    <template v-for="(item, i) in items">
      <v-card :key="item.id" :class="i < items.length - 1 ? 'mb-5' : ''" @click="openDialog(item)">
        <v-subheader>

          <v-chip color="info" label small class="mr-4">수강 전</v-chip> <!-- 추후 사용자의 수강상태에 따라서 동적으로 수강 전/ 수강 완료 로 핸들링해줄 예정 -->
          <v-chip color="error" label small class="mr-4" v-if="item.isNew">NEW</v-chip> <!-- 현재 시간과 비교해서 3일 전 게시글까지만 핸들링해줄 예정( 아직 미구현 ) -->
          
          <v-spacer/>
        </v-subheader>
        <v-card-title >
          {{item.title}}
        </v-card-title>
        <v-subheader>
        <v-spacer/>
        <display-time :time="item.createdAt"></display-time>
        </v-subheader>
      </v-card>
      <v-dialog :key="i" v-if="selectedItem" v-model="dialog" max-width="800"> <!-- selectedItem 이 들어올 때만 dialog 가 렌더링돼야함 (안 그러면 오류) -->
        <display-content :document="document" :collection="collection" :item="selectedItem" @close="dialog=false"></display-content> <!-- components/display-content.vue : 게시물 내용 표시 컴포넌트 -->
      </v-dialog>
    </template>

  </v-container>
  <v-container fluid v-else>
    <v-alert type="warning" border="left" class="mb-0">
      게시물이 없습니다
    </v-alert>
  </v-container>
</template>

<script>
import DisplayTime from '@/components/display-time'
import DisplayContent from '@/components/display-content' // @ : src/

export default {
	components: { DisplayTime, DisplayContent },
	props: ['info', 'document', 'collection'], // 부모가 넘겨주는 속성
	data () {
		return {
			items: [],
			unsubscribe: null,
			ref: null,
			lastDoc: null,
			order: 'createdAt',
			sort: 'desc',
			dialog: false,
			selectedItem: null
		}
	},
	computed: {
		user () {
			return this.$store.state.user
		}
	},
	watch: {
		document () {
			this.subscribe()
		},
		dialog (n) { // dialog 컴포넌트를 감시하면서 해지하기 위함
			if (!n) this.selectedItem = null
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
			this.ref = this.$firebase.firestore().collection(this.collection).doc(this.document).collection('articles').orderBy(this.order, this.sort)
			this.unsubscribe = this.ref.onSnapshot(sn => {
				if (sn.empty) {
					this.items = []
					return
				}
				this.docs = sn.docs
				// console.log('sn.docs', sn.docs)
				this.items = sn.docs.map(doc => {
					// console.log('doc', doc)
					const item = doc.data()
					// console.log('doc.data()', doc.data()) // doc.data() 에는 title, url 과 타임스태프형식의 cratedAt,updatedAt 이 존재
					item.id = doc.id // item 을 다루기 쉽게 id(article_id 와 동일 ) 값 추가
                    item.createdAt = item.createdAt.toDate() // 타임스탬프를 일반 시간으로 변환
					item.updatedAt = item.updatedAt.toDate() // 마찬가지
                    item.isNew = this.checkNew(item.createdAt)
					return item
				})
				console.log('this.items', this.items)
			})
		},
		openDialog (item) {
			this.selectedItem = item
			this.dialog = true
		},
        checkNew (before) { // item(게시물)이 작성된 지 3일 이하이면 new 태그를 달아주기 위해 new인지 체크하는 함수
			const past = this.$moment(before)
            console.log(past)
            const current = this.$moment()
			const diff = current.diff(past, 'days')
			if (diff <= 3) return true
            else return false
        },
        checkComplete
	}
}
</script>

<style scoped>

</style>
