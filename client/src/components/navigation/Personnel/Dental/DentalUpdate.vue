<template>
  <div>
    <v-dialog v-model="dialog" max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" tile small> Update </v-btn>
      </template>
      <v-card>
        <v-card-title> Update Form </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <div>
              
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="dental.initial"
                    label="Initial / Consultation"
                    dense
                  />
                </v-col>
                <v-col cols="3">
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
                        v-model="dental.initialDate"
                        label="Initial Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dental.initialDate"
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
                        @click="$refs.menu1.save(dental.initialDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    label="Training"
                    v-model="dental.training"
                    dense
                  />
                </v-col>
                <v-col cols="3">
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
                        v-model="dental.trainingDate"
                        label="Training Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dental.trainingDate"
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
                        @click="$refs.menu2.save(dental.trainingDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    label="Promotion"
                    v-model="dental.promotion"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-menu
                    ref="menu4"
                    v-model="menu4"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dental.promotionDate"
                        label="Promotion Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dental.promotionDate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu4 = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu4.save(dental.promotionDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    label="Diabetes"
                    v-model="dental.diabetes"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Bleeding Tendency"
                    v-model="dental.bleeding"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Drug Sensitivity"
                    v-model="dental.drugSensitivity"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="History Of Hypertension"
                    v-model="dental.historyOfHypertension"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox label="Asthma" v-model="dental.asthma" dense />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Food Allergy"
                    v-model="dental.foodAllergy"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="BP Systolic"
                    v-model="dental.systolicBP"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    label="Diastolic"
                    v-model="dental.diastolicBP"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <!-- <v-col>
                  <v-menu
                    ref="menu5"
                    v-model="menu5"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dental.examiningDate"
                        label="Examining Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="dental.examiningDate"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu5 = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu5.save(dental.examiningDate)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col> -->
              </v-row>
            </div>
            <v-btn @click="submitHandler" color="primary">Submit</v-btn>
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

import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    menu: false,
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
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
    },
    dental: {
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
    ...mapActions(["updateDental"]),
    async submitHandler() {
      await this.updateDental({
        personnelId: this.personnelId,
        data: this.dental,
      });
      this.dialog = false;
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
  computed: {
    ...mapGetters(["personnelDetails"]),
    personnelId() {
      return this.personnelDetails.personnel.id;
    },
  },
};
</script>

<style>
</style>