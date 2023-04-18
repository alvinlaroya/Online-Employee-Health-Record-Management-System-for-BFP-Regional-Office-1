<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <MedicalUpdate />
        <v-btn v-print="'#print'" class="ml-3" small>print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="px-8">
      <v-row class="">
        <v-col class="px-0"> <h1>Medical Profile</h1></v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <span>
            Full Name :
            <strong>
              {{ personnelDetails.personnel.fname }}
              {{ personnelDetails.personnel.mname }}
              {{ personnelDetails.personnel.lname }}
              {{ personnelDetails.personnel.extName }}
            </strong>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col align-content="space-between" class="pa-0">
          <span class="pr-5"
            >Date Of Birth :
            <strong>{{ birthDate }}</strong>
          </span>
          <span class="pr-5"
            >AGE: <strong>{{ birthDate | computeAge }}</strong></span
          >
          <span class="pr-5"
            >Place of Birth: <strong>Naga City, Cam. sur</strong></span
          ></v-col
        >
      </v-row>

      <v-row class="mt-5">
        <v-tabs v-model="tab">
          <v-tab @click="tab = 0">Family History</v-tab>
          <v-tab @click="tab = 1">Personal History</v-tab>
          <v-tab @click="tab = 2">Occupational History</v-tab>
        </v-tabs>
      </v-row>
      <v-card-text class="">
        <keep-alive>
          <component :is="tabs[tab].component"></component>
        </keep-alive>
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

import PersonalHistory from "@/components/navigation/Personnel/Medical/PersonalHistory";
import MedicalDetails from "@/components/navigation/Personnel/Medical/MedicalDetails";
import OccupationalHistory from "@/components/navigation/Personnel/Medical/OccupationalHistory";
import MedicalUpdate from "@/components/navigation/Personnel/Medical/MedicalUpdate";

export default {
  props: ["data"],
  components: {
    MedicalDetails,
    PersonalHistory,
    OccupationalHistory,
    MedicalUpdate,
  },
  data: () => ({
    tab: 0,
    tabs: [
      { component: MedicalDetails },
      { component: PersonalHistory },
      { component: OccupationalHistory },
    ],
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
    birthDate() {
      return this.personnelDetails.personnel.dateOfBirth.substr(0, 10);
    },
  },
};
</script>

<style>
ul li {
  list-style: none;
}
.custom {
  font-size: 12px;
}
</style>
