<template>
	<v-container class="mb-12 pa-5">
		<div>
      <v-card-text>
          <v-toolbar-title class="text-h4 font-weight-bold ">부대 관리</v-toolbar-title>
          <v-card-text class="mt-3">
          해당 부대 용사들의 교육 현황을 확인하고 평가할 수 있습니다.
      </v-card-text>
      </v-card-text>
    </div>
		<v-divider></v-divider>

  <!-- 토글 버튼 -->
    <v-row class="pa-5">
      <v-col
        cols="12"
        class="py-1"
      >
        <v-btn-toggle
          v-model="option"
          color="deep-purple accent-3"
          mandatory
        >
          <v-btn value="comment">
            <span class="text-h6">평가하기</span>

            <v-icon right>
              mdi-comment-edit
            </v-icon>
          </v-btn>

          <v-btn value="graph">
            <span class="text-h6">통계보기</span>

            <v-icon right>
              mdi-file-chart
            </v-icon>
          </v-btn>

        </v-btn-toggle>
      </v-col>
    </v-row>

    <!-- 주차별 평가하기 -->
    <v-container v-if="option === 'comment'">
    <v-card color="transparent">
      <v-card-title class="align-top font-weight-bold mb-4">주차별 정신전력 교육 현황</v-card-title>
      <v-card-text>각 주차별 용사들의 정신전력 교육 제출 현황과 제출 의견을 조회할 수 있습니다.</v-card-text>
      <!-- 날짜 선택 부분 -->
      <v-container fluid class="pa-3">
          <v-form v-model="valid" ref="form" >
            <v-row>
                <v-col cols="4" xs="4" sm="4">
                  <v-select v-model="year" :items="yearList" label="년" required :rules="[rule.required]"></v-select>
                </v-col>
                <v-col cols="4" xs="4" sm="4">
                  <v-select v-model="month" :items="monthList" label="월" required :rules="[rule.required]"></v-select>
                </v-col>
                <v-col cols="4" xs="4" sm="4">
                  <v-select v-model="week" :items="weekList" label="주차" required :rules="[rule.required]"></v-select>
                </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-start" cols="8">
                <v-btn :disabled="!valid" color="success" @click="selectYearMonthWeek">조회</v-btn>
              </v-col>
            </v-row>
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
            <v-card-text class="texts mt-2">평가하기</v-card-text>
            <v-subheader>용사가 제출한 답변에 대해 comment 와 별점을 매겨주세요</v-subheader>
            <v-textarea filled label="Comment를 작성해주세요" auto-grow></v-textarea>
            <v-rating v-model="rating" hover background-color="grey lighten-1" color="warning" large ></v-rating>
            <v-btn color="error" class='mt-5 ml-2' elevation="3">평가완료</v-btn>
          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-card>
    </v-container>
    <!-- 주차별 평가하기 끝 -->


    <!-- 통계보기 -->
		<v-container class="mb-12" v-if="option === 'graph'" >

    <!-- 용사별 -->
    <v-card color="transparent" class="mt-5">
      <v-card-title class="align-top font-weight-bold mb-4">용사별 정신전력 교육 현황</v-card-title>
      <v-card-text>특정 용사의 교육 현황을 조회할 수 있습니다</v-card-text>
      <!-- 용사 선택 부분 -->
      <v-container fluid class="pa-3">
          <v-form v-model="valid2" ref="form" >
          <v-row align="center">
              <v-col class="d-flex" cols="6" sm="4" xs="3">
                <v-select v-model="sUser" :items="userList" label="용사 선택" required :rules="[rule.required]"></v-select>
              </v-col>
            </v-row>
            <v-btn :disabled="!valid2" color="success" @click="selectUser">조회</v-btn>
          </v-form>
      </v-container>
      <!-- 용사 선택 부분 -->
      <v-card>
        <v-expansion-panels popout >
          <v-expansion-panel
          v-for="(msg2, i) in msgs2"
          :key="i"
          hide-actions
          >
          <v-expansion-panel-header >
            <v-row align="center" class="spacer" no-gutters>
              <v-col class="hidden-xs-only" cols="4" sm="2" md="1">
                <v-avatar size="24px">
                  <v-img :src="msg2.submitAuthor.photoURL" alt="Avatar"/>
                </v-avatar>
              </v-col>
              <v-col  sm="5" md="3">
                <strong >{{msg2.submitAuthor.displayName}}</strong>
              </v-col>
              <v-col class="text-no-wrap" cols="5" sm="3">
                <strong >{{(msg2.title).substring(0,7)}} </strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text class="texts mt-2">질문</v-card-text>
            <v-card-text class="qtexts"><span class="texts">1. </span> {{msg2.question.Q1}}</v-card-text>
            <v-card-text class="qtexts"><span class="texts">2. </span> {{msg2.question.Q2}}</v-card-text><v-divider></v-divider>
            <v-card-text class="texts mt-2">답변</v-card-text>
            <v-card-text class="qtexts"><span class="texts">1. </span> {{msg2.a1}}</v-card-text>
            <v-card-text class="qtexts"><span class="texts">2. </span> {{msg2.a2}}</v-card-text>
            <v-divider/>

          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-card>
    <!-- 용사별 끝 -->

    <!--sparkline 추가-->
    <!--꺾은선그래프 graph들어가는 부분-->
			<!--병사를 선택하지 않았을 경우 보여지게 되는 card-->
			<v-card
			class="mx-auto"
			color="#385F73"
			dark
			v-if="notloadSparkline"
			>
				<v-card-title class="headline">병사를 선택하지 않았어요!</v-card-title>
				<v-card-subtitle>점수 조회를 원하는 병사를 선택한 뒤 확인을 누르세요.</v-card-subtitle>
				<v-img src="https://cdn.pixabay.com/photo/2020/10/10/14/38/leaves-5643327_960_720.png" max-height="300"></v-img>
			</v-card>
			<!--병사를 선택하지 않았을 경우 보여지게 되는 card 종료-->
			<!--병사를 선택한 후 보여지게 되는 graph-->
			<v-card
			class="mx-auto text-center"
			color="green"
			dark
			v-else>
				<template>
					<v-sparkline
						height="80"
						:value="value"
						padding="15"
						:smooth="radius || false"
						:line-width="width"
						:stroke-linecap="lineCap"
						color="rgba(255, 255, 255, .7)"
						:gradient-direction="gradientDirection"
						:type="type"
						:auto-line-width="autoLineWidth"
						auto-draw
					><template v-slot:label="item">
					{{ item.value }}점
					</template>
					</v-sparkline>
				</template>
				<v-card-text>
				<div class="display-1 font-weight-thin">
					Keep it up!
				</div>
				</v-card-text>
			</v-card>
			<!--병사를 선택한 후 보여지게 되는 graph 종료-->
		</v-container>
	<!--graph들어가는 부분 end-->
	<!--sparkline 추가-->

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
      option: '',
			yearList: ['2020년', '2021년'],
			monthList: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			weekList: ['1주차', '2주차', '3주차', '4주차', '5주차'],
			userList: [],
			sUser: '',
			valid: false,
			valid2: false,
			rule: { required: v => !!v || '필수 항목입니다.' },
			selectedArticleId: '',
			selectedArticleTitle: '',
			year: '',
			month: '',
			week: '',
			msgs: [],
			msgs2: [],
			Q1: '',
			Q2: '',
			ref: null,
			isEmpty: false, // DB에 조회했을 때 data 가 존재하면 false
			rating: '',
			// graph 들어가는부분 data
			labels: ['1주차', '2주차', '3주차', '4주차', '5주차'],
			width: 2,
			lineCap: 'round',
			radius: 4,
			gradientDirection: 'top',
			type: 'trend',
			autoLineWidth: false,
			// value가 데이터가 되는 부분
			value: [2, 5, 1, 4, 3],
			// form에서 선택하지 않았을 경우 보여지는 vue를 위한 값
			notloadSparkline: true
		}
	},
	computed: {
		user () { // Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		}
	},
	created () {
		this.loadUserList()
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
		},
		async loadUserList () { // 용사별 정신전력 교육 현황을 위해 user list 를 불러온다
			await this.$firebase.firestore().collection('users')
				.get()
				.then((sn) => {
					sn.forEach((doc) => {
						// console.log(doc.id, ' => ', doc.data())
						this.userList.push(doc.data().displayName)
					})
				})

			// console.log(this.userList)
		},
		async selectUser () {
			// 1. form 에서 입력 받은 displayName(this.sUser) 으로 uid 찾기
			// 2. uid 로 users 컬렉션에서 제출한 게시물들 가져오기

			this.msgs2.splice(0)
			await this.$firebase.firestore().collection('users')
				.where('displayName', '==', this.sUser)
				.get()
				.then((sn) => {
					sn.forEach((doc) => {
						// console.log(doc.id, ' => ', doc.data())
						const uid = doc.id // form 에서 입력받은 사용자의 uid
						this.$firebase.firestore().collection('users').doc(uid).collection('jungsin')
							.get()
							.then((sn2) => {
								sn2.forEach((doc2) => {
									this.msgs2.push(doc2.data())
								})
							})
					})
				})
				.catch(function (error) {
					console.log('Error getting documents: ', error)
				})
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
