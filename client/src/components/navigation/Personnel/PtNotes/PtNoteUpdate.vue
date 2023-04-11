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
                    v-model="ptNoteData.rank"
                    :items="['SF01', 'SF02', 'SF03']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Last Name"
                    v-model="ptNoteData.lname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="First Name"
                    v-model="ptNoteData.fname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Middle Name"
                    v-model="ptNoteData.mname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Occupation"
                    v-model="ptNoteData.occupation"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    label="Unit Assignment"
                    v-model="ptNoteData.unit"
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
                    label="Home Address"
                    v-model="ptNoteData.homeAddress"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Mobile"
                    v-model="ptNoteData.mobile"
                    prefix="+639"
                    dense
                    @keypress="validateNumber($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Age"
                    v-model="ptNoteData.age"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
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
                        v-model="ptNoteData.dateOfBirth"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="ptNoteData.dateOfBirth"
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
                        @click="$refs.menu.save(ptNoteData.dateOfBirth)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-select
                    label="Civil Status"
                    v-model="ptNoteData.civilStatus"
                    :items="['Single', 'Married', 'Widowed', 'Separated']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-select
                    label="Gender"
                    v-model="ptNoteData.gender"
                    :items="['Male', 'Female']"
                    dense
                  ></v-select>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Handedness"
                    v-model="ptNoteData.handedness"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Referring Doctor"
                    v-model="ptNoteData.refDoctor"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Date of Initial Evaluation/Re-evaluation"
                    v-model="ptNoteData.initialEvaluation"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Diagnosis"
                    v-model="ptNoteData.diagnosis"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="History of Present Illness"
                    v-model="ptNoteData.hpi"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Medications"
                    v-model="ptNoteData.medication"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Laboratory Exams"
                    v-model="ptNoteData.labExams"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Diagnostic Procedures"
                    v-model="ptNoteData.diagnosticProcedure"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Past Medical History"
                    v-model="ptNoteData.pmh"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <h3>Father</h3>
                  <v-checkbox
                    v-for="condition in fatherConditions"
                    :key="condition.id"
                    v-model="condition.isChecked"
                    :label="condition.name"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6">
                  <h3>Mother</h3>
                  <v-checkbox
                    v-for="condition in motherConditions"
                    :key="condition.id"
                    v-model="condition.isChecked"
                    :label="condition.name"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Personal/Social History"
                    v-model="ptNoteData.psh"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Food and Drug Allergy"
                    v-model="ptNoteData.fda"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Subjective"
                    v-model="ptNoteData.subjective"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Blood Pressure"
                    v-model="ptNoteData.bloodPressure"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="RR" v-model="ptNoteData.rr" dense>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Pulse Rate"
                    v-model="ptNoteData.pulseRate"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Temperature"
                    v-model="ptNoteData.temperature"
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Ocular Inspection"
                    v-model="ptNoteData.ocularInspection"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Palpation"
                    v-model="ptNoteData.palpation"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="ROM"
                    v-model="ptNoteData.rom"
                    dense
                    @keypress="validateString($event)"
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="MMT" v-model="ptNoteData.mmt" dense>
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Muscle Bulk Measurement"
                    v-model="ptNoteData.mbm"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Limb Girth Measurement"
                    v-model="ptNoteData.lgm"
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col v-for="(gait, index) in gaits" :key="index" cols="3">
                  <v-checkbox
                    v-model="gait.value"
                    :label="gait.label"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Findings"
                    v-model="ptNoteData.findings"
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Significance"
                    v-model="ptNoteData.significance"
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Functional Analysis"
                    v-model="ptNoteData.functionalAnalysis"
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="balanceTolerance[0].sittingBalance"
                    label="Sitting Balance"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="balanceTolerance[0].sittingTolerance"
                    label="Sitting Tolerance"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="balanceTolerance[0].standingBalance"
                    label="Standing Balance"
                  ></v-checkbox>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="balanceTolerance[0].standingTolerance"
                    label="Standing Tolerance"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-row>
                <v-col v-for="(item, index) in adl" :key="index" :cols="4">
                  <v-text-field
                    v-model="adl[index][Object.keys(item)[0]]"
                    :label="Object.keys(item)[0]"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Assessment"
                    v-model="ptNoteData.assessment"
                    dense
                  >
                  </v-text-field>
                </v-col>
                
                <v-col>
                  <v-text-field
                    label="PT Impression"
                    v-model="ptNoteData.ptImpression"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Problem List"
                    v-model="ptNoteData.problemList"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Short Term Goal"
                    v-model="ptNoteData.shortTermGoal"
                    dense
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="PT Management"
                    v-model="ptNoteData.ptManagement"
                    dense
                  >
                  </v-text-field>
                </v-col>
                
                <v-col>
                  <v-text-field
                    label="Suggested Pt Management"
                    v-model="ptNoteData.suggestedPtManagement"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Home Instruction"
                    v-model="ptNoteData.homeInstruction"
                    dense
                  >
                  </v-text-field>
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
import validateString from "@/_common/helpers/validateString.js";
import validateNumber from "@/_common/helpers/validateNumber.js";
export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    ptNoteData: {
      rank: "",
      lname: "",
      fname: "",
      mname: "",
      occupation: "",
      unit: "",
      homeAddress: "",
      mobile: "",
      age: "",
      dateOfBirth: "",
      civilStatus: "",
      gender: "Male",
      handedness: "",
      refDoctor: "",
      initialEvaluation: "",
      diagnosis: "",
      hpi: "",
      medication: "",
      labExams: "",
      diagnosticProcedure: "",
      pmh: "",
      psh: "",
      fda: "",
      subjective: "",
      objective: "",
      vitalSign: "",
      bloodPressure: "",
      pulseRate: "",
      rr: "",
      temperature: "",
      ocularInspection: "",
      palpation: "",
      rom: "",
      mmt: "",
      mbm: "",
      lgm: "",
      findings: "",
      significance: "",
      functionalAnalysis: "",

      assessment: "",
      ptImpression: "",
      problemList: "",
      shortTermGoal: "",

      ptManagement: "",
      suggestedPtManagement: "",
      homeInstruction: "",
    },
    fatherConditions: [
      { id: 1, name: "Hypertension", isChecked: false },
      { id: 2, name: "Diabetes", isChecked: false },
      { id: 3, name: "Asthma", isChecked: false },
      { id: 4, name: "Arthritis", isChecked: false },
      { id: 5, name: "Cerebral Vascular Accident", isChecked: false },
    ],
    motherConditions: [
      { id: 1, name: "Hypertension", isChecked: false },
      { id: 2, name: "Diabetes", isChecked: false },
      { id: 3, name: "Asthma", isChecked: false },
      { id: 4, name: "Arthritis", isChecked: false },
      { id: 5, name: "Cerebral Vascular Accident", isChecked: false },
    ],
    gaits: [
      { label: "Initial Contact", value: false },
      { label: "Loading Response", value: false },
      { label: "Midstance", value: false },
      { label: "Terminal Stance", value: false },
      { label: "Swing Phase", value: false },
      { label: "Preswing", value: false },
      { label: "Initial Swing", value: false },
      { label: "Midswing", value: false },
      { label: "Terminal Swing", value: false },
      { label: "Cadence", value: false },
      { label: "Arm Swing", value: false },
      { label: "Stride Length", value: false },
      { label: "Step Width", value: false },
    ],
    balanceTolerance: [
      {
        sittingBalance: false,
        sittingTolerance: false,
        standingBalance: false,
        standingTolerance: false,
      },
    ],
    adl: [
      { bathing: "" },
      { toileting: "" },
      { eating: "" },
      { upperExtermityDressing: "" },
      { lowerExtremityDressing: "" },
      { bedMobility: "" },
      { scootTowardsHeadOfHead: "" },
      { scootTowardsFootOfHead: "" },
      { sideToSideScooting: "" },
      { supineToLongSitting: "" },
      { rolling: "" },
      { transfers: "" },
      { wheelchairToMat: "" },
      { bedToWheelchair: "" },
      { ambulation: "" },
    ],
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
      validateNumber(e, this.ptNoteData.mobile.length);
    },
  },
};
</script>

<style>
</style>