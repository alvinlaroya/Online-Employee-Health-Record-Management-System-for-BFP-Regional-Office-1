<template>
  <div>
    <v-dialog v-model="dialog" max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" tile>
          <v-icon left> mdi-plus </v-icon>
          Add Personnel
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Personnel</span>
        </v-card-title>
        <v-form @submit.prevent="submitPersonnel" v-model="valid" ref="form">
          <v-card-text>
            <v-container fluid>
              <!-- row1 -->
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Account Number"
                    v-model="personnels.accountNo"
                    dense
                    @keypress="keyPressAccountNo($event)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    label="Rank"
                    v-model="personnels.rank"
                    :items="['SF01', 'SF02', 'SF03']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                    label="Ext Name"
                    v-model="personnels.extName"
                    :items="['Sr', 'Jr', 'I', 'II', 'III  ']"
                    dense
                  ></v-select>
                </v-col>
              </v-row>
              <!-- row2 -->
              <v-row>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="Last Name"
                    v-model="personnels.lname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="First Name"
                    v-model="personnels.fname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="Middle Name"
                    v-model="personnels.mname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row3 -->
              <v-row>
                <v-col cols="12" md="5">
                  <v-text-field
                    label="Mobile"
                    v-model="personnels.mobile"
                    prefix="+639"
                    dense
                    @keypress="validateNumber($event)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="7">
                  <v-select
                    label="Unit Assignment"
                    v-model="personnels.unit"
                    :items="[
                      'OARD - R1',
                      'OPFM - ILOCOS NORTE',
                      'OPFM - ILOCOS SUR',
                      'OPFM - La Union',
                      'OPFM - PANGASINAN',
                    ]"
                    dense
                  ></v-select>
                </v-col>
              </v-row>
              <!-- row4 -->
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Designation"
                    v-model="personnels.designation"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Address"
                    v-model="personnels.address"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row5 -->
              <v-row>
                <v-col cols="12" md="4">
                  <v-select
                    label="Civil Status"
                    v-model="personnels.civilStatus"
                    :items="['Single', 'Married', 'Widowed', 'Separated']"
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    label="Gender"
                    v-model="personnels.gender"
                    :items="['Male', 'Female']"
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="12" md="4">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="personnels.dateOfBirth"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="personnels.dateOfBirth"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(personnels.dateOfBirth)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Philhealth"
                    v-mask="'##-#########-#'"
                    v-model="personnels.philhealth"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-text-field
                    label="Remarks"
                    v-model="personnels.remarks"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" type="submit">ADD</v-btn>
            <v-btn color="secondary" @click="cancel">Cancel</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      Personnel added successfully!
    </v-snackbar>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("navigation");

// helpers
import validateAccountNo from "@/_common/helpers/accountNoValidation.js";
import validateString from "@/_common/helpers/validateString.js";
import validateNumber from "@/_common/helpers/validateNumber.js";

export default {
  data: () => ({
    dialog: false,
    valid: true,

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    snackbar: false,

    personnels: {
      accountNo: "",
      rank: "",
      lname: "",
      fname: "",
      mname: "",
      extName: "",
      unit: "",
      designation: "",
      mobile: "",
      civilStatus: "",
      gender: "Male",
      philhealth: "",
      remarks: "",
      dateOfBirth: "",
      address: "",
    },
  }),

  methods: {
    ...mapActions(["addPersonnels"]),
    async submitPersonnel() {
      try {
        await this.addPersonnels(this.personnels);
        console.log(this.personnels);
        this.$refs.form.reset();
        this.snackbar = true;
        this.dialog = false;
        this.personnels = {};
        this.$refs.form.reset();
        location.reload();
      } catch (error) {
        console.error(error);
      }
    },
    keyPressAccountNo(e) {
      validateAccountNo(e, this.personnels.accountNo.length);
    },
    validateString(e) {
      validateString(e);
    },
    validateNumber(e) {
      validateNumber(e, this.personnels.mobile.length);
    },
    cancel() {
      this.dialog = !this.dialog;
    },
  },
  watch: {
    dialog() {
      if (!this.dialog) {
        this.$refs.form.reset();
      }
    },
  },
};
</script>
