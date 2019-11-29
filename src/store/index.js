import Vue from "vue";
import Vuex from "vuex";

import ads from "./ads.js";
import user from "./user.js";
import shared from "./shared.js";
import orders from "./orders";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ads,
    user,
    shared,
    orders
  }
});
