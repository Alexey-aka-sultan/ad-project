<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm-6 offset-sm-3>
        <h1 class="text--secondary mb-3">Create new ad</h1>

        <v-form ref="form" v-model="valid" lazy-validation class="mb-3">
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            required
            :rules="[v => !!v || 'Title is required']"
            v-model="title"
          />

          <v-textarea
            label="Ad description"
            name="description"
            type="text"
            :rules="[v => !!v || 'Description is required']"
            v-model="description"
          />
        </v-form>

        <v-layout row mb-3>
          <v-flex xs12>
            <v-btn
              @click="triggerUpload"
              color="blue-grey"
              class="ma-2 white--text"
            >
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none"
              accept="image/*"
              @change="onFileChange"
            />
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <img :src="imageSrc" height="100" v-if="imageSrc" />
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-switch v-model="promo" :label="'Add to promo?'"></v-switch>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              :loading="loading"
              :disabled="!valid || !image || loading"
              class="success"
              @click="createAd"
              >Create ad</v-btn
            >
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false,
      image: null,
      imageSrc: ''
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        };

        this.$store
          .dispatch("createAd", ad)
          .then(() => this.$router.push("/ad-list"))
          .catch(() => {});
      }
    },
    triggerUpload() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];      
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc = reader.result;        
      };

      reader.readAsDataURL(file);
      this.image = file;
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>

<style></style>
