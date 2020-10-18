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

  <!--    <v-parallax
        class="fullpage-container"
        :height="height"
        dark
        :src="require('../assets/main5-2.jpg')"
      >-->
        <v-row align="center" justify="center" height="700" class="px-9 py-15">
          <v-row align="center" justify="center" class="order-md-2 order-lg-2">
            <v-flex class="text-center" xs12 sm12 md6 lg6>
              <h1 class="display-1 font-weight-bold mb-4 custom1">
                주간정신전력
              </h1>
              <h3 class="subheading custom2">
                이번주의 정신전력을 간단하게 확인하고 <br />평가할 수 있습니다!
              </h3>
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
   <!--   </v-parallax>-->
   <div>
      <v-divider></v-divider>
   </div> 
      <v-row align="center" justify="center" class="pa-6 py-10">
        <div>
        <div class="display-1 font-weight-bold mb-4">우리 역사 바로알기</div>
        <hr />
                <br />
        <h3 class="subheading">
                  잘못 알고 있던 대한민국의 역사를 바로잡고<br>새로운 사실을 알아갈 수 있습니다.
                </h3>
                <br/>
        </div>
        <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
       
        </v-row>
      
      
    </v-layout>
    <v-sheet
        :color="gray"
        height="100"
      >
      <v-divider></v-divider>
        <v-row
          class="fill-height"
          align="center"
          justify="home"
        >
        <h3 class="subheading">
           Contact Us 
           
           </h3>
        </v-row>
    </v-sheet>
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
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
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
          return 1000;
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

