<template>
	<div class="mb-12">
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
			<div class="d-flex justify-center">
				<v-card class="mr-3" max-height="600" width="400">
						<v-card-title class="align-top mb-4">이번주의 참여율</v-card-title>
						<v-card-subtitle class="pb-2">요일별 참여율 </v-card-subtitle>
						<v-slider v-model="day" :max="6" :tick-labels="labels" class="mx-4" ticks></v-slider>
							<v-responsive
							:style="{ background: `rgb(233,220,216)` }"
							height="300px"
							class="ma-5"
							><div>{{labels[day]}}</div></v-responsive>
				</v-card>
				<v-card class="ml-3" max-height="600" width="400">
						<v-card-title class="align-top">이번주의 참여율</v-card-title>

				</v-card>
			</div>
		</v-container>

	</div>
</template>
<script>
export default {
	data () {
		return {
			labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
			day: 2
		}
	}
}
</script>
