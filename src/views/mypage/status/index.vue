<template>
	<v-container>
		<v-container>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold ml-5">정신전력 현황</v-toolbar-title>
            </v-card-text>
		<v-divider></v-divider>
		<v-hover class="mb-10">
			<template v-slot:default="{ hover }">
				<v-card class="mx-auto mt-5" max-width="600">
				<v-responsive :aspect-ratio="16/9">
				<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
					<v-img class="white--text align-top" max-height="400"
					:src="require('../../../assets/bongchang-2.jpg')">
					<v-card-title>이번주의 정신전력 교육</v-card-title>
					</v-img>
				<!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->

					<!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
					<v-card-subtitle class="pb-2">
					10월 3주차
					</v-card-subtitle>
					<!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
					<v-card-text class="text--primary">
					<h3>이봉창 의사와 '애국헌신'</h3>

					<div>독립운동가로 살다가 돌아가신 이봉창 의사를 통해 '애국헌신'을 배우다</div>
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
		<v-divider></v-divider>
		</v-container>

		<!--지난 정신전력 현황, 본인이 참여했던 교육들, 퀴즈 볼 수 있도록.-->
		<v-container class="mb-10">
            <v-card-text class="mt-12">
                <v-toolbar-title class="font-weight-bold ml-5">나의 지난 정신전력</v-toolbar-title>
            </v-card-text>
			<v-divider></v-divider>
			<template>
				<v-stepper non-linear v-model="e1">
					<!--월 선택 버튼-->
						<v-dialog ref="dialog" v-model="modal"
							:return-value.sync="date" persistent width="290px">
							<template v-slot:activator="{ on, attrs }">
							<v-text-field
								v-model="date"
								label="월 선택"
								prepend-icon="mdi-calendar"
								readonly
								v-bind="attrs"
								v-on="on"
							></v-text-field>
							</template>
							<v-date-picker v-model="date" type="month" scrollable>
							<v-spacer></v-spacer>
							<v-btn text color="primary"
								@click="modal = false">
								취소
							</v-btn>
							<v-btn text color="primary"
								@click="hello">
								확인
							</v-btn>
							</v-date-picker>
						</v-dialog>
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
						<div v-if="question.one[n-1] !== null">
							<v-card class="mb-12" color="#e6e6e6">
								<v-card-title>Q1 - {{ question.one[n-1] }}</v-card-title>
								<v-card-text class="body-1">{{ answer.one[n-1] }}</v-card-text>
								<v-card-title>Q2 - {{ question.two[n-1] }}</v-card-title>
								<v-card-text class="body-1">{{ answer.two[n-1] }}</v-card-text>
							</v-card>
							<v-card class="mb-12" color="#e6e6e6">
								<v-card-title>퀴즈 점수</v-card-title>
								<v-card-text>전체 문항 수 : {{ quiz.answer[n-1] }}</v-card-text>
								<v-card-text>정답 수 : {{ quiz.user[n-1] }}</v-card-text>
								<v-card-text>점수 : {{ quiz.user[n-1]/quiz.answer[n-1]*100 }}</v-card-text>
							</v-card>
							<v-btn color="primary">
							다시 보기
							</v-btn>
						</div>
							<v-card v-else>
								<v-card-title>아직 작성되지 않았어요!</v-card-title>
								<img aspect-ratio="1.7" contain lazy-src="https://picsum.photos/id/11/10/6" src="https://picsum.photos/510/300?random" alt="미작성 게시물">
							</v-card>

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
			// el - 초기값은 1주차, steps는 최대 5주차까지.
			e1: 1,
			steps: 5,

			// 질문 받아오기
			question: {
				one: ['1주차 질문a', 'bb', 'cc', 'dd', null],
				two: ['1주차 질문b', 'BB', 'CC', 'DD', null]
			},
			// 답변 받아오기
			answer: {
				one: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.', ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'],
				two: ['It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.', 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.', 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. ']
			},
			// 해당 주차의 퀴즈 점수
			quiz: {
				answer: [5, 10, 5, 10, 5],
				user: [4, 9, 4, 7, 4]
			},

			date: new Date().toISOString().substr(0, 7),
			menu: false,
			modal: false

		}
	},
	methods: {
		hello () {
			// $refs.dialog.save(date)
			this.$refs.dialog.save(this.date)
			var ymdate = (this.date.split('-'))
			ymdate = 'ym' + ymdate[0] + ymdate[1]
			console.log(ymdate)
		},

	}

}
</script>
