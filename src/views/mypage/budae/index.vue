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
						<v-card-title class="align-top mb-4">이번주의 참여율</v-card-title>
						<v-card-subtitle class="pb-12">요일별 참여율 </v-card-subtitle>
							<v-slider v-model="day" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>
							<v-card class="pt-4" color="green" dark>
								<v-card-text>
								<v-sheet color="rgba(0, 0, 0, .12)">
									<v-sparkline
									:labels="labels"
									:value="value"
									color="rgba(255, 255, 255, .7)"
									height="200"
									padding="12"
									stroke-linecap="round"
									smooth
									>
									<template v-slot:label="item">
										{{ item.value }}
									</template>
									</v-sparkline>
								</v-sheet>
								</v-card-text>
							</v-card>
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
			value: [
				423,
				446,
				675,
				510,
				590,
				610,
				760
			]
		}
	},
	created () {
		console.log('created')
		this.call()
	},
	methods: {
		call () {
		}
	}

}
</script>
