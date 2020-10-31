<template>
	<v-container class="mb-12 pa-5">
		<v-container>
      <div>
      <v-card-text>
          <v-toolbar-title class="text-h4 font-weight-bold ">정신전력 현황</v-toolbar-title>
          <v-card-text class="mt-3">나의 현재 정신전력 현황을 살펴봅시다</v-card-text>
      </v-card-text>
      </div>
		  <v-divider></v-divider>
    </v-container>

		<v-divider></v-divider>

    <!-- 개인별 -->
    <v-card color="transparent">
      <v-card-title class="align-top font-weight-bold mb-4">내 정신전력 교육 현황</v-card-title>
      <v-card-text>나의 정신전력교육 제출 현황을 조회할 수 있습니다. (데이터가 하나인 경우에는 그래프가 표현되지 않습니다)</v-card-text>
      <!-- 날짜 선택 부분(년/월까지만 입력받음) -->
      <v-container fluid class="pa-3">
          <v-form v-model="valid" ref="form">
            <v-row>
                <v-col cols="5" md="4">
                  <v-select v-model="year" :items="yearList" label="년" required :rules="[rule.required]"></v-select>
                </v-col>
                <v-col cols="5" md="4">
                  <v-select v-model="month" :items="monthList" label="월" required :rules="[rule.required]"></v-select>
                </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-start" cols="2" md="4">
                <v-btn  :disabled="!valid" color="success" @click="selectYearMonth" :loading="loading">조회</v-btn>
              </v-col>
            </v-row>
          </v-form>
      </v-container>
      <!-- 날짜 선택 부분 끝 -->

      <!--sparkline 시작-->
      <v-container class="mb-6 mt-3" >
        <!--달 선택하지 않았을 경우 보여지게 되는 card-->
      <v-card max-width="800" class="mx-auto" color="#385F73" dark v-if="!graphData.show">
            <v-card-title class="headline">연도와 월을 선택하지 않았어요!</v-card-title>
            <v-card-subtitle>점수 조회를 원하는 연도/월을 선택한 뒤 조회을 누르세요.</v-card-subtitle>
        </v-card>
        <!--병사를 선택하지 않았을 경우 보여지게 되는 card 종료-->
        <!--병사를 선택한 후 보여지게 되는 graph-->
        <v-card max-width="900" class="mx-auto text-center" color="green" dark v-if="graphData.show">
            <template>
                <v-sparkline
                    height="80"
                    :value="graphData.value"
                    padding="30"
                    :smooth="graphData.radius || false"
                    :line-width="graphData.width"
                    :stroke-linecap="graphData.lineCap"
                    color="rgba(255, 255, 255, .7)"
                    :gradient-direction="graphData.gradientDirection"
                    :type="graphData.type"
                    :auto-line-width="graphData.autoLineWidth"
                    :labels="graphData.labels"
                    auto-draw
                    show-labels
                >
                </v-sparkline>
            </template>
            <v-card-text>
            <div class="display-1 font-weight-thin">
                {{user.displayName}} 의 평점 통계
            </div>
            </v-card-text>
        </v-card>
        </v-container>
        <!--sparkline 끝-->
      <v-card>
        <v-expansion-panels popout >
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
              <v-col  sm="5" md="3">
                <strong >{{msg.submitAuthor.displayName}}</strong>
              </v-col>
              <v-col class="text-no-wrap" cols="5" sm="3">
                <strong >{{(msg.title).substring(0,7)}} </strong>
              </v-col>
              <v-col cols="5" sm="3">
                <v-chip color="success" label small class="mr-4" v-if="msg.rating && msg.comment">평가 완료</v-chip> <!-- 추후 사용자의 수강상태에 따라서 동적으로 수강 전/ 수강 완료 로 핸들링해줄 예정 -->
                <v-chip color="error" label small class="mr-4" v-else >평가 미작성</v-chip>
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
            <v-card-text class="texts mt-2">평가</v-card-text>
            <v-subheader>각 부대의 관리자가 남긴 평가입니다.</v-subheader>
            <v-textarea v-model="msg.comment" filled readonly auto-grow ></v-textarea>
            <v-rating v-model="msg.rating" readonly half-increments hover background-color="grey lighten-1" color="warning" large value="5"></v-rating>
          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-card>
    <!-- 개인별 끝 -->

	</v-container>
</template>

<script>
export default {
	data () {
		return {
			yearList: ['2020년', '2021년'],
			monthList: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			valid: false,
			rule: { required: v => !!v || '필수 항목입니다.' },
			year: '',
			month: '',
			week: '',
			msgs: [],
			Q1: '',
			Q2: '',
			ref: null,
			isEmpty: true, // DB에 조회했을 때 data 가 존재하면 false
			beforeFilteredArticleId: [],
			loading: false,
			// graph data
			graphData: {
				show: false,
				labels: [], // 몇주차 (그래프 x축)
				width: 2,
				lineCap: 'round',
				radius: 4,
				gradientDirection: 'top',
				type: 'trend',
				autoLineWidth: false,
				value: [], // DB에서 받아오는 rating값이 담길 배열
				title: ''
			}
		}
	},
	computed: {
		user () { // Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		}
	},
	methods: {
		async fetch () {
			this.loading = true
			this.graphData.show = true
			this.msgs.splice(0) // fetch 전 배열 비우기
			this.beforeFilteredArticleId.splice(0)
			this.graphData.labels.splice(0)
			this.graphData.value.splice(0)
			// console.log('uid',this.user.uid)

			// 사용자의 uid를 바탕으로 users 컬렉션에서 자신이 제출한 articles의 id 값들 가져오기 (beforeFilteredArticleId)

			// /learning/jungsin/articles/ 에서 해당 articles id 을 검색한 뒤 사용자가 선택한 year,month 와 비교해서 일치하는 article id 만 필터링 (afterFilteredArticleId)

			// 필터링된 id 로만 survey_result 에서 데이터 가져오기

			await this.$firebase.firestore().collection('users').doc(this.user.uid).collection('jungsin')
				.get()
				.then((sn) => {
					sn.forEach((doc) => {
						// console.log(doc.id, ' => ', doc.data())
						this.beforeFilteredArticleId.push(doc.id)
					})
				})
				.catch(function (error) {
					console.log('Error getting documents: ', error)
				})

			// console.log('before',this.beforeFilteredArticleId)

			await this.beforeFilteredArticleId.forEach((id) => {
        	// /learning/jungsin/articles/ 에서 해당 articles id 을 검색한 뒤 사용자가 선택한 year,month 와 비교해서 일치하는 article id 만 필터링 (afterFilteredArticleId)
				this.$firebase.firestore().collection('learning').doc('jungsin').collection('articles')
					.where('article_id', '==', id).where('year', '==', this.year).where('month', '==', this.month)
					.get()
					.then((querySnapshot) => {
						querySnapshot.forEach((doc) => {
							// console.log(doc.id, ' => ', doc.data())
							// aid,year,month 로 필터링된 id 로 survey_result에서 데이터 가져오기
							this.$firebase.firestore().collection('survey_result').doc('jungsin').collection(doc.id)
								.where('submitAuthor.uid', '==', this.user.uid)
								.get()
								.then((sn) => {
									sn.forEach((doc) => {
										// console.log(doc.id, ' => ', doc.data())
										this.msgs.push(doc.data())
										this.graphData.labels.push(doc.data().title.substring(0, 7))
										this.graphData.value.push(doc.data().rating)
									})
								})
						})
					})
			})
			this.loading = false
		},
		selectYearMonth () { // form 에서 조회 버튼을 눌렀을 때 DB에서 해당 survey 데이터를 fetch 를 시킴
			// console.log('YMW',this.year,this.month,this.week)
			this.msgs.splice(0) // fetch 전 배열 비우기
			this.fetch()
		}
	}
}
</script>

<style scoped>
	.texts{
		font-size: 1.5rem;
		font-weight: 500;
		letter-spacing: .0125em;
	}
	.qtexts{
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: .009375em;
	}
</style>
