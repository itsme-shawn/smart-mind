<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :server-items-length="info.count"
      :options.sync="options"
      :items-per-page="5"
      :footer-props="{
        'items-per-page-options':[5, 10, 20, 30, 50],
      }"
      must-sort
      item-key="id"
    >
      <template v-slot:item.title="{item}">
        <a @click="openDialog(item)">{{item.title}}</a>
      </template>
      <template v-slot:item.createdAt="{item}">
        <display-time :time="item.createdAt"></display-time>
      </template>
    </v-data-table>
    <v-dialog v-if="selectedItem" v-model="dialog"> <!-- selectedItem 이 들어올 때만 dialog 가 렌더링돼야함 (안 그러면 오류) -->
      <display-content :item="selectedItem" @close="dialog=false"></display-content>
    </v-dialog>
  </div>
</template>
<script>
import { head, last } from 'lodash'
import DisplayTime from '@/components/display-time' // @ : src/
import DisplayContent from '@/components/display-content' // @ : src/

export default {
	components: { DisplayTime, DisplayContent },
	props: ['info', 'document'],
	data () {
		return {
			headers: [
				{ value: 'title', text: '제목' },
				{ value: 'createdAt', text: '작성일' }
			],
			items: [],
			unsubscribe: null,
			options: {
				sortBy: ['createdAt'],
				sortDesc: [true]
			},
			docs: [],
			dialog: false,
			selectedItem: null
		}
	},
	watch: {
		document () {
			this.subscribe(0)
		},
		options: {
			handler (n, o) {
				if (!o.page) {
					this.subscribe(0)
					return
				}
				if (head(o.sortBy) !== head(n.sortBy) || head(o.sortDesc) !== head(n.sortDesc)) {
					n.page = 1
					this.subscribe(0)
					return
				}
				const arrow = n.page - o.page
				this.subscribe(arrow)
			},
			deep: true
		},
    dialog (n) {  // dialog 컴포넌트를 감시하면서 해지하기 위함
      if (!n) this.selectedItem = null 
    }
	},
	created () {
		// this.subscribe(0)
	},
	destroyed () {
		if (this.unsubscribe) this.unsubscribe()
	},
	methods: {
		subscribe (arrow) {
			if (this.unsubscribe) this.unsubscribe()
			const order = this.options.sortBy[0]
			const sort = this.options.sortDesc[0] ? 'desc' : 'asc'
			const limit = this.options.itemsPerPage
			const ref = this.$firebase.firestore().collection('learning').doc(this.document).collection('articles').orderBy(order, sort)
			let query
			switch (arrow) {
			case -1: query = ref.endBefore(head(this.docs)).limitToLast(limit)
				break
			case 1: query = ref.startAfter(last(this.docs)).limit(limit)
				break
			default: query = ref.limit(limit)
				break
			}
			this.unsubscribe = query.onSnapshot(sn => {
				if (sn.empty) {
					this.items = []
					return
				}
				this.docs = sn.docs
				this.items = sn.docs.map(doc => {
					const item = doc.data()
					item.id = doc.id
					item.createdAt = item.createdAt.toDate()
					item.updatedAt = item.updatedAt.toDate()
					return item
				})
			})
		},
    openDialog (item) {
		this.selectedItem = item
		this.dialog = true
	}
	},
	
}
</script>
