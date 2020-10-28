<template>
  <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs" class="pa-7">
    <v-layout wrap row align-center justify-center>
      <v-flex xs12 class="pb-2">
        <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div v-if="user !== null">
                    <div class="grey--text">현재 사용자</div>

                    <h3 class="headline">
                      <v-icon medium color="success">mdi-account</v-icon
                      >{{ user.displayName }} 님
                    </h3>
                  </div>
                  <div v-else>
                    <div class="grey--text">현재 사용자</div>
                    <h3 class="headline">
                      <v-icon medium color="success">mdi-account</v-icon
                      >로그인해주세요
                    </h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-card-title primary-title>
                  <h4 class="headline">부대명 (부대마다 유동적으로 설정)</h4>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <div v-if="user !== null">
              <v-card-actions class="pa-2">
                <h4>권한 {{ user.level }}</h4>
                <v-spacer></v-spacer>
              </v-card-actions>
            </div>
            <div v-else>
              <h4>권한 guest</h4>
            </div>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex xs12 md6 class="pb-2">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card height="462px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="462"
                :src="require('../../../assets/bongchang-2.jpg')"
              >
                <v-card-title><h3>이번주의 정신전력 교육</h3></v-card-title>
                <v-expand-transition>
                  
                  <div
                    v-if="hover"
                    class=" transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                      
                    "
                  >
                  
                    <v-row align="center" justify="center" xs12 class="pt-14">
                      <h2>이봉창 의사와 '애국헌신'</h2>
                    
                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>
                  
                  </div>
                  
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
      </v-flex>
      <v-flex xs12 md3 class="pb-2">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/myeong2.jpg')"
              >
                <v-card-title><h5 style="color: black">9월 1주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <v-card
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>'명량대첩' 불가능을 가능하게 하다</h2>
                    
                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>

                  </v-card>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
        <v-hover class="mt-3">
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/hexo.jpg')"
              >
                <v-card-title><h5 style="color: black">9월 3주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>동료애를 배우다 '핵소 고지'</h2>
                    
                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
      </v-flex>
      <v-flex xs12 md3 class="pb-2">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/yoon.jpg')"

              >
                <v-card-title><h5 style="color: black">9월 2주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>윤동주의 시에서 배우는 정신</h2>
                    
                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
        <v-hover class="mt-3">
          <template v-slot:default="{ hover }">
            <v-card height="225px">
              <v-img
                :aspect-ratio="16 / 9"
                class="white--text align-top"
                height="225"
                :src="require('../../../assets/won2.jpg')"
              >
                <v-card-title><h5 style="color: black">9월 4주차 정신전력 교육</h5></v-card-title>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out v-card--reveal white--text"
                    style="
                      height: 100%;
                      background-color: rgba(70, 70, 70, 0.5);
                    "
                  >
                    <v-row align="center" justify="center" xs12 class="pt-7">
                      <h2>징기스칸의 전술은?</h2>
                    
                    <hr/>
                    <br />
                    <br/>
                    <br/>
                    </v-row>
                    <v-row align="center" justify="center" xs12>
                    <v-btn>참여하기</v-btn>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </template>
        </v-hover>
      </v-flex>

      <v-flex xs12 sm12 class="pb-2">
        <v-card height="370px" :color="`#${i}12345`">
          <v-card-title>이번주 나의 의견</v-card-title>
          <v-list two-line>
            <v-list-item-group v-model="selected" multiple>
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                  <template>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>

                      <v-list-item-subtitle class="text--primary"
                        >답변 : <span v-html="item.headline"></span></v-list-item-subtitle
                      >

                      <v-list-item-subtitle
                        >정답 : <span v-html=" item.subtitle"></span></v-list-item-subtitle
                      >
                    </v-list-item-content>

                    <v-list-item-action> </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index < items.length - 1"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
    <!--  <v-flex xs12 sm5 class="pb-2">
        <v-card height="370px" :color="`#${i}12345`">
          <template>
            <v-card class="mx-auto text-center" min-width="300" height="370">
              <v-card-text>
                <v-sheet color="rgba(40, 53, 147)">
                  <v-sparkline
                    :value="monthlyScore"
                    color="rgba(255, 255, 255, .7)"
                    height="105"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                  >
                    <template v-slot:label="item">{{ item.value }}</template>
                  </v-sparkline>
                </v-sheet>
              </v-card-text>

              <v-card-text>
                <h3 class="font-weight-thin">이번달 퀴즈 점수</h3>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="justify-center">
                <v-btn block text> 보러가기 </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-card>
      </v-flex>-->
      <v-flex xs12 class="pb-2">
        <v-container fluid class="mt-10">
          <v-card>
            <v-card-title>이번 주 나의 부대원들은?</v-card-title>
            <template>
              <v-container fluid>
                <v-row justify="center">
                  <v-subheader>{{ day + 1 }}주차</v-subheader>
                  <v-expansion-panels popout>
                    <v-expansion-panel
                      v-for="(message, i) in messages"
                      :key="i"
                      hide-actions
                    >
                      <v-expansion-panel-header>
                        <v-row align="center" class="spacer" no-gutters>
                          <v-col cols="4" sm="2" md="1">
                            <v-avatar size="36px">
                              <img
                                v-if="message.avatar"
                                alt="Avatar"
                                src="https://lh3.googleusercontent.com/ogw/ADGmqu92A3GO29sPEXyfoYIwCWRHIbhljaLOVkAyePpz=s32-c-mo"
                              />
                              <v-icon
                                v-else
                                :color="message.color"
                                v-text="message.icon"
                              ></v-icon>
                            </v-avatar>
                          </v-col>
                          <v-col class="hidden-xs-only" sm="5" md="3">
                            <strong v-html="message.name"></strong>
                            <span v-if="message.total" class="grey--text">
                              &nbsp;({{ message.total }})
                            </span>
                          </v-col>

                          <v-col class="text-no-wrap" cols="5" sm="3">
                            <strong v-html="message.title"></strong>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-header>

                      <v-expansion-panel-content>
                        <v-divider></v-divider>
                        <v-card-title>질문</v-card-title>
                        <v-card-text v-text="question.one"></v-card-text>
                        <v-card-text v-text="question.two"></v-card-text>
                        <v-divider></v-divider>
                        <v-card-title>답변</v-card-title>
                        <v-card-text v-text="message.content1"></v-card-text>
                        <v-card-text v-text="message.content2"></v-card-text>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </template>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<!--
<template>
  <v-container>
    <div>
      <v-card-text>
        <v-toolbar-title class="font-weight-bold mt-5 ml-10">{{
          accountTitle
        }}</v-toolbar-title>
      </v-card-text>
    </div>
    <v-divider></v-divider>

    <template>
      <v-container fluid class="mb-10 px-10">
        <v-flex>
          <v-row align="center" justify="center">
            <div>
            <v-col cols="11" md="6" height="500">
              <v-card-title>주간정신전력교육</v-card-title>
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card class="mx-auto mt-5" max-width="600">
                    <v-responsive :aspect-ratio="16 / 9">

                      <v-img
                        class="white--text align-top"
                        max-height="400"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      >
                        <v-card-title>이번주의 정신전력 교육</v-card-title>
                      </v-img>

                      <v-card-subtitle class="pb-2">
                        10월 2주차
                      </v-card-subtitle>
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
            </v-col>
            </div>
            <div>
            <v-col cols="11" md="6">
              <v-card-title>지난 정신전력 교육</v-card-title>
              <template>
                <v-carousel hide-delimiters>
                  <v-carousel-item v-for="(color, i) in colors" :key="color">
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-card class="mx-auto mt-5" max-width="600">
                          <v-responsive :aspect-ratio="16 / 9">
                            <v-img
                              class="white--text align-top"
                              max-height="400"
                              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                            >
                              <v-card-title
                                >{{ i + 1 }}주차 정신전력 교육</v-card-title
                              >
                            </v-img>
                            <v-card-subtitle class="pb-2">
                              9월 {{ i + 1 }}주차
                            </v-card-subtitle>
                            <v-card-text class="text--primary white--text">
                              <h3>해당 주차에 해당하는 제목필요</h3>

                              <span class="white--text"
                                >해당 주차에 해당하는 저자 혹은 작성일자</span
                              >
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

                  </v-carousel-item>
                </v-carousel>
              </template>
            </v-col>
            </div>
          </v-row>
        </v-flex>
      </v-container>
    </template>

    <template>
      <v-container fluid class="mt-10 mb-10">
        <v-card class="px-8">
          <v-card-title>나의 퀴즈 점수</v-card-title>
          <v-row class="justify-center" align="center">
            <v-col cols="11" md="7">
              <v-card class="pa-2" outlined height="400">
                <v-card-title>이번주의 퀴즈</v-card-title>
                <v-list two-line>
                  <v-list-item-group v-model="selected" multiple>
                    <template v-for="(item, index) in items">
                      <v-list-item :key="item.title">
                        <template>
                          <v-list-item-content>
                            <v-list-item-title
                              v-text="item.title"
                            ></v-list-item-title>

                            <v-list-item-subtitle class="text--primary"
                              >정답 : {{ item.headline }}</v-list-item-subtitle
                            >

                            <v-list-item-subtitle
                              >답변 : {{ item.subtitle }}</v-list-item-subtitle
                            >
                          </v-list-item-content>

                          <v-list-item-action>
                            </v-list-item-action>
                        </template>
                      </v-list-item>

                      <v-divider
                        v-if="index < items.length - 1"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="11" md="5">
              <v-card class="pa-2" outlined max-height="400">
                <v-card-title>이번달의 퀴즈</v-card-title>
                <template>
                  <v-card color="orange" max-height="400">
                    <v-sparkline
                      gradient-direction="top"
                      height="140"
                      :value="monthlyScore"
                      line-width="2"
                      padding="12"
                      stroke-linecap="round"
                      color="rgba(255, 255, 255, .7)"
                      :type="type"
                      :fill="fill"
                      auto-draw
                      ><template v-slot:label="item">{{ item.value }}</template>
                    </v-sparkline>
                  </v-card>
                </template>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </template>
    <v-divider></v-divider>

   <template>
      <v-container fluid class="mt-10">
        <v-card-title>이번 주 나의 부대원들은?</v-card-title>
        <v-card>
          <template>
            <v-container fluid>
              <v-row justify="center">
                <v-subheader>{{ day + 1 }}주차</v-subheader>
                <v-expansion-panels popout>
                  <v-expansion-panel
                    v-for="(message, i) in messages"
                    :key="i"
                    hide-actions
                  >
                    <v-expansion-panel-header>
                      <v-row align="center" class="spacer" no-gutters>
                        <v-col cols="4" sm="2" md="1">
                          <v-avatar size="36px">
                            <img
                              v-if="message.avatar"
                              alt="Avatar"
                              src="https://lh3.googleusercontent.com/ogw/ADGmqu92A3GO29sPEXyfoYIwCWRHIbhljaLOVkAyePpz=s32-c-mo"
                            />
                            <v-icon
                              v-else
                              :color="message.color"
                              v-text="message.icon"
                            ></v-icon>
                          </v-avatar>
                        </v-col>
                        <v-col class="hidden-xs-only" sm="5" md="3">
                          <strong v-html="message.name"></strong>
                          <span v-if="message.total" class="grey--text">
                            &nbsp;({{ message.total }})
                          </span>
                        </v-col>

                        <v-col class="text-no-wrap" cols="5" sm="3">
                          <strong v-html="message.title"></strong>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-header>

                    <v-expansion-panel-content>
                      <v-divider></v-divider>
                      <v-card-title>질문</v-card-title>
                      <v-card-text v-text="question.one"></v-card-text>
                      <v-card-text v-text="question.two"></v-card-text>
                      <v-divider></v-divider>
                      <v-card-title>답변</v-card-title>
                      <v-card-text v-text="message.content1"></v-card-text>
                      <v-card-text v-text="message.content2"></v-card-text>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-row>
            </v-container>
          </template>
        </v-card>
      </v-container>
    </template>
    <v-divider></v-divider>

    <v-divider></v-divider>
  </v-container>
</template>-->
<script>
export default {
	data () {
		return {
			accountTitle: '부대명-(사용자에 따라 동적으로 수정해야 함)',
			// sparkline (그래프 속성)
			fill: false,
			autoLineWidth: true,
			lineCap: 'round',
			type: 'trend',
			// 이번달의 퀴즈 점수
			monthlyScore: [100, 75, 100, 50],
			items: [
				{
					title: '1. 지능형 스마트 비행단이란?',
					headline: '최신 기술이 접목된 비행기',
					subtitle: '인공지능, 빅데이터, 증강·가상현실(AR·VR), 사물인터넷(IoT) 등 4차 산업혁명 신기술이 적용된 스마트 부대를 구축하여<br> 모든 부대 현황과 작전상황을 실시간으로 가시화하고 부대운영과 관련된 각 기능을 융합하여 신속하고 효율적으로 작전을 수행하는 비행'
				},
				{
					title: '2. 첨단 무기체계가 도입되는 상황에서도 장병 개인의 정신적 대비태세가 중요한 이유에 대해 말해보자.',
					headline: '장병 개개인의 집중력과 정신전력이 가장 중요하기 때문이다.',
					subtitle: '북한의 현실적인 군사적 위협과 코로나 19라는 신종 감염병의 위협 속에서 확고한 대비태세를 유지하고 <br>실전 같은 교육훈련에 매진하는 동시에 미래를 대비한 무기체계를 개발하고 이에 맞는 교리와 계획을 수립해야 한다'
				}
			],
			// 병사별 주간정신전력 현황 데이터
			messages: [
				{
					/*avatar:
            'https://lh3.googleusercontent.com/ogw/ADGmqu92A3GO29sPEXyfoYIwCWRHIbhljaLOVkAyePpz=s32-c-mo',*/
					name: '김현재',
					title: '2주차 정신전력교육',
					content1:
            '4차 산업혁명 기술을 우리 군에 접목시키려면 우선 그에 따른 인프라가 구축되어야 한다. 대표적을 IoT기술의 경우 접목시킨다면 군에서 운용하는 여러 장비들에 네트워크를 부여할 수 있게 되는데, 대표적으로 위치 정보를 가져올 수 있고, 전투복에 접목된다면 병사의 신체 능력도 알 수 있어 부상이 있을 경우 빠른 대처가 가능해진다. 그러나 네트워크를 운용해야 하기 때문에 보안 문제 해결이 가장 시급한 과제인 것으로 보인다.',
					content2:
            '첨단 무기쳬계가 개발되고 도입이 되더라도 그에 맞는 개인의 전투기술과 작전계획, 전술, 전략의 수립이 중요하다. 강한 군대는 병력이 많거나 무기가 좋다고 강한 군대가 아니다. 균형있게 유무형의 전력을 갖추고 제대로 싸울 준비가 되어 있어야 강한 군대이다. '
				},
				{
					avatar: '',
					name: '최이현',
					title: '2주차 정신전력교육',
					content1: 'IOT와 기타 최신 기술들을 이용한다면 국군의 전투력 향상뿐만 아니라 사기 증진에도 효과가 있다고 생각한다.',
					content2:
            '무형의 정신전력이 가장 중요한것 처럼 최신 기술에만 의존하는 것이 아닌 우리의 마음가짐이 중요한 것 같다.'
				},
				{
					avatar: '',
					name: '최현수',
					title: '2주차 정신전력교육',
					content1: '너도 힘들고 바쁠텐데 데이터베이스 다루느라 고생했어',
					content2:
            '마찬가지로 오늘 제외하고 개발할 시간은 3일밖에 없는데, 조금만 더 수고해줘'
				}
			],
			question: {
				one:
          '4차 산업혁명 기술을 우리 군에 접목하여 강한 군대를 만들 수 있는 현실성 있는 방안에 대해 말해보자',
				two:
          '첨단 무기체계가 개발되고 도입되는 상항에서도 장병 개인의 전투기술 연마와 정신적 대비태세가 중요한 이유에 대해 말해보자'
			},
			day: 1,
			// 지난 정신전력 교육
			overlay: false,
			model: 0,
			colors: ['secondary', 'green', 'yellow darken-2', 'red', 'orange'],
			// 우리 역사 바로 알기
			length: 4,
			onboarding: 0
		}
	},
	computed: {
		user () {
			// Vuex state에 저장돼있는 user 정보
			return this.$store.state.user
		}
	}
}
</script>
