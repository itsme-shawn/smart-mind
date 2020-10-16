<!-- 로그인 페이지 -->

<template>
<v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>로그인</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi-account" label="아이디" type="text"></v-text-field>
              <v-text-field prepend-icon="mdi-lock" label="비밀번호" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">로그인</v-btn>
            <v-btn color="primary">회원가입</v-btn>
          </v-card-actions>
          <v-divider></v-divider>
	        <v-card-actions>
				    <v-btn color="red" dark small block @click="signInWithGoogle" ><v-icon left>mdi-google</v-icon>Sign with Google</v-btn>
			    </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
</v-container>
</template>

<script>

// 로그인이 끝나면 사용자가 왔었던 페이지로 다시 리다이렉션

export default {
	methods: {
		async signInWithGoogle () {
			const provider = new this.$firebase.auth.GoogleAuthProvider()
			this.$firebase.auth().languageCode = 'ko'
			try {
				const sn = await this.$firebase.auth().signInWithPopup(provider)
				this.$store.commit('setFireUser', sn.user)
				this.$router.go(-1)
			} finally {
				this.loading = false
			}
		},
		link (event) {
			this.$router.push('/views/mypage/account/index.vue')
		}
	}
}
</script>
