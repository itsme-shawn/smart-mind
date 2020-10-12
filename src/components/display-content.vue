<!-- views/learning/aritcle/article-form.vue 에서 사용하는 컴포넌트 
    게시물 내용을 표시하는 창을 띄우는 역할 -->
<template>
    <v-card>
        <v-toolbar color="primary" dark>
            <v-toolbar-title>
                {{item.title}}
            </v-toolbar-title>
            <v-spacer/>
            <v-btn @click="$emit('close')" icon><v-icon>mdi-close</v-icon></v-btn> <!-- $emit 으로 부모컴포넌트에 데이터 전달 -->
        </v-toolbar>
        <v-card-text>
            {{item.url}}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
	props: ['item']

}
</script>
