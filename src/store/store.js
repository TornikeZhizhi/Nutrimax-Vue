import Vue from "vue";
import Vuex from "vuex";
import news from "./modules/News";
import services from "./modules/Services";
import animalData from "./modules/Products";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    news,
    services,
    animalData
  }
});
