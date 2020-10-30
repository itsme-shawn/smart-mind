<template>
  <v-container class="mb-12 pa-5">
    <div v-if="user">
        <div>
            <v-card-text>
                <v-toolbar-title class="text-h4 font-weight-bold ">내 정보</v-toolbar-title>
            </v-card-text>
        </div>
        <v-divider></v-divider>
        <v-card class="mx-auto mb-5 mt-7" max-width="500" elevation="4">
            <v-list-item three-line>
                <v-list-item-avatar
                tile
                size="80"
                color="grey"
                ><v-img :src="user.photoURL"></v-img></v-list-item-avatar>
                <v-list-item-content>
                    <v-container class="d-flex flex-row">
                        <v-list-item-title class="headline mt-2">
                        나의 회원정보
                        </v-list-item-title>
                        <!--
                        <v-card-actions>
                            <v-btn outlined rounded text @click="dialog = true">
                                정보수정
                            </v-btn>
                        </v-card-actions>
                        -->
                    </v-container>

                <v-divider></v-divider>
                <div class="overline ml-1 mt-3">
                    나의 회원정보를 확인하세요.
                </div>

                <v-list-item-action-text class="mt-5">
                    <h4>회원명 {{user.displayName}}</h4><br>
                    <h4>이메일 {{user.email}}</h4><br>
                    <h4>권한 {{user.level}}</h4><br>
                </v-list-item-action-text>
                </v-list-item-content>

            </v-list-item>

        </v-card>

    </div>
  </v-container>
</template>

<script>
export default {
	data () {
		return {
			dialog: false,
			task: [
				{
					name: '국가안보의 중요성',
					time: '2020년10월09일 10:04 PM',
					complete: 'X'
				},
				{
					name: '병영생활 행동',
					time: '2020년10월08일 10:04 PM',
					complete: 'O'
				},
				{
					name: '헥소 고지',
					time: '2020년10월09일 10:04 PM',
					complete: 'O'
				},
				{
					name: '봉오동 전투',
					time: '2020년1월09일 10:04 PM',
					complete: 'O'
				},
				{
					name: '전우애를 다지자',
					time: '2020년10월09일 10:04 PM',
					complete: 'O'
				},
				{
					name: '한글날을 맞이하여',
					time: '2020년10월09일 10:04 AM',
					complete: 'O'
				}
			]
		}
	},
	computed: {
		user () { // Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		}
	}
}
</script>
