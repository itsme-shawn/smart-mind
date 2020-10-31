<!-- @/views/auth/signIn.vue : 로그인 컴포넌트
    sign.vue 의 자식 컴포넌트
-->

<template>
  <v-card color="transparent" width="400" height="400" flat>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title">로그인</span>
        <v-spacer></v-spacer>
        <span class="caption">
          또는&nbsp;
          <a @click="$emit('changeType')">회원가입</a>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="error" @click="signInWithGoogle" block>
          <v-icon>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Google 계정으로 로그인
        </v-btn>
        </v-card-actions>
        <!--
        <v-card-actions>
        <v-btn color="primary" @click="signInWithFacebook" block>
          <v-icon>mdi-facebook</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Facebook 계정으로 로그인
        </v-btn>
      </v-card-actions>
      -->
      <v-container grid-list-md fluid class="mt-3">
        <v-row row wrap>
          <v-col cols='5' xs='3'>
            <v-divider class="mt-2"></v-divider>
          </v-col>
          <v-col cols='2' xs='6' class="pa-1" style="text-align: center;" >
            <span >또는</span>
          </v-col>
          <v-col cols='5' xs='3'>
            <v-divider class="mt-2"></v-divider>
          </v-col>
        </v-row>
      </v-container>
      <v-card-text>
        <v-text-field disabled label="이메일"></v-text-field>
        <v-text-field disabled label="비밀번호"></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click='signInWithEmail'>
          로그인
        </v-btn>
      </v-card-actions>

      <v-card-actions>
      <v-spacer></v-spacer>
      <span class="caption">
          &nbsp;계정이 없으신가요?
          <a @click="$emit('changeType')">회원가입</a>
      </span>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
	data () {
		return {
			valid: ''
		}
	},
	computed: {
		routeTo () { // store.js에 저장돼있는 user 정보
			return this.$store.state.routeTo
		}
	},
	methods: {
		async signInWithGoogle () {
			const provider = new this.$firebase.auth.GoogleAuthProvider()
			this.$firebase.auth().languageCode = 'ko'
			try {
				const sn = await this.$firebase.auth().signInWithPopup(provider)
				this.$store.commit('setUser', sn.user)
				this.$router.push(this.routeTo.path).catch(() => {})
			} catch {
				this.$router.push('/').catch(() => {})
			} finally {
				this.loading = false
			}
		},
		async signInWithFacebook () {
			const provider = new this.$firebase.auth.FacebookAuthProvider()
			this.$firebase.auth().languageCode = 'ko'
			try {
				const sn = await this.$firebase.auth().signInWithPopup(provider)
				this.$store.commit('setUser', sn.user)
				this.$router.push(this.routeTo.path).catch(() => {})
			} catch {
				this.$router.push('/').catch(() => {})
			} finally {
				this.loading = false
			}
		},
		async signInWithEmail () {
			// const r = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
			throw Error('이메일/비밀번호 로그인 기능은 현재 테스트 중입니다. 구글로그인으로 진행헤주세요')
		}
	}
}
</script>

<style scoped>

</style>
