import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import VueResource from "vue-resource";
// import VueLodash from "vue-lodash";
import { routes } from "./router.js";
import { store } from "./store/store.js";
import { mixin } from "./mixin.js";
import BootstrapVue from "bootstrap-vue";
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.use(VueResource);

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to.hash, from.hash);

    // if (to.hash == "#top") {
    //   return { x: 0, y: 230 };
    // } else {
    //   return savedPosition;
    // }
  }
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
  mixins: [mixin]
});
