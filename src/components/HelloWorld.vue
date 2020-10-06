<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      <v-img
        contain
        :src="require('../assets/soldier.svg')"
        max-height="300"
        max-width="2000"
      >
      </v-img>
        
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          정신차렷!
        </h1>

        <p class="subheading font-weight-regular">
          정신차렷!은 언제, 어디서나 정신전력 컨텐츠를 즐길 수 있는 플랫폼입니다.
          
        </p>
        <p>
        <button>시작하기</button></p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
	name: 'HelloWorld',

	data: () => ({
		ecosystem: [
			{
				text: 'vuetify-loader',
				href: 'https://github.com/vuetifyjs/vuetify-loader'
			},
			{
				text: 'github',
				href: 'https://github.com/vuetifyjs/vuetify'
			},
			{
				text: 'awesome-vuetify',
				href: 'https://github.com/vuetifyjs/awesome-vuetify'
			}
		],
		importantLinks: [
			{
				text: 'Documentation',
				href: 'https://vuetifyjs.com'
			},
			{
				text: 'Chat',
				href: 'https://community.vuetifyjs.com'
			},
			{
				text: 'Made with Vuetify',
				href: 'https://madewithvuejs.com/vuetify'
			},
			{
				text: 'Twitter',
				href: 'https://twitter.com/vuetifyjs'
			},
			{
				text: 'Articles',
				href: 'https://medium.com/vuetify'
			}
		],
		whatsNext: [
			{
				text: 'Explore components',
				href: 'https://vuetifyjs.com/components/api-explorer'
			},
			{
				text: 'Select a layout',
				href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
			},
			{
				text: 'Frequently Asked Questions',
				href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
			}
		]
	})
}
</script>
