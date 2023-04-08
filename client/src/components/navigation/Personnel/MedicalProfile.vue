<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <MedicalUpdate />
        <v-btn v-print="'#print'" class="ml-3" small>print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="px-8">
      <v-row justify="space-between">
        <v-col class="pa-0">
          <span>
            Full Name :
            <strong>
              {{ data.fname }} {{ data.mname }} {{ data.lname }}
              {{ data.extName }}
            </strong>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col align-content="space-between" class="pa-0">
          <span class="pr-5"
            >Date Of Birth :
            <strong>15 sep 1981</strong>
          </span>
          <span class="pr-5">AGE: <strong>41</strong></span>
          <span class="pr-5"
            >Place of Birth: <strong>Naga City, Cam. sur</strong></span
          ></v-col
        >
      </v-row>

      <v-row class="mt-5">
        <v-tabs v-model="tab">
          <v-tab @click="tab = 0" >Family History</v-tab>
          <v-tab @click="tab = 1" >Personal History</v-tab>
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
import PersonalHistory from "@/components/navigation/Personnel/Medical/PersonalHistory";
import MedicalDetails from "@/components/navigation/Personnel/Medical/MedicalDetails";
import MedicalUpdate from "@/components/navigation/Personnel/Medical/MedicalUpdate";

export default {
  props: ["data"],
  components: {
    MedicalDetails,
    PersonalHistory,
    MedicalUpdate,
  },
  data: () => ({
    tab: 0,
    tabs: [{ component: MedicalDetails }, { component: PersonalHistory }],
  }),
  computed: {
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
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
