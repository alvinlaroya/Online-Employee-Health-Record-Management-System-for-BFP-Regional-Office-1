<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="4">
          <v-card-title class="text-center">Change Password</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="changePassword">
              <v-text-field
                dense
                v-model="oldPassword"
                :rules="passwordRules"
                label="Old Password"
                required
                outlined
                prepend-inner-icon="mdi-lock"
                :append-icon="oldShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="oldShow ? 'text' : 'password'"
                @click:append="oldShow = !oldShow"
              ></v-text-field>
              <v-text-field
                dense
                v-model="newPassword"
                :rules="passwordRules"
                label="New Password"
                required
                outlined
                prepend-inner-icon="mdi-lock"
                :append-icon="newShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="newShow ? 'text' : 'password'"
                @click:append="newShow = !newShow"
              ></v-text-field>

              <v-btn
                small
                type="submit"
                color="primary"
                @click="changePasswordHandler"
                >Change Password</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");
export default {
  data: () => ({
    newPassword: "",
    oldPassword: "",
    valid: true,
    oldShow: false,
    newShow: false,
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    ...mapActions(["changePassword"]),
    changePasswordHandler() {
      this.changePassword({
        email: this.currentUser.email,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      });
    },
  },

  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>
