<template>
  <div>
    <v-dialog v-model="dialog" max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" tile small> Update </v-btn>
      </template>
      <v-card>
        <v-card-title> Update Form </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="">
            <div>
              <v-row>
                <v-col>
                  <v-select
                    label="Rank"
                    v-model="patientData.rank"
                    :items="['SF01', 'SF02', 'SF03']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Last Name"
                    v-model="patientData.lname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="First Name"
                    v-model="patientData.fname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Middle Name"
                    v-model="patientData.mname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
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
                        v-model="patientData.dateOfBirth"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="patientData.dateOfBirth"
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
                        @click="$refs.menu.save(patientData.dateOfBirth)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    label="Unit Assignment"
                    v-model="patientData.unit"
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
                <v-col>
                  <v-text-field
                    label="Address"
                    v-model="patientData.address"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Mobile"
                    v-model="patientData.mobile"
                    prefix="+639"
                    dense
                    @keypress="validateNumber($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="patientData.initial"
                    label="Initial / Consultation"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="patientData.initialDate"
                        label="Initial Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="patientData.initialDate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu1 = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu1.save(patientData.initialDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Training"
                    v-model="patientData.training"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-menu
                    ref="menu2"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="patientData.trainingDate"
                        label="Training Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="patientData.trainingDate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu2 = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu2.save(patientData.trainingDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Promotion"
                    v-model="patientData.promotion"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    label="Diabetes"
                    v-model="patientData.diabetes"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Bleeding Tendency"
                    v-model="patientData.bleeding"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Drug Sensitivity"
                    v-model="patientData.drugSensitivity"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="History Of Hypertension"
                    v-model="patientData.historyOfHypertension"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    label="Asthma"
                    v-model="patientData.asthma"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Food Allergy"
                    v-model="patientData.foodAllergy"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="BP Systolic"
                    v-model="patientData.systolicBP"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Diastolic"
                    v-model="patientData.diastolicBP"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    label="Examing Date"
                    v-model="patientData.examiningDate"
                    dense
                  />
                </v-col>
              </v-row>
            </div>
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// helpers

import validateString from "@/_common/helpers/validateString.js";
import validateNumber from "@/_common/helpers/validateNumber.js";

export default {
  data: () => ({
    dialog: false,
    menu: false,
    menu1: false,
    menu2: false,
    menu3: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    patientData: {
      rank: "",
      lname: "",
      fname: "",
      mname: "",
      dateOfBirth: "",
      unit: "",
      address: "",
      mobile: "",
      // api update dentalRecord
      initial: false,
      initialDate: "",
      training: false,
      trainingDate: "",
      promotion: false,
      promotionDate: "",
      calculus: false,
      remarks: "",
      presentOralComplaint: "",
      diabetes: false,
      bleeding: true,
      drugSensitivity: false,
      historyOfHypertension: false,
      asthma: false,
      foodAllergy: true,
      systolicBP: true,
      diastolicBP: true,
      examiningDate: false,
    },
  }),
  methods: {
    submit() {
      console.log("submitted");
    },
    open() {
      this.dialog = !this.dialog;
    },

    validateString(e) {
      validateString(e);
    },
    validateNumber(e) {
      validateNumber(e, this.patientData.mobile.length);
    },
  },
};
</script>

<style>
</style>