<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center" style="height: 90vh">
      <v-col cols="3">
        <v-card class="pa-6" style="text-align: center">
          <img src="@/images/pnp.png" style="width: 100px" alt="" /><br />
          <span class="font-weight-bold" style="font-size: 21px"
            >Forgot Password</span
          >
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
                  v-model="pet"
                  label="Favorite pet"
                  required
                  outlined
                  prepend-inner-icon="mdi-paw"
                ></v-text-field>
                <v-btn tile color="success" block large @click="validate">
                  <v-icon left> mdi-login-variant </v-icon>
                  Submit
                </v-btn>
              </v-form>
              <p v-if="hasNewPassword" class="mt-6">
                New password: {{ newPassword }}
              </p>
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
    pet: "",
  }),

  methods: {
    ...mapActions(["login", "forgot"]),
    validate() {
      const valid = this.$refs.form.validate();
      if (!valid) return;
      this.forgot({
        email: this.email,
        pet: this.pet,
      });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {
    ...mapGetters(["hasLoginFail", "hasNewPassword", "newPassword"]),
  },
};
</script>
<style></style>
