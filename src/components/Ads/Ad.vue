<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-img :src="ad.imageSrc" height="400" contain></v-img>
          <v-card-text>
            <h1 class="text--primary">{{ ad.title }}</h1>
            <p>{{ ad.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- <v-btn class="warning" text>Edit</v-btn> -->
            <edit-ad-modal v-if="isOwner" :ad="ad"></edit-ad-modal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else>
          <v-row xs12 align="center" justify="center">
            <v-progress-circular
              :size="100"
              color="purple"
              indeterminate
            ></v-progress-circular>
          </v-row>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from "./EditAdModal";

export default {
  props: ["id"],
  data() {
    return {};
  },
  computed: {
    ad() {
      return this.$store.getters.adById(this.id);
    },
    loading() {
      return this.$store.getters.loading;
    },
    isOwner() {
      return this.ad.ownerId === this.$store.getters.user.id;
    }
  },
  components: {
    EditAdModal
  }
};
</script>

<style></style>
