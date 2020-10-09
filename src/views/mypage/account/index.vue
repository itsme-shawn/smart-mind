<template>
    <div>
        <div>
            <v-card-text>
                <v-toolbar-title>마이 페이지</v-toolbar-title>
            </v-card-text>
        </div>
        <v-divider></v-divider>
        <v-card class="mx-auto mb-5 mt-7" max-width="500" elevation="4">
            <v-list-item three-line>
                <v-list-item-avatar
                tile
                size="80"
                color="grey"
                ><v-icon size="60">mdi-account</v-icon></v-list-item-avatar>
                <v-list-item-content>
                    <v-container class="d-flex flex-row">
                        <v-list-item-title class="headline mt-2">
                        나의 회원정보
                        </v-list-item-title>
                        <v-card-actions>
                            <v-btn outlined rounded text>
                                정보수정
                            </v-btn>
                        </v-card-actions>
                    </v-container>

                <v-divider></v-divider>
                <div class="overline ml-1 mt-3">
                    나의 회원정보를 확인하세요.
                </div>

                <v-list-item-action-text class="mt-5">
                    <h4>회원명</h4><br>
                    <h4>이메일</h4><br>
                    <h4>휴대폰</h4><br>
                </v-list-item-action-text>
                </v-list-item-content>

            </v-list-item>

        </v-card>
        <!--클릭시 해당하는 정신전력 강의로 이동할 수 있도록 할 예정-->
        <!--해당하는 DB는 구현 안되있어서 임시로 만들었음.-->
        <v-card class="mx-auto" max-width="500" elevation ="4">
            <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        강의명
                    </th>
                    <th class="text-left">
                        학습시각
                    </th>
                    <th class="text-left">
                        이수 여부
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in task"
                    :key="item.name"
                    >
                    <td>{{ item.name }}</td>
                    <td>{{ item.time }}</td>
                    <td>{{ item.complete }}</td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
        </v-card>

    </div>
</template>

<script>
export default {
	data () {
		return {
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
	}
}
</script>
