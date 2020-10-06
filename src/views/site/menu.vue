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
		data() {
			return {
			pathHome : '/',
			items: [
          
					{
						title: '수강하기',
						icon : 'mdi-school',
						to : '/',
						subItems: [
							{
								title: '대시보드',
								to: '/dashboard'
							},
							{
								title: '주간정신전력교육',
								to: '/jungsin'
							},
							{
								title: '데일리 역사 상식',
								to: '/daily_history'
							},
							{
								title: '컨텐츠3',
								to: '/temp'
							}
						]
					},
          { 
						title: '도움말', 
						icon: 'mdi-help-box',
						subItems: [
							{
								title: '가이드',
								to: '/guide'
							},
							{
								title: 'FAQ',
								to: '/FAQ'
							},
							{
								title: '기획의도',
								to: '/intentions'
							}
						]
					},
        ]
			}
		}
		
	}
</script>