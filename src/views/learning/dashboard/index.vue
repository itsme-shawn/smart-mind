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
					<v-row class="justify-center" align="center">
						<v-col cols="11" md="6">
							<v-card class="pa-2" outlined height="445">
								<v-card-title>이번주의 퀴즈</v-card-title>
								<v-list two-line>
									<v-list-item-group v-model="selected" multiple>
										<template v-for="(item, index) in items">
										<v-list-item :key="item.title">
											<template>
											<v-list-item-content>
												<v-list-item-title v-text="item.title"></v-list-item-title>

												<v-list-item-subtitle class="text--primary">정답 : {{item.headline}}</v-list-item-subtitle>

												<v-list-item-subtitle>답변 : {{item.subtitle}}</v-list-item-subtitle>
											</v-list-item-content>

											<v-list-item-action>
												<!--dialog띄우기-->
											</v-list-item-action>
											</template>
										</v-list-item>

										<v-divider v-if="index < items.length - 1" :key="index"></v-divider>
										</template>
									</v-list-item-group>
								</v-list>
							</v-card>
						</v-col>
						<v-col cols="11" md="6">
							<v-card class="pa-2" outlined>
								<v-card-title>이번달의 퀴즈</v-card-title>
									<template>
										<v-card color="green">
											<v-sparkline
												gradient-direction="top"
												height="250"
												:value="monthlyScore"
												line-width="2"
												padding="12"
												stroke-linecap="round"
												color="rgba(255, 255, 255, .7)"
												:type="type"
												:fill= "fill"
												auto-draw
											><template v-slot:label="item">{{item.value}}</template>
											</v-sparkline>
										</v-card>
									</template>
							</v-card>
						</v-col>
						</v-row>
			</v-container>
		</template>
		<v-divider></v-divider>

	<!--분대원들의 참여 보기-->
		<template>
			<v-container fluid class="mt-10">
				<v-card-title>이번 주 나의 부대원들은?</v-card-title>
					<v-card>
						<template>
							<v-container fluid>
								<v-row justify="center">
								<v-subheader>{{day + 1}}주차</v-subheader>
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
										<v-card-text v-text="message.content1"></v-card-text>
										<v-card-text v-text="message.content2"></v-card-text>
									</v-expansion-panel-content>

									</v-expansion-panel>
								</v-expansion-panels>
								</v-row>
							</v-container>
						</template>
					</v-card>
			</v-container>
		</template>
		<v-divider></v-divider>

	<!--지난 정신전력 교육-->
		<template>
			<v-container fluid class="mt-10 mb-10">
				<v-card-title>지난 정신전력 교육</v-card-title>
					<template>
						<v-card class="mx-auto" max-width="600">
							<v-carousel v-model="model" hide-delimiters>
								<v-carousel-item
								v-for="(color, i) in colors"
								:key="color"
								>
								<v-sheet :color="color" height="100%" tile>
									<v-row class="fill-height" align="center" justify="center">
										<v-card >
											<v-responsive :aspect-ratio="16/9">
											<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
												<v-img class="white--text align-top" max-height="400"
												src="https://picsum.photos/510/300?random">
												<v-card-title>{{i + 1}}주차 정신전력 교육</v-card-title>
												</v-img>
											<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->

												<!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
												<v-card-subtitle class="pb-2">
												9월 {{i + 1}}주차
												</v-card-subtitle>
												<!--해당 주차에 해당되는 제목 필요-->
												<v-card-text class="text--primary">
												<div>
													<span class="white--text"><h3>해당 주차에 해당하는 제목필요</h3></span>
												</div>

												<span class="white--text">해당 주차에 해당하는 저자 혹은 작성일자</span>
												</v-card-text>
											</v-responsive>
										</v-card>
									</v-row>
								</v-sheet>
								</v-carousel-item>
							</v-carousel>
						</v-card>
					</template>
			</v-container>
		</template>
		<v-divider></v-divider>

	<!--우리 역사 바로알기-->
		<template>
			<v-container fluid class="mt-10 mb-10">
				<v-card-title>우리 역사 바로알기</v-card-title>
					<v-hover>
						<v-card flat tile>
							<v-window v-model="onboarding" vertical>
							<v-window-item v-for="n in length" :key="`card-${n}`">
								<v-card color="grey" height="500">
									<v-row class="fill-height" align="center" justify="center">
										<h1 style="font-size: 5rem;" class="white--text" > Slide {{ n }}</h1>
									</v-row>
								</v-card>
							</v-window-item>
							</v-window>

							<v-card-actions class="justify-space-between">
								<!--왼쪽 클릭 버튼-->
								<v-btn text @click="prev">
									<v-icon>mdi-chevron-left</v-icon>
								</v-btn>

								<!--클릭 시 해당 게시물로 이동하는 버튼-->
								<v-item-group
									v-model="onboarding"
									class="text-center"
									mandatory
								>
									<v-item
									v-for="n in length"
									:key="`btn-${n}`"
									v-slot="{ active, toggle }"
									>
									<v-btn
										:input-value="active"
										icon
										@click="toggle"
									>
										<v-icon>mdi-record</v-icon>
									</v-btn>
									</v-item>
								</v-item-group>

								<!--오른쪽 클릭 버튼-->
								<v-btn text @click="next">
									<v-icon>mdi-chevron-right</v-icon>
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-hover>
			</v-container>
		</template>
		<v-divider></v-divider>

    </v-container>
</template>
<script>

export default {
	data () {
		return {
			accountTitle: '부대명-(사용자에 따라 동적으로 수정해야 함)',
			// sparkline (그래프 속성)

			fill: false,
			autoLineWidth: true,
			lineCap: 'round',
			type: 'trend',

			// 이번달의 퀴즈 점수
			monthlyScore: [100, 75, 100, 50],
			items: [
				{
					title: '현재의 생일은??',
					headline: '1117',
					subtitle: '1117'

				},
				{
					title: '지금 코딩하는 시간은 오후 10:29이다?',
					headline: 'O',
					subtitle: 'X'

				}
			],
			// 병사별 주간정신전력 현황 데이터
			messages: [
				{
					avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu92A3GO29sPEXyfoYIwCWRHIbhljaLOVkAyePpz=s32-c-mo',
					name: '현재',
					title: '1주차 정신전력교육',
					content1: '4차 산업혁명 기술을 우리 군에 접목시키려면 우선 그에 따른 인프라가 구축되어야 한다. 대표적을 IoT기술의 경우 접목시킨다면 군에서 운용하는 여러 장비들에 네트워크를 부여할 수 있게 되는데, 대표적으로 위치 정보를 가져올 수 있고, 전투복에 접목된다면 병사의 신체 능력도 알 수 있어 부상이 있을 경우 빠른 대처가 가능해진다. 그러나 네트워크를 운용해야 하기 때문에 보안 문제 해결이 가장 시급한 과제인 것으로 보인다.',
					content2: '첨단 무기쳬계가 개발되고 도입이 되더라도 그에 맞는 개인의 전투기술과 작전계획, 전술, 전략의 수립이 중요하다. 강한 군대는 병력이 많거나 무기가 좋다고 강한 군대가 아니다. 균형있게 유무형의 전력을 갖추고 제대로 싸울 준비가 되어 있어야 강한 군대이다. '

				},
				{
					avatar: '',
					name: '이현',
					title: '1주차 정신전력교육',
					content1: '지금까지 메인페이지 만드느라 수고해준 이현아 고맙다',
					content2: '앞으로 오늘 제외하고 개발할 시간은 3일밖에 없는데, 조금만 더 수고해줘'

				},
				{
					avatar: '',
					name: '현수',
					title: '1주차 정신전력교육',
					content1: '너도 힘들고 바쁠텐데 데이터베이스 다루느라 고생했어',
					content2: '마찬가지로 오늘 제외하고 개발할 시간은 3일밖에 없는데, 조금만 더 수고해줘'

				}
			],
			question: {
				one: '4차 산업혁명 기술을 우리 군에 접목하여 강한 군대를 만들 수 있는 현실성 있는 방안에 대해 말해보자',
				two: '첨단 무기체계가 개발되고 도입되는 상항에서도 장병 개인의 전투기술 연마와 정신적 대비태세가 중요한 이유에 대해 말해보자'
			},
			day: 0,

			// 지난 정신전력 교육
			overlay: false,
			model: 0,
			colors: [
				'secondary',
				'green',
				'yellow darken-2',
				'red',
				'orange'
			],
			// 우리 역사 바로 알기
			length: 4,
			onboarding: 0
		}
	},
	methods: {
		next () {
			this.onboarding = this.onboarding + 1 === this.length
				? 0
				: this.onboarding + 1
		},
		prev () {
			this.onboarding = this.onboarding - 1 < 0
				? this.length - 1
				: this.onboarding - 1
		}
	}
}
</script>
