<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    :mini-variant="mini"
    mini-variant-width="60"
    id="sidebar"
    append
    :hide-overlay="true"
  >
    <v-list>
      <v-list-item dense>
        <v-list-item-content>
          <v-list-item-title style="font-size: 19px"
            >BFP System</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item dense>
        <v-list-item-avatar>
          <img src="@/images/user.png" style="width: 100px" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-small">
            {{ currentUser.fname }} {{ currentUser.lname }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-small">{{
            currentUser.position
          }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-menu
          transition="slide-y-transition"
          bottom
          left
          absolute
          nudge-bottom="30"
          :offset-y="true"
          min-width="230"
          style="z-index: 999999"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-action v-bind="attrs" v-on="on">
              <v-btn icon>
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>

          <v-list dense>
            <v-subheader>Other Options</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, i) in otherOptions"
                :key="i"
                @click="navMenuMethods(item.method)"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon" :color="item.iconColor"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense subheader v-for="(list, i) in navigationList" :key="i">
      <v-subheader class="text-truncate">{{ list.subheader }}</v-subheader>
      <v-list-item-group>
        <div v-for="(item, i) in list.subheaderList" :key="i">
          <v-tooltip right :disabled="!mini">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                active-class="active-class"
                v-bind="attrs"
                v-on="on"
                link
                :to="item.path"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <span>{{ item.text }}</span>
          </v-tooltip>
        </div>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { EventBus } from "@/main.js";
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapGettersAuth, mapActions: mapActionsAuth } =
  createNamespacedHelpers("auth");
const { mapGetters: mapGettersNavigation, mapActions: mapActionsNavigation } =
  createNamespacedHelpers("navigation");

export default {
  data: () => ({
    drawer: !null,
    mini: false,
    navigationList: [
      {
        subheader: "Navigation",
        subheaderList: [
          {
            text: "Dashboard",
            icon: "mdi-view-dashboard-outline",
            path: "/dashboard",
          },
          {
            text: "Personnel",
            icon: "mdi-briefcase-account-outline",
            path: "/personnel",
          },
          {
            text: "History",
            icon: "mdi-history",
            path: "/history",
          },
        ],
      },
    ],
    otherOptions: [
      {
        text: "Sign Out",
        icon: "mdi-logout-variant",
        iconColor: "red",
        method: "logout",
      },
    ],
  }),
  methods: {
    ...mapActionsAuth(["logOutUser"]),
    ...mapActionsNavigation(["fetchPolice"]),
    navMenuMethods(method) {
      switch (method) {
        case "logout":
          this.logOutUser();
          break;
        default:
          return null;
      }
    },
  },
  computed: {
    ...mapGettersAuth(["currentUser"]),
    ...mapGettersNavigation(["allPolice"]),
  },
};
</script>

<style scoped>
.active-class {
  background-color: #001245;
  color: red;
}
</style>
