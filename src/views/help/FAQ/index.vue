<template>
    <v-container class="pa-3">
        <div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold mt-5 ml-10">FAQ</v-toolbar-title>
            </v-card-text>
        </div>
		<v-divider></v-divider>

	<!-- 대안3-->
		<template>
			<v-container fluid class="mt-10">
				<v-row justify="center">
				<v-expansion-panels popout>
					<v-expansion-panel
					v-for="(message, i) in messages"
					:key="i"
					hide-actions
					>
					<v-expansion-panel-header>
						<v-row align="center" class="spacer" no-gutters>

						<v-col
							class="text-no-wrap"
							cols="5"
							sm="3"
						>
							<strong v-html="message.title"></strong>
						</v-col>

						</v-row>
					</v-expansion-panel-header>

					<v-expansion-panel-content>
						<v-divider></v-divider>
						<v-card-text v-html="message.answer"></v-card-text>
					</v-expansion-panel-content>
					</v-expansion-panel>
				</v-expansion-panels>
				</v-row>
			</v-container>
		</template>

    </v-container>
</template>
<script>
export default {
	data: () => ({
		length: 3,
		window: 0,
		show: false,

		//
		messages: [
			{
				title: '회원가입은 어떻게 하나요?',
				answer: '현재 구글 계정으로 로그인이 가능한 상태입니다.'
			},
			{
				title: '로그인이 안 돼요.',
				answer: '인터넷 연결이 되어있는지 확인해 보고, 비밀번호 찾기를 해 본 후에도 로그인이 되지 않으면 고객센터로 문의해 주세요.'
			},
			{
				title: '비밀번호를 분실했어요. 어떻게 해야 하나요?',
				answer: '구글 이메일의 경우 구글 비밀번호 찾기를 하고, 만약 홈페이지 이메일일 경우 비밀번호 찾기 혹은 비밀번호 찾기가 개발이 아직 되지 않았을 경우 관리자에게 문의하세요.'
			},
			{
				title: '정신전력 교육의 점수가 마음에 들지 않는데, 이미 완료한 정신전력 교육을 다시 할 수는 없나요?',
				answer: '이미 완료한 정신전력 교육은 평가가 완료된 이후에도 언제든지 다시 수강할 수 있지만, 평가는 달라지지 않습니다.'
			},
			{
				title: '지나간 정신전력 교육을 이수하지 못했어요. 다시 수강할 수 있나요?',
				answer: '<수강하기> 탭에서 <주간정신전력교육>으로 들어가면 지난 정신전력 교육을 이수할 수 있어요.'
			},
			{
				title: '<기획의도>를 읽고 감명을 받았어요!',
				answer: '<a href="https://github.com/Keep-Going-HyeonSoo/WEB_SmartMind_CameToWin" target="_blank" style="text-decoration:none">"정신차렷!" github </a> 에 star 하나 부탁드려요! 감사합니다:)'
			},
			{
				title: '<우리 역사 바로알기>에 다른 사람들이 알았으면 하는 새로운 주제가 있어요.',
				answer: '관리자에게 문의하면 심의 후 추가될 수 있어요.'
			}

		]
	})
}
</script>
