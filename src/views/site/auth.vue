<!-- 인증과 관련된 컴포넌트 -->
<!-- 인증관련 코드 : auth.vue , functions/index.js , plugins/firebase.js -->
<!-- appbar 우측상단 사용자 정보메뉴 표시 창 -->

<template>
	<v-progress-circular indeterminate v-if="loading"></v-progress-circular>

  <!-- 비로그인 상태일때 메뉴 표시 -->
	<v-menu offset-y v-else-if="!$store.state.fireUser">
		<template v-slot:activator="{on}">
			<v-btn icon v-on="on" ><v-icon style="color:black">mdi-account</v-icon></v-btn>
		</template>

		<v-card>
      <v-card-actions>
				<v-btn color="teal" dark block to="/login" >로그인</v-btn>
			</v-card-actions>
			<v-divider></v-divider>
		</v-card>
	</v-menu>

  <!-- 로그인 상태일때의 메뉴 표시 -->
	<v-menu offset-y v-else>
		<template v-slot:activator="{on}">
			<v-btn icon v-on="on">
				<v-avatar size="30">
					<v-img :src="$store.state.user.photoURL"></v-img>
					<!-- store/index.js 에 저장된 값 -->
				</v-avatar>
			</v-btn>
		</template>

    <v-card width="280">
      <v-container grid-list-md>
        <v-row row wrap>
          <v-col xs='4' class="d-flex justify-center">
            <v-avatar
              size="72"
              color="grey lighten-4"
            >
              <img :src="$store.state.user.photoURL" alt="avatar">
            </v-avatar>
          </v-col>
          <v-col xs='8' class="d-flex justify-center ml-n6">
            <v-card-text>
              <span style="font-size:18px" class="font-weight-bold"> {{$store.state.user.displayName}}</span>
              <br>
              <span >{{$store.state.user.email}}</span>
              <br>
              <div v-if="user" class="mt-3"> <!--user.level 에 따른 관리자/학생 구분 ui 디자인 다시 해주세요! -->
                <span v-if="user.level == 'admin'">admin 유저</span>
                <span v-else-if="user.level == 'normal'">normal 유저</span>
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-card-actions>
        <router-link style="text-decoration:none" to='/mypage/account'>
          <v-btn text color="primary" to="/mypage/account">내 정보</v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn class="ml-3" color="primary" @click="signOut">로그아웃</v-btn>
      </v-card-actions>

          </v-card>

    <!--
		<v-card width="320">
			<v-card-title>
				<div>
					<router-link to='/mypage/account'>
						<v-icon left>mdi-account</v-icon>프로필
					</router-link>
            <div v-if="user" class="mt-5 text-center"> user.level 에 따른 관리자/학생 구분 ui 디자인 다시 해주세요!
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
    -->
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
				this.$store.commit('setUser', sn.user)
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
