<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm-6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line flat max-width="475">
          <v-list-item-group>
            <v-list-item v-for="(order, i) in orders" :key="i">
              <template>
                <v-list-item-action>
                  <v-checkbox :ref="'check'+order.adId" @change="markDone(order, $event)" :input-value="order.done" color="success"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn :to="'/ad/'+order.adId" class="primary">Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "",
          name: "Samuel",
          phone: "8-555-658-4598",
          adId: "1",
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order, e) {
      order.done = e;      
    }
  }
};
</script>

<style>
</style>