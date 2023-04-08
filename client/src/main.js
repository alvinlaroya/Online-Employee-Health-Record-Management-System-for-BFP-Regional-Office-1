/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
export const EventBus = new Vue();
import Print from "vue-print-nb";
// Global instruction
import VueSweetalert2 from "vue-sweetalert2";
import VueMask from "v-mask";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";


Vue.use(Print);
Vue.use(VueSweetalert2);
Vue.use(VueMask);

Vue.filter("computeAge", (date) => {
  var dob = new Date(date);
  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();
  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);
  //extract year from date
  var year = age_dt.getUTCFullYear();
  //now calculate the age of the user
  var age = Math.abs(year - 1970);
  //display the calculated age
  return age;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
