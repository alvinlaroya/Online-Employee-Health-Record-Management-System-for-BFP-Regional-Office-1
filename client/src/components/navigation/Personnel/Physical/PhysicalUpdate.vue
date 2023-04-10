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
                <v-col>
                  <v-select
                    label="Rank"
                    v-model="personnelData.rank"
                    :items="['SF01', 'SF02', 'SF03']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Last Name"
                    v-model="personnelData.lname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="First Name"
                    v-model="personnelData.fname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Middle Name"
                    v-model="personnelData.mname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Home Address"
                    v-model="personnelData.address"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-select
                    label="Sex"
                    v-model="personnelData.gender"
                    :items="['Male', 'Female']"
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="2">
                  <v-select
                    label="Civil Status"
                    v-model="personnelData.civilStatus"
                    :items="['Single', 'Married', 'Widowed', 'Seperated']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Mobile"
                    v-model="personnelData.mobile"
                    prefix="+639"
                    dense
                    @keypress="validateNumber($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
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
                        v-model="personnelData.dateOfBirth"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="personnelData.dateOfBirth"
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
                        @click="$refs.menu.save(personnelData.dateOfBirth)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Place of birth"
                    v-model="personnelData.placeOfBirth"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    label="Unit Assignment"
                    v-model="personnelData.unit"
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
                    label="Designation"
                    v-model="personnelData.designation"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- physical api -->
              <v-row>
                <v-col
                  cols="4"
                  v-for="(value, key) in physicalData"
                  :key="key"
                >
                <v-text-field v-model="physicalData[key]" :label="key"></v-text-field>
                </v-col>
              </v-row>
              <!-- <v-row>
                <v-col>
                  <v-text-field
                    label="Significat Medical history"
                    v-model="physicalData.significantHistory"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Overall Physical Evaluation"
                    v-model="physicalData.physicalEvaluation"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Recommendation"
                    v-model="physicalData.recommendation"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row> -->
            </div>
            <v-btn color="primary" @click="submitHandler">Submit</v-btn>

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
const { mapGetters, mapActions } = createNamespacedHelpers('navigation')

export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    personnelData: {
      rank: "",
      lname: "",
      fname: "",
      mname: "",
      homeAddress: "",
      sex: "Male",
      civilStatus: "",
      mobile: "",
      dateOfBirth: "",
      placeOfBirth: "",
      unit: "",
      designation: "",
      address: "",
      
    },
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
      earsAndEardrums: '',
      whisperVoiceTest: '',
      eyesOrPupils: '',
      vision: '',
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
      psychiatric: '',
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
      purposeOfExamination: '',
      dateOfExamination: '',
      significantMedicalHistory: "",
      overallPhysicalEvaluation: "",
      recommendation: "",
    },
  }),
  methods: {
    ...mapActions(["updatePhysical"]),
    async submitHandler(){
      await this.updatePhysical({
        personnelId: this.personnelId,
        data: this.physicalData,
      })
      this.dialog = false
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
    
  }
};
</script>

<style>
</style>