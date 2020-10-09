<template>
  <v-container class="text-center">
    <v-layout column>
      <v-layout row wrap :style="myContainer">
        <v-flex xs12 md6 lg6 class="order-lg-2">
          <v-col align="center">
            <v-img
              contain
              :src="require('../assets/soldier.svg')"
              min-height="100"
              max-width="1000"
            >
            </v-img>
          </v-col>
        </v-flex>
        <v-layout align-center justify-center>
          <v-flex xs12 md6 lg6 class="order-lg-1">
            <v-col>
              <h1 class="display-2 font-weight-bold mb-3">정신차렷!</h1>

              <p class="subheading font-weight-regular">
                정신차렷!은 언제, 어디서나 정신전력 컨텐츠를 즐길 수 있는
                플랫폼입니다.
              </p>
              <p>
                <v-btn
                  color="cyan lighten-4"
                  elevation="8"
                  medium
                  @click="dashboard"
                  >시작하기</v-btn
                >
              </p>
            </v-col>
          </v-flex>
        </v-layout>
      </v-layout>
      <br />
      <v-flex xs12 md6>
        <v-row class="text-center">
          <v-layout row align-center>
            <v-flex xs6>
              <v-sheet class="mb-5">
                <v-img
                  contain
                  :src="require('../assets/you.jpg')"
                  max-width="600"
                ></v-img>
              </v-sheet>
            </v-flex>
            <v-flex xs6>
              <h2 class="headline font-weight-bold mb-3">주간 정신전력 교육</h2>
              <p class="subheading font-weight-regular">유관순 blahblah~~</p>
            </v-flex>
          </v-layout>
        </v-row>
      </v-flex>
      <v-flex xs12 md6>
        <h2 class="headline font-weight-bold mb-3"><br />우리 역사 바로알기</h2>
        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-flex>
      <v-flex xs12 md12>
        <v-card class="mx-auto" max-width="500">
                  

          <v-container fluid>
            <v-row dense>
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title v-text="card.title"></v-card-title>
                  </v-img>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  methods: {
    dashboard: function (event) {
      this.$router.push("/dashboard");
    },
  },
  data() {
    return {
      myContainer: {
        backgroundColor: "grey",
      },
    };
  },
};
</script>
