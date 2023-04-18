<template>
  <div>
    <v-dialog v-model="dialog" max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" tile small> Update </v-btn>
      </template>
      <v-card>
        <v-card-title> Update Form </v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col>
                <v-text-field
                  label="Account Number"
                  v-model="Personnel.accountNo"
                  dense
                  @keypress="keyPressAccountNo($event)"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  label="Rank"
                  v-model="Personnel.rank"
                  :items="['FDir',
                    'FCSupt',
                    'FSSupt',
                    'FSupt',
                    'FCInsp',
                    'FSInsp',
                    'FInsp',
                    'SFO4',
                    'SFO3',
                    'SFO2',
                    'SFO1',
                    'FO3',
                    'FO2',
                    'FO1']"
                  dense
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  label="Philhealth"
                  v-mask="'##-#########-#'"
                  v-model="Personnel.philhealth"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="" cols="12" md="4">
                <v-text-field
                  label="Last Name"
                  v-model="Personnel.lname"
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="" cols="12" md="4">
                <v-text-field
                  label="First Name"
                  v-model="Personnel.fname"
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="" cols="12" md="4">
                <v-text-field
                  label="Middle Name"
                  v-model="Personnel.mname"
                  dense
                  @keypress="validateString($event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-text-field
                  label="Mobile"
                  v-model="Personnel.mobile"
                  prefix="+639"
                  dense
                  @keypress="validateNumber($event)"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select
                  label="Unit Assignment"
                  v-model="Personnel.unit"
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
              <v-col cols="4">
                <v-text-field
                  label="Address"
                  v-model="Personnel.address"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-text-field
                  label="Designation"
                  v-model="Personnel.designation"
                  dense
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  label="Civil Status"
                  v-model="Personnel.civilStatus"
                  :items="['Single', 'Married', 'Widowed', 'Separated']"
                  dense
                ></v-select>
              </v-col>
              <v-col>
                <v-select
                  label="Gender"
                  v-model="Personnel.gender"
                  :items="['Male', 'Female']"
                  dense
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                  label="Remarks"
                  v-model="Personnel.remarks"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-select
                  label="Ext Name"
                  v-model="Personnel.extName"
                  :items="['Sr', 'Jr', 'I', 'II', 'III  ']"
                  dense
                ></v-select>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="submitHandler">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
  
<script>
import validateAccountNo from "@/_common/helpers/accountNoValidation.js";
import validateString from "@/_common/helpers/validateString.js";
import validateNumber from "@/_common/helpers/validateNumber.js";

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    Personnel: {
      fname: "",
      mname: "",
      lname: "",
      extName: "",
      gender: "",
      mobile: "",
      address: "",
      dateOfBirth: "",
      civilStatus: "",
      unit: "",
      designation: "",
      remarks: "",
      accountNo: "",
      rank: "",
      philhealth: "",
    },
  }),
  methods: {
    ...mapActions(["updatePersonnel"]),
    async submitHandler() {
      await this.updatePersonnel({
        personnelId: this.personnelId,
        data: this.Personnel,
      });

      this.dialog = false;
      location.reload();
    },
    keyPressAccountNo(e) {
      validateAccountNo(e, this.personnelDetails.personnel.accountNo.length);
    },
    validateString(e) {
      validateString(e);
    },
    validateNumber(e) {
      validateNumber(e, this.personnelDetails.personnel.mobile.length);
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    personnelId() {
      return this.personnelDetails.personnel.id;
    },
  },
  mounted() {
    setTimeout(() => {
      this.Personnel = this.personnelDetails.personnel;
    }, 2000);
  },
};
</script>
  
  <style>
</style>