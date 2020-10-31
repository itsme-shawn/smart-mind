<template>
  <div class="home" style="padding:0%">
    <HelloWorld msg="Welcome 정신차렷!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'Home',
	components: {
		HelloWorld
	}
}
</script>
