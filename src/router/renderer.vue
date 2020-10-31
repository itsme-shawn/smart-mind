<!-- 동적으로 페이지 렌더링 -->

<template>
  <learning-dashboard
    v-if="collection === 'learning' && document === 'dashboard'">
  </learning-dashboard>
  <!-- 공지사항(collection: notice / document : posting) 게시판도 부득이하게 learning 컴포넌트를 사용하고있다. 가능하다면 추후 수정 예정-->
  <learning-board
    v-else-if="(collection === 'learning' || collection === 'notice') && !action" :collection="collection" :document="document">  <!-- doument props 에는 jungsin, daily_history 등이 들어가서 동적으로 각각의 게시판을 생성한다. -->
  </learning-board>
  <learning-board-form
    v-else-if="(collection === 'learning' || collection === 'notice') && action === 'board-write'" :collection="collection" :document="document" :action="action">
  </learning-board-form>
  <learning-article-form
    v-else-if="(collection === 'learning' || collection === 'notice') && (action === 'article-write' || action==='article-update') " :collection="collection" :document="document" :action="action"> <!-- 게시물 작성과 수정을 같은 컴포넌트로 재활용 -->
  </learning-article-form>

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
