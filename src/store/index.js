import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./modules/user";
import shopcart from "./modules/shopcart";
export default new Vuex.Store({
  modules: {
    user,
    shopcart
  }
});
