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
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="ROM"
                    v-model="ptNoteData.rom"
                    dense
                    @keypress="validateString($event)"
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