<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center" style="height: 90vh">
      <v-col cols="3">
        <v-card class="pa-6" style="text-align: center">
          <img src="@/images/pnp.png" style="width: 100px" alt="" /><br />
          <span class="font-weight-bold" style="font-size: 21px"
            >Login to Dashboard</span
          >
          <v-card-subtitle>
            Online Employee Health Record Management System for BFP Regional
            Office 1
          </v-card-subtitle>

          <v-alert
            v-if="hasLoginFail"
            dense
            class="ml-6 mr-6"
            outlined
            type="error"
          >
            Invalid <strong>credentials</strong> or maybe your account is not
            <strong>verified</strong>
          </v-alert>
          <v-card-text class="mt-5">
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  label="Username"
                  required
                  outlined
                  prepend-inner-icon="mdi-account"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  required
                  outlined
                  prepend-inner-icon="mdi-lock"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                ></v-text-field>
                <v-btn tile color="success" block large @click="validate">
                  <v-icon left> mdi-login-variant </v-icon>
                  Login
                </v-btn>
                <div style="margin-top: 10px">
                  <router-link to="/forgot-password"
                    >Forgot Password</router-link
                  >
                </div>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    valid: true,
    show: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => (v && v.length <= 40) || "Name must be less than 40 characters",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    ...mapActions(["login"]),
    validate() {
      const valid = this.$refs.form.validate();
      if (valid) this.login({ email: this.email, password: this.password });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    forgot() {
      this.$router.push({ name: "auth.forgot" });
    },
  },
  computed: {
    ...mapGetters(["hasLoginFail"]),
  },
};
</script>
<style></style>
