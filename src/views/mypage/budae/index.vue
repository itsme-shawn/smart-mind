<template>
	<v-container class="mb-12">
		<div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold ml-5">부대 관리</v-toolbar-title>
            </v-card-text>
        </div>
		<v-divider></v-divider>
		<v-hover>
			<template v-slot:default="{ hover }">
				<v-card class="mx-auto mt-5" max-width="600">
				<v-responsive :aspect-ratio="16/9">
				<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
					<v-img class="white--text align-top" max-height="400"
					src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
					<v-card-title>이번주의 정신전력 교육</v-card-title>
					</v-img>
				<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
					<!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
					<v-card-subtitle class="pb-2">
					10월 2주차
					</v-card-subtitle>
					<!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
					<v-card-text class="text--primary">
					<h3>믿음직하고 든든한 국군, '대체불가' 특수전부대</h3>
					<div>김 관 용 이데일리 정치부 외교안보팀장</div>
					</v-card-text>
					<v-fade-transition>
					<v-overlay v-if="hover" absolute color="#dedede">
						<v-btn @click="jungsin()">참여하기</v-btn>
					</v-overlay>
					</v-fade-transition>
					</v-responsive>
				</v-card>
			</template>
		</v-hover>
		<!---->
		<div>
            <v-card-text class="mt-10">
                <v-toolbar-title class="font-weight-bold ml-5">부대 관리</v-toolbar-title>
            </v-card-text>
        </div>
		<v-container>
			<v-layout wrap row class="px-12" align-center justify-center>
        <v-flex class="justify-center mb-12 pa-7" xs12 md6>
          <v-card class="" max-height="500">
            <v-card-title class="align-top mb-4">월간 퀴즈 점수</v-card-title>
            <v-select
              v-model="select"
              :items="items"
              label="병사를 선택하세요"
            ></v-select>
			<span>{{select}}</span>
            <template>
              <v-card color="green" max-height="500">
                <v-sparkline
                  height="100"
                  :value="monthlyScore.현수"
                  line-width="2"
                  padding="12"
                  stroke-linecap="round"
                  color="rgba(255,255,255,.7)"
                  gradient-direction="top"
                  type="trend"
                  :fill="fill"
                  auto-draw
                  ><template v-slot:label="item">{{ item.value }}</template>
                </v-sparkline>
              </v-card>
            </template>
          </v-card>
        </v-flex>
        <v-flex class="justify-center mb-12 pa-7" xs12 md6>
          <v-card class="" height="500">
            <v-card-title class="align-top mb-4"
              >이번주의 퀴즈 점수</v-card-title
            >
            <v-card-subtitle class="pb-12">병사별 퀴즈 점수</v-card-subtitle>
            <v-card class="pt-4">
              <v-card-subtitle>만점 : 100</v-card-subtitle>
              <div>
                <column-chart :data="score"></column-chart>
              </div>
            </v-card>
          </v-card>
        </v-flex>
      </v-layout>

			<v-card color="transparent">
				<v-card-title class="align-top mb-4">병사별 정신전력 교육 현황</v-card-title>
				<!--데이터가 들어가는 리스트 부분 시작, 데이터가 주차가 안되어 없다면 v-if로 div만들어서 아직 자료가 없다고 표시하게 만들 예정-->
				<template>
					<v-stepper non-linear v-model="e1">
						<!--월 선택 버튼-->
						<v-dialog ref="dialog" v-model="modal"
							:return-value.sync="date" persistent width="290px">
							<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="date"
								label="월 선택"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
							</template>
							<v-date-picker v-model="date" type="month" scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary"
								@click="modal = false">
								취소
							</v-btn>
							<v-btn text color="primary"
								@click="selectYearAndMonth">
								확인
							</v-btn>
							</v-date-picker>
						</v-dialog>
						<!--월 선택 버튼-->
						<v-stepper-header>
							<template v-for="n in steps">
								<v-stepper-step editable :key="`${n}-step`" :step="n" @click="selectWeek(n)">
									{{n}}주차
								</v-stepper-step>
								<v-divider v-if="n !== steps" :key="n"></v-divider>
							</template>
						</v-stepper-header>
						<v-stepper-items>
						<v-stepper-content v-for="n in steps" :key="`${n}-content`" :step="n">
							<v-card>
								<v-expansion-panels popout>
									<v-expansion-panel
									v-for="(msg, i) in msgs"
									:key="i"
									hide-actions
									>
									<v-expansion-panel-header>
										<v-row align="center" class="spacer" no-gutters>
                      <v-col cols="4" sm="2" md="1">
                        <v-avatar size="36px">
                          <v-img :src="msg.submitAuthor.photoURL" alt="Avatar"/>
                        </v-avatar>
                      </v-col>
											<v-col class="hidden-xs-only" sm="5" md="3">
												<strong >{{msg.submitAuthor.displayName}}</strong>
                      </v-col>
											<v-col class="text-no-wrap" cols="5" sm="3">
												<strong >{{msg.subject_kr}} {{n}}주차</strong> <!-- 나중에 각 주차별 타이틀로 바꿔줄것 -->
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
						</v-stepper-content>
						</v-stepper-items>
					</v-stepper>
				</template>
			</v-card>
		</v-container>
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
			// el - 초기값은 1주차, steps는 최대 5주차까지.
			e1: 1,
			steps: 5,
			// 월 선택 텝
			date: new Date().toISOString().substr(0, 7),
			menu: false,
			modal: false,
			year: '',
			month: '',
			week: '',
			labels: ['일', '월', '화', '수', '목', '금', '토'],
			fill: false,
			// 이번주의 퀴즈 점수 데이터
			score: {
				현수: 100,
				현재: 70,
				이현: 80,
				수현: 90,
				재현: 80,
				현이: 100,
				철수: 90,
				영희: 100
			},
			items: [
				'현수',
				'현재',
				'이현',
				'수현',
				'재현',
				'현이',
				'철수',
				'영희'
			],
			// 월간 퀴즈 점수 병사 점수인데 dropdown으로 선택했을 때 해당 병사의
			// 월간 퀴즈 점수 최신 4개를 가져와서 value에 넣고, 해당하는 그래프를 그리면 되는데
			// 어떻게 해야할지 모르겠다
			value: [80, 70, 90, 100],
			monthlyScore: {

				현수: [80, 70, 90, 100],

				현재: [100, 90, 70, 80],

				이현: [100, 60, 80, 90]

			},
			select: '현수',

			ticksLables: [
				'1주차',
				'2주차',
				'3주차',
				'4주차',
				'5주차'
			],
			// 병사별 주간정신전력 현황 데이터
			msgs: [],
			Q1: '',
			Q2: '',
			ref: null
		}
	},
	created () {
		this.fetch()
	},
	watch: {
    /*
		year () {
			this.fetch()
		},
		month () {
			this.fetch()
    },
    */
		week () {
			this.fetch()
		}
	},
	computed: {
		user () { // Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		},
		selectS: function () {
			return this.monthlyScore.select
		}
	},
	methods: {
		jungshin: function (event) {
			this.$router.push('../jungsin')
			console.log('hello')
		},
		async fetch () {
			this.msgs.splice(0) // fetch 전 배열 비우기

			// 관리자가 선택한 year,month,week 을 바탕으로 해당 articles의 id 값을 가져오기
      // console.log(this.year, this.month, this.week)

      // 중첩쿼리문으로 작성 month week
			this.$firebase.firestore().collection('learning').doc('jungsin').collection('articles')
				.where('year', '==', this.year)
				.then(function (querySnapshot) {
					querySnapshot.forEach(function (doc) {
						// doc.data() is never undefined for query doc snapshots
						console.log(doc.id, ' => ', doc.data())
					})
				})
				.catch(function (error) {
					console.log('Error getting documents: ', error)
				})

			// question 받아오기
			this.$firebase.firestore().collection('learning').doc('jungsin').collection('articles').doc('1603020093204').get()
				.then(doc => {
					// console.log('doc.data()', doc.data())
					this.Q1 = doc.data().question.Q1
					this.Q2 = doc.data().question.Q2
					// console.log(this.Q1, this.Q2)
				}

				)

			// 사용자가 survey 한 데이터 받아오기
			this.ref = this.$firebase.firestore().collection('survey_result').doc('jungsin').collection('1603020093204')
			await this.ref.get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					// console.log(doc.id, ' => ', doc.data())
					this.msgs.push(doc.data())
				})
			})
			// console.log(this.msgs)
		},
		selectYearAndMonth () {
			// $refs.dialog.save(date)
			this.$refs.dialog.save(this.date)
			var ymdate = this.date.split('-')
			this.year = ymdate[0] + '년' // 2020년 (string)
			this.month = ymdate[1] + '월' // 10월
			ymdate = `${ymdate[0]}-${ymdate[1]}` // '2020-10'
			console.log('ty,tm', this.year, this.month)
		},
		selectWeek (n) {
			this.week = n + '주차'
			console.log('week', this.week) // 3주차
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
