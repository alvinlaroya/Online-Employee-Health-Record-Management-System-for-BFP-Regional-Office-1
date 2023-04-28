<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center" style="height: 90vh">
      <v-col cols="6">
        <v-card class="pa-6" style="text-align: center">
          <img src="@/images/pnp.png" style="width: 100px" alt="" /><br />
          <span class="font-weight-bold" style="font-size: 21px"
            >Login to Dashboard</span
          >
          <v-card-subtitle
            >Online Employee Health Record Management System for BFP Regional
            Office 1</v-card-subtitle
          >
          <v-card-text class="mt-5">
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row>
                  <v-col md="4">
                    <v-text-field
                      v-model="user.fname"
                      :rules="fnameRules"
                      label="First name"
                      required
                      outlined
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                  <v-col md="4">
                    <v-text-field
                      v-model="user.mname"
                      :rules="mnameRules"
                      label="Middle name"
                      required
                      outlined
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                  <v-col md="4">
                    <v-text-field
                      v-model="user.lname"
                      :rules="lnameRules"
                      label="Last name"
                      required
                      outlined
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col md="6">
                    <v-text-field
                      v-model="user.email"
                      :rules="usernameRules"
                      label="Username"
                      required
                      outlined
                      @keypress="isLetter($event)"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      v-model="user.password"
                      :rules="passwordRules"
                      label="Password"
                      required
                      outlined
                      prepend-inner-icon="mdi-lock"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col md="6">
                    <v-menu
                      ref="birthDateMenu"
                      v-model="birthDateMenu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="user.birthDate"
                          label="Date of Birth"
                          prepend-icon="mdi-calendar"
                          readonly
                          dense
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="user.birthDate"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="birthDateMenu = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.birthDateMenu.save(user.birthDate)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      v-model="user.position"
                      label="Position"
                      outlined
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.phone"
                      label="Mobile"
                      prefix="+639"
                      outlined
                      prepend-inner-icon="mdi-phone"
                      @keypress="validateNumber($event)"
                      min="2"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col cols="12">
                    <!-- <v-select
                      v-model="user.address"
                      :items="addresses"
                      outlined
                      hint="Barangay of Sison, Pangasinan"
                      persistent-hint
                      :rules="[(v) => !!v || 'Address is required']"
                      label="Barangay"
                      required
                      prepend-inner-icon="mdi-map-marker"
                    ></v-select> -->
                    <v-text-field
                      v-model="user.address"
                      label="Address"
                      outlined
                      prepend-inner-icon="mdi-map-marker"
                      min="2"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="my-2 text-left pa-3">
                  <v-col>
                    <span>Roles and Permissions</span>
                  </v-col>
                  <v-col
                    cols="12"
                    class="my-1"
                    style="border: 1px solid gray; border-radius: 5px"
                  >
                    <span style="font-size: 11px"
                      >Medical Record Permission</span
                    >
                    <v-row>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.viewMedical"
                          label="View Medical History"
                        ></v-switch>
                      </v-col>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.updateMedical"
                          label="Update Medical History"
                        ></v-switch>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    class="my-1"
                    style="border: 1px solid gray; border-radius: 5px"
                  >
                    <span style="font-size: 11px"
                      >Dental Record Permission</span
                    >
                    <v-row>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.viewDental"
                          label="View Dental History"
                        ></v-switch>
                      </v-col>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.updateDental"
                          label="Update Dental History"
                        ></v-switch>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    class="my-1"
                    style="border: 1px solid gray; border-radius: 5px"
                  >
                    <span style="font-size: 11px"
                      >Physical Exam Record Permission</span
                    >
                    <v-row>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.viewPhysical"
                          label="View Physical Exam History"
                        ></v-switch>
                      </v-col>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.updatePhysical"
                          label="Update Physical Exam History"
                        ></v-switch>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    class="my-1"
                    style="border: 1px solid gray; border-radius: 5px"
                  >
                    <span style="font-size: 11px"
                      >PT Notes Record Permission</span
                    >
                    <v-row>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.viewPtNotes"
                          label="View PT Notes History"
                        ></v-switch>
                      </v-col>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.updatePtNotes"
                          label="Update PT Notes History"
                        ></v-switch>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col
                    cols="12"
                    class="my-1"
                    style="border: 1px solid gray; border-radius: 5px"
                  >
                    <span style="font-size: 11px"
                      >Neuro Psych Record Permission</span
                    >
                    <v-row>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.viewNeuro"
                          label="View Neuro Psych History"
                        ></v-switch>
                      </v-col>
                      <v-col cols="6">
                        <v-switch
                          v-model="roles.updateNeuro"
                          label="Update Neuro Psych History"
                        ></v-switch>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-btn tile color="success" block large @click="validate">
                  <v-icon left> mdi-account-plus-outline </v-icon>
                  Register
                </v-btn>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="success"
      :right="true"
      :top="true"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

// helpers
import validateString from "@/_common/helpers/validateString.js";
import validateNumber from "@/_common/helpers/validateNumber.js";

export default {
  data: () => ({
    show: false,
    valid: true,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    birthDateMenu: null,
    user: {
      fname: "",
      mname: "",
      lname: "",
      email: "",
      password: "",
      address: "",
      birthDate: "",
      position: "",
      phone: "",
    },
    roles: {
      viewMedical: false,
      updateMedical: false,
      viewDental: false,
      updateDental: false,
      viewPhysical: false,
      updatePhysical: false,
      viewPtNotes: false,
      updatePtNotes: false,
      viewNeuro: false,
      updateNeuro: false,
    },
    fnameRules: [(v) => !!v || "First name is required"],
    mnameRules: [(v) => !!v || "Middle name is required"],
    lnameRules: [(v) => !!v || "Last name is required"],
    usernameRules: [(v) => !!v || "Username is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => (v && v.length <= 40) || "Name must be less than 40 characters",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    snackbar: false,
    text: "My timeout is set to 2000.",
    timeout: 2000,
  }),

  methods: {
    ...mapActions(["getAddresses", "register"]),
    validate() {
      const valid = this.$refs.form.validate();
      if (valid) {
        this.register({
          user: this.user,
          roles: this.roles,
        });
        this.$refs.form.reset();
        this.snackbar = true;
        this.text = "Account Successfully Created";
      }
    },
    validateNumber(e) {
      validateNumber(e, this.user.phone.length);
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    isLetter(e) {
      validateString(e);
    },
  },

  computed: {
    ...mapGetters(["addresses"]),
  },

  mounted() {
    this.getAddresses();
  },
};
</script>
<style></style>
