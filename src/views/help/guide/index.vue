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
			<v-card class="mb-12">
				<v-tabs
				v-model="tab"
				background-color="transparent"
				grow
				>
				<v-tab>대시보드</v-tab><v-tab>주간정신전력교육</v-tab><v-tab>우리 역사 바로알기</v-tab><v-tab>부대관리</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab">
				<v-tab-item	>
					<v-card flat>
					<v-card-text><h2>대쉬보드는 컨텐츠들을 한 눈에 볼 수 있는 페이지입니다.</h2></v-card-text>
					<v-card-text><h2>이번주의 정신전력 교육과 지난 정신전력 교육들을 한눈에 볼 수 있고</h2></v-card-text>
					<v-card-text><h2>나의 답변 뿐 아니라 동료들의 답변 내용도 확인할 수 있습니다.</h2></v-card-text>
					<v-img :src="require('../../../assets/dashboard.png')"></v-img>
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text><h2>주간정신전력교육은 정신전력교육을 각 주차에 진행되는 순서에 맞게 분류하였습니다.</h2></v-card-text>
					<v-card-text><h2>게시글을 클릭하면 해당 주차의 글을 볼 수 있으며 </h2></v-card-text>
					<v-card-text><h2>생성된 지 3일 이내의 게시글에만 [new] 표시가 생성되게 하여 새로운 게시물을 한 눈에 볼 수 있도록 구현하였습니다.</h2></v-card-text>
					<v-img :src="require('../../../assets/weekly1.png')"></v-img><br><br><br>
					<v-card-text><h2>글을 다 보면 문제와 함께 자신의 의견을 작성할 수 있습니다. </h2></v-card-text>
					<v-img :src="require('../../../assets/weekly-2.png')"></v-img><br><br><br>
					<v-card-text><h2>제출까지 완료할 경우 [수강 전] 표시는 [수강 완료] 표시로 변경됩니다. </h2></v-card-text>
					<v-img :src="require('../../../assets/weekly2.png')"></v-img><br><br><br>
					<v-card-text><h2>관리자의 경우 추가로 화면 상단의 [+] 버튼을 통해 정신전력교육 게시물을 작성할 수 있습니다.</h2></v-card-text>
					<v-img :src="require('../../../assets/weekly3.png')"></v-img><br><br><br>
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text><h2>우리 역사 바로 알기 페이지는 기초적인 군지식이나 안보관,역사관을 함양할 수 있는 자료들로 구성되어 있습니다.</h2></v-card-text>
					<v-card-text><h2>기본적인 사용 방법은 주간정신전력교육과 동일합니다.</h2></v-card-text>
					<v-card-text><h2>우리 역사에 대해 알아가고 조국에 대해 생각해 봅시다.</h2></v-card-text>
					<v-img :src="require('../../../assets/history.png')"></v-img>
					</v-card>
				</v-tab-item>
				<v-tab-item	>
					<v-card flat>
					<v-card-text><h2>부대관리에서는 용사들의 참여한 정신전력교육 현황을 볼 수 있습니다.</h2></v-card-text>
					<v-card-text><h2>또한 용사들이 제출한 정신전력교육 결과에 대하여 평가하여 피드백을 줄 수 있습니다.</h2></v-card-text>
					<v-card-text><h2>[평가하기] 탭과 [통계보기] 탭으로 나뉘어져 있습니다.</h2></v-card-text><br>
					<v-card-title><h2>평가하기</h2></v-card-title>
					<v-card-text ><h2>각 주차별로 용사들이 제출한 정신전력 교육 결과를 열람하고, 그에 따른 comment를 남길 수 있습니다. 추가적으로 1~5점으로 이루어진 별점을 통해 수치상으로 간편하게 나타낼 수 있습니다.</h2></v-card-text><br>
					<v-img :src="require('../../../assets/budae1.png')"></v-img><br><br><br>
					<v-card-text ><h2>열람을 원하는 년/월/일 을 선택한 후 조회를 누른 모습</h2></v-card-text><br>
					<v-img :src="require('../../../assets/budae2.png')"></v-img><br><br><br>
					<v-card-text ><h2>그에 따른 피드백 작성과 평점 부여하는 모습</h2></v-card-text><br>
					<v-img :src="require('../../../assets/budae3.png')"></v-img><br><br><br>
					<v-card-title><h2>통계보기</h2></v-card-title>
					<v-card-text ><h2>통계보기에서는 특정 용사를 기준으로 평점 통계를 볼 수 있습니다.</h2></v-card-text><br>
					<v-img :src="require('../../../assets/budae4.png')"></v-img><br><br><br>
					<v-card-text ><h2>특정 용사를 선택 후 조회한 모습</h2></v-card-text><br>
					<v-img :src="require('../../../assets/budae5.png')"></v-img><br><br><br>
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
			tab: null

		}
	}
}
</script>
