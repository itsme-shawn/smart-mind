<template>
  <v-app>
    <v-app-bar
			app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<site-title :title="myTitle"></site-title>
      <v-spacer></v-spacer>

      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
		
		<v-navigation-drawer app v-model="drawer">
			<v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
			
			<site-menu></site-menu>
      
		</v-navigation-drawer>
		<v-content>
			<router-view/>
		</v-content>
		<site-footer :footer="myFooter"></site-footer>
  </v-app>
</template>

<script>
	
	// vue 에서는 현재위치를 @로 표시
	import SiteTitle from '@/views/site/title'
	import SiteFooter from '@/views/site/footer'
	import SiteMenu from '@/views/site/menu'

  export default {
		components: {SiteTitle, SiteFooter, SiteMenu},
		name : 'App',
    data () {
      return {
				
        right: null,
				drawer: false,
				myTitle: '정신차렷!',
				myFooter : 'Copyright by Hyeon Soo Choi'
			}
		}
  }
</script>
