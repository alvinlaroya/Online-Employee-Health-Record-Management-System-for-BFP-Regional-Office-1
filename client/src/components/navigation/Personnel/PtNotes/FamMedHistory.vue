<template>
  <v-data-table
    dense
    :headers="headers"
    :items="items"
    item-key="name"
    hide-default-footer
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    items: [],
    headers: [
      {
        text: "Medical History",
        align: "start",
        sortable: false,
        value: "name",
        divider: true,
      },
      { text: "Father", value: "father", divider: true },
      { text: "Mother", value: "mother", divider: true },
    ],
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
  },
  watch: {
    personnelDetails: {
      handler(val) {
        this.items = [
          {
            name: "Hypertension",
            father:
              this.personnelDetails.ptNotes.fatherConditionHypertension === null
                ? "N/A"
                : this.personnelDetails.ptNotes.fatherConditionHypertension
                ? "Yes"
                : "No",
            mother:
              this.personnelDetails.ptNotes.motherConditionHypertension === null
                ? "N/A"
                : this.personnelDetails.ptNotes.motherConditionHypertension
                ? "Yes"
                : "No",
          },
          {
            name: "Diabetes Mellitus",
            father:
              this.personnelDetails.ptNotes.fatherConditionDiabetes === null
                ? "N/A"
                : this.personnelDetails.ptNotes.fatherConditionDiabetes
                ? "Yes"
                : "No",
            mother:
              this.personnelDetails.ptNotes.motherConditionDiabetes === null
                ? "N/A"
                : this.personnelDetails.ptNotes.motherConditionDiabetes
                ? "Yes"
                : "No",
          },
          {
            name: "Asthma",
            father:
              this.personnelDetails.ptNotes.fatherConditionAsthma === null
                ? "N/A"
                : this.personnelDetails.ptNotes.fatherConditionAsthma
                ? "Yes"
                : "No",
            mother:
              this.personnelDetails.ptNotes.motherConditionAsthma === null
                ? "N/A"
                : this.personnelDetails.ptNotes.motherConditionAsthma
                ? "Yes"
                : "No",
          },
          {
            name: "Arthritis",
            father:
              this.personnelDetails.ptNotes.fatherConditionArthritis === null
                ? "N/A"
                : this.personnelDetails.ptNotes.fatherConditionArthritis
                ? "Yes"
                : "No",
            mother:
              this.personnelDetails.ptNotes.motherConditionArthritis === null
                ? "N/A"
                : this.personnelDetails.ptNotes.motherConditionArthritis
                ? "Yes"
                : "No",
          },
          {
            name: "Cerebral Vascular Accident",
            father:
              this.personnelDetails.ptNotes.fatherConditionCerebalVascular ===
              null
                ? "N/A"
                : this.personnelDetails.ptNotes.fatherConditionCerebalVascular
                ? "Yes"
                : "No",
            mother:
              this.personnelDetails.ptNotes.motherConditionCerebalVascular ===
              null
                ? "N/A"
                : this.personnelDetails.ptNotes.motherConditionCerebalVascular
                ? "Yes"
                : "No",
          },
        ];
      },
      deep: true,
    },
  },
  created() {
    this.items = [
      {
        name: "Hypertension",
        father:
          this.personnelDetails.ptNotes.fatherConditionHypertension === null
            ? "N/A"
            : this.personnelDetails.ptNotes.fatherConditionHypertension
            ? "Yes"
            : "No",
        mother:
          this.personnelDetails.ptNotes.motherConditionHypertension === null
            ? "N/A"
            : this.personnelDetails.ptNotes.motherConditionHypertension
            ? "Yes"
            : "No",
      },
      {
        name: "Diabetes Mellitus",
        father:
          this.personnelDetails.ptNotes.fatherConditionDiabetes === null
            ? "N/A"
            : this.personnelDetails.ptNotes.fatherConditionDiabetes
            ? "Yes"
            : "No",
        mother:
          this.personnelDetails.ptNotes.motherConditionDiabetes === null
            ? "N/A"
            : this.personnelDetails.ptNotes.motherConditionDiabetes
            ? "Yes"
            : "No",
      },
      {
        name: "Asthma",
        father:
          this.personnelDetails.ptNotes.fatherConditionAsthma === null
            ? "N/A"
            : this.personnelDetails.ptNotes.fatherConditionAsthma
            ? "Yes"
            : "No",
        mother:
          this.personnelDetails.ptNotes.motherConditionAsthma === null
            ? "N/A"
            : this.personnelDetails.ptNotes.motherConditionAsthma
            ? "Yes"
            : "No",
      },
      {
        name: "Arthritis",
        father:
          this.personnelDetails.ptNotes.fatherConditionArthritis === null
            ? "N/A"
            : this.personnelDetails.ptNotes.fatherConditionArthritis
            ? "Yes"
            : "No",
        mother:
          this.personnelDetails.ptNotes.motherConditionArthritis === null
            ? "N/A"
            : this.personnelDetails.ptNotes.motherConditionArthritis
            ? "Yes"
            : "No",
      },
      {
        name: "Cerebral Vascular Accident",
        father:
          this.personnelDetails.ptNotes.fatherConditionCerebalVascular === null
            ? "N/A"
            : this.personnelDetails.ptNotes.fatherConditionCerebalVascular
            ? "Yes"
            : "No",
        mother:
          this.personnelDetails.ptNotes.motherConditionCerebalVascular === null
            ? "N/A"
            : this.personnelDetails.ptNotes.motherConditionCerebalVascular
            ? "Yes"
            : "No",
      },
    ];
  },
};
</script>

<style>
</style>