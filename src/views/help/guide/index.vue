<template>
    <v-container>
        <div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold mt-5 ml-10">사용 가이드</v-toolbar-title>
            </v-card-text>
        </div>
		<v-divider></v-divider>

		<!--일일히 넣는 방식-->
		<template>
			<v-card>
				<v-tabs
				v-model="tab"
				background-color="transparent"
				grow
				>
				<v-tab>대쉬보드</v-tab><v-tab>주간정신전력교육</v-tab><v-tab>우리 역사 바로알기</v-tab><v-tab>부대관리</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab">
				<v-tab-item	>
					<v-card flat>
					<v-card-text>대쉬보드는 모든 컨텐츠들을 한 눈에 볼 수 있는 페이지입니다.</v-card-text>
					<v-card-text>대쉬보드 완성되면 화면 캡처해서 여기에 넣고 그에 따른 설명과 사용법 쓰면 됨</v-card-text>
					<v-card-text>.</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text>주간정신전력교육은 정신전력교육을 각 주차에 진행되는 순서에 맞게 분류하여 접근성을 높였습니다.</v-card-text>
					<v-card-text>이거는 다 만들어졌으니까 캡처해서 사용하는 방법 보여주고 의도 쓰면 될거같음</v-card-text>
					<v-card-text>ㅇㅇ222ㅇ</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text>우리 역사 바로 알기 페이지는 기초적인 군지식이나 안보관,역사관을 함양할 수 있는 자료들로 구성되어 있습니다.</v-card-text>
					<v-card-text>이것도 마찬가지로 캡처해서 쓰자. 그리고 의의같은것도 더 넣어서 멋있게 만들자</v-card-text>
					<v-card-text>ㅇㅇ222ㅇ</v-card-text>
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text>부대곤리에서는 병사들의 참여한 정신전력교육 현홍을 볼 수 있습니다.</v-card-text>
					<v-card-text>또한 매 주 진행되는 퀴즈 점수를 한 눈에 볼 수 있게 막대그래프 형태로 만들었으며,</v-card-text>
					<v-card-text>월간 퀴즈 점수 창에서는 매주마다 병사 각각의 퀴즈 점수 변화를 볼 수 있어 한 눈에 어떤 변화를 보이는지 알 수 있습니다.</v-card-text>
					<v-card-text>이건 내가 대충 다 썼는데 화면 캡처해서 각 텍스트 밑에다가 넣어주면 좋을거같아</v-card-text>
					</v-card>
				</v-tab-item>
				</v-tabs-items>
			</v-card>
		</template>

    </v-container>
</template>

<script>
  export default {
    data () {
      return {
		tab: null,
        
      }
    },
  }
</script>

