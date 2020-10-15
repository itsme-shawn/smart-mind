<template>
    <v-container>
        <div>
            <v-card-text>
                <v-toolbar-title class="font-weight-bold mt-5 ml-10">FAQ</v-toolbar-title>
            </v-card-text>
        </div>
		<v-divider></v-divider>
		<!--질문 시작-->
		<v-row align="center">
			<v-item-group
			v-model="window"
			class="shrink mr-6"
			mandatory
			tag="v-flex"
			>
			<v-item
				v-for="n in length"
				:key="n"
				v-slot:default="{ active, toggle }"
			>
				<div>
				<v-btn
					:input-value="active"
					icon
					@click="toggle"
				>
					<v-icon>mdi-help</v-icon>
				</v-btn>
				</div>
			</v-item>
			</v-item-group>

			<v-col>
			<v-window
				v-model="window"
				class="elevation-1"
				vertical
			>
				<v-window-item
				v-for="n in length"
				:key="n"
				>
				<v-card flat>
					<v-card-text>
					<v-row
						class="mb-4"
						align="center"
					>
						<v-avatar
						color="grey"
						class="mr-4"
						></v-avatar>
						<strong class="title">질문 {{ n }}</strong>
					</v-row>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					</v-card-text>
				</v-card>
				</v-window-item>
			</v-window>
			</v-col>
		</v-row>

		<!--질문 끝-->

	<!--질문 시작-->
		<template>
			<v-hover v-slot:default="{ hover }">
				<v-card
					:elevation="hover ? 16 : 2"
					:class="{ 'on-hover': hover }"
					class="mx-auto"
					width="600"
				>
					<v-card-actions @click="show = !show">
						<v-card-title>
						로그인이 안 돼요.
						</v-card-title>
						<v-spacer></v-spacer>
					<v-btn
						icon
						@click="show = !show"
					>
						<v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
					</v-btn>
					</v-card-actions>

					<v-expand-transition>
					<div v-show="show">
						<v-divider></v-divider>
						<v-card-text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</v-card-text>
					</div>
					</v-expand-transition>
				</v-card>
			</v-hover>
		</template>
	<!--질문 끝-->
	

    </v-container>
</template>
<script>
export default {
	data: () => ({
		length: 3,
		window: 0,
		show: false
	})
}
</script>
