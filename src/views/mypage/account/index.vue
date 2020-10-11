<template>
    <div>
        <div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold ml-5">마이 페이지</v-toolbar-title>
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
                            <v-btn outlined rounded text @click="dialog = true">
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

        <!--dialog로 회원 정보 수정 form 만들 예정. -->
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                <span class="headline">회원정보수정</span>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="아이디*"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="비밀번호"
                            type="password"
                            hint="*변경 시에만 입력해주세요"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="비밀번호 확인*"
                            type="password"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="Email*"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="소속 부대(중대급까지)*"
                            type="password"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-select
                            :items="['국방부', '국방부 직할부대', '육군', '해군','해병대','공군','생도','후보생','군무원']"
                            label="회원분류*"
                            required
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-select
                            :items="['간부','병장','상등병','일등병','이등병']"
                            label="계급/등급*"
                            required
                            ></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                            label="생년월일(ex-19981117)"
                            required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-select
                            :items="['남성','여성']"
                            label="성별*"
                            required
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="8">
                            <v-text-field
                            label="휴대폰"
                            type="password"
                            hint="*변경 시에만 입력해주세요"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    취소
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    저장
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>

    </div>
</template>

<script>
export default {
	data () {
		return {
			dialog: false,
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
