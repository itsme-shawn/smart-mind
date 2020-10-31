<template>
  <v-container class="text-center">
    <v-layout column>
      <v-parallax
        class="fullpage-container"
        :height="height"
        dark
        :src="require('../assets/main-1-3.jpg')"
      >
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
                max-height="200"
                class="animated fadeInDown"
              ></v-img>

              <v-card
                class="transparent elevation-0"
                :style="{ color: fontcolor }"
              >
                <div
                  style="font-size: 35px"
                  class="font-weight-bold mb-4 animated fadeInDown"
                >
                  정신차렷!
                </div>
                <hr />
                <br />
                <h3 class="subheading animated fadeInDown">
                  정신차렷!은 언제, 어디서나<br />
                  <span style="color: black"> 정신전력</span>
                  컨텐츠를 즐길 수 있는 플랫폼입니다.
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
        <a class="scroll-link" href="#content">
          <svg
            class="mouse"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 76 130"
            preserveAspectRatio="xMidYMid meet"
          >
            <g fill="none" fill-rule="evenodd">
              <rect
                width="70"
                height="118"
                x="1.5"
                y="1.5"
                stroke="#FFF"
                stroke-width="3"
                rx="36"
              />
              <circle class="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF" />
            </g>
          </svg>
        </a>
      </v-parallax>

      <v-row align="center" justify="center" height="700" class="px-9 py-15">
        <v-row align="center" justify="center" class="order-md-2 order-lg-2">
          <v-row align="center" justify="center" xs12 sm12 md6 lg6>
            <div
              class="wow fadeInUp"
              style="text-align: center; vertial-align: middle"
            >
              <div class="display-1 font-weight-bold mb-4">주간 정신전력</div>
              <hr />
              <br />
              <h3 class="subheading">
                이번주의 정신전력을 간단하게 확인하고 <br />평가할 수 있습니다!
              </h3>
              <br />
            </div>
          </v-row>
          <!--<v-flex class="text-center" xs12 sm12 md6 lg6>
            <h1 class="display-1 font-weight-bold mb-4 custom1">
              주간 정신전력
            </h1>
            <hr />
            <br />
            <h3 class="subheading custom2">
              이번주의 정신전력을 간단하게 확인하고 <br />평가할 수 있습니다!
            </h3>
             <div align="center">
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

            </div>
          </v-flex>-->
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
                    :src="require('../assets/bongchang-2.jpg')"
                  >
                    <v-card-title>이번주의 정신전력 교육</v-card-title>
                  </v-img>
                  <!--해당 컨텐츠에 맞게 이미지를 넣어야 함-->

                  <!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
                  <v-card-subtitle class="pb-2"> 10월 2주차 </v-card-subtitle>
                  <!--이번이 몇 주차인지 알 수 있게 하기 위해 변동되어야 하는 부분-->
                  <v-card-text class="text--primary">
                    <h3>이봉창 의사와 '애국헌신'</h3>

                    <div>독립운동가로 살다가 돌아가신 이봉창 의사를 통해 '애국헌신'을 배우다</div>
                  </v-card-text>
                  <v-fade-transition>
                <!--    <v-overlay v-if="hover" absolute color="#dedede">
                      <v-btn>참여하기</v-btn>
                    </v-overlay>-->
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
        <div class="wow fadeInUp">
          <div class="display-1 font-weight-bold mb-4">우리 역사 바로알기</div>
          <hr />
          <br />
          <h3 class="subheading">
            잘못 알고 있던 대한민국의 역사를 바로잡고<br />새로운 사실을 알아갈
            수 있습니다!
          </h3>
          <br />
        </div>

        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-sheet :color="colors[i]" height="100%">
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3"><img :src="slide" height="400"></div>
                  </v-row>
                  <v-overlay v-if="hover" absolute color="#dedede">
                    <div style="color: black">
                      <h1>{{title[i]}}</h1>
                      <br />
                      <h2 class="subheading"><span v-html=intext[i]></span></h2>
                    </div>
                    <br/>
                   <!-- <v-btn>살펴보기</v-btn>-->
                  </v-overlay>
                </v-sheet>
              </template>
            </v-hover>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-layout>
    <div>
      <v-divider></v-divider>
    </div>
    <v-row align="center" justify="center" class="pa-6 py-10 mb-5">
      <v-row align="center" justify="center" xs12 sm12 md6 lg6>
        <div
          style="text-align: center; vertial-align: middle"
          class="wow fadeInUp"
        >
          <div class="display-1 font-weight-bold mb-4">내 정신전력 현황</div>
          <hr />
          <br />
          <h3 class="subheading">
            실시간으로 내가 들은 정신전력과 <br />듣고싶은 정신전력을 확인할 수
            있습니다!
          </h3>
          <br />
        </div>
      </v-row>
      <v-row align="center" justify="center" xs12 sm12 md6 lg6>
        <v-card
          class="mx-auto ma-0"
          max-width="700"
          elevation="4"
          xs12
          sm12
          md6
          lg6
        >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">강의명</th>
                  <th class="text-left">학습시각</th>
                  <th class="text-left">이수 여부</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in task" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.time }}</td>
                  <td>{{ item.complete }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-row>
    </v-row>

<!--
    <v-sheet min-height="200" >
      <v-row class="fill-height pa-6 px-15 mt-5" align="start" justify="center">
        <div class="last" style="min-width: 170px">
          <h3 class="subheading">Service</h3>
          <v-divider></v-divider>
          <router-link
            style="text-decoration: none; color: inherit"
            to="/notice/posting"
          >
            <h4 class="subheading">공지사항</h4>
          </router-link>
          <router-link
            style="text-decoration: none; color: inherit"
            to="/help/FAQ"
          >
            <h4 class="subheading">FAQ</h4>
          </router-link>
          <h4 class="subheading"><br /></h4>
        </div>
        <div class="last" style="min-width: 170px">
          <h3 class="subheading">Contact Us</h3>
          <v-divider></v-divider>
          <h4 class="subheading">
            <v-icon :style="{ color: fontcolor }">mdi-phone</v-icon>
            010-1234-5678
          </h4>

          <h4 class="subheading">
            <v-icon :style="{ color: fontcolor }">mdi-email</v-icon>
            cametowin@gmail.com
          </h4>
          <h4 class="subheading">
            <v-icon :style="{ color: fontcolor }">mdi-account-group</v-icon>
            김현재 최현수 최이현
          </h4>
        </div>
      </v-row>
    </v-sheet>
-->
  </v-container>
</template>
<script>
export default {
	name: 'HelloWorld',

	methods: {
		dashboard: function (event) {
			this.$router.push('/learning/dashboard')
		},
		mover: function (event) {}
	},
	data () {
		return {
			show: [true, false, false, false, false, false],
			myContainer: {
				backgroundColor: ''
			},
			fontcolor: 'black',
			colors: [
				'white',
				'white',
				'white',
				'white',
				'white'
			],
			title: [
				'독도 바로알기',
				'안창호 바로알기',
				'6.25전쟁 바로알기',
				'3.1 만세 운동 바로알기',
				'행주대첩 바로알기'
			],
			intext: [
				'물어보면 바로 답하지 못했던 독도가 우리의 영토인 이유와 <br/>그 근거에 대해 알아보자<br/>',
				'안창호가 했던 업적과 <br> 그의 정신에 대해 알아보자<br/>',
				'6.25전쟁이 남침인지, 북침인지 헷갈리지 말고 <br> 전쟁에 대해 제대로 알아보자<br/>',
				'3.1만세운동이 일어났던 이유와 <br> 그 배경에 대해서 알아보자<br/>',
				'행주대첩이 유명해진 이유와 <br> 장수인 권율에 대해서 알아보자<br/>'
			],
			slides: [require('../assets/dokdo.jpg'), require('../assets/ahnchang.jpg'), require('../assets/625.jpg'), require('../assets/31.jpg'), require('../assets/hengju.jpg')],
			task: [
				{
					name: '국가안보의 중요성',
					time: '2020년10월09일 10:04 PM',
					complete: 'X'
				},
				{
					name: '병영생활 행동',
					time: '2020년10월08일 10:04 PM',
					complete: 'O'
				},
				{
					name: '헥소 고지',
					time: '2020년10월09일 10:04 PM',
					complete: 'O'
				},
				{
					name: '봉오동 전투',
					time: '2020년1월09일 10:04 PM',
					complete: 'O'
				},
				{
					name: '전우애를 다지자',
					time: '2020년10월09일 10:04 PM',
					complete: 'O'
				},
				{
					name: '한글날을 맞이하여',
					time: '2020년10월09일 10:04 AM',
					complete: 'O'
				}
			]
		}
	},
	computed: {
		height () {
			switch (this.$vuetify.breakpoint.name) {
			case 'xs':
				return 660
			case 'sm':
				return 700
			case 'md':
				return 700
			case 'lg':
				return 800
			case 'xl':
				return 800
			}
		},
		size1 () {
			switch (this.$vuetify.breakpoint.name) {
			case 'xs':
				return '1px'
			case 'sm':
				return '2px'
			case 'md':
				return '3px'
			case 'lg':
				return '4px'
			case 'xl':
				return '5px'
			}
		}
	}
}
</script>
