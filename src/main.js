import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {currency} from "./currency.js"

Vue.config.productionTip = false;
Vue.use(Antd)
Vue.filter("currency",currency)

console.log(store)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
