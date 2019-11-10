import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  created() {
    // var firebaseConfig = {
    //   apiKey: "AIzaSyAc7vZXdxPsyHFezZTA39vQAOi0HXgR4Dk",
    //   authDomain: "itc-ads-3f211.firebaseapp.com",
    //   databaseURL: "https://itc-ads-3f211.firebaseio.com",
    //   projectId: "itc-ads-3f211",
    //   storageBucket: "itc-ads-3f211.appspot.com",
    //   messagingSenderId: "585806385925",
    //   appId: "1:585806385925:web:36dd811f0ab5b788719d6c"
    // };
  },
  render: h => h(App)
}).$mount("#app");
