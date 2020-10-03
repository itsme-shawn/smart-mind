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
			
			<v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
		
		<v-navigation-drawer app v-model="drawer">
			
			
			<site-menu></site-menu>
      
		</v-navigation-drawer>
		<v-main>
			<v-btn @click="write">write test</v-btn>
			<v-btn @click="read">read test</v-btn>
			<v-btn @click="readOnce">read oncde test</v-btn>
			<router-view/>
		</v-main>
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
			async readOnce() { // database 에 일회성(once) 로 data 받아옴 (변할때 실시간으로 반영 x)
				const sn = await this.$firebase.database().ref().child('abcd').once('value')
				console.log(sn.val())
				}
			}
		}
  
</script>
