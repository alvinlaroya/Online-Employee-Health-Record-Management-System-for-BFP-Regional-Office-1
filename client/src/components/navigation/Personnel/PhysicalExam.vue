<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <PhysicalUpdate />
        <v-btn v-print="'#print'" class="ml-3" small>print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="px-8">
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> FULL NAME : </span>
            <strong>
              {{ personnelDetails.personnel.fname }} {{ data.mname }}
              {{ personnelDetails.personnel.lname }}
              {{ personnelDetails.personnel.extName }}
            </strong>
            <span class="body-2 pl-5">RANK : </span>
            <strong>{{ personnelDetails.personnel.rank }}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> ADDRESS : </span>
            <strong> {{ personnelDetails.personnel.address }} </strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> SEX : </span>
            <strong> {{ personnelDetails.personnel.gender }}</strong>
            <span class="body-2 pl-5"> CIVIL STATUS : </span>
            <strong>{{ personnelDetails.personnel.civilStatus }}</strong>
            <span class="body-2 pl-5"> AGE : </span>
            <strong> {{ birthDate | computeAge }}</strong>
            <span class="body-2 pl-5"> MOBILE NO. : </span>
            <strong> {{ personnelDetails.personnel.mobile }}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> DATE AND PLACE OF BIRTH : </span>
            <strong> {{ birthDate }} | Naga City, Cam Sur</strong>
            <span class="body-2 pl-5"> Date of Examination : </span>
            <strong> N/A</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> DESIGNATION/ UNIT ASSIGNMENT : </span>
            <strong>
              {{ personnelDetails.personnel.designation }} |
              {{ personnelDetails.personnel.unit }}
            </strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> PURPOSE OF EXAMINATION : </span>
            <strong>
              {{ physicalExam.purposeOfExamination }}
            </strong>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <PhysicalTable />
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="">
          <div class="d-flex flex-column">
            <span class="body-2"> SIGNIFICANT MEDICAL HISTORY : </span>
            <strong> {{ physicalExam.significantMedicalHistory ? physicalExam.significantMedicalHistory : 'N/A' }} </strong>
            <span class="body-2"> OVERALL PHYSICAL EVALUATION : </span>
            <strong> {{ physicalExam.overallPhysicalEvaluation ? physicalExam.overallPhysicalEvaluation : 'N/A' }} </strong>
            <span class="body-2"> RECOMMENDATION : </span>
            <strong>
              {{ physicalExam.recommendation ? physicalExam.recommendation : 'N/A'  }}</strong
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

import PhysicalTable from "@/components/navigation/Personnel/Physical/PhysicalTable";
import PhysicalUpdate from "@/components/navigation/Personnel/Physical/PhysicalUpdate";
export default {
  props: ["data"],
  components: {
    PhysicalTable,
    PhysicalUpdate,
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    physicalExam() {
      return this.personnelDetails.physicalExamination;
    },
    birthDate() {
      return this.personnelDetails.personnel.dateOfBirth.substr(0, 10);
    },
  },
};
</script>

<style></style>
