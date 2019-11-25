<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card elevation="10" class="mb-4" v-for="(ad,i) in myAds" :key="i">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imageSrc" height="160"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info mr-3" :to="'/ad/'+ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    }
  }
};
</script>

<style>
</style>