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
                  v-model="accountNo"
                  dense
                  @keypress="keyPressAccountNo($event)"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  label="Rank"
                  v-model="rank"
                  :items="['SF01', 'SF02', 'SF03']"
                  dense
                ></v-select>
              </v-col>
              <v-col>
                <v-text-field
                    label="Philhealth"
                    v-mask="'##-#########-#'"
                    v-model="philhealth"
                    dense
                  ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="" cols="12" md="4">
                <v-text-field
                  label="Last Name"
                  v-model="lname"
                  dense
                  @keypress="validateString($event)"
                ></v-text-field>
              </v-col>
              <v-col class="" cols="12" md="4">
                <v-text-field
                  label="First Name"
                  v-model="fname"
                  dense
                  @keypress="validateString($event)"
                ></v-text-field>
              </v-col>
              <v-col class="" cols="12" md="4">
                <v-text-field
                  label="Middle Name"
                  v-model="mname"
                  dense
                  @keypress="validateString($event)"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-text-field
                  label="Mobile"
                  v-model="mobile"
                  prefix="+639"
                  dense
                  @keypress="validateNumber($event)"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select
                  label="Unit Assignment"
                  v-model="unit"
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
                  v-model="address"
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                  <v-text-field
                    label="Designation"
                    v-model="designation"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    label="Civil Status"
                    v-model="civilStatus"
                    :items="['Single', 'Married', 'Widowed', 'Separated']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                    label="Gender"
                    v-model="gender"
                    :items="['Male', 'Female']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Remarks"
                    v-model="remarks"
                    dense
                  ></v-text-field>
                </v-col>
            </v-row>
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

const { mapState, mapActions } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    // formData: {
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
    philhealth: '',
    rank: '',
    accountNo: ''
    // },
  }),
  methods: {
    keyPressAccountNo(e) {
      validateAccountNo(e, this.personnels.accountNo.length);
    },
    validateString(e) {
      validateString(e);
    },
    validateNumber(e) {
      validateNumber(e, this.personnels.mobile.length);
    },
  },
  computed: {},
};
</script>
  
  <style>
</style>