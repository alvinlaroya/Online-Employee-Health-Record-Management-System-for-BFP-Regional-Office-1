import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/services/auth/Register.js";

//Pages
// Pages > Auth
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
// Pages > Navigation
import Dashboard from "@/views/navigation/Dashboard.vue";

// Components
import Navbar from "../components/navigation/Navbar.vue";
import Sidebar from "../components/navigation/Sidebar.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "auth.login",
    components: {
      default: Login,
      navbar: Navbar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next({ name: "navigation.dashboard" });
          } else {
            next();
          }
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  {
    path: "/register",
    name: "auth.register",
    components: {
      default: Register,
      navbar: Navbar,
    },
  },
  {
    path: "/dashboard",
    name: "navigation.dashboard",
    components: {
      default: Dashboard,
      navbar: Navbar,
      sidebar: Sidebar,
    },
    beforeEnter(to, from, next) {
      Auth.isAuthenticated()
        .then((response) => {
          if (response) {
            next(); // If authenticated, proceed with the redirect
          } else {
            next({ name: "auth.login" });
          }
          /* console.log(response.data) */
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
