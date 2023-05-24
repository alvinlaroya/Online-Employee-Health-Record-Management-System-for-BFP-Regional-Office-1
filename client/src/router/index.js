import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "@/services/auth/Register.js";

//Pages
// Pages > Auth
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import ForgotPassword from "@/views/auth/ForgotPassword.vue";
// Pages > Navigation
import Dashboard from "@/views/navigation/Dashboard.vue";
import Personnel from "@/views/navigation/Personnel";
import History from "@/views/navigation/History";

// Pages for user management > Navigation 
import AddNewUser from "@/views/navigation/User-Management/AddNewUser.vue";
import DeleteUser from "@/views/navigation/User-Management/DeleteUser.vue";
import ChangePassword from "@/views/navigation/User-Management/ChangePassword.vue";

import TransactionLog from "@/views/navigation/User-Management/TransactionLog.vue";

// Pages > Cases
import Case from "@/views/navigation/Cases/Case";

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
    path: "/forgot-password",
    name: "auth.forgot",
    components: {
      default: ForgotPassword,
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
  },

  {
    path: "/personnel",
    name: "navigation.personnel",
    components: {
      default: Personnel,
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
  },

  {
    path: "/history",
    name: "navigation.history",
    components: {
      default: History,
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
  },
  {
    path: '/case/:title',
    name: 'navigation/case',
    components: {
      default: Case,
      navbar: Navbar,
      sidebar: Sidebar,
    }
  },

  // user management
  {
    path: "/add-new-user",
    name: "navigation.addNewUser",
    components: {
      default: AddNewUser,
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
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },

  {
    path: "/delete-user",
    name: "navigation.DeleteUser",
    components: {
      default: DeleteUser,
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
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },
  
  {
    path: "/change-password",
    name: "navigation.ChangePassword",
    components: {
      default: ChangePassword,
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
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },

  {
    path: "/transaction-log",
    name: "navigation.TransactionLog",
    components: {
      default: TransactionLog,
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
          next();
        })
        .catch(() => {
          next({ name: "auth.login" });
        });
    },
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
