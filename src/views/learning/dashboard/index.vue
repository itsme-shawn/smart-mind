<template>
    <v-container>
        <div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold mt-5 ml-10">{{accountTitle}}</v-toolbar-title>
            </v-card-text>
        </div>
		<v-divider></v-divider>

	<!--주간정신전력교육-->
		<template>
			<v-container fluid class="mt-10 mb-10">
				<v-card-title>주간정신전력교육</v-card-title>
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
		</template>
		<v-divider></v-divider>

	<!--이번 주 나의 점수-->
		<template>
			<v-container fluid class="mt-10 mb-10">
				<v-card-title>나의 퀴즈 점수</v-card-title>
					<v-row>
						<v-col cols="12" md="8">
							<v-card
							class="pa-2"
							outlined
							tile
							>
							hello
							</v-card>
						</v-col>
						<v-col cols="6" md="4">
							<v-card
							class="pa-2"
							outlined
							tile
							>
							hi
							</v-card>
						</v-col>
						</v-row>
			</v-container>
		</template>
		<v-divider></v-divider>

	<!--분대원들의 참여 보기-->
		<template>
			<v-container fluid class="mt-10">
				<v-card-title>나의 부대원들은?</v-card-title>

			</v-container>
		</template>
		<v-divider></v-divider>

	<!--지난 정신전력 교육-->
		<template>
			<v-container fluid class="mt-10">
				<v-card-title>지난 정신전력 교육</v-card-title>

			</v-container>
		</template>
		<v-divider></v-divider>

	<!--우리 역사 바로알기-->
		<template>
			<v-container fluid class="mt-10">
				<v-card-title>우리 역사 바로알기</v-card-title>

			</v-container>
		</template>
		<v-divider></v-divider>

    </v-container>
</template>
<script>
export default {
	data () {
		return {
			accountTitle: '부대명-(사용자에 따라 동적으로 수정해야 함)'
		}
	}
}
</script>
