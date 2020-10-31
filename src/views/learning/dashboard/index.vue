<template>
  <v-container class="pa-3" fluid :grid-list-md="!$vuetify.breakpoint.xs">

    <!-- 사용자 정보 카드 -->
    <v-row>
      <v-col cols="12">
        <v-card >
         <v-card-title primary-title>
          <div v-if="user !== null">
            <div class="grey--text">현재 사용자</div>
            <h3 class="headline">
              <v-icon medium color="success">mdi-account</v-icon
              >{{ user.displayName }} 님
            </h3>
          </div>
          <div v-else>
            <div class="grey--text">현재 사용자</div>
            <h3 class="headline">
              <v-icon medium color="success">mdi-account</v-icon
              >로그인해주세요
            </h3>
          </div>
        </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <!-- 사용자 정보 카드 끝 -->

      <v-row class="pa-3" justify="center">
        <!-- 주간정신전력교육 최근컨텐츠 시작 -->
        <v-col cols="9" md="6">
          <v-card height="400" color="#1F7087" dark>
            <div class="d-flex">
              <v-card-title class="headline">주간정신전력교육</v-card-title>
              <v-subheader class="ml-auto mt-2">
                <!-- <div v-if="collection=='learning'">
                  <v-chip color="success" label small class="mr-4" v-if="item.isComplete">수강 완료</v-chip>
                  <v-chip color="info" label small class="mr-4" v-else >수강 전</v-chip>
                </div>-->
                <div>
                  <v-chip color="success" label small class="mr-4" v-if="isComplete">수강 완료</v-chip>
                  <v-chip color="info" label small class="mr-4" v-else >수강 전</v-chip>
                </div>
                <v-spacer/>
              </v-subheader>
            </div>
            <v-divider></v-divider>
            <v-container class="d-flex align-end flex-column"><v-card-subtitle class="mt-auto">이번 주의 주간정신전력을 한눈에 볼 수 있습니다.</v-card-subtitle></v-container>
            <!--data가 들어갈 부분-->
            <v-text class="pl-4">10월 x주차 정신전력교육 - 봉오동 전투</v-text>
            <!--data가 들어갈 부분 끝-->
          </v-card>
        </v-col>
        <!-- 주간정신전력교육 최근컨텐츠 끝-->

        <!-- 우리역사바로알기의 최근컨텐츠 시작 -->
        <v-col cols="9" md="6">
          <v-card height="400" color="#385F73" dark>
            <div class="d-flex">
              <v-card-title class="headline">우리역사 바로알기</v-card-title>
              <v-subheader class="ml-auto mt-2">
                <!-- <div v-if="collection=='learning'">
                  <v-chip color="success" label small class="mr-4" v-if="item.isComplete">수강 완료</v-chip>
                  <v-chip color="info" label small class="mr-4" v-else >수강 전</v-chip>
                </div>-->
                <div>
                  <v-chip color="success" label small class="mr-4" v-if="isComplete">수강 완료</v-chip>
                  <v-chip color="info" label small class="mr-4" v-else >수강 전</v-chip>
                </div>
                <v-spacer/>
              </v-subheader>
            </div>
            <v-divider></v-divider>
            <v-container class="d-flex align-end flex-column"><v-card-subtitle class="mt-auto">최신의 우리역사 바로알기를 한눈에 볼 수 있습니다.</v-card-subtitle></v-container>
            <!--data가 들어갈 부분-->
            <v-text class="pl-4">우리역사바로알기의ㄻㅈㄷㄹ</v-text>
            <!--data가 들어갈 부분 끝-->
          </v-card>
        </v-col>
        <!-- 우리역사바로알기의 최근컨텐츠 끝 -->
      </v-row>

    <!-- 이번주 나의 부대원들은-->
    <v-row>
      <v-col cols="12">
          <v-container >
          <v-card color="transparent">
          <v-card-title class="align-top font-weight-bold "> {{this.cYear}} {{this.cMonth}} {{this.cWeek}}</v-card-title>
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
              </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-card>
        </v-container>
      </v-col>
    </v-row>
    <!-- 이번주 나의 부대원들은 끝-->
>>>>>>> 38c5d8534b9cc325933174ebfabf415b1810fc76
  </v-container>
</template>

<!--
<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs" class="pa-7">
    <v-layout wrap row align-center justify-center>
      <v-flex xs12 class="pb-2">
        <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div v-if="user !== null">
                    <div class="grey--text">현재 사용자</div>

                    <h3 class="headline">
                      <v-icon medium color="success">mdi-account</v-icon
                      >{{ user.displayName }} 님
                    </h3>
                  </div>
                  <div v-else>
                    <div class="grey--text">현재 사용자</div>
                    <h3 class="headline">
                      <v-icon medium color="success">mdi-account</v-icon
                      >로그인해주세요
                    </h3>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <div v-if="user !== null">
              <v-card-actions class="pa-2">
                <h4>권한 {{ user.level }}</h4>
                <v-spacer></v-spacer>
              </v-card-actions>
            </div>
            <div v-else>
              <h4>권한 guest</h4>
            </div>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex xs12 md6 class="pb-2">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card height="462px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="462"
                :src="require('../../../assets/bongchang-2.jpg')"
              >
                <v-card-title><h3>이번주의 정신전력 교육</h3></v-card-title>
                <v-expand-transition>

                  <div
                    v-if="hover"
                    class=" transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);

                    "
                  >

                    <v-row align="center" justify="center" xs12 class="pt-14">
                      <h2>이봉창 의사와 '애국헌신'</h2>

                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>

                  </div>

                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
      </v-flex>
      <v-flex xs12 md3 class="pb-2">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/myeong2.jpg')"
              >
                <v-card-title><h5 style="color: black">9월 1주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <v-card
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>'명량대첩' 불가능을 가능하게 하다</h2>

                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>

                  </v-card>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
        <v-hover class="mt-3">
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/hexo.jpg')"
              >
                <v-card-title><h5 style="color: black">9월 3주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>동료애를 배우다 '핵소 고지'</h2>

                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
      </v-flex>
      <v-flex xs12 md3 class="pb-2">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/yoon.jpg')"

              >
                <v-card-title><h5 style="color: black">9월 2주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>윤동주의 시에서 배우는 정신</h2>

                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
        <v-hover class="mt-3">
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/won2.jpg')"
              >
                <v-card-title><h5 style="color: black">9월 4주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>징기스칸의 전술은?</h2>

                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
      </v-flex>

      <v-flex xs12 sm12 class="pb-2">
        <v-card height="370px" :color="`#${i}12345`">
          <v-card-title>이번주 나의 의견</v-card-title>
          <v-list two-line>
            <v-list-item-group v-model="selected" multiple>
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                  <template>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>

                      <v-list-item-subtitle class="text--primary"
                        >답변 : <span v-html="item.headline"></span></v-list-item-subtitle
                      >

                      <v-list-item-subtitle
                        >정답 : <span v-html=" item.subtitle"></span></v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-action> </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index < items.length - 1"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>

      <v-flex xs12 class="pb-2">
        <v-container fluid class="mt-10">
          <v-card>
            <v-card-title>이번 주 나의 부대원들은?</v-card-title>
            <template>
              <v-container fluid>
                <v-row justify="center">
                  <v-subheader>{{ day + 1 }}주차</v-subheader>
                  <v-expansion-panels popout>
                    <v-expansion-panel
                      v-for="(message, i) in messages"
                      :key="i"
                      hide-actions
                    >
                      <v-expansion-panel-header>
                        <v-row align="center" class="spacer" no-gutters>
                          <v-col cols="4" sm="2" md="1">
                            <v-avatar size="36px">
                              <img
                                v-if="message.avatar"
                                alt="Avatar"
                                src="https://lh3.googleusercontent.com/ogw/ADGmqu92A3GO29sPEXyfoYIwCWRHIbhljaLOVkAyePpz=s32-c-mo"
                              />
                              <v-icon
                                v-else
                                :color="message.color"
                                v-text="message.icon"
                              ></v-icon>
                            </v-avatar>
                          </v-col>
                          <v-col class="hidden-xs-only" sm="5" md="3">
                            <strong v-html="message.name"></strong>
                            <span v-if="message.total" class="grey--text">
                              &nbsp;({{ message.total }})
                            </span>
                          </v-col>

                          <v-col class="text-no-wrap" cols="5" sm="3">
                            <strong v-html="message.title"></strong>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
                        <v-divider></v-divider>
                        <v-card-title>질문</v-card-title>
                        <v-card-text v-text="question.one"></v-card-text>
                        <v-card-text v-text="question.two"></v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>답변</v-card-title>
                        <v-card-text v-text="message.content1"></v-card-text>
                        <v-card-text v-text="message.content2"></v-card-text>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </template>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
-->

<script>
export default {
	data () {
		return {
			isEmpty: true,
			msgs: [],
			selectedArticleId: '',
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
			console.log(this.cYear, this.cMonth, this.cWeek)
			this.selectedArticleId = ''

			// year,month,week 을 바탕으로 해당 articles의 id 값을 가져오기
			// console.log('fetch',this.year, this.month, this.week)
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
				// console.log('msgs',this.msgs)
			} else {
				this.isEmpty = true
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
