<!-- 회원가입 컴포넌트
    sign.vue 의 자식 컴포넌트
-->

<template>
  <v-card color="transparent" width="400" height="500" flat>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title">회원가입</span>
        <v-spacer></v-spacer>
        <span class="caption">
          또는&nbsp;
          <a @click="$emit('changeType')">로그인</a>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="error" @click="signInWithGoogle" block>
          <v-icon>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Google 계정으로 가입
        </v-btn>
      </v-card-actions>
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
        <v-text-field
          label="이름"
          v-model="form.name"
          :rules="[rule.required, rule.minLength(1), rule.maxLength(10)]"
          required
          ></v-text-field>
        <v-text-field
          label="이메일"
          v-model="form.email"
          :rules="[rule.required, rule.email]"
          required
          ></v-text-field>
        <v-text-field
          label="비밀번호"
          v-model="form.password"
          :rules="[rule.required, rule.minLength(6), rule.maxLength(50)]"
          type="password"
          required
          ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-checkbox
          label="'정신차렷'의 약관에 동의함"
          v-model="agree"
          :rules="[rule.agree]"
          required
        ></v-checkbox>
      </v-card-actions>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="!valid" @click="createWithEmailAndPassword">
          회원가입
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
	data () {
		return {
			form: {
				name: '',
				email: '',
				password: ''
			},
			agree: false,
			rule: {
				required: v => !!v || '필수 항목입니다.',
				minLength: length => v => v.length >= length || `${length}자리 이상으로 입력하세요.`,
				maxLength: length => v => v.length <= length || `${length}자리 이하으로 입력하세요.`,
				email: v => /.+@.+/.test(v) || '이메일 형식에 맞지 않습니다.',
				agree: v => !!v || '약관에 동의해야 진행됩니다.'
			},
			valid: false
		}
	},
	methods: {
		async signInWithGoogle () {
			const provider = new this.$firebase.auth.GoogleAuthProvider()
			this.$firebase.auth().languageCode = 'ko'
			await this.$firebase.auth().signInWithPopup(provider)
		},
		createWithEmailAndPassword () {
			if (!this.$refs.form.validate()) throw Error('입력 폼을 올바르게 작성해주세요.')
			throw Error ('이메일/비밀번호 로그인 기능은 현제 개발 테스트 중입니다 ')
		}
	}
}
</script>
