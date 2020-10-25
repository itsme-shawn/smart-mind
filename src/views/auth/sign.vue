<!-- 로그인/회원가입 관련 메인 컴포넌트 -->

<template>
  <v-container grid-list-md align-center justify-center style="margin-top: 140px;">
    <!-- 로고 이미지 -->
    <v-row wrap align="center" justify="center" no-gutters style="height: fit-content;" >
      <v-col cols="4" md="auto" class="d-flex justify-center hidden-xs-only">
        <v-img src="../../assets/LOGO.png"></v-img>

      </v-col>

      <!-- 로그인 폼과 회원가입 폼 -->
      <v-col cols="8" md="auto" align-self="center" class="">
        <sign-in v-if="type"></sign-in>
        <sign-up v-else></sign-up>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import SignIn from '@/views/auth/signIn'
import SignUp from '@/views/auth/signUp'
export default {
	components: {
		SignIn, SignUp
	},
	data () {
		return {
			type: true,
			email: '',
			password: ''
		}
	}
}
</script>
