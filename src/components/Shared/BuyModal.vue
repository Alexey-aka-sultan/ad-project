<template>
  <v-dialog width="400px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn class="primary" text v-on="on">Buy</v-btn>
    </template>
    <v-card>
      <v-layout>
        <v-flex xs-12>
          <v-card-title>
            <h2 class="text--primary">Do you want to buy it?</h2>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout>
        <v-flex xs-12>
          <v-card-text>
            <v-text-field
              label="Your name"
              name="name"
              type="text"
              v-model="name"
            />
            <v-text-field
              label="Your phone"
              name="phone"
              type="text"
              v-model="phone"
            />
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout>
        <v-flex xs-12>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onCancel" :disabled="localLoading">Close</v-btn>

            <v-btn
              @click="onSave"
              class="success"
              :disabled="localLoading"
              :loading="localLoading"
              >But it!</v-btn
            >
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
      name: "",
      phone: "",
      localLoading: false
    };
  },
  methods: {
    onCancel() {
      this.name = "";
      this.phone = "";
      this.modal = false;
    },
    onSave() {
      if (this.name !== "" && this.phone !== "") {
        this.localLoading = true;
        this.$store
          .dispatch("createOrder", {
            name: this.name,
            phone: this.phone,
            adId: this.ad.id,
            ownerId: this.ad.ownerId
          })
          .finally(() => {
            this.name = "";
            this.phone = "";
            this.localLoading = false;
            this.modal = false;
          });
      }
    }
  }
};
</script>

<style></style>
