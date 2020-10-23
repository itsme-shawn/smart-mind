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

		<!--지난 정신전력-->
		<v-container>
            <v-card-text class="mt-12">
                <v-toolbar-title class="font-weight-bold ml-5">지난 정신전력</v-toolbar-title>
            </v-card-text>
			<v-divider></v-divider>
        </v-container>

		<!--지난 정신전력 현황, 본인이 참여했던 교육들, 퀴즈 볼 수 있도록.-->
	</v-container>
</template>

<script>
export default {
	data: () => ({
		overlay: false,
		model: 0,
		colors: [
			'secondary',
			'green',
			'yellow darken-2',
			'red',
			'orange'
		]
	})
}
</script>
