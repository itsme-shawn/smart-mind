<template>
  <v-app>
    <v-app-bar
			app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<site-title :title="site.myTitle"></site-title>
      <v-spacer></v-spacer>
			

      <v-btn icon to="/about">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
			
			<site-auth></site-auth>
    </v-app-bar>

		<v-navigation-drawer app v-model="drawer">
<<<<<<< HEAD
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

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
=======
			
			
			<site-menu :items="site.menu"></site-menu>
      
>>>>>>> c01435daf1c40d3b83887e7d67ed78289caf4f68
		</v-navigation-drawer>
		<v-main>
			<!--
			<v-btn @click="write">write test</v-btn>
			<v-btn @click="read">read test</v-btn>
			<v-btn @click="readOnce">read once test</v-btn>
			-->
			<router-view/>
<<<<<<< HEAD
		</v-content>
		<v-footer app color="primary" dark absolute>
			<v-spacer></v-spacer>
			<div>
					{{ new Date().getFullYear() }}
			</div>
		</v-footer>
=======
			<site-footer :footer="site.myFooter"></site-footer>
		</v-main>
		
>>>>>>> c01435daf1c40d3b83887e7d67ed78289caf4f68
  </v-app>
</template>

<script>
<<<<<<< HEAD
export default {
	name: '#app',
	data () {
		return {
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard' },
				{ title: 'Photos', icon: 'mdi-image' },
				{ title: 'About', icon: 'mdi-help-box' }
			],
			right: null,
			drawer: false
		}
	}
}
=======
	
	// vue 에서는 src를 @로 표시
	import SiteTitle from '@/views/site/title'
	import SiteFooter from '@/views/site/footer'
	import SiteMenu from '@/views/site/menu'
	import SiteAuth from '@/views/site/auth'
	
  export default {
		components: {SiteTitle, SiteFooter, SiteMenu, SiteAuth},
		name : 'App',
    data () {
      return {
				site : {
					myTitle: '정신차렷!',
					myFooter : 'Copyright by Hyeon Soo Choi',
					menu: []
				},
        right: null,
				drawer: false,
			}
		},
		mounted(){
			console.log(this.$firebase)
		},
		methods: {
			write () {
				console.log('write')
				this.$firebase.database().ref().child('abcd').set({
					title: 'abc', text:'ttt'
				})
			},
			read () { // database 를 리스닝하고 있다가 database 가 바뀔 때마다 자동으로 실행
				console.log('read')
				// sn : snapshot
				this.$firebase.database().ref().child('abcd').on('value', (sn) => {
					console.log(sn.val())
				})
			},
			async readOnce() { // database 에 일회성(once) 로 data 받아옴 (변할때 즉각적으로 반영 x)
				const sn = await this.$firebase.database().ref().child('abcd').once('value')
				console.log(sn.val())
				}
			}
		}
  
>>>>>>> c01435daf1c40d3b83887e7d67ed78289caf4f68
</script>
