import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

/* eslint-disable no-new */
  new Vue({
    vuetify,
    router,
    store,
    created() {
      console.log(firebase);
    },
    mounted() {
    },
    render: h => h(App)
  }).$mount("#app");
