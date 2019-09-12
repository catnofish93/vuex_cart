import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getter.js"
import * as actions from "./action.js"
import * as mutations from "./mutation.js"

Vue.use(Vuex);
const state={
  count:0,
  history:[]
}
console.log(getters)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
