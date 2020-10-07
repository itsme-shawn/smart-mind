<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <v-img
        contain
        :src="require('../assets/soldier.svg')"
        min-height="100"
        max-width="1000"
      >
      </v-img>
        
      </v-col>

      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold mb-3">
          정신차렷!
        </h1>

        <p class="subheading font-weight-regular">
          정신차렷!은 언제, 어디서나 정신전력 컨텐츠를 즐길 수 있는 플랫폼입니다.
          
        </p>
        <p>
        <v-btn
        color="primary"
        elevation="8"
        medium
        @click="dashboard"
        >시작하기</v-btn></p>
      </v-col>
      
      
      <v-row class="text-center">
        <v-col class="mb-5" cols="12">
        <v-img
        contain
        :src="require('../assets/you.jpg')"
        max-width="500"
        ></v-img>
        </v-col>
      
        <v-col>
        <h2 class="headline font-weight-bold mb-3">
          주간 정신전력 교육
        </h2>
        <p class="subheading font-weight-regular">
          유관순 blahblah~~
        </p>
        </v-col>
      </v-row>
        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
	name: 'HelloWorld',
  
  methods: {
    dashboard:function(event){
      this.$router.push('/dashboard')
    }
  }
}
</script>
