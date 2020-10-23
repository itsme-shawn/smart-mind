<template>
	<v-container>
		<v-container>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold ml-5">정신전력 현황</v-toolbar-title>
            </v-card-text>

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
		</v-container>

		<!--지난 정신전력 현황, 본인이 참여했던 교육들, 퀴즈 볼 수 있도록.-->
		<v-container>
            <v-card-text class="mt-12">
                <v-toolbar-title class="font-weight-bold ml-5">지난 정신전력</v-toolbar-title>
            </v-card-text>
			<v-divider></v-divider>
			<template>
				<v-stepper non-linear v-model="e1">
					<v-stepper-header>
						<template v-for="n in steps">
							<v-stepper-step editable
							:key="`${n}-step`"
							:step="n">
								{{n}}주차
							</v-stepper-step>
							<v-divider v-if="n !== steps" :key="n"></v-divider>
						</template>
					</v-stepper-header>

					<v-stepper-items>
						<v-stepper-content
						v-for="n in steps"
						:key="`${n}-content`"
						:step="n">
							<v-card
							class="mb-12"
							color="grey lighten-1"
							height="200px"
							></v-card>
							<v-card
							class="mb-12"
							color="grey lighten-1"
							height="100"
							></v-card>

							<v-btn
							color="primary"
							>
							다시 보기
							</v-btn>

						</v-stepper-content>
					</v-stepper-items>
				</v-stepper>
			</template>
        </v-container>

		<!--지난 정신전력 현황, 본인이 참여했던 교육들, 퀴즈 볼 수 있도록.-->
	</v-container>
</template>

<script>
export default {
	data () {
		return {
			e1: 1,
			steps: 5
		}
	},
	watch: {
		steps (val) {
			if (this.e1 > val) {
				this.e1 = val
			}
		}
	},

	methods: {
		nextStep (n) {
			if (n === this.steps) {
				this.e1 = 1
			} else {
				this.e1 = n + 1
			}
		}
	}
}
</script>
