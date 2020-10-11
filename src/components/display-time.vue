<template>
  <v-tooltip bottom>
    <template v-slot:activator="{on}">
      <span v-on="on">{{displayTime}}</span>
    </template>
    <span>{{time.toLocaleString()}}</span>
  </v-tooltip>
</template>

<script>
export default {
	props: ['time'],
	computed: {
		displayTime () {
      // 작성일이 너무 오래 전 일 경우에는 그냥 날짜로 표시해주는 로직
      const before = this.$moment(this.time)
      const current = this.$moment()
      const diff = current.diff(before, 'days')
      if ( diff > 0) return before.toDate().toLocaleString()
			return this.$moment(this.time).fromNow()
		}
	}
}
</script>
