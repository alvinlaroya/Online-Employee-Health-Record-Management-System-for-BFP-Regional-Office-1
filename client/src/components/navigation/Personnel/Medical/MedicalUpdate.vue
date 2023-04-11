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
                  <strong class="">Father Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Mother Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Spouse Information</strong>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherName"
                    label="Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherName"
                    label="Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseName"
                    label="Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherAge"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherAge"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseAge"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherStateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherstateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseStateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherCauseOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherCauseOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseCauseOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row><v-divider></v-divider></v-row>
              <v-row>
                <v-col>
                  <strong class="">Brothers Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Sister Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Children Information</strong>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1Name"
                    label="Brother 1 Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1Name"
                    label="Sister 1 Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1Name"
                    label="Children 1 Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1Age"
                    label="Brother 1 Age"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1Age"
                    label="Sister 1 Age"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1Age"
                    label="Children 1 Age"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1StateOfHealth"
                    label="Brother 1 State of Health"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1StateOfHealth"
                    label="Sister 1 State of Health"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1StateOfHealth"
                    label="Children 1 State of Health"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1CauseOfDeath"
                    label="Brother 1 Cause of Death"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1CauseOfDeath"
                    label="Siter 1 Cause of Death"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1CauseOfDeath"
                    label="Children 1 Cause of Death"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- 2 -->
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2Name"
                    label="Brother 2 Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2Name"
                    label="Sister 2 Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2Name"
                    label="Children 2 Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2Age"
                    label="Brother 2 Age"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2Age"
                    label="Sister 2 Age"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2Age"
                    label="Children 2 Age"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2StateOfHealth"
                    label="Brother 2 State of Health"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2StateOfHealth"
                    label="Sister 2 State of Health"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2StateOfHealth"
                    label="Children 2State of Health"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2CauseOfDeath"
                    label="Brother 2 Cause of Death"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2CauseOfDeath"
                    label="Sister 2 Cause of Death"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2CauseOfDeath"
                    label="Children 2 Cause of Death"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.syphillis"
                    label="Syphillis"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.kidneyTrouble"
                    label="Kidney Trouble"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.committedSuicide"
                    label="Committed Suicide"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.kidney"
                    label="Kidney"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.cancer"
                    label="Cancer"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.asthma"
                    label="Asthma"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.hypertension"
                    label="Hypertension"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.psychiatric"
                    label="Psychiatric"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-checkbox
                    v-model="familyHistory.epilepsy"
                    label="Epilepsy"
                    dense
                  />
                </v-col>
                <v-col cols="4">
                  <v-checkbox
                    v-model="familyHistory.allergy"
                    label="Allergy"
                    dense
                  />
                </v-col>
                <v-col cols="4">
                  <v-checkbox
                    v-model="familyHistory.diabetes"
                    label="Diabetes"
                    dense
                  />
                </v-col>
              </v-row>
              

              <v-row>
                <v-col
                  v-for="(value, key) in personalHistory"
                  :key="key"
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <template
                    v-if="
                      key === 'numberOfTimesPregnant' ||
                      key === 'numberOfChildren'
                    "
                  >
                    <v-text-field
                      v-model="personalHistory[key]"
                      :label="key"
                      type="text"
                    ></v-text-field>
                  </template>
                  <template v-else>
                    <v-checkbox
                      v-model="personalHistory[key]"
                      :label="key"
                      :value="true"
                    ></v-checkbox>
                  </template>
                </v-col>
              </v-row>
              <v-row>
                <v-col> </v-col>
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
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    familyHistory: {
      fatherName: "",
      fatherAge: '',
      fatherStateOfHealth: "",
      fatherCauseOfDeath: "",
      motherName: "",
      motherAge: '',
      motherStateOfHealth: "",
      motherCauseOfDeath: "",
      spouseName: "",
      spouseAge: '',
      spouseStateOfHealth: "",
      spouseCauseOfDeath: "",

      brother1Name: "",
      brother1Age: '',
      brother1StateOfHealth: "",
      brother1CauseOfDeath: "",

      brother2Name: "",
      brother2Age: '',
      brother2StateOfHealth: "",
      brother2CauseOfDeath: "",

      sister1Name: "",
      sister1Age: '',
      sister1StateOfHealth: "",
      sister1CauseOfDeath: "",

      sister2Name: "",
      sister2Age: '',
      sister2StateOfHealth: "",
      sister2CauseOfDeath: "",

      children1Name: "",
      children1Age: '',
      children1StateOfHealth: "",
      children1CauseOfDeath: "",

      children2Name: "",
      children2Age: '',
      children2StateOfHealth: "",
      children2CauseOfDeath: "",

      syphillis: false,
      cancer: false,
      epilepsy: false,
      kidney: false,
      kidneyTrouble: false,
      asthma: false,
      allergy: false,
      psychiatric: false,
      committedSuicide: false,
      hypertension: false,
      diabetes: false,
    },
    personalHistory: {
      haveBeenPregnant: false,
      numberOfTimesPregnant: 0,
      numberOfChildren: 0,
      hadAbortion: false,
      numberOfAbortion: false,
      wornEyeglasses: false,
      wornHearingAid: false,
      syphillis: false,
      fracture: false,
      suicide: false,
      footTrouble: false,
      diphtheria: false,
      rheumaticFever: false,
      measles: false,
      mumps: false,
      chickenPox: false,
      whoopingCough: false,
      tuberculosis: false,
      pneumonia: false,
      asthma: false,
      jaundice: false,
      earDischarge: false,
      goiter: false,
      epilepsy: false,
      veneralDisease: false,
      knockedKnee: false,
      depression: false,
      pyorrhea: false,
      arthritis: false,
      lossOfMemory: false,
      nervousness: false,
      sinusitis: false,
      bedWetting: false,
      wornBrace: false,
      wornArtificialEyes: false,
      paralysis: false,
      serumReaction: false,
      liveWithTuberculosis: false,
      stuttered: false,
      gallBladder: false,
      severeHeadache: false,
      dizziness: false,
      chronic: false,
      palpitation: false,
      cyst: false,
      painfulUrination: false,
      albuminUrine: false,
      weightLoss: false,
      jointDeformity: false,
      lossOfArm: false,
      painInShoulder: false,
      motionSickness: false,
      shortnessOfBreath: false,
      liverDisorder: false,
      terrifyingNightmare: false,
      sleepingTrouble: false,
      alcoholism: false,
      painInTheChest: false,
      severeIndigestion: false,
      rectalDisease: false,
      diarrhea: false,
    },
  }),
  methods: {
    ...mapActions(["updatePersonal"]),
    async submitHandler() {
      await this.updatePersonal({
        personnelId: this.personnelId,
        data: this.personalHistory,
      });

      this.dialog = false;
    },
    open() {
      this.dialog = !this.dialog;
    },

    validateString(e) {
      validateString(e);
    },
    formatLabel(key) {
      // format label from camelCase to sentence case
      return key.replace(/([A-Z])/g, " $1").toLowerCase();
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    personnelId() {
      return this.personnelDetails.personnel.id;
    },
  },
  mounted() {
    this.personalHistory = this.personnelDetails.medicalRecord.medicalPersonalHistory
    delete this.personalHistory.id;
    delete this.personalHistory.personnelId;
    delete this.personalHistory.accountNo;
    delete this.personalHistory.rank;
    delete this.personalHistory.lname;
    delete this.personalHistory.fname;
    delete this.personalHistory.mname;
    delete this.personalHistory.extName;
    delete this.personalHistory.unit;
    delete this.personalHistory.designation;
    delete this.personalHistory.mobile;
    delete this.personalHistory.civilStatus;
    delete this.personalHistory.gender;
  }
};
</script>

<style>
</style>