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
		<v-hover class="mb-10">
			<template v-slot:default="{ hover }">
				<v-card class="mx-auto mt-5" max-width="600">
				<v-responsive :aspect-ratio="16/9">
				<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
					<v-img class="white--text align-top" max-height="400"
					:src="require('../../../assets/bongchang-2.jpg')">
					<v-card-title>이번주의 정신전력 교육</v-card-title>
					</v-img>
				<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->

					<!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
					<v-card-subtitle class="pb-2">
					10월 3주차
					</v-card-subtitle>
					<!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
					<v-card-text class="text--primary">
					<h3>이봉창 의사와 '애국헌신'</h3>

					<div>독립운동가로 살다가 돌아가신 이봉창 의사를 통해 '애국헌신'을 배우다</div>
					</v-card-text>
					<v-fade-transition>
					<v-overlay v-if="hover" absolute color="#dedede">
						<v-btn>참여하기</v-btn>
					</v-overlay>
					</v-fade-transition>
					</v-responsive>
				</v-card>
			</template>
		</v-hover>
		<v-divider></v-divider>
		</v-container>

    <!-- 개인별 -->
    <v-card color="transparent">
      <v-card-title class="align-top font-weight-bold mb-4">내 정신전력 교육 현황</v-card-title>
      <v-card-text>나의 정신전력 교육 제출 현황을 조회할 수 있습니다.</v-card-text>
      <!-- 날짜 선택 부분(년/월까지만 입력받음) -->
      <v-container fluid class="pa-3">
          <v-form v-model="valid" ref="form" >
          <v-row align="center">
              <v-col class="d-flex" cols="6" sm="2" xs="6">
                <v-select v-model="year" :items="yearList" label="년" required :rules="[rule.required]"></v-select>
              </v-col>
              <v-col class="d-flex" cols="6" sm="2" xs="6">
                <v-select v-model="month" :items="monthList" label="월" required :rules="[rule.required]"></v-select>
              </v-col>
            </v-row>
            <v-btn :disabled="!valid" color="success" @click="selectYearMonth">조회</v-btn>
          </v-form>
      </v-container>
      <!-- 날짜 선택 부분 -->
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
			selectedArticleId: '',
			selectedArticleTitle: '',
			year: '',
			month: '',
			week: '',
			msgs: [],
			Q1: '',
			Q2: '',
			ref: null,
			isEmpty: true, // DB에 조회했을 때 data 가 존재하면 false
			beforeFilteredArticleId: []
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
			this.beforeFilteredArticleId.splice(0)
			this.selectedArticleId = ''
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
									})
								})
						})
					})
			})

		},
		selectYearMonth () { // form 에서 조회 버튼을 눌렀을 때 DB에서 해당 survey 데이터를 fetch 를 시킴
			// console.log('YMW',this.year,this.month,this.week)
			this.msgs.splice(0) // fetch 전 배열 비우기
			this.fetch()
		}
	}
}
</script>
