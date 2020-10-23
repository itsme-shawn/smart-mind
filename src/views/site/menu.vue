<template>
	<v-list
        dense
        nav
      >
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="subtitle-1" >정신차렷</v-list-item-title>
				<v-list-item-subtitle>ver 1.0.0</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list>

			<v-list-item :to="pathHome">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

 <v-list-item-title>홈</v-list-item-title>
      </v-list-item>

      <v-list-group
        v-for="(item, i) in items"
        :key="i"
        v-model="item.active"
        :prepend-icon="item.icon"
				:to="item.to"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="(subItem,j) in item.subItems"
          :key="j"
					:to="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
	</v-list>
</template>

<script>
export default {
	data () {
		return {
			pathHome: '/',
			items: [

				{
					title: '수강하기',
					icon: 'mdi-school',
					subItems: [
						{
							title: '대시보드',
							to: '/learning/dashboard'
						},
						{
							title: '주간정신전력교육',
							to: '/learning/jungsin'
						},
						{
							title: '우리 역사 바로알기',
							to: '/learning/daily_history'
						},
						{
							title: '임시',
							to: '/learning/temp'
						}
					]
				},
				{
					title: '마이페이지',
					icon: 'mdi-account',
					subItems: [
						{
							title: '개인정보수정',
							to: '/mypage/account'
						},
						{
							title: '정신전력 현황',
							to: '/mypage/status'
						},
						{
							title: '부대관리',
							to: '/mypage/budae'
						}

					]
				},
				{
					title: '도움말',
					icon: 'mdi-help-box',
					subItems: [
						{
							title: '가이드',
							to: '/help/guide'
						},
						{
							title: '공지사항',
							to: '/notice/posting'
						},
						{
							title: 'FAQ',
							to: '/help/FAQ'
						},
						{
							title: '기획의도',
							to: '/help/intentions'
						}
					]
				}
			]
		}
	}

}
</script>
