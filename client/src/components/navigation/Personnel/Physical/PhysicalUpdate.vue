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
                    v-model="physicalData.rank"
                    :items="['SF01', 'SF02', 'SF03']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Last Name"
                    v-model="physicalData.lname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="First Name"
                    v-model="physicalData.fname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Middle Name"
                    v-model="physicalData.mname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Home Address"
                    v-model="physicalData.homeAddress"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-select
                    label="Sex"
                    v-model="physicalData.sex"
                    :items="['Male', 'Female']"
                    dense
                  ></v-select>
                </v-col>
                <v-col cols="2">
                  <v-select
                    label="Civil Status"
                    v-model="physicalData.sex"
                    :items="['Single', 'Married', 'Widowed', 'Seperated']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Mobile"
                    v-model="physicalData.mobile"
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
                        v-model="physicalData.dateOfBirth"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="physicalData.dateOfBirth"
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
                        @click="$refs.menu.save(physicalData.dateOfBirth)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Place of birth"
                    v-model="physicalData.placeOfBirth"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    label="Unit Assignment"
                    v-model="physicalData.unit"
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
                    v-model="physicalData.designation"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Purpose of Examination"
                    v-model="physicalData.purpose"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="4"
                  v-for="(value, key) in medicalPersonnel"
                  :key="key"
                >
                  <v-text-field
                    v-if="
                      typeof value === 'string' &&
                      key !== 'build' &&
                      key !== 'cholesterol' &&
                      key !== 'psychiatric'
                    "
                    :label="key"
                    v-model="medicalPersonnel[key]"
                    dense
                  />
                  <v-checkbox
                    v-else-if="
                      typeof value === 'boolean' && key !== 'psychiatric'
                    "
                    :label="key"
                    v-model="medicalPersonnel[key]"
                    dense
                  />
                  <v-select
                    v-else-if="key === 'build'"
                    :label="key"
                    v-model="medicalPersonnel[key]"
                    :items="['Option 1', 'Option 2', 'Option 3']"
                    dense
                  />
                  <v-select
                    v-else-if="key === 'cholesterol'"
                    :label="key"
                    v-model="medicalPersonnel[key]"
                    :items="['TC', 'LDL', 'HDL', 'VLDL']"
                    dense
                  />
                  <v-select
                    v-else-if="key === 'psychiatric'"
                    :label="key"
                    v-model="medicalPersonnel[key]"
                    :items="[
                      { text: 'Not reco', value: false },
                      { text: 'Reco', value: true },
                    ]"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Significat Medical history"
                    v-model="physicalData.significantHistory"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Official Designation"
                    v-model="physicalData.officialDesignation"
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
                <v-col>
                  <v-text-field
                    label="Medical Officer"
                    v-model="physicalData.medicalOfficer"
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
                <v-col>
                  <v-text-field
                    label="Reg Certificate No."
                    v-model="physicalData.certificateNo"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
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
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    physicalData: {
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
      purpose: "",
      significantHistory: "",
      officialDesignation: "",
      physicalEvaluation: "",
      medicalOfficer: "",
      recommendation: "",
      certificateNo: "",
    },
    medicalPersonnel: {
      height: "",
      weight: "",
      build: "",
      skin: "",
      colorEyes: "",
      colorHair: "",
      headAndFace: "",
      neck: "",
      noseAndSinuses: "",
      mouthAndThroat: "",
      // right or left
      earAndEardrums: false,
      whisperTest: false,
      eyeAndPupils: false,
      vision: false,
      // right or left
      colorVision: "",
      heart: "",
      vascularSystem: "",
      lungsAndChest: "",
      abdomenViscera: "",
      abdomenViscera: "",
      anusAndRectum: "",
      genital: "",
      upperExtremities: "",
      lowerExtremities: "",
      spineSystem: "",
      pelvic: "",
      // reco or not reco
      psychiatric: false,
      // reco or not reco
      bloodPressure: "",
      cardiacRate: "",
      drugTest: "",
      urinalysis: "",
      fbs: "",
      hepaBScreening: "",
      cbc: "",
      bloodType: "",
      pregnancyTest: "",
      cholesterol: "",
      ecg: "",
      chestXray: "",
    },
  }),
  methods: {
    open() {
      this.dialog = !this.dialog;
    },
    validateString(e) {
      validateString(e);
    },
    validateNumber(e) {
      validateNumber(e, this.physicalData.mobile.length);
    },
    submit(){
      console.log('submitted')
    }
  },
};
</script>

<style>
</style>