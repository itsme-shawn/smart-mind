<!-- 동적으로 페이지 렌더링 -->

<template>
  <learning-dashboard
    v-if="collection === 'learning' && document === 'dashboard'">
  </learning-dashboard>
  <learning-board
    v-else-if="collection === 'learning' && !action" :document="document">  <!-- doument props 에는 jungsin, daily_history 등이 들어가서 동적으로 각각의 게시판을 생성한다. -->
  </learning-board>
  <learning-board-form
    v-else-if="collection === 'learning' && action === 'board-write'" :document="document" :action="action">
  </learning-board-form>
  <learning-article-form
    v-else-if="collection === 'learning' && action === 'article-write'" :document="document" :action="action">
  </learning-article-form>

  <mypage-account v-else-if="collection === 'mypage' && document === 'account'"></mypage-account>
  <mypage-status v-else-if="collection === 'mypage' && document === 'status'"></mypage-status>
  <mypage-budae v-else-if="collection === 'mypage' && document === 'budae'"></mypage-budae>

  <help-faq v-else-if="collection === 'help' && document === 'FAQ'"></help-faq>
  <help-guide v-else-if="collection === 'help' && document === 'guide'"></help-guide>
  <help-intentions v-else-if="collection === 'help' && document === 'intentions'"></help-intentions>

  <error-page v-else></error-page>
</template>

<script>

// Learning (수강하기 배너)
import LearningDashboard from '../views/learning/dashboard/index.vue'
import LearningBoard from '../views/learning/board'
import LearningBoardForm from '../views/learning/board-form'
import LearningArticleForm from '../views/learning/article/article-form'

// Mypage (마이페이지 배너)
import MypageAccount from '../views/mypage/account/index.vue'
import MypageStatus from '../views/mypage/status/index.vue'
import MypageBudae from '../views/mypage/budae/index.vue'

// Help (도움말 배너)
import HelpFaq from '../views/help/FAQ/index.vue'
import HelpGuide from '../views/help/guide/index.vue'
import HelpIntentions from '../views/help/intentions/index.vue'

// 라우팅 처리 되지 않은 주소는 에러 페이지 렌더링
import ErrorPage from '../views/error_page'

export default {
	components: {
		LearningDashboard,
		LearningBoard,
		LearningBoardForm,
		LearningArticleForm,
		MypageAccount,
		MypageBudae,
		MypageStatus,
		HelpFaq,
		HelpGuide,
		HelpIntentions,
		ErrorPage
	},
	computed: {
		collection () {
			return this.$route.params.collection
		},
		document () {
			return this.$route.params.document
		},
		action () {
			return this.$route.params.action
		}
	}
}
</script>
