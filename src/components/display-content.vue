<!-- views/learning/aritcle/article-list.vue 에서 사용하는 컴포넌트
    게시물 내용을 표시하는 창을 띄우는 역할 -->
<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-toolbar-title>
        {{item.title}}
      </v-toolbar-title>
      <v-spacer/>
      <v-btn @click="article_update" icon><v-icon>mdi-pencil</v-icon></v-btn> <!-- $emit 으로 부모컴포넌트에 데이터 전달 -->
      <v-btn @click="$emit('close')" icon><v-icon>mdi-close</v-icon></v-btn> <!-- $emit 으로 부모컴포넌트에 데이터 전달 -->
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

export default {
	components: { DisplayTime },
	props: ['item'],
	data () {
		return {
			content: ''
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
			this.$router.push(
				{
					path: this.$route.path + '/article-update',
					query: { articleId: this.item.id }
					// 쿼리문을 이용 ( ex.  /article-write?articleId='foo' )
				}
			)
		}
	}

}
</script>
