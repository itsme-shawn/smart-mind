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
					<h3>믿음직하고 든든한 국군, ‘대체불가’ 특수전부대</h3>

					<div>김 관 용 이데일리 정치부 외교안보팀장</div>
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

		<!---->
		<div>
            <v-card-text class="mt-10">
                <v-toolbar-title class="font-weight-bold ml-5">부대 관리</v-toolbar-title>
            </v-card-text>
        </div>
		<v-container>
			<div class="d-flex justify-center mb-12">
				<v-card class="mr-3" max-height="600" width="400" min-width="400">
						<v-card-title class="align-top mb-4">월간 퀴즈 점수</v-card-title>
							<v-select
								v-model="select"
								:items="items"
								label="병사를 선택하세요"
							></v-select>
							<template>
								<v-card color="green">
									<v-sparkline
										height="250"
										:value="monthlyScore[1].현재"
										line-width="2"
										padding="12"
										smooth="100"
										stroke-linecap="round"
										color="rgba(255,255,255,.7)"
										gradient-direction="top"
										type="trend"
										:fill= "fill"
										auto-draw
									><template v-slot:label="item">{{item.value}}</template>
									</v-sparkline>
								</v-card>
							</template>
				</v-card>
				<v-card class="ml-3" max-height="600" width="400">
						<v-card-title class="align-top mb-4">이번주의 퀴즈 점수</v-card-title>
						<v-card-subtitle class="pb-12">병사별 퀴즈 점수</v-card-subtitle>
							<v-card class="pt-4">
								<v-card-subtitle>만점 : 100</v-card-subtitle>
								<div>
									<column-chart :data= 'score'></column-chart>
								</div>
							</v-card>
				</v-card>
			</div>
			<v-card color="transparent">
				<v-card-title class="align-top mb-4">병사별 정신전력 교육 현황</v-card-title>
				<v-slider v-model="day" max="4" step="1" ticks="always" tick-size="4" :tick-labels="ticksLables"></v-slider>

				<!--데이터가 들어가는 리스트 부분 시작, 데이터가 주차가 안되어 없다면 v-if로 div만들어서 아직 자료가 없다고 표시하게 만들 예정-->
				<template>
					<v-container fluid>
						<v-row justify="center">
						<v-subheader>{{day + 1}}주차</v-subheader>
						<v-subheader>(위의 슬라이더로 주차를 변경해도 밑의 리스트가 바뀌지 않는 이유는 모든 주차의 데이터가 같기 때문, 각 주차별로 데이터를 달리하면 바뀜)</v-subheader>
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
									>
									<v-icon
										v-else
										:color="message.color"
										v-text="message.icon"
									></v-icon>
									</v-avatar>
								</v-col>
								<v-col
									class="hidden-xs-only"
									sm="5"
									md="3"
								>
									<strong v-html="message.name"></strong>
									<span
									v-if="message.total"
									class="grey--text"
									>
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
								<v-card-text v-text="content1.현재"></v-card-text>
								<v-card-text v-text="content2.현재"></v-card-text>
							</v-expansion-panel-content>

							</v-expansion-panel>
						</v-expansion-panels>
						</v-row>
					</v-container>
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
			labels: ['일', '월', '화', '수', '목', '금', '토'],
			day: 0,
			fill: true,
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

			monthlyScore: [
				{
					현수: [80, 70, 90, 100]
				},
				{
					현재: [100, 90, 70, 80]
				},
				{
					이현: [100, 60, 80, 90]
				}
			],
			select: '현수',

			ticksLables: [
				'1주차',
				'2주차',
				'3주차',
				'4주차',
				'5주차'
			],

			// 병사별 주간정신전력 현황 데이터
			messages: [
				{
					avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu92A3GO29sPEXyfoYIwCWRHIbhljaLOVkAyePpz=s32-c-mo',
					name: '현재',
					title: '1주차 정신전력교육'

				}
			],
			question: {
				one: '4차 산업혁명 기술을 우리 군에 접목하여 강한 군대를 만들 수 있는 현실성 있는 방안에 대해 말해보자',
				two: '첨단 무기체계가 개발되고 도입되는 상항에서도 장병 개인의 전투기술 연마와 정신적 대비태세가 중요한 이유에 대해 말해보자'
			},
			content1: {
				현재: '4차 산업혁명 기술을 우리 군에 접목시키려면 우선 그에 따른 인프라가 구축되어야 한다. 대표적을 IoT기술의 경우 접목시킨다면 군에서 운용하는 여러 장비들에 네트워크를 부여할 수 있게 되는데, 대표적으로 위치 정보를 가져올 수 있고, 전투복에 접목된다면 병사의 신체 능력도 알 수 있어 부상이 있을 경우 빠른 대처가 가능해진다. 그러나 네트워크를 운용해야 하기 때문에 보안 문제 해결이 가장 시급한 과제인 것으로 보인다.'
			},
			content2: {
				현재: '첨단 무기쳬계가 개발되고 도입이 되더라도 그에 맞는 개인의 전투기술과 작전계획, 전술, 전략의 수립이 중요하다. 강한 군대는 병력이 많거나 무기가 좋다고 강한 군대가 아니다. 균형있게 유무형의 전력을 갖추고 제대로 싸울 준비가 되어 있어야 강한 군대이다. '
			}
		}
	},
	created () {
		console.log('created')
		this.call()
	},
	methods: {
		call () {
			console.log(this.monthlyScore[0].현수)
		}
	}

}
</script>
