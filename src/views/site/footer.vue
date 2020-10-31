<template>
	<v-footer app absolute :footer="footer">
	<v-spacer></v-spacer>
	<div>
			{{ new Date().getFullYear() + ' ' + footer }}
	</div>
	</v-footer>
</template>

<script>
	export default {
		props : ['footer']
	}
</script>
