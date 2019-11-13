import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";

const firebase = window.firebase;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  store,
  created() {
    /*eslint no-use-before-define: ["error", { "variables": false }]*/
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user);
      }
    });
  },
  mounted() {},
  render: h => h(App)
}).$mount("#app");
