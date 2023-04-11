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
                    v-model="familyHistory.father.name"
                    label="Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.mother.name"
                    label="Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouse.name"
                    label="Name"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.father.age"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.mother.age"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouse.age"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.father.stateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.mother.stateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouse.stateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.father.causeOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.mother.causeOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouse.causeOfDeath"
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
                  <div v-for="(brother, i) in familyHistory.brothers" :key="i">
                    <v-text-field
                      v-model="brother.name"
                      :label="`Brother ${i + 1} Name`"
                      dense
                      @keypress="validateString($event)"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col>
                  <div v-for="(sister, i) in familyHistory.sisters" :key="i">
                    <v-text-field
                      v-model="sister.name"
                      :label="`Sister ${i + 1} Name`"
                      dense
                      @keypress="validateString($event)"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col>
                  <div v-for="(child, i) in familyHistory.children" :key="i">
                    <v-text-field
                      v-model="child.name"
                      :label="`Child ${i + 1} Name`"
                      dense
                      @keypress="validateString($event)"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brothers.age"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sisters.age"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children.age"
                    label="Age"
                    dense
                  ></v-text-field>
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
      father: {
        name: "",
        age: "",
        stateOfHealth: "",
        causeOfDeath: "",
      },
      mother: {
        name: "",
        age: "20",
        stateOfHealth: "",
        causeOfDeath: "",
      },
      brothers: [
        {
          name: "",
          age: "",
          stateOfHealth: "",
          causeOfDeath: "",
        },
        {
          name: "",
          age: "",
          stateOfHealth: "",
          causeOfDeath: "",
        },
      ],
      sisters: [
        {
          name: "",
          age: "",
          stateOfHealth: "",
          causeOfDeath: "",
        },
      ],
      spouse: {
        name: "",
        age: "",
        stateOfHealth: "",
        causeOfDeath: "",
      },
      children: [
        {
          name: "",
          age: "",
          stateOfHealth: "",
          causeOfDeath: "",
        },
      ],
      tb: false,
      syphillis: false,
      cancer: false,
      epilepsy: false,
      kidney: false,
      kidneyTrouble: false,
      asthma: false,
      allergyHives: false,
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
    this.medicalPersonalHistory = this.personnelDetails.medicalRecord.medicalPersonalHistory
  }
};
</script>

<style>
</style>