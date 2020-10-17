<template>
  <v-container class="text-center">
    <v-layout column>
      <v-parallax
        class="fullpage-container"
        :height="height"
        dark
        :src="require('../assets/main-1-3.jpg')"
      >
        <!-- src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"-->
        <v-row align="center" justify="center">
          <div class="text-center" xs12 sm12 md12 lg12>
            <v-card
              align="center"
              justify="center"
              color="rgb(224,224,224,0.5)"
              max-width="1000"
            >
              <v-img
                :src="require('../assets/lamp2.png')"
                contain
                max-height="500"
              ></v-img>
              <!--  </div>
          
          <div class="text-center order-lg-1" xs12 sm12 md12 lg6>-->
              <v-card
                class="transparent elevation-0"
                :style="{ color: fontcolor }"
              >
                <div class="display-1 font-weight-bold mb-4">정신차렷!</div>
                <hr />
                <br />
                <h3 class="subheading">
                  정신차렷!은 언제, 어디서나<br />정신전력 컨텐츠를 즐길 수 있는
                  플랫폼입니다.
                </h3>
                <br />
                <div align="center">
                  <v-btn
                    class="font-weight-bold custom2"
                    color="white"
                    outlined
                    elevation="8"
                    medium
                    @click="dashboard"
                    >시작하기</v-btn
                  >
                </div>
                <br />
              </v-card>
            </v-card>
          </div>
        </v-row>
      </v-parallax>

      <v-parallax
        class="fullpage-container"
        :height="height"
        dark
        :src="require('../assets/main5-2.jpg')"
      >
        <v-row align="center" justify="center" height="700">
          <v-row align="center" justify="center" class="order-md-2 order-lg-2">
            <v-flex class="text-center" xs12 sm12 md6 lg6>
              <h1 class="display-1 font-weight-bold mb-4 custom1">
                주간정신전력
              </h1>
              <h2 class="subheading custom2">
                이번주의 정신전력을 간단하게 확인하고 <br />평가할 수 있습니다!
              </h2>
              <!-- <div align="center">
              <v-btn
                class="font-weight-bold"
                color="white"
                outlined
                elevation="8"
                medium
                @click="dashboard"
                custom2
                >확인하기</v-btn
              >
              
            </div> -->
            </v-flex>
          </v-row>
          <v-flex xs12 sm12 md6 lg6 class="order-md-1 order-lg-1">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto mt-5" max-width="800">
                  <v-responsive :aspect-ratio="16 / 9">
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-img
                      class="white--text"
                      max-height="500"
                      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                      <v-card-title>이번주의 정신전력 교육</v-card-title>
                    </v-img>
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->

                    <!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
                    <v-card-subtitle class="pb-2"> 10월 2주차 </v-card-subtitle>
                    <!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
                    <v-card-text class="text--primary">
                      <h3>믿음직하고 든든한 국군, ‘대체불가’ 특수전부대</h3>

                      <div>김 관 용 이데일리 정치부 외교안보팀장</div>
                    </v-card-text>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#dedede">
                        <v-btn>참여하기</v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-responsive>
                </v-card>
              </template>
            </v-hover>
          </v-flex>
        </v-row>
      </v-parallax>

      <v-flex xs12 md6>
        <h2 class="headline font-weight-bold mb-3">
          <br /><br />우리 역사 바로알기
        </h2>
        <v-row class="px-10">
          <v-col class="d-flex child-flex" cols="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto">
                  <v-responsive :aspect-ratio="16 / 9">
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-img
                      class="white--text"
                      max-height="500"
                      aspect-ratio="1"
                      :src="require('../assets/1.jpg')"
                    >
                    </v-img>
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-overlay v-if="hover" absolute color="#3F3f3f">
                      <h3 class="subheading custom2">
                        두유노 이순신??<br /><br />
                        이순신에 대해 알아보아요!
                      </h3>
                    </v-overlay>
                  </v-responsive>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto">
                  <v-responsive :aspect-ratio="16 / 9">
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-img
                      class="white--text"
                      max-height="500"
                      aspect-ratio="1"
                      :src="require('../assets/2.jpg')"
                    >
                    </v-img>
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-overlay v-if="hover" absolute color="#3F3f3f">
                      <h3 class="subheading custom2">
                        두유노 독도??<br /><br />
                        독도에 대해 알아보아요!
                      </h3>
                    </v-overlay>
                  </v-responsive>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto">
                  <v-responsive :aspect-ratio="16 / 9">
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-img
                      class="white--text"
                      max-height="500"
                      aspect-ratio="1"
                      :src="require('../assets/3.jpg')"
                    >
                    </v-img>
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-overlay v-if="hover" absolute color="#3F3f3f">
                      <h3 class="subheading custom2">
                        두유노 안중근??<br /><br />
                        안중근에 대해 알아보아요!
                      </h3>
                    </v-overlay>
                  </v-responsive>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto">
                  <v-responsive :aspect-ratio="16 / 9">
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-img
                      class="white--text"
                      max-height="500"
                      aspect-ratio="1"
                      :src="require('../assets/4.jpg')"
                    >
                    </v-img>
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-overlay v-if="hover" absolute color="#3F3f3f">
                      <h3 class="subheading custom2">
                        두유노 윤봉길??<br /><br />
                        윤봉길에 대해 알아보아요!
                      </h3>
                    </v-overlay>
                  </v-responsive>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto">
                  <v-responsive :aspect-ratio="16 / 9">
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-img
                      class="white--text"
                      max-height="500"
                      aspect-ratio="1"
                      :src="require('../assets/5.jpg')"
                    >
                    </v-img>
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-overlay v-if="hover" absolute color="#3F3f3f">
                      <h3 class="subheading custom2">
                        두유노 이승만??<br /><br />
                        이승만에 대해 알아보아요!
                      </h3>
                    </v-overlay>
                  </v-responsive>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col class="d-flex child-flex" cols="4">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card class="mx-auto">
                  <v-responsive :aspect-ratio="16 / 9">
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-img
                      class="white--text"
                      max-height="500"
                      aspect-ratio="1"
                      :src="require('../assets/6.jpg')"
                    >
                    </v-img>
                    <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->
                    <v-overlay v-if="hover" absolute color="#3F3f3f">
                      <h3 class="subheading custom2">
                        두유노 맥아더??<br /><br />
                        맥아더에 대해 알아보아요!
                      </h3>
                    </v-overlay>
                  </v-responsive>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <!--<v-card class="mx-auto">
              <v-img
                :src="require('../assets/' + n + '.jpg')"
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
              <v-card-title> {{ n }} </v-card-title>

              <v-card-subtitle> {{ n }} </v-card-subtitle>

              <v-card-actions>
                <v-btn color="orange lighten-2" text> 더보기 </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show[n] = !show[n]">
                  <v-icon>{{
                    show[n] ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show[n]">
                  <v-divider></v-divider>

                  <v-card-text> 짐은 조선의 왕 세종이오!x </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>-->
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
      this.$router.push("/learning/dashboard");
    },
    mover: function (event) {},
  },
  data() {
    return {
      show: [true, false, false, false, false, false],
      myContainer: {
        backgroundColor: "",
      },
      fontcolor: "black",
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 920;
        case "sm":
          return 920;
        case "md":
          return 920;
        case "lg":
          return 1020;
        case "xl":
          return 1000;
      }
    },
    size1() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1px";
        case "sm":
          return "2px";
        case "md":
          return "3px";
        case "lg":
          return "4px";
        case "xl":
          return "5px";
      }
    },
  },
};
</script>

