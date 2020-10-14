<template>
	<v-footer app class="grey lighten-1" absolute :footer="footer">
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