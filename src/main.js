import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
// import VueResource from "vue-resource";
import { routes } from "./router.js";
import { store } from "./store/store.js";
Vue.use(VueRouter);

// Vue.use(VueResource);
const router = new VueRouter({
  mode: "history",
  routes
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
