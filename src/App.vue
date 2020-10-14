<template>
  <v-app>
    <v-app-bar app color="white" dark :style="{ color: fontcolor }">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        :style="{ color: fontcolor }"
      ></v-app-bar-nav-icon>
      <site-title :title="site.myTitle"></site-title>
      <v-spacer></v-spacer>

      <v-btn icon to="/about">
        <v-icon :style="{ color: fontcolor }">mdi-magnify</v-icon>
      </v-btn>

      <site-auth :style="{ color: fontcolor }"></site-auth>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" :style="{ color: fontcolor }">
      <site-menu :items="site.menu"></site-menu>
    </v-navigation-drawer>
    <v-main >
      <!--
			<v-btn @click="write">write test</v-btn>
			<v-btn @click="read">read test</v-btn>
			<v-btn @click="readOnce">read once test</v-btn>
			-->
      <router-view />
      
    </v-main>
	<site-footer :footer="site.myFooter" ></site-footer>
  </v-app>
</template>

<script>
// vue 에서는 src를 @로 표시
import SiteTitle from "@/views/site/title";
import SiteFooter from "@/views/site/footer";
import SiteMenu from "@/views/site/menu";
import SiteAuth from "@/views/site/auth";

export default {
  components: { SiteTitle, SiteFooter, SiteMenu, SiteAuth },
  name: "App",
  data() {
    return {
      site: {
        myTitle: "정신차렷!",
        myFooter: "Copyright by Came To Win",
        menu: [],
      },
      right: null,
      drawer: false,
      fontcolor: "black",
      solid: "1px",
    };
  },
  mounted() {
    console.log(this.$firebase);
  },
  methods: {
    write() {
      console.log("write");
      this.$firebase.database().ref().child("abcd").set({
        title: "abc",
        text: "ttt",
      });
    },
    read() {
      // database 를 리스닝하고 있다가 database 가 바뀔 때마다 자동으로 실행
      console.log("read");
      // sn : snapshot
      this.$firebase
        .database()
        .ref()
        .child("abcd")
        .on("value", (sn) => {
          console.log(sn.val());
        });
    },
    async readOnce() {
      // database 에 일회성(once) 로 data 받아옴 (변할때 즉각적으로 반영 x)
      const sn = await this.$firebase
        .database()
        .ref()
        .child("abcd")
        .once("value");
      console.log(sn.val());
    },
  },
};
</script>
