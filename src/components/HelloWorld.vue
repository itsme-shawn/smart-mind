<template>
  <v-container class="text-center">
    <v-layout column>
      <v-layout row wrap :style="myContainer">
        <v-flex xs12 md12 lg12 class="order-lg-2">
          <v-col align="left">
            <v-img
              :src="require('../assets/cat.jpg')"
              min-height="100"
            >
            
				<v-layout column align-start justify-center class="white--text" fill-height>
					<v-img :src="require('../assets/lamp2.png')" contain max-height="400"></v-img>
					<h1 class="white--text font-weight-bold mb-2 display-2 text-left">정신차렷!</h1>
					<div class="subheading mb-4 text-left">정신차렷!은 언제, 어디서나 정신전력 컨텐츠를 즐길 수 있는
                플랫폼입니다.<br>
                </div>
                <div>
                  <v-btn
                  color="grey-draken-3"
                  elevation="8"
                  medium
                  @click="dashboard"
                  >시작하기</v-btn
                >
                <br><br>
                </div>
                
				</v-layout>
			</v-img>
         </v-col>
        </v-flex>
      <!--  <v-layout align-center justify-center>
          <v-flex xs12 md6 lg6 class="order-lg-1">
            <v-col>
              <h1 class="display-2 font-weight-bold mb-3"></h1>

              <p class="subheading font-weight-regular">
                
              </p>
              <p>
                
              </p>
            </v-col>
          </v-flex>
        </v-layout>-->
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
          <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="4">
            <v-card class="mx-auto">
              <v-img
                :src="require('../assets/'+n+'.jpg')"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title> {{n}} </v-card-title>

              <v-card-subtitle> {{n}} </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange lighten-2" text> 더보기 </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click= "show[n] = !show[n]">
                  <v-icon>{{
                    show[n] ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show[n]">
                  <v-divider></v-divider>

                  <v-card-text>
                    짐은 조선의 왕 세종이오!x
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
      <v-flex xs12 md12>
        <!--<v-card class="mx-auto" max-width="500">
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
        </v-card>-->
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
      show: [true,false,false,false,false,false],
      myContainer: {
        backgroundColor: "",
      },
    };
  },
};
</script>
