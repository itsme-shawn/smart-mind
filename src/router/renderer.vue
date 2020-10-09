<!-- 동적으로 페이지 렌더링 -->

<template>
  <contents-dashboard v-if="category === 'contents' && document === 'dashboard'"></contents-dashboard>
  <contents-jungsin v-else-if="category === 'contents' && document === 'jungsin'"></contents-jungsin>
  <contents-dailyhistory v-else-if="category === 'contents' && document === 'daily_history'"></contents-dailyhistory>
  <contents-temp v-else-if="category === 'contents' && document === 'temp'"></contents-temp>

  <mypage-account v-else-if="category === 'mypage' && document === 'account'"></mypage-account>
  <mypage-status v-else-if="category === 'mypage' && document === 'status'"></mypage-status>
  <mypage-budae v-else-if="category === 'mypage' && document === 'budae'"></mypage-budae>

  <help-faq v-else-if="category === 'help' && document === 'FAQ'"></help-faq>
  <help-guide v-else-if="category === 'help' && document === 'guide'"></help-guide>
  <help-intentions v-else-if="category === 'help' && document === 'intentions'"></help-intentions>

  <error-page v-else></error-page>
</template>

<script>

// Contents (수강하기 배너)
import ContentsDashboard from '../views/contents/dashboard/index.vue'
import ContentsJungsin from '../views/contents/jungsin/index.vue'
import ContentsDailyhistory from '../views/contents/daily_history/index.vue'
import ContentsTemp from '../views/contents/temp/index.vue'

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
  components : {
    ContentsDashboard, ContentsJungsin, ContentsDailyhistory, ContentsTemp,
    MypageAccount, MypageBudae, MypageStatus,
    HelpFaq, HelpGuide, HelpIntentions,
    ErrorPage
  },
  computed : {
    category () {
      return this.$route.params.category
    },
    document () {
      return this.$route.params.document
    }
  }
}
</script>
