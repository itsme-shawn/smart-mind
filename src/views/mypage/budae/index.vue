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
				<v-card class="mr-3" max-height="600" width="400">
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
			<v-card>
				hello
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
			value: [80, 70, 90, 100]
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
