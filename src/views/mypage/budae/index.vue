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
										:value="value"
										line-width="2"
										padding="12"
										smooth="100"
										stroke-linecap="round"
										color="rgba(255,255,255,.7)"
										gradient-direction="top"
										type="trend"
										fill="true"
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
										src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
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

								<v-col
									class="text-no-wrap"
									cols="5"
									sm="3"
								>
									<v-chip
									v-if="message.new"
									:color="`${message.color} lighten-4`"
									class="ml-0 mr-2 black--text"
									label
									small
									>
									{{ message.new }} new
									</v-chip>
									<strong v-html="message.title"></strong>
								</v-col>

								<v-col
									v-if="message.excerpt"
									class="grey--text text-truncate hidden-sm-and-down"
								>
									&mdash;
									{{ message.excerpt }}
								</v-col>
								</v-row>
							</v-expansion-panel-header>

							<v-expansion-panel-content>
								<v-divider></v-divider>
								<v-card-text v-text="lorem"></v-card-text>
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
			// CHART DATA
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
					avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
					name: 'John Leider',
					title: 'Welcome to Vuetify!',
					excerpt: 'Thank you for joining our community...'
				},
				{
					color: 'red',
					icon: 'mdi-account-multiple',
					name: 'Social',
					new: 1,
					total: 3,
					title: 'Twitter'
				},
				{
					color: 'teal',
					icon: 'mdi-tag',
					name: 'Promos',
					new: 2,
					total: 4,
					title: 'Shop your way',
					exceprt: 'New deals available, Join Today'
				}
			],
			lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.'
		}
	},
	created () {
		console.log('created')
	},
	methods: {
		submit () {
			this.$v.$touch()
		},
		clear () {
			this.$v.$reset()
			this.select = null
		}
	}

}
</script>
