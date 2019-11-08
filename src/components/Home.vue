<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel cycle>
            <v-carousel-item
              v-for="(ad,i) in ads"
              :key="i"
              :src="ad.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            >
              <div class="carousel-link">
                  <v-btn class="error" :to="'/ad/'+ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 md6 lg3 v-for="(ad,i) in ads" :key="i">
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="ad.src">
              <v-card-title>{{ ad.title}}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>{{ ad.description }}</div>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/'+ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          id: "1",
          title: "One",
          description: "desc1",
          promo: false,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          id: "2",
          title: "Two",
          description: "desc2",
          promo: false,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          id: "3",
          title: "Three",
          description: "desc3",
          promo: false,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          id: "4",
          title: "Four",
          description: "desc4",
          promo: false,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 10px 25px 5px;
  border-radius: 5px 5px 0 0;
}
</style>