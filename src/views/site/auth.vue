<!-- 인증과 관련된 컴포넌트 -->

<template>
	<v-progress-circular indeterminate v-if="loading"></v-progress-circular>

	<v-menu offset-y v-else-if="!$store.state.fireUser">
		<template v-slot:activator="{on}">
			<v-btn icon v-on="on"><v-icon>mdi-account</v-icon></v-btn>
		</template>

		<v-card>
			<v-card-title>로그인</v-card-title>
			<v-divider></v-divider>
			<v-card-actions>
				<v-btn color="red" dark small block @click="signInWithGoogle" ><v-icon left>mdi-google</v-icon>Sign with Google</v-btn>
			</v-card-actions>
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
					<router-link to='/account'>
						<v-icon left>mdi-account</v-icon>프로필
					</router-link>
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
