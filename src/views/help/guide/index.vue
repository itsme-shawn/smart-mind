<template>
    <v-container>
        <div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold mt-5 ml-10">사용 가이드</v-toolbar-title>
            </v-card-text>
        </div>
		<v-divider></v-divider>

		<template>
			<v-card>
				<!-- <v-card-title class="text-center justify-center py-6">
				<h1 class="display-3">
					도움말
				</h1>
				</v-card-title> -->

				<v-tabs
				v-model="tab"
				background-color="transparent"
				grow
				>
				<v-tab
					v-for="item in items"
					:key="item"
				>
					{{ item.title }}
				</v-tab>
				</v-tabs>

				<v-tabs-items v-model="tab">
				<v-tab-item
					v-for="(item, i) in items"
					:key="i"
				>
					<v-card
					flat
					>
					<v-card-text>{{ item.content }}</v-card-text>
					</v-card>
				</v-tab-item>
				</v-tabs-items>
			</v-card>
		</template>

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
					<v-card
					flat
					>
					<v-card-text>ㅇㅇㅇ</v-card-text><v-card-text>ㅇㅇㅇ</v-card-text><v-card-text>ㅇㅇㅇ</v-card-text>
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
		items: [
		{
			title: '대쉬보드',
		  	content: '캡처해서 1번 2번 3번 순번 넣어서 어떻게 하는지 보여주면 될거같음.'
        },
       	{
			title: '주간정신전력교육',
		  	content: 'ㅇㅈ?'
        },
        {
          title: '우리 역사 바로알기',
		  content: '이것도 마찬가지'
        },
        {
          title: '부대관리',
		  content: '부대관리 탭이 도구가 많기 때문에 가장 신경써서 사용법 만들어야 될 듯'
        }
	],
        
        
      }
    },
  }
</script>

