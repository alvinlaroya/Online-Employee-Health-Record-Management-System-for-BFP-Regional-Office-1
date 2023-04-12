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
                  <v-text-field
                    label="Referring Doctor"
                    v-model="ptNoteData.refDoctor"
                    dense
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Initial Evaluation/Re-evaluation"
                    v-model="ptNoteData.initialEvaluation"
                    dense
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
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <small>Family Medical History</small>
                  <v-divider></v-divider>
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
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Objective"
                    v-model="ptNoteData.objective"
                    dense
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
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="ROM" v-model="ptNoteData.rom" dense>
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
                <v-col>
                  <small>Gait Analysis</small>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row class="mt-7 pa-2">
                <p>[Check if Right. Uncheck if Left]</p>
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
                <v-col>
                  <small>Balance and Tolerance</small>
                  <v-divider></v-divider>
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
                <v-col> 
                  <small>ADL</small>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col v-for="(item, index) in adl" :key="index" :cols="4">
                  <v-checkbox
                    v-model="adl[index][Object.keys(item)[0]]"
                    :label="
                      Object.keys(item)[0]
                        .split(/(?=[A-Z])/)
                        .join(' ')
                    "
                    :true-value="true"
                    :false-value="false"
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

import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    ptNoteData: {
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
    ...mapActions(["updatePtNotes"]),
    async submit() {
      console.log("submitted");
      const payload = {
        ...this.ptNoteData,
        fatherConditionHypertension: this.fatherConditions[0].isChecked,
        fatherConditionDiabetes: this.fatherConditions[1].isChecked,
        fatherConditionAsthma: this.fatherConditions[2].isChecked,
        fatherConditionArthritis: this.fatherConditions[3].isChecked,
        fatherConditionCerebalVascular: this.fatherConditions[4].isChecked,
        motherConditionHypertension: this.motherConditions[0].isChecked,
        motherConditionDiabetes: this.motherConditions[1].isChecked,
        motherConditionAsthma: this.motherConditions[2].isChecked,
        motherConditionArthritis: this.motherConditions[3].isChecked,
        motherConditionCerebalVascular: this.motherConditions[4].isChecked,
        initialContact: this.gaits[0].value,
        loadingResponse: this.gaits[1].value,
        midstance: this.gaits[2].value,
        terminalStance: this.gaits[3].value,
        swingPhase: this.gaits[4].value,
        preSwing: this.gaits[5].value,
        initialSwing: this.gaits[6].value,
        midSwing: this.gaits[7].value,
        terminalSwing: this.gaits[8].value,
        cadence: this.gaits[9].value,
        armSwing: this.gaits[10].value,
        strideLength: this.gaits[11].value,
        stepWidth: this.gaits[12].value,
        balanceToleranceSittingBalance: this.balanceTolerance[0].sittingBalance,
        balanceToleranceSittingTolerance:
          this.balanceTolerance[0].sittingTolerance,
        balanceToleranceStandingBalance:
          this.balanceTolerance[0].standingBalance,
        balanceToleranceStandingTolerance:
          this.balanceTolerance[0].standingTolerance,
        adlBathing: this.adl[0].bathing,
        adlToileting: this.adl[1].toileting,
        adlEating: this.adl[2].eating,
        adlUpperExtermityDressing: this.adl[3].upperExtermityDressing,
        adlLowerExtermityDressing: this.adl[4].lowerExtremityDressing,
        adlBedMobility: this.adl[5].bedMobility,
        adlScootTowardsHeadOfHead: this.adl[6].scootTowardsHeadOfHead,
        adlScootTowardsFootOfHead: this.adl[7].scootTowardsFootOfHead,
        adlSideToSideScooting: this.adl[8].sideToSideScooting,
        adlSupineToLongSitting: this.adl[9].supineToLongSitting,
        adlRolling: this.adl[10].rolling,
        adlTransfers: this.adl[11].transfers,
        adlWheelChairToMat: this.adl[12].wheelchairToMat,
        adlBedToWheelChair: this.adl[13].bedToWheelchair,
        adlAmbulation: this.adl[14].ambulation,
      };

      await this.updatePtNotes({
        personnelId: this.personnelId,
        data: payload,
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
      validateNumber(e, this.ptNoteData.mobile.length);
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    personnelId() {
      return this.personnelDetails.personnel.id;
    },
  },
  mounted() {
    this.ptNoteData = this.personnelDetails.ptNotes;
  },
};
</script>

<style>
</style>