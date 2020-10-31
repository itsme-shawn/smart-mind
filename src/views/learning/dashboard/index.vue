<template>
  <v-container class="pa-3" fluid :grid-list-md="!$vuetify.breakpoint.xs">

    <!-- 사용자 정보 카드 -->
    <v-row>
      <v-col cols="12">
        <v-card class="d-flex">
         <v-card-title primary-title>
            <div class="grey--text mr-5">현재 사용자</div>
              <v-icon medium color="success" class="hidden-xs-only">mdi-account</v-icon>{{ user.displayName }}

        </v-card-title>
        <v-card-title class="ml-auto align-top font-weight-bold hidden-xs-only"> {{this.cYear}} {{this.cMonth}} {{this.cWeek}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <!-- 사용자 정보 카드 끝 -->

      <v-row class="pa-5" justify="center">
        <!-- 주간정신전력교육 최근컨텐츠 시작 -->
        <v-col cols="12" md="5">
          <v-card height="300" color="#1F7087" dark>
            <div class="d-flex">
              <v-card-title class="headline">주간정신전력교육</v-card-title>
              <v-subheader class="ml-auto mt-2">
              <!--
                <div>
                  <v-chip color="success" label small class="mr-4" v-if="isComplete">수강 완료</v-chip>
                  <v-chip color="info" label small class="mr-4" v-else >수강 전</v-chip>
                </div>
              -->
                <v-spacer/>
              </v-subheader>
            </div>
            <v-divider></v-divider>
            <v-container class="d-flex align-end flex-column"><v-card-subtitle class="mt-auto">이번 주 주간정신전력 교육 컨텐츠입니다.</v-card-subtitle></v-container>
            <!--data가 들어갈 부분-->
            <v-text class="pl-4 " v-if="weekJungsin[0]">{{weekJungsin[0].title}}</v-text>
            <v-card-actions class="mt-10 ml-2"><v-btn to="/learning/jungsin">이동하기</v-btn></v-card-actions>
            <!--data가 들어갈 부분 끝-->
          </v-card>
        </v-col>
        <!-- 주간정신전력교육 최근컨텐츠 끝-->

        <!-- 우리역사바로알기의 최근컨텐츠 시작 -->
        <v-col cols="12" md="5">
          <v-card height="300" color="#385F73" dark>
            <div class="d-flex">
              <v-card-title class="headline">우리역사 바로알기</v-card-title>
              <v-subheader class="ml-auto mt-2">
              <!--
                <div>
                  <v-chip color="success" label small class="mr-4" v-if="isComplete">수강 완료</v-chip>
                  <v-chip color="info" label small class="mr-4" v-else >수강 전</v-chip>
                </div>
              -->
                <v-spacer/>
              </v-subheader>
            </div>
            <v-divider></v-divider>
            <v-container class="d-flex align-end flex-column"><v-card-subtitle class="mt-auto">이번 주 우리역사 바로알기 컨텐츠입니다.</v-card-subtitle></v-container>
            <!--data가 들어갈 부분-->
            <v-text class="pl-4" v-if="weekHistory[0]">{{weekHistory[0].title}}</v-text>
            <v-card-actions class="mt-10 ml-2"><v-btn to="/learning/daily_history">이동하기</v-btn></v-card-actions>
            <!--data가 들어갈 부분 끝-->
          </v-card>
        </v-col>
        <!-- 우리역사바로알기의 최근컨텐츠 끝 -->
      </v-row>

    <!-- 이번주 나의 부대원들은-->
    <v-row class="pb-12" justify="center">
      <v-col cols="12" md="10">
          <v-container >
          <v-card color="transparent">
            <v-card-title class="align-top font-weight-bold mb-4">이번 주 나의 전우들은?</v-card-title>

            <v-card-text>이번 주 정신전력교육 주제에 대해 전우들은 어떻게 생각했을까요?</v-card-text>
            <v-card>
            <v-alert v-if="isEmpty" type="error" border="left" class="mb-0">조회한 데이터가 없습니다.</v-alert>
            <v-expansion-panels popout v-else>
              <v-expansion-panel
              v-for="(msg, i) in msgs"
              :key="i"
              hide-actions
              >
              <v-expansion-panel-header >
                <v-row align="center" class="spacer" no-gutters>
                  <v-col class="hidden-xs-only" cols="4" sm="2" md="1">
                    <v-avatar size="24px">
                      <v-img :src="msg.submitAuthor.photoURL" alt="Avatar"/>
                    </v-avatar>
                  </v-col>
                  <v-col cols="4" sm="5" md="3">
                    <strong >{{msg.submitAuthor.displayName}}</strong>
                  </v-col>
                  <v-col class="text-no-wrap" cols="5" sm="3">
                    <strong >{{(msg.title).substring(0,7)}} </strong>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text class="texts">질문</v-card-text>
                <v-card-text class="qtexts"><span class="texts">1. </span> {{msg.question.Q1}}</v-card-text>
                <v-card-text class="qtexts"><span class="texts">2. </span> {{msg.question.Q2}}</v-card-text><v-divider></v-divider>
                <v-card-text class="texts">답변</v-card-text>
                <v-card-text class="qtexts"><span class="texts">1. </span> {{msg.a1}}</v-card-text>
                <v-card-text class="qtexts"><span class="texts">2. </span> {{msg.a2}}</v-card-text>
              </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-card>
        </v-container>
      </v-col>
    </v-row>
    <!-- 이번주 나의 부대원들은 끝-->

  </v-container>
</template>

<script>
export default {
	data () {
		return {
			isEmpty: true,
			msgs: [],
			weekJungsin: [],
			weekHistory: [],
			selectedArticleId: '',
			selectedArticleId2: '',
			cYear: '',
			cMonth: '',
			cWeek: ''
		}
	},
	created () {
		this.fetch()
	},
	computed: {
		user () {
			// Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		}
	},
	methods: {
		async fetch () {
			this.msgs.splice(0)
			const now = new Date()
			const yearMonthWeek = this.weekNumberByMonth(new Date(now.getFullYear(), now.getMonth(), now.getDate()))
			this.cYear = yearMonthWeek.year.toString() + '년'
			this.cMonth = yearMonthWeek.month.toString() + '월'
			this.cWeek = yearMonthWeek.weekNo.toString() + '주차'
			// console.log(this.cYear, this.cMonth, this.cWeek)
			this.selectedArticleId = ''
			this.selectedArticleId2 = ''

			// year,month,week 을 바탕으로 해당 주간정신전력교육articles의 id 값을 가져오기
			await this.$firebase.firestore().collection('learning').doc('jungsin').collection('articles')
				.where('year', '==', this.cYear).where('month', '==', this.cMonth).where('week', '==', this.cWeek)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						// console.log(doc.id, ' => ', doc.data())
						this.selectedArticleId = doc.data().article_id
						this.isEmpty = false
						// console.log('id', this.selectedArticleId)
					})
				})
				.catch(function (error) {
					console.log('Error getting documents: ', error)
				})

			if (this.selectedArticleId) { // 관리자가 선택한 year,month,week 에 해당하는 article 이 존재할 때
				// question,title 받아오기
				await this.$firebase.firestore().collection('learning').doc('jungsin').collection('articles').doc(this.selectedArticleId).get()
					.then(doc => {
						// console.log('doc.data()', doc.data())
						this.weekJungsin.push(doc.data())

						// console.log(this.Q1, this.Q2)
					})

				// 사용자가 survey 한 데이터 받아오기
				this.ref = this.$firebase.firestore().collection('survey_result').doc('jungsin').collection(this.selectedArticleId)
				await this.ref.get().then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						// doc.data() is never undefined for query doc snapshots
						// console.log(doc.id, ' => ', doc.data())
						this.msgs.push(doc.data())
					})
				})
				// console.log('msgs',this.msgs)
			} else {
				this.isEmpty = true
			}

			// 우리역사 바로알기 데이터 fetch
			// year,month,week 을 바탕으로 해당 우리역사바로알기의 articles의 id 값을 가져오기
			await this.$firebase.firestore().collection('learning').doc('daily_history').collection('articles')
				.where('year', '==', this.cYear).where('month', '==', this.cMonth).where('week', '==', this.cWeek)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						// console.log(doc.id, ' => ', doc.data())
						this.selectedArticleId2 = doc.data().article_id
						// console.log('id', this.selectedArticleId)
					})
				})
				.catch(function (error) {
					console.log('Error getting documents: ', error)
				})

			if (this.selectedArticleId2) { // 관리자가 선택한 year,month,week 에 해당하는 article 이 존재할 때
				// question,title 받아오기
				await this.$firebase.firestore().collection('learning').doc('daily_history').collection('articles').doc(this.selectedArticleId2).get()
					.then(doc => {
						// console.log('history doc.data()', doc.data())
						this.weekHistory.push(doc.data())

						// console.log(this.Q1, this.Q2)
					})
			}
		},

		// 기준요일에 따른 주차구하는 함수.
		// 해당 주차 / 해당주차 시작날짜 / 해당주차 끝나는날짜를 리턴.
		weekNumberByMonth (dateFormat) {
			const inputDate = new Date(dateFormat)

			// 인풋의 년, 월
			let year = inputDate.getFullYear()
			let month = inputDate.getMonth() + 1

			// 수요일 기준 주차 구하기
			const weekNumberByWedFnc = (paramDate) => {
				const year = paramDate.getFullYear()
				const month = paramDate.getMonth()
				const date = paramDate.getDate()

				// 인풋한 달의 첫 날과 마지막 날의 요일
				const firstDate = new Date(year, month, 1)
				const lastDate = new Date(year, month + 1, 0)
				const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay()
				const lastDayOfweek = lastDate.getDay()

				// 인풋한 달의 마지막 일
				const lastDay = lastDate.getDate()

				// 첫 날의 요일이 목, 금, 토, 일요일 이라면 true
				const firstWeekCheck = firstDayOfWeek === 4 || firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7
				// 마지막 날의 요일이 월, 화 라면 true
				const lastWeekCheck = lastDayOfweek === 1 || lastDayOfweek === 2

				// 해당 달이 총 몇주까지 있는지
				const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7)

				// 날짜 기준으로 몇주차 인지
				let weekNo = Math.ceil((firstDayOfWeek - 1 + date) / 7)

				// 인풋한 날짜가 첫 주에 있고 첫 날이 월, 화, 수로 시작한다면 'prev'(전달 마지막 주)
				if (weekNo === 1 && firstWeekCheck) weekNo = 'prev'
				// 인풋한 날짜가 마지막 주에 있고 마지막 날이 월, 화로 끝난다면 'next'(다음달 첫 주)
				else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = 'next'
				// 인풋한 날짜의 첫 주는 아니지만 첫날이 월, 화 수로 시작하면 -1;
				else if (firstWeekCheck) weekNo = weekNo - 1

				return weekNo
			}

			// 수요일 기준의 주차
			let weekNo = weekNumberByWedFnc(inputDate)

			// 이전달의 마지막 주차일 떄
			if (weekNo === 'prev') {
				// 이전 달의 마지막날
				const afterDate = new Date(year, month - 1, 0)
				year = month === 1 ? year - 1 : year
				month = month === 1 ? 12 : month - 1
				weekNo = weekNumberByWedFnc(afterDate)
			}
			// 다음달의 첫 주차일 때
			if (weekNo === 'next') {
				year = month === 12 ? year + 1 : year
				month = month === 12 ? 1 : month + 1
				weekNo = 1
			}

			return { year, month, weekNo }
		}

	}
}
</script>
