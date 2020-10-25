<!-- 로그인/회원가입 관련 메인 컴포넌트 -->

<template>
<<<<<<< HEAD
  <v-container grid-list-md style="margin-top: 140px;">
    <v-layout align-center justify-center wrap row class="px-5" >
    <!-- 로고 이미지 -->
    
    <v-flex style="max-width:600px">
      <v-row align="center" justify="center" style="max-width:600px">
        
        <v-img
        width="250"
        max-width="400" 
        src="../../assets/LOGO2.png"></v-img>
        
      </v-row>
    </v-flex>
    <v-flex style="max-width:600px">
      <v-row align="center" justify="center" style="max-width:600px">
      <!-- 로그인 폼과 회원가입 폼 -->
        <sign-in v-if="type"></sign-in>
        <sign-up v-else></sign-up>
      </v-row>
    
    </v-flex>
    </v-layout>
=======
  <v-container grid-list-md align-center justify-center style="margin-top: 40px;">
    <!-- 로고 이미지 -->
    <v-row wrap align="center" justify="center" no-gutters style="height: fit-content;" >
      <v-col cols="4" md="auto" class="hidden-xs-only hidden-sm-only">
        <v-img src="../../assets/LOGO.png"></v-img>

      </v-col>

      <!-- 로그인 폼과 회원가입 폼 -->
      <v-col cols="8" md="auto" align-self="center" class="">
        <sign-in v-if="type" @changeType="type =! type"></sign-in>
        <sign-up v-else @changeType="type =! type"></sign-up>
      </v-col>

    </v-row>
>>>>>>> b05e05caf79ef86c110b3ab8f6f41617ebe712a4
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
