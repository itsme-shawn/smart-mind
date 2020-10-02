<template>
<v-toolbar-title>{{ title }}</v-toolbar-title>
</template>

<!-- .vue (컴포넌트파일) 은 요소들이 최상위와 최하단 <template> 태그로 감싸져있어야한다

<!-- .vue 안에서 컴포넌트 요소는 한 개만 있어야한다. ex) <v-toolbar-title> 가 여러개있으면 안됨  -->

<script>
	export default {
		props: ['title']
	}
</script>

