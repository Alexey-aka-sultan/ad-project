import Vue from "vue";
import Vuex from "vuex";

import ads from "./ads.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ads
  }
});
