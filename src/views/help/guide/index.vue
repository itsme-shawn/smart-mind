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

    </v-container>
</template>

<script>
  export default {
    data () {
      return {
		tab: null,
		items: [
       	{
			title: '주간정신전력교육',
		  	content: '일과를 특수한 보직으로 인해 다른 병사들과 함께 하지 않는 병사의 경우 정신전력 교육에 참여하지 못하는 일이 일어나곤 합니다. px병이나, 운행이 있는 운전병의 경우가 대표적인 경우입니다. 우리는 단 몇 분만 투자하면 참여할 수 있지만, 그럴 수 없는 현실을 보았습니다. '
        },
        {
          title: '우리 역사 바로알기',
		  content: '코로나19로 인해 휴가 후 격리된 생활을 하는 병사들이 있습니다. 다른 일과는 격리되어서 할 수 없지만 비대면으로 훈련을 진행한다면 격리되어도 다른 병사들과 함께할 수 있지 않을까? 하는 생각을 하게 되었고, 이제는 정신전력교육을 비대면으로 실시하게 되어 격리된 병사에게도 책임감과 소속감을 부여합니다.'
        },
        {
          title: '부대관리',
		  content: '근무나 당직이 있을 때 장소와 시간에 구애받기 때문에 정신전력교육에 참여할 수 없습니다. 정신차렷과 함께라면 언제, 어디서나 가능한 시간대에 정신전력 교육에 참여할 수 있습니다.'
        }
	],
        
        
      }
    },
  }
</script>

