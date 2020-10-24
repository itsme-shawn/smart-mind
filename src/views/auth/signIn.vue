<!-- @/views/auth/signIn.vue : 로그인 컴포넌트
    sign.vue 의 자식 컴포넌트
-->

<template>
  <v-card color="transparent" height="500" flat>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title">로그인</span>
        <v-spacer></v-spacer>
        <span class="caption">
          또는&nbsp;
          <a >회원가입</a>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" block>
          <v-icon>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Google 계정으로 로그인
        </v-btn>
      </v-card-actions>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
          <v-flex xs2>
            또는
          </v-flex>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text>
        <v-text-field label="이메일"></v-text-field>
        <v-text-field label="비밀번호"></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          로그인
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style scoped>

</style>
