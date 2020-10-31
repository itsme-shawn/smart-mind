<template>
	<v-container class="pa-3">
        <div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold mt-5">기획의도</v-toolbar-title>
            </v-card-text>
        </div>
		<v-divider></v-divider>

	<v-sheet class="pt-10">
		<h1>정신전력 교육을<br> 쉽고 간편하게.</h1><br>
		<h3>정신차렷은 불편하고 번거로운 정신전력교육을 개선하기 위해 만들어졌습니다.</h3><br>
		<h3>어렵고 불편한 사용법 대신 직관적이고 간편한 사용을 위해 노력했습니다.</h3><br>
		<h3>쉽게 참여하고, 쉽게 관리/감독을 시작하세요.</h3><br>

		<v-divider></v-divider>
	</v-sheet>

	<v-sheet class="pt-10 text-center">
		<h1>어떠한 순간에도,<br> 정신차렷으로.</h1><br>
		<h3>일과시간 특수한 보직으로 참여할 수 없는 병사들도,</h3><br>
		<h3>휴가 복귀로 격리되어 참여할 수 없는 병사들도,</h3><br>
		<h3>근무나 당직으로 참여할 수 없는 병사들도,</h3><br>

		<template>
			<v-timeline
				align-top
				:dense="$vuetify.breakpoint.smAndDown"
			>
				<v-timeline-item
				v-for="(item, i) in items"
				:key="i"
				:color="item.color"
				:icon="item.icon"
				fill-dot
				>
				<v-card
					:color="item.color"
					dark
				>
					<v-card-title class="title">
					{{ item.title }}
					</v-card-title>
					<v-card-text class="white text--primary">
					<p>{{ item.content }}</p>
					</v-card-text>
				</v-card>
				</v-timeline-item>
			</v-timeline>
		</template>

		<br><span class="green--text"><h1>원하는 시간에, 어디에서나</h1><br></span>

		<v-divider></v-divider>
	</v-sheet>
	<!--위의 경우를 좀 더 디테일하게 세분화해서 표현-->


	<v-sheet class="pt-10">
		<h1>쉽고 빠른 관리.</h1><br>
		<h3>지나간 정신전력을 다시 보고 싶을 때,</h3><br>
		<h3>병사들의 참여율과 작성 내용을 한눈에 정리해주는 도구들,</h3><br>
		<h3>다른 병사들의 생각을 공유하며, <strong class="green--text text--lighten-1">함께 성장하기</strong></h3><br>
		<v-divider></v-divider>
	</v-sheet>


	<!--캡처해서 colors 대신에 캡처 사진 url 넣으면 끝-->
  <!--
	<template>
	<v-carousel
		class="mb-15"
		cycle
		hide-delimiter-background
		show-arrows-on-hover
    max-width="300"
	>
		<v-carousel-item
		v-for="(slide, i) in slides"
		:key="i"
		>

			<v-row
			align="center"
			justify="center"
			>
			<div class="display-3">
				<img :src="slide" height="500">
			</div>

			</v-row>
		</v-carousel-item>
	</v-carousel>
	</template>
  -->


    </v-container>
</template>
<script>
  export default {
    data: () => ({
		// 타임라인 데이터
      items: [
        {
          color: 'red lighten-2',
		  icon: 'mdi-star',
		  title: '특수한 업무나 보직으로 참여할 수 없는 병사들',
		  content: '일과를 특수한 보직으로 인해 다른 병사들과 함께 하지 않는 병사의 경우 정신전력 교육에 참여하지 못하는 일이 일어나곤 합니다. px병이나, 운행이 있는 운전병의 경우가 대표적인 경우입니다. 우리는 단 몇 분만 투자하면 참여할 수 있지만, 그럴 수 없는 현실을 보았습니다. '
        },
        {
          color: 'purple darken-1',
		  icon: 'mdi-book-variant',
		  title: '격리로 인해 참여할 수 없는 병사들',
		  content: '코로나19로 인해 휴가 후 격리된 생활을 하는 병사들이 있습니다. 다른 일과는 격리되어서 할 수 없지만 비대면으로 훈련을 진행한다면 격리되어도 다른 병사들과 함께할 수 있지 않을까? 하는 생각을 하게 되었고, 이제는 정신전력교육을 비대면으로 실시하게 되어 격리된 병사에게도 책임감과 소속감을 부여합니다.'
        },
        {
          color: 'green lighten-1',
		  icon: 'mdi-airballoon',
		  title: '근무나 당직으로 참여할 수 없는 병사들',
		  content: '근무나 당직이 있을 때 장소와 시간에 구애받기 때문에 정신전력교육에 참여할 수 없습니다. 정신차렷과 함께라면 언제, 어디서나 가능한 시간대에 정신전력 교육에 참여할 수 있습니다.'
        }
	  ],

	  // carousel data
	  colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
		],

        slides: [
		  // require('../../../assets/help_intention1.png'),
		  // require('../../../assets/help_intention2.png'),
		  // require('../../../assets/help_intention3.png'),
		  // require('../../../assets/help_intention4.png'),
		  // require('../../../assets/help_intention5.png'),

        ]
    }),
  }
</script>
