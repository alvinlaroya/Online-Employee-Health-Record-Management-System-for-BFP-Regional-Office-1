<template>
  <div>
    <v-dialog v-model="dialog" max-width="800">
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
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    label="Rank"
                    v-model="personnels.rank"
                    :items="['SF01', 'SF02', 'SF03']"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Ext Name"
                    v-model="personnels.extName"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row2 -->
              <v-row>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="Last Name"
                    v-model="personnels.lname"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="First Name"
                    v-model="personnels.fname"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="Middle Name"
                    v-model="personnels.mname"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row3 -->
              <v-row>
                <v-col cols="12" md="5">
                  <v-text-field
                    label="Mobile"
                    v-model="personnels.mobile"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    label="Unit Assignment"
                    v-model="personnels.unit"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row4 -->
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Designation"
                    v-model="personnels.designation"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
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
                    :items="['Single', 'Married']"
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
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
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
                    v-model="personnels.philhealth"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
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
        this.$refs.form.reset();
        this.snackbar = true;
        this.dialog = false;
        this.personnels = {};
      } catch (error) {
        console.error(error);
      }
    },
    watch: {
      dialog() {
        if (!this.dialog) {
          this.$refs.form.reset();
        }
      },
    },
    cancel() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
