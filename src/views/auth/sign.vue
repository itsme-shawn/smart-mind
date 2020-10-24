<!-- 로그인/회원가입 관련 메인 컴포넌트 -->

<template>
  <v-container grid-list-md align-center justify-center class="mt-10">
    <!-- 로고 이미지 -->
    <v-row wrap align="center" justify="center" no-gutters style="height: fit-content;" >
      <v-col cols="4" md="4" class="hidden-xs-only">
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
	},
	methods: {
		// 아직 vuex 에 저장하는 로직은 미작성
		async signInWithGoogle () {
			const provider = new this.$firebase.auth.GoogleAuthProvider()
			this.$firebase.auth().languageCode = 'ko'
			await this.$firebase.auth().signInWithPopup(provider)
		},
		async signInEmail () {
			const r = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			console.log(r)
		},
		async signOut () {
			const r = await this.$firebase.auth().signOut()
			console.log(r)
		}
	}
}
</script>
