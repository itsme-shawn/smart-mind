<!-- 진짜 코드
  @/components/display-content.vue 에서 사용하는 컴포넌트
-->

<template>
  <v-container class="mt-5 mx-auto pa-5">
    <v-divider/>
    <br/>
    <h2 style="color:green">의견 제출</h2>
    <h5>자신의 생각을 작성해보세요</h5>
    <br/>
    <h3>1. {{q1}}</h3>
    <v-textarea v-model="a1" class="mt-3" auto-grow solo clearable clear-icon="mdi-close-circle" label="작성해주세요" ></v-textarea>
    <h3>2. {{q2}}</h3>
    <v-textarea v-model="a2" class="mt-3" auto-grow solo clearable clear-icon="mdi-close-circle" label="작성해주세요" ></v-textarea>
    <v-btn @click="submitOwn" color="primary" large>제출</v-btn>

  </v-container>

</template>

<script>
export default {
	props: ['question'],
  data () {
    return {
      a1: '',
      a2: ''
    }
  },
	computed: {
		q1 () {
			return this.question.Q1
		},
		q2 () {
			return this.question.Q2
		}
	},
	methods: {
		submitOwn () { // DB에 a1,a2(병사들의 의견)을 저장
      console.log(this.a1,this.a2)
			this.$emit('submit')
		}
	}
}
</script>
