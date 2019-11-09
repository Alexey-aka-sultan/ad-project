<template>
  <v-container>
      <v-layout row>
          <v-flex xs12>
              <v-card>
                  <v-img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="300"></v-img>
                  <v-card-text>
                      <h1 class="text--primary">lorem</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ex placeat vitae numquam</p>
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="warning" text>Edit</v-btn>
                      <v-btn color="success">Buy</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    data: () => ({

    })
}
</script>

<style>

</style>