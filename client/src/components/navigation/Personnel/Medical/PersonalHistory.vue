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
    <Diseases />
    <v-container>
      <v-row>
        <v-col class="py-1">
          <span>
            Do you have been advised to undergo any surgical operation ?</span
          >
          <strong> {{ personalHistory.isAdvised ? "Yes" : "NO" }}</strong>
        </v-col>
        <v-col v-if="personalHistory.isAdvised" class="py-1">
          <span> If Yes, describe what type and what age it was done ?</span>
          <strong>
            {{
              personalHistory.advisedAnswer
                ? personalHistory.advisedAnswer
                : "N/A"
            }}</strong
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col class="py-1">
          <span>
            Have you had accidents or injuries other than those listed ?</span
          >
          <strong> {{ personalHistory.isAccident ? "Yes" : "NO" }}</strong>
        </v-col>
        <v-col v-if="personalHistory.isAccident" class="py-1">
          <span> If Yes, give Details and Data ?</span>
          <strong>
            {{
              personalHistory.accidentAnswer
                ? personalHistory.accidentAnswer
                : "N/A"
            }}</strong
          >
        </v-col>
      </v-row>

      <v-row>
        <v-col class="py-1">
          <span> Have you ever been hospitalized ?</span>
          <strong> {{ personalHistory.isHospitalized ? "Yes" : "NO" }}</strong>
        </v-col>
        <v-col v-if="personalHistory.isHospitalized" class="py-1">
          <span> Where ?</span>
          <strong>
            {{
              personalHistory.hospitalizedIn
                ? personalHistory.hospitalizedIn
                : "N/A"
            }}</strong
          >
        </v-col>
        <v-col v-if="personalHistory.isHospitalized" class="py-1">
          <span> Why ?</span>
          <strong>
            {{
              personalHistory.hospitalizedReason
                ? personalHistory.hospitalizedReason
                : "N/A"
            }}</strong
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="items"
            dense
            hide-default-footer
            class="elevation-1"
          ></v-data-table>
        </v-col>
      </v-row>
      <v-row>
        <pre>{{ personalHistory }}</pre>
      </v-row>
    </v-container>
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
    headers: [
      {
        text: "Disease",
        value: "disease",
      },
      {
        text: "Yes/No",
        value: "yesOrNo",
      },
      {
        text: "Year",
        value: "year",
      },
    ],

    items: [],
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
    personalHistory() {
      return this.personnelDetails.medicalRecord.medicalPersonalHistory;
    },


    choleraAt() {
      if (!this.personalHistory.choleraAt) {
        return "N/A";
      }
      return this.personalHistory.choleraAt.substr(0, 10);
    },
    influenzaAt() {
      if (!this.personalHistory.influenzaAt) {
        return "N/A";
      }
      return this.personalHistory.influenzaAt.substr(0, 10);
    },
    tetanusAt() {
      if (!this.personalHistory.tetanusAt) {
        return "N/A";
      }
      return this.personalHistory.tetanusAt.substr(0, 10);
    },
    typhoidAt() {
      if (!this.personalHistory.typhoidAt) {
        return "N/A";
      }
      return this.personalHistory.typhoidAt.substr(0, 10);
    },
    hepatitisAt() {
      if (!this.personalHistory.hepatitisAt) {
        return "N/A";
      }
      return this.personalHistory.hepatitisAt.substr(0, 10);
    },
    mumpsAt() {
      if (!this.personalHistory.mumpsAt) {
        return "N/A";
      }
      return this.personalHistory.mumpsAt.substr(0, 10);
    },
  },
  created() {
    this.items = [
      {
        disease: "Cholera",
        yesOrNo:
          this.personalHistory.isCholera === null
            ? ""
            : this.personalHistory.isCholera
            ? "Yes"
            : "No",
        year: this.choleraAt,
      },
      {
        disease: "Influenza",
        yesOrNo:
          this.personalHistory.isInfluenza === null
            ? ""
            : this.personalHistory.isInfluenza
            ? "Yes"
            : "No",
        year: this.influenzaAt,
      },
      {
        disease: "Tetanus",
        yesOrNo:
          this.personalHistory.isTetanus === null
            ? ""
            : this.personalHistory.isTetanus
            ? "Yes"
            : "No",
        year: this.tetanusAt,
      },
      {
        disease: "Typhoid",
        yesOrNo:
          this.personalHistory.isTyphoid === null
            ? ""
            : this.personalHistory.isTyphoid
            ? "Yes"
            : "No",
        year: this.typhoidAt,
      },
      {
        disease: "Hepatitis B",
        yesOrNo:
          this.personalHistory.isHepatitis === null
            ? ""
            : this.personalHistory.isHepatitis
            ? "Yes"
            : "No",
        year: this.hepatitisAt,
      },
      {
        disease: "Mumps",
        yesOrNo:
          this.personalHistory.isMumps === null
            ? ""
            : this.personalHistory.isMumps
            ? "Yes"
            : "No",
        year: this.mumpsAt,
      },
    ];
  },
  watch: {
    handler(val) {
      this.items = [
        {
          disease: "Cholera",
          yesOrNo:
            this.personalHistory.isCholera === null
              ? ""
              : this.personalHistory.isCholera
              ? "Yes"
              : "No",
          year: this.choleraAt,
        },
        {
          disease: "Influenza",
          yesOrNo:
            this.personalHistory.isInfluenza === null
              ? ""
              : this.personalHistory.isInfluenza
              ? "Yes"
              : "No",
          year: this.influenzaAt,
        },
        {
          disease: "Tetanus",
          yesOrNo:
            this.personalHistory.isTetanus === null
              ? ""
              : this.personalHistory.isTetanus
              ? "Yes"
              : "No",
          year: this.tetanusAt,
        },
        {
          disease: "Typhoid",
          yesOrNo:
            this.personalHistory.isTyphoid === null
              ? ""
              : this.personalHistory.isTyphoid
              ? "Yes"
              : "No",
          year: this.typhoidAt,
        },
        {
          disease: "Hepatitis B",
          yesOrNo:
            this.personalHistory.isHepatitis === null
              ? ""
              : this.personalHistory.isHepatitis
              ? "Yes"
              : "No",
          year: this.hepatitisAt,
        },
        {
          disease: "Mumps",
          yesOrNo:
            this.personalHistory.isMumps === null
              ? ""
              : this.personalHistory.isMumps
              ? "Yes"
              : "No",
          year: this.mumpsAt,
        },
      ];
    },
    deep: true,
  },
};
</script>

<style>
</style>