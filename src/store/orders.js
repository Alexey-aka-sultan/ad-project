/*eslint-disable */

class Order {
  constructor(name, phone, adId, done = false, id = null) {
    this.name = name;
    this.phone = phone;
    this.adId = adId;
    this.done = done;
    this.id = id;
  }
}

export default {
  state: {
    orders: []
  },
  mutations: {
    loadOrders(state, payload) {
      state.orders = payload;
    }
  },
  actions: {
    async createOrder({ commit }, { name, phone, adId, ownerId }) {
      const order = new Order(name, phone, adId);
      commit("clearError");

      try {
        await firebase
          .database()
          .ref(`users/${ownerId}/orders`)
          .push(order);
      } catch (error) {
        commit("setError", error.message);
        throw error;
      }
    },
    async fetchOrders({ commit, getters }) {
      commit("clearError");
      commit("setLoading", true);

      const resultOrders = [];

      try {
        const fbVal = await firebase
          .database()
          .ref(`users/${getters.user.id}/orders`)
          .once("value");
        const orders = fbVal.val();

        Object.keys(orders).forEach(key => {
          const o = orders[key];
          resultOrders.push(new Order(o.name, o.phone, o.adId, key));
        });

        commit("loadOrders", resultOrders);
        commit("setLoading", false);
      } catch (error) {
        commit("setError", error.message);
        commit("setLoading", false);
        throw error;
      }
    },
    async markOrderDone({ commit, getters }, payload) {
      commit("clearError");
      try {
        await firebase
          .database()
          .ref(`users/${getters.user.id}/orders`)
          .child(payload)
          .update({ done: true });
      } catch (error) {}
    }
  },
  getters: {
    doneOrders(state) {
      return state.orders.filter(o => o.done);
    },
    undoneOrders(state) {
      return state.orders.filter(o => !o.done);
    },
    orders(state, getters) {
      return getters.undoneOrders.concat(getters.doneOrders);
    }
  }
};
/*eslint-enable */
