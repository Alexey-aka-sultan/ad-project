<template>
  <v-container>
    <v-layout row>
      <v-row xs12 align="center" justify="center" v-if="loading">
        <v-progress-circular
          :size="100"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-row>

      <v-flex v-else-if="!loading && orders.length !== 0" xs12 sm-6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line flat max-width="475">
          <v-list-item-group>
            <v-list-item v-for="(order, i) in orders" :key="i">
              <template>
                <v-list-item-action>
                  <v-checkbox
                    :ref="'check' + order.adId"
                    @change="markDone(order, $event)"
                    :input-value="order.done"
                    color="success"
                  ></v-checkbox>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title>{{ order.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn :to="'/ad/' + order.adId" class="primary">Open</v-btn>
                </v-list-item-action>
              </template>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>

      <v-flex v-else>
        <h1 class="text--secondary">You have no orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    markDone(order) {
      console.log(order);
      
      this.$store
        .dispatch("markOrderDone", order.id)
        .then(() => {
          order.done = true;
        })
        .catch(() => {});
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    orders() {
      return this.$store.getters.orders;
    }
  },
  created() {
    this.$store.dispatch("fetchOrders");
  }
};
</script>

<style></style>
