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
              <!-- physical api -->
              <v-row>
                <v-col cols="4" v-for="(value, key) in physicalData" :key="key">
                  <v-text-field
                    v-if="key !== 'dateOfExamination'"
                    v-model="physicalData[key]"
                    :label="formatLabel(key)"
                  ></v-text-field>
                  <v-menu
                    v-else
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
                        v-model="physicalData.dateOfExamination"
                        :label="formatLabel(key)"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="physicalData.dateOfExamination"
                      no-title
                      scrollable
                    >

                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </div>
            <v-btn color="primary" @click="submitHandler">Submit</v-btn>
          </v-form>
        </v-card-text>
       <pre>{{ personnelDetails.physicalExamination }}</pre>
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
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    physicalData: {
      
      height: "",
      weight: "",
      build: "",
      skin: "",
      colorOfEyes: "",
      colorOfHair: "",
      headAndFace: "",
      neck: "",
      noseAndSinuses: "",
      mouthAndThroat: "",
      earsAndEardrums: "",
      whisperVoiceTest: "",
      eyesOrPupils: "",
      vision: "",
      colorVision: "",
      heart: "",
      vascularSystem: "",
      lungsAndChest: "",
      abdomenViscera: "",
      anusAndRectum: "",
      genital: "",
      upperExtremities: "",
      lowerExtremities: "",
      spineAndMskSystem: "",
      pelvic: "",
      psychiatric: "",
      bloodPressure: "",
      cardiacRate: "",
      drugTest: "",
      urinalysis: "",
      fbs: "",
      hepaScreening: "",
      cbc: "",
      bloodType: "",
      pregnancyTest: "",
      cholesterol: "",
      ecg: "",
      chestXray: "",

      significantMedicalHistory: "",
      overallPhysicalEvaluation: "",
      recommendation: "",
      purposeOfExamination: "",
      dateOfExamination: "",
    },
  }),
  methods: {
    ...mapActions(["updatePhysical"]),
    async submitHandler() {
      await this.updatePhysical({
        personnelId: this.personnelId,
        data: this.physicalData,
      });
      this.dialog = false;
    },
    formatLabel(label) {
      label = label.replace(/([a-z])([A-Z])/g, "$1 $2");
      // Capitalize the first letter of each word in the label
      return label.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
        letter.toUpperCase()
      );
    },
    open() {
      this.dialog = !this.dialog;
    },
    validateString(e) {
      validateString(e);
    },
    validateNumber(e) {
      validateNumber(e, this.physicalData.mobile.length);
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    personnelId() {
      return this.personnelDetails.personnel.id;
    },
  },
  mounted() {
    this.physicalExamination = this.personnelDetails.physicalExamination
  }
};
</script>

<style>
</style>