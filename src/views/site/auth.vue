<!-- 인증과 관련된 컴포넌트 -->
<!-- 인증관련 코드 : auth.vue , functions/index.js , plugins/firebase.js -->

<template>
	<v-progress-circular indeterminate v-if="loading"></v-progress-circular>

	<v-menu offset-y v-else-if="!$store.state.fireUser">
		<template v-slot:activator="{on}">
			<v-btn icon v-on="on" ><v-icon style="color:black">mdi-account</v-icon></v-btn>
		</template>

		<v-card>
			<!--<v-card-title to="/login">로그인</v-card-title>-->
      <v-card-actions>
				<v-btn color="" dark small block to="/login" >로그인</v-btn>
			</v-card-actions>
			<v-divider></v-divider>
		</v-card>
	</v-menu>

	<v-menu offset-y v-else>
		<template v-slot:activator="{on}">
			<v-btn icon v-on="on">
				<v-avatar size="30">
					<v-img :src="$store.state.fireUser.photoURL"></v-img>
					<!-- store/index.js 에 저장된 값 -->
				</v-avatar>
			</v-btn>
		</template>

		<v-card>
			<v-card-title>
				<div>
					<router-link to='/mypage/account'>
						<v-icon left>mdi-account</v-icon>프로필
					</router-link>
            <div v-if="user" class="mt-5 text-center"> <!-- user.level 에 따른 관리자/학생 구분 ui 디자인 다시 해주세요! -->
              <v-btn v-if="user.level == 'admin'">관리자</v-btn>
              <v-btn v-else-if="user.level == 'normal'">학생</v-btn>
            </div>
				</div>
			</v-card-title>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn color="" dark small block @click="signOut" >로그아웃</v-btn>
			</v-card-actions>
		</v-card>
	</v-menu>

</template>

<script>
export default {
	data () {
		return {
			loading: false
		}
	},
	computed: {
		user () { // store.js에 저장돼있는 user 정보
			return this.$store.state.user
		}
	},
	methods: {
		async signInWithGoogle () {
			const provider = new this.$firebase.auth.GoogleAuthProvider()
			this.$firebase.auth().languageCode = 'ko'
			this.loading = true
			try {
				const sn = await this.$firebase.auth().signInWithPopup(provider)
				this.$store.commit('setFireUser', sn.user)
			} finally {
				this.loading = false
			}
		},
		signOut () {
			this.$firebase.auth().signOut()
		},
		link (event) {
			this.$router.push('/views/mypage/account/index.vue')
		}
	}
}
</script>
