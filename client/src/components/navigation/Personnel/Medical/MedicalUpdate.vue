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
                    label="Last Name"
                    v-model="medicalHistory.lname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="First Name"
                    v-model="medicalHistory.fname"
                    dense
                    @keypress="validateString($event)"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Middle Name"
                    v-model="medicalHistory.mname"
                    dense
                    @keypress="validateString($event)"
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
                        v-model="medicalHistory.dateOfBirth"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="medicalHistory.dateOfBirth"
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
                        @click="$refs.menu.save(medicalHistory.dateOfBirth)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="medicalHistory.age"
                    label="Age"
                    dense
                    readonly
                  ></v-text-field>
                </v-col>
              </v-row>
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
                <v-col v-for="(value, i) in personalHistory" :key="i" cols="6">
                  <v-checkbox
                    v-model="personalHistory[i]"
                    :label="formatLabel(i)"
                    dense
                  ></v-checkbox>
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

export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    medicalHistory: {
      lname: "",
      fname: "",
      mname: "",
      dateOfBirth: "",
      address: "",
      age: "",
    },
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
      wornEyeGlass: true,
      wornHearingAid: false,
      hadSyphillis: false,
      hadFracture: false,
      attemptedSuicide: false,
      hadFootTrouble: true,
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
      pyorrheaOrBleedingGums: false,
      arthritis: false,
      lossOfMemory: false,
      nervousness: false,
      sinusitis: true,
      betwetting: false,
      wornBraceOrBackSupport: false,
      wornArtificialEyes: false,
      hadParalysis: false,
      hadSerumReaction: false,
      livedWithTB: false,
      hadStutteredSpeech: false,
      gallBladderDisease: false,
      severeHeadache: true,
      dizziness: false,
      frequentColds: false,
      palpitation: false,
      tumor: true,
      painfulUrination: false,
      sugarInUrine: false,
      weightLoss: false,
      boneDeformity: false,
      lossOfArm: false,
      painInShoulder: false,
      motionSickness: false,
      shortnessOfBreath: false,
      liverDisorder: false,
      terrifyingNightmare: false,
      sleepingTrouble: false,
      drugOrAlcoholism: false,
      painInTheChest: false,
      severeIndigestion: false,
      rectalDisease: false,
      diarrhea: false,
    },
  }),
  methods: {
    submit(){
      console.log('submitted');
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
    age() {
      const dob = new Date(this.medicalHistory.dateOfBirth);
      const now = new Date();
      const diff = now - dob;
      const ageInMilliseconds = new Date(diff).getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
      return Math.floor(ageInYears);
    },
  },
  created() {
    // console.log(this.familyHistory.father.age);
  },
};
</script>

<style>
</style>