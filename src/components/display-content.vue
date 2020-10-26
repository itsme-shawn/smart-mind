<!-- views/learning/aritcle/article-list.vue 에서 사용하는 컴포넌트
    게시물 내용을 표시하는 창을 띄우는 역할
    survey 모듈도 포함돼있음
-->
<template>
  <v-card>
    <v-toolbar dark>
      <v-toolbar-title>
        {{item.title}}
      </v-toolbar-title>
      <v-spacer/>
      <v-btn @click="article_update" icon><v-icon>mdi-pencil</v-icon></v-btn>
      <v-btn @click="remove" icon><v-icon>mdi-delete</v-icon></v-btn>
      <v-btn @click="$emit('close')" icon><v-icon>mdi-close</v-icon></v-btn> <!-- $emit 으로 부모컴포넌트(article-list.vue)에 close 이벤트 전달 -->
    </v-toolbar>
      <!-- 게시물 내용 표시 -->
      <v-card-text>
        <viewer v-if="content" :initialValue="content"></viewer>
        <v-container v-else>
          <v-row justify="center" align="center">
            <v-progress-circular indeterminate></v-progress-circular>
          </v-row>
        </v-container>
      </v-card-text>
      <survey v-if="document === 'jungsin'" @submit="$emit('close')" :question="item.question" :document="document" :collection="collection" :item="item"></survey> <!-- 공지사항에는 렌더링 안함 -->
      <v-card-actions>
        <v-spacer/>
        <span class="font-italic caption">
          게시일 : <display-time :time="item.createdAt"></display-time>
        </span>
      </v-card-actions>
      <v-card-actions>
        <v-spacer/>
        <span class="font-italic caption">
          수정일 : <display-time :time="item.updatedAt"></display-time>
        </span>
      </v-card-actions>
      <!-- 게시물 내용 표시 끝 -->

    </v-card>
</template>

<script>
import axios from 'axios'
import DisplayTime from '@/components/display-time' // @ : src/
import Survey from '@/views/learning/survey.vue'

export default {
	components: { DisplayTime, Survey },
	props: ['document', 'item', 'collection'], // 부모가 넘겨주는 속성
	data () {
		return {
			content: '',
			ref: this.$firebase.firestore().collection('learning').doc(this.document)
		}
	},
	mounted () {
		// console.log('mounted')
		this.fetch()
	},
	methods: {
		async fetch () {
			const r = await axios.get(this.item.url)
			this.content = r.data
		},
		async article_update () { // 게시물 수정 함수
			if (!this.$store.state.fireUser) throw Error('관리자만 가능합니다')
			// 나중에 글 작성자만 삭제할 수 있게끔 수정해야함
			this.$router.push(
				{
					path: this.$route.path + '/article-update',
					query: { articleId: this.item.id }
					// 쿼리문을 이용 ( ex.  /article-write?articleId='foo' )
				}
			)
		},
		async remove () { // 트랜잭션 처리를 위해 batch 사용
			if (!this.$store.state.fireUser) throw Error('관리자만 가능합니다')
			// 나중에 글 작성자만 삭제할 수 있게끔 수정해야함
			const batch = this.$firebase.firestore().batch()
			batch.update(this.ref, { count: this.$firebase.firestore.FieldValue.increment(-1) })
			batch.delete(this.ref.collection('articles').doc(this.item.id))
			await batch.commit()
			// await this.ref.collection('articles').doc(this.item.id).delete() // Firestore 에서 삭제 (title,시간정보들만 삭제됨)
			await this.$firebase.storage().ref().child('learning').child(this.document).child(this.item.id + '.html').delete()
			// Storage에 저장된 html 파일까지 삭제 완료
			this.$emit('close')
		}
	}

}
</script>
