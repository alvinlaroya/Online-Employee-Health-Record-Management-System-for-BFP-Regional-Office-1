<template>
  <div>
    <v-app-bar app dense id="navbar">
      <!-- <v-app-bar-nav-icon @click="switchMiniSidebar"></v-app-bar-nav-icon> -->

      <!-- End of Navbar left actions -->
      <v-spacer></v-spacer>

      <!-- Navbar right actions -->
      <template v-if="loggedIn">
        <v-avatar :size="30">
          <img src="@/images/pnp.png" style="width: 120px" alt="" />
        </v-avatar>
      </template>
      <template v-else>
        <v-btn
          @click="$router.push({ name: 'auth.login' })"
          class="elevation-0"
        >
          Login
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    selected: null,
    notification: true,
    version: "4.4.0",
    switch: false,
  }),
  computed: {
    ...mapGetters(["loggedIn"]),
  },
  methods: {
    ...mapActions(["logOutUser"]),
    logout() {
      this.logOutUser();
    },
  },
};
</script>
<style lang="postcss" scoped>
/deep/ .v-text-field {
  max-width: 450px;
}
</style>
