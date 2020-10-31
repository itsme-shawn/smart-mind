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
            <div>
						<v-card-text v-html="message.answer"></v-card-text>
            </div>
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
				answer: '일시적인 서버 오류일 수 있습니다. 혹은 비밀번호 찾기를 해 본 후에도 로그인이 되지 않으면 관리자에게 문의해 주십시오.'
			},
			{
				title: '실수로 정신전력교육의 내용을 잘못 제출했어요.',
				answer: '정신전력교육의 내용 제출의 횟수에는 제한이 없습니다. 다시 수정하시고 제출하시면 됩니다.'
			},
			{
				title: '정신전력 교육의 점수가 마음에 안 들어요',
				answer: '이미 완료한 정신전력 교육은 평가가 완료된 이후에도 언제든지 다시 수강할 수 있지만, 평가는 해당 관리자가 부여하기 때문에 교육의 점수에 대해서는 정확히 언급하기 어렵습니다. 추후 알람 기능을 구현 예정이며, 정신전력교육 재수강 시 해당 관리자에게 알람이 전송될 예정입니다.'
			},
			{
				title: '지나간 정신전력 교육을 이수하지 못했어요.<br> 다시 수강할 수 있나요?',
				answer: '[수강하기] 탭의 [주간정신전력교육]에서 지난 정신전력 교육을 이수할 수 있습니다. 이수 여부는 \'수강 전\'과 \'수강 후\'로 나뉘어져 있습니다.'
			},
			{
				title: '<기획의도>를 읽고 감명을 받았어요!',
				answer: '홈페이지 하단에 개발자들에게 연락할 수 있는 방법이 적혀있습니다. 칭찬 감사합니다.'
			},
			{
				title: '추가적으로 이런 기능이 있으면 좋을 것 같아요!',
				answer: '좋은 의견이 있다면 언제든지 홈페이지의 하단의 관리자에게 연락하십시오. 언제든지 기다리고 있습니다.'
			},
			{
				title: '<우리 역사 바로알기>에 다른 사람들이 <br> 알았으면 하는 새로운 주제가 있어요.',
				answer: '관리자에게 문의하면 심의 후 추가될 수 있어요.'
			},
			{
				title: '감사합니다!',
				answer: '<a href="https://github.com/Keep-Going-HyeonSoo/WEB_SmartMind_CameToWin" target="_blank" style="text-decoration:none">"정신차렷!" github </a> 에 star 하나 부탁드려요! 감사합니다:)'
			}

		]
	})
}
</script>
