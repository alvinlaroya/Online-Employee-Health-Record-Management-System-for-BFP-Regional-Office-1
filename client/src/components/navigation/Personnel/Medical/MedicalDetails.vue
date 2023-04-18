<template>
  <div>
    <v-row>
      <v-col><span class="py-3">FAMILY HISTORY</span></v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Father Name : </small>
          <strong>{{
            medicalFamilyHistory.fatherName
              ? medicalFamilyHistory.fatherName
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Mother Name : </small>
          <strong>{{
            medicalFamilyHistory.motherName
              ? medicalFamilyHistory.motherName
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Spouse Name : </small>
          <strong>{{
            medicalFamilyHistory.spouseName
              ? medicalFamilyHistory.spouseName
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Father Age : </small>
          <strong>{{
            medicalFamilyHistory.fatherAge
              ? medicalFamilyHistory.fatherAge
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Mother Age : </small>
          <strong>{{
            medicalFamilyHistory.motherAge
              ? medicalFamilyHistory.motherAge
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Spouse Age : </small>
          <strong>{{
            medicalFamilyHistory.spouseAge
              ? medicalFamilyHistory.spouseAge
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Father State of Health : </small>
          <strong>{{
            medicalFamilyHistory.fatherStateOfHealth
              ? medicalFamilyHistory.fatherStateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Mother State of Health : </small>
          <strong>{{
            medicalFamilyHistory.motherStateOfHealth
              ? medicalFamilyHistory.motherStateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Spouse State of Health : </small>
          <strong>{{
            medicalFamilyHistory.spouseStateOfHealth
              ? medicalFamilyHistory.spouseStateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Father Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.fatherCauseOfDeath
              ? medicalFamilyHistory.fatherCauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Mother Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.motherCauseOfDeath
              ? medicalFamilyHistory.motherCauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Spouse Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.spouseCauseOfDeath
              ? medicalFamilyHistory.spouseCauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <!--brother sister children name -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 1 Name : </small>
          <strong>{{
            medicalFamilyHistory.brother1Name
              ? medicalFamilyHistory.brother1Name
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 1 Name : </small>
          <strong>{{
            medicalFamilyHistory.sister1Name
              ? medicalFamilyHistory.sister1Name
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 1 Name : </small>
          <strong>{{
            medicalFamilyHistory.children1Name
              ? medicalFamilyHistory.children1Name
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <!--brother sister children age -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 1 Age : </small>
          <strong>{{
            medicalFamilyHistory.brother1Age
              ? medicalFamilyHistory.brother1Age
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 1 Age : </small>
          <strong>{{
            medicalFamilyHistory.sister1Age
              ? medicalFamilyHistory.sister1Age
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 1 Age : </small>
          <strong>{{
            medicalFamilyHistory.children1Age
              ? medicalFamilyHistory.children1Age
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <!--brother sister children state of health -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 1 State of Health : </small>
          <strong>{{
            medicalFamilyHistory.brother1StateOfHealth
              ? medicalFamilyHistory.brother1StateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 1 State of Health : </small>
          <strong>{{
            medicalFamilyHistory.sister1StateOfHealth
              ? medicalFamilyHistory.sister1StateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 1 State of Health : </small>
          <strong>{{
            medicalFamilyHistory.children1StateOfHealth
              ? medicalFamilyHistory.children1StateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>

    <!--brother sister children cause of death -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 1 Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.brother1CauseOfDeath
              ? medicalFamilyHistory.brother1CauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 1 Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.sister1CauseOfDeath
              ? medicalFamilyHistory.sister1CauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 1 Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.children1CauseOfDeath
              ? medicalFamilyHistory.children1CauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col><v-divider></v-divider></v-col>
    </v-row>
    <!-- 2 -->
    <!--brother sister children name -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 2 Name : </small>
          <strong>{{
            medicalFamilyHistory.brother2Name
              ? medicalFamilyHistory.brother2Name
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 2 Name : </small>
          <strong>{{
            medicalFamilyHistory.sister2Name
              ? medicalFamilyHistory.sister2Name
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 2 Name : </small>
          <strong>{{
            medicalFamilyHistory.children2Name
              ? medicalFamilyHistory.children2Name
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <!--brother sister children age -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 2 Age : </small>
          <strong>{{
            medicalFamilyHistory.brother2Age
              ? medicalFamilyHistory.brother2Age
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 2 Age : </small>
          <strong>{{
            medicalFamilyHistory.sister2Age
              ? medicalFamilyHistory.sister2Age
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 2 Age : </small>
          <strong>{{
            medicalFamilyHistory.children2Age
              ? medicalFamilyHistory.children2Age
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <!--brother sister children state of health -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 2 State of Health : </small>
          <strong>{{
            medicalFamilyHistory.brother2StateOfHealth
              ? medicalFamilyHistory.brother2StateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 2 State of Health : </small>
          <strong>{{
            medicalFamilyHistory.sister2StateOfHealth
              ? medicalFamilyHistory.sister2StateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 2 State of Health : </small>
          <strong>{{
            medicalFamilyHistory.children2StateOfHealth
              ? medicalFamilyHistory.children2StateOfHealth
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>

    <!--brother sister children cause of death -->
    <v-row>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Brother 2 Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.brother2CauseOfDeath
              ? medicalFamilyHistory.brother2CauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Sister 2 Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.sister2CauseOfDeath
              ? medicalFamilyHistory.sister2CauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="d-flex flex-column">
          <small>Children 2 Cause of Death : </small>
          <strong>{{
            medicalFamilyHistory.children2CauseOfDeath
              ? medicalFamilyHistory.children2CauseOfDeath
              : "N/A"
          }}</strong>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col><v-divider></v-divider></v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <small> Syphillis : </small>
          <strong>{{ medicalFamilyHistory.syphillis ? "yes" : "no" }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Kidney Trouble : </small>
          <strong>{{
            medicalFamilyHistory.kidneyTrouble ? "yes" : "no"
          }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Committed Suicide : </small>
          <strong>{{
            medicalFamilyHistory.committedSuicide ? "yes" : "no"
          }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Kidney : </small>
          <strong>{{ medicalFamilyHistory.kidney ? "yes" : "no" }}</strong>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <small> Cancer : </small>
          <strong>{{ medicalFamilyHistory.cancer ? "yes" : "no" }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Asthma : </small>
          <strong>{{ medicalFamilyHistory.asthma ? "yes" : "no" }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Hypertension : </small>
          <strong>{{
            medicalFamilyHistory.hypertension ? "yes" : "no"
          }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Psychiatric : </small>
          <strong>{{ medicalFamilyHistory.psychiatric ? "yes" : "no" }}</strong>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="d-flex flex-column">
          <small> Epilepsy : </small>
          <strong>{{ medicalFamilyHistory.epilepsy ? "yes" : "no" }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Allergy : </small>
          <strong>{{ medicalFamilyHistory.allergy ? "yes" : "no" }}</strong>
        </div>
      </v-col>
      <v-col>
        <div class="d-flex flex-column">
          <small> Diabetes : </small>
          <strong>{{ medicalFamilyHistory.diabetes ? "yes" : "no" }}</strong>
        </div>
      </v-col>
    </v-row>

 
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");
export default {
  data: () => ({
    familyHistory: {
      fatherName: "",
      fatherAge: "",
      fatherStateOfHealth: "",
      fatherCauseOfDeath: "",
      motherName: "",
      motherAge: "",
      motherStateOfHealth: "",
      motherCauseOfDeath: "",
      spouseName: "",
      spouseAge: "",
      spouseStateOfHealth: "",
      spouseCauseOfDeath: "",

      brother1Name: "",
      brother1Age: "",
      brother1StateOfHealth: "",
      brother1CauseOfDeath: "",

      brother2Name: "",
      brother2Age: "",
      brother2StateOfHealth: "",
      brother2CauseOfDeath: "",

      sister1Name: "",
      sister1Age: "",
      sister1StateOfHealth: "",
      sister1CauseOfDeath: "",

      sister2Name: "",
      sister2Age: "",
      sister2StateOfHealth: "",
      sister2CauseOfDeath: "",

      children1Name: "",
      children1Age: "",
      children1StateOfHealth: "",
      children1CauseOfDeath: "",

      children2Name: "",
      children2Age: "",
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
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
    medicalFamilyHistory() {
      return this.personnelDetails.medicalRecord.medicalFamilyHistory;
    },
  },
  watch: {
    handler(val) {
      this.items = [
        {
          fatherName: "",
          fatherAge: "",
          fatherStateOfHealth: "",
          fatherCauseOfDeath: "",
          motherName: "",
          motherAge: "",
          motherStateOfHealth: "",
          motherCauseOfDeath: "",
          spouseName: "",
          spouseAge: "",
          spouseStateOfHealth: "",
          spouseCauseOfDeath: "",

          brother1Name: "",
          brother1Age: "",
          brother1StateOfHealth: "",
          brother1CauseOfDeath: "",

          brother2Name: "",
          brother2Age: "",
          brother2StateOfHealth: "",
          brother2CauseOfDeath: "",

          sister1Name: "",
          sister1Age: "",
          sister1StateOfHealth: "",
          sister1CauseOfDeath: "",

          sister2Name: "",
          sister2Age: "",
          sister2StateOfHealth: "",
          sister2CauseOfDeath: "",

          children1Name: "",
          children1Age: "",
          children1StateOfHealth: "",
          children1CauseOfDeath: "",

          children2Name: "",
          children2Age: "",
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
      ];
    },
    deep: true,
  },
};
</script>

<style>
</style>