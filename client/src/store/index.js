import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";
import Auth from "./modules/auth";
import Dashboard from "./modules/navigation/dashboard";

const dataState = createPersistedState({
  paths: ["auth.auth.user", "auth.auth.loggedIn", "auth.auth.roles"],
});

export default new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      modules: {
        auth: Auth,
      },
    },
    navigation: {
      namespaced: true,
      modules: {
        dashboard: Dashboard,
      },
    },
  },
  plugins: [dataState],
});
