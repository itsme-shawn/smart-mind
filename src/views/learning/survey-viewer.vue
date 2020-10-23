<!-- 나중에 삭제할 코드
  @/components/display-content.vue 에서 사용하는 컴포넌트
-->

<template>
  <div id='surveyElement' >
    <survey  :survey="surveyModel"></survey> <!-- surveyJS 컴포넌트에 surveyModel을 넣는다 -->
  </div>
</template>

<script>
import * as SurveyVue from 'survey-vue' // surveyJS를 import한다
// import surveyJSON from '@/assets/survey/survey.json' // 설문조사 JSON 문항을 불러온다
import 'survey-vue/modern.css'

const Survey = SurveyVue.Survey // surveyJS에서 Survey 컴포넌트만 따로 빼낸다
Survey.cssType = 'modern'

export default {
	props: ['question'],
	components: { Survey },
	data () {
		return {
			q1: '1 수정완료',
			q2: '2 수정완료',
			surveyJSON: {
				locale: 'ko',
				title: '의견 제출',
				description: '자신의 생각을 작성해보세요',
				pages: [
					{
						name: 'page1',
						elements: [
							{
								type: 'comment',
								name: 'q1',
								title: '수정 폼에서 첫 번째 질문을 생성해주세요',
								isRequired: true
							},
							{
								type: 'comment',
								name: 'q2',
								title: '수정 폼에서 두 번째 질문을 생성해주세요',
								isRequired: true
							}
						]
					}
				]

			}
		}
	},
	mounted () {
		this.WriteSurvey()
	},
	methods: {
		async WriteSurvey () {
			this.surveyJSON.pages[0].elements[0].title = await this.question.Q1
			this.surveyJSON.pages[0].elements[1].title = await this.question.Q2
		},
		closeDialog () {
			this.$emit('complete')
		}
	},
	computed: {
		// data에 surveyModel을 넣어도 좋지만
		// vuex의 값에 따라 설문조사 문항을 변경하는 경우가 많아서
		// computed에 surveyModel을 정의했다

		surveyModel () {
			const surveyModel = new SurveyVue.Model(this.surveyJSON) // 설문조사 JSON 문항을 model로 넣는다
			surveyModel.onComplete.add(function (result) { // Complete 버튼을 누르면 실행할 콜백 함수를 넣는다
				alert(`result: ${JSON.stringify(result.data)}`)

				// this.closeDialog()
			})

			return surveyModel
		}

	}
}
</script>
