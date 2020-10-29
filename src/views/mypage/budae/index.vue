<template>
	<v-container class="mb-12 pa-5">
		<div>
      <v-card-text>
          <v-toolbar-title class="text-h4 font-weight-bold ">부대 관리</v-toolbar-title>
          <v-card-text class="mt-3">
          해당 부대 병사들의 교육 현황을 확인하고 평가할 수 있습니다.
      </v-card-text>
      </v-card-text>
    </div>
		<v-divider></v-divider>

    <!-- 주차별 -->
    <v-card color="transparent">
      <v-card-title class="align-top font-weight-bold mb-4">주차별 정신전력 교육 현황</v-card-title>
      <v-card-text>병사들의 정신전력 교육 제출 현황과 제출 의견을 조회할 수 있습니다.</v-card-text>
      <!-- 날짜 선택 부분 -->
      <v-container fluid class="pa-3">
          <v-form v-model="valid" ref="form" >
          <v-row align="center">
              <v-col class="d-flex" cols="4" sm="2" xs="3">
                <v-select v-model="year" :items="yearList" label="년" required :rules="[rule.required]"></v-select>
              </v-col>
              <v-col class="d-flex" cols="4" sm="2" xs="3">
                <v-select v-model="month" :items="monthList" label="월" required :rules="[rule.required]"></v-select>
              </v-col>
              <v-col class="d-flex" cols="4" sm="2" xs="6">
                <v-select v-model="week" :items="weekList" label="주차" required :rules="[rule.required]"></v-select>
              </v-col>
            </v-row>
            <v-btn :disabled="!valid" color="success" @click="selectYearMonthWeek">조회</v-btn>
          </v-form>
      </v-container>
      <!-- 날짜 선택 부분 -->
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
              <v-col  sm="5" md="3">
                <strong >{{msg.submitAuthor.displayName}}</strong>
              </v-col>
              <v-col class="text-no-wrap" cols="5" sm="3">
                <strong >{{selectedArticleTitle}} </strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text class="texts">질문</v-card-text>
            <v-card-text class="qtexts"><span class="texts">1. </span> {{Q1}}</v-card-text>
            <v-card-text class="qtexts"><span class="texts">2. </span> {{Q2}}</v-card-text><v-divider></v-divider>
            <v-card-text class="texts">답변</v-card-text>
            <v-card-text class="qtexts"><span class="texts">1. </span> {{msg.a1}}</v-card-text>
            <v-card-text class="qtexts"><span class="texts">2. </span> {{msg.a2}}</v-card-text>
          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-card>
    <!-- 주차별 끝 -->

  </v-container>
</template>
<script>
import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))
export default {
	data () {
		return {
			yearList: ['2020년', '2021년'],
			monthList: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			weekList: ['1주차', '2주차', '3주차', '4주차', '5주차'],
			valid: false,
			rule: { required: v => !!v || '필수 항목입니다.' },
			selectedArticleId: '',
			selectedArticleTitle: '',
			year: '',
			month: '',
			week: '',
			msgs: [],
			Q1: '',
			Q2: '',
			ref: null,
			isEmpty: false // DB에 조회했을 때 data 가 존재하면 false
		}
	},
	computed: {
		user () { // Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		}
	},
	methods: {
		async fetch () {
			this.msgs.splice(0) // fetch 전 배열 비우기
			this.selectedArticleId = ''

			// 관리자가 선택한 year,month,week 을 바탕으로 해당 articles의 id 값을 가져오기
			// console.log('fetch',this.year, this.month, this.week)
			await this.$firebase.firestore().collection('learning').doc('jungsin').collection('articles')
				.where('year', '==', this.year).where('month', '==', this.month).where('week', '==', this.week)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						// console.log(doc.id, ' => ', doc.data())
						this.selectedArticleId = doc.data().article_id
						this.selectedArticleTitle = doc.data().title
						this.isEmpty = false
						// console.log('id', this.selectedArticleId)
					})
				})
				.catch(function (error) {
					console.log('Error getting documents: ', error)
				})

			if (this.selectedArticleId) // 관리자가 선택한 year,month,week 에 해당하는 article 이 존재할 때
			{
				// question,title 받아오기
				await this.$firebase.firestore().collection('learning').doc('jungsin').collection('articles').doc(this.selectedArticleId).get()
					.then(doc => {
						// console.log('doc.data()', doc.data())
						this.Q1 = doc.data().question.Q1
						this.Q2 = doc.data().question.Q2
						// console.log(this.Q1, this.Q2)
					}

					)

				// 사용자가 survey 한 데이터 받아오기
				this.ref = this.$firebase.firestore().collection('survey_result').doc('jungsin').collection(this.selectedArticleId)
				await this.ref.get().then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						// doc.data() is never undefined for query doc snapshots
						// console.log(doc.id, ' => ', doc.data())
						this.msgs.push(doc.data())
					})
				})
				// console.log(this.msgs)
			} else {
				this.isEmpty = true
			}
		},
		selectYearMonthWeek () { // form 에서 조회 버튼을 눌렀을 때 DB에서 해당 survey 데이터를 fetch 를 시킴
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
