<template>
  <v-container class="text-center">
    <v-layout column>
      <v-flex xs12 md6>
        <v-col cols="12" align="center">
          <v-img
            contain
            :src="require('../assets/soldier.svg')"
            min-height="100"
            max-width="1000"
          >
          </v-img>
        </v-col>
      </v-flex>
      <v-flex xs12 md6>
        <v-col class="mb-4" cols="12">
          <h1 class="display-2 font-weight-bold mb-3">정신차렷!</h1>

          <p class="subheading font-weight-regular">
            정신차렷!은 언제, 어디서나 정신전력 컨텐츠를 즐길 수 있는
            플랫폼입니다.
          </p>
          <p>
            <v-btn
              color="cyan lighten-4"
              elevation="8"
              medium
              @click="dashboard"
              >시작하기</v-btn
            >
          </p>
        </v-col>
      </v-flex>
      <br />
      <v-flex xs12 md6>
        <v-row class="text-center" :style="myContainer">
          <v-layout row>
            <v-flex xs6>
              <v-sheet class="mb-5">
                <v-img
                  contain
                  :src="require('../assets/you.jpg')"
                  max-width="700"
                ></v-img>
              </v-sheet>
            </v-flex>
            <v-flex xs6>
              <h2 class="headline font-weight-bold mb-3">주간 정신전력 교육</h2>
              <p class="subheading font-weight-regular">유관순 blahblah~~</p>
            </v-flex>
          </v-layout>
        </v-row>
      </v-flex>
      <v-flex xs12 md6>
        <h2 class="headline font-weight-bold mb-3"><br />우리 역사 바로알기</h2>
        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img
              :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-flex>
      <v-flex xs12 md12>
        <h2 class="headline font-weight-bold mb-3"><br />이달의 정신전력</h2>
        <v-row no-gutters>
          <v-col cols="4">
            <v-card class="pa-2" outlined tile>
              best1<br />Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets
              wrapped onto a new line as one contiguous unit.
            </v-card>
          </v-col>
          <v-col cols="6" rows="5">
            <v-card class="pa-2" outlined tile>
              .col-6<br />Subsequent columns continue along the new line.
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="pa-2" outlined tile>
              .col-6<br />Subsequent columns continue along the new line.
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3"></h2>

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

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3"></h2>

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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  methods: {
    dashboard: function (event) {
      this.$router.push("/dashboard");
    },
  },
  data() {
    return {
      myContainer: {
        Width: "100%",
      },
    };
  },
};
</script>
