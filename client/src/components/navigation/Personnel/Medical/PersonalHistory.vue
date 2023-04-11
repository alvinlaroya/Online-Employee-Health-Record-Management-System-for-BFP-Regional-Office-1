<template>
  <div>
    <v-row>
      <v-col>
        <span class="py-3">PERSONAL HISTORY</span>
      </v-col>
    </v-row>
    <v-container class="mt-5">
      <v-row>
        <span class="pr-5"
          >Have you been Pregnant ?
          <strong class="text-decoration-underline">{{
            personalHistory.haveBeenPregnant ? "Yes" : "No"
          }}</strong></span
        >
        <span class="pr-5"
          >How many times ?
          <strong class="text-decoration-underline">{{
            personalHistory.numberOfTimesPregnant
          }}</strong></span
        >
      </v-row>
      <v-row>
        <span class="pr-5"
          >How many Children do you have ?
          <strong class="text-decoration-underline">{{
            personalHistory.numberOfChildren
          }}</strong></span
        >
        <span class="pr-5"
          >Have you have an Abortion ?
          <strong class="text-decoration-underline">
            {{ personalHistory.hadAbortion ? "Yes" : "No" }}</strong
          ></span
        >
        <span class="pr-5"
          >if yes, quantify
          <strong class="text-decoration-underline">{{
            personalHistory.numberOfAbortion
          }}</strong></span
        >
      </v-row>
    </v-container>
    <Pre>{{ personalHistory.hadAbortion  }}</Pre>
    <Diseases />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

import Diseases from "@/components/navigation/Personnel/Medical/Diseases";
export default {
  components: {
    Diseases,
  },
  data: () => ({
    items: [
      {
        haveBeenPregnant: false,
        numberOfTimesPregnant: "0",
        numberOfChildren: "0",
        hadAbortion: "0",
        numberOfAbortion: "0",
      },
    ],
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
    personalHistory() {
      return this.personnelDetails.medicalRecord.medicalPersonalHistory;
    },
  },
  created(){

  },
  watch: {
    handler(val) {
      this.items = [
        {
          haveBeenPregnant: false,
          numberOfTimesPregnant: "0",
          numberOfChildren: "0",
          hadAbortion: "0",
          numberOfAbortion: "0",
        },
      ];
    },
    deep: true,
  },
};
</script>

<style>
</style>