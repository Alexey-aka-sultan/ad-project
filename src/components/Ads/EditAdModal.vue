<template>
  <v-dialog width="400px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn class="warning" text v-on="on">Edit</v-btn>
    </template>
    <v-card>
      <v-layout>
        <v-flex xs-12>
          <v-card-title>
            <h1 class="text--primary">Edit ad</h1>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout>
        <v-flex xs-12>
          <v-card-text>
            <v-text-field
              label="Title"
              name="title"
              type="text"
              v-model="editedTitle"
            />
            <v-textarea
              label="Description"
              name="description"
              type="text"
              v-model="editedDescription"
            />
          </v-card-text>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout>
        <v-flex xs-12>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onCancel">Cancel</v-btn>

            <v-btn @click="onSave" class="success">Save</v-btn>
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
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    };
  },
  methods: {
    onCancel() {
        console.log(this.ad);
        
      this.editedDescription = this.ad.description;
      this.editedTitle = this.ad.title;
      this.modal = false;
    },
    onSave() {
      if (this.editedTitle !== '' && this.editedDescription !== '') {
          this.$store.dispatch('updateAd', {
              title: this.editedTitle,
              description: this.editedDescription,
              id: this.ad.id
          })
      }
    }
  }
};
</script>

<style></style>
