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
					<v-card-text><h2>대쉬보드는 모든 컨텐츠들을 한 눈에 볼 수 있는 페이지입니다.</h2></v-card-text>
					<v-card-text><h2>이번주의 정신전력 교육과 지난 정신전력 교육들을 한눈에 볼 수 있고</h2></v-card-text>
					<v-card-text><h2>나의 퀴즈 답변/정답과 부대원들의 답변 내용을 확인할 수 있습니다.</h2></v-card-text>
					<v-img :src="require('../../../assets/dashboard.png')"></v-img>
					
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text><h2>주간정신전력교육은 정신전력교육을 각 주차에 진행되는 순서에 맞게 분류하여 접근성을 높였습니다.</h2></v-card-text>
					<v-card-text><h2>게시글을 클릭하면 해당 주차의 글을 볼 수 있으며 </h2></v-card-text>
					<v-img :src="require('../../../assets/weekly.png')"></v-img>
					<v-card-text><h2>글을 다 보면 문제와 함께 자신의 의견을 작성할 수 있습니다. </h2></v-card-text>
					<v-img :src="require('../../../assets/weekly-2.png')"></v-img>
					
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text><h2>우리 역사 바로 알기 페이지는 기초적인 군지식이나 안보관,역사관을 함양할 수 있는 자료들로 구성되어 있습니다.</h2></v-card-text>
					<v-card-text><h2>역사를 잊은 민족에게 미래는 없다는 말처럼</h2></v-card-text>
					<v-card-text><h2>우리 역사에 대해 알아가고 조국에 대해 생각해 봅시다.</h2></v-card-text>
					<v-img :src="require('../../../assets/history.png')"></v-img>
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text><h2>부대관리에서는 병사들의 참여한 정신전력교육 현황을 볼 수 있습니다.</h2></v-card-text>
					<v-card-text><h2>또한 매 주 진행되는 퀴즈 점수를 한 눈에 볼 수 있게 막대그래프 형태로 만들었으며,</h2></v-card-text>
					<v-card-text><h2>월간 퀴즈 점수 창에서는 매주마다 병사 각각의 퀴즈 점수 변화를 볼 수 있어 한 눈에 어떤 변화를 보이는지 알 수 있습니다.</h2></v-card-text>
					<v-img :src="require('../../../assets/budae.png')"></v-img>
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

