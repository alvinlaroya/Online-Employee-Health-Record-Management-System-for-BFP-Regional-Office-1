<template>
  <div>
    <v-data-table
      :items="items"
      :headers="headers"
      disable-pagination
      hide-default-footer
    >
    </v-data-table>

  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    headers: [
      {
        text: "Medical History",
        value: "medHistory",
        divider: true,
      },
      {
        text: "",
        value: "yes",
        divider: true,
      },
    ],
    items: [],
  }),
  watch: {
    personnelDetails: {
      handler(val){
        this.items = [
          {
            medHistory: "Diabetes",
            yes: this.personnelDetails.dental.diabetes === null ? '-' : this.personnelDetails.dental.diabetes ? 'Yes' : 'No'
          },
          {
            medHistory: "Bleeding Tendency",
            yes: this.personnelDetails.dental.bleeding === null ? '-' : this.personnelDetails.dental.bleeding ? 'Yes' : 'No'
          },
          {
            medHistory: "Drug Sensitivity",
            yes: this.personnelDetails.dental.drugSensitivity === null ? '-' : this.personnelDetails.dental.drugSensitivity ? 'Yes': 'No'
          },
          {
            medHistory: "History of Hypertension",
            yes: this.personnelDetails.dental.historyOfHypertension === null ? '-' : this.personnelDetails.dental.historyOfHypertension ? 'Yes': 'No'
          },
          {
            medHistory: "Asthma",
            yes: this.personnelDetails.dental.asthma === null ?  '-' : this.personnelDetails.dental.asthma ? 'Yes': 'No'
          },
          {
            medHistory: "Food Allergy",
            yes: this.personnelDetails.dental.foodAllergy === null ? '-' : this.personnelDetails.dental.foodAllergy ? 'Yes': 'No'
          },
          {
            medHistory: "BP Systollic",
            yes: this.personnelDetails.dental.systolicBP === null ? '-' : this.personnelDetails.dental.systolicBP ? 'Yes': 'No'
          },
          {
            medHistory: "Diastolic",
            yes: this.personnelDetails.dental.diastolicBP === null ? '-' : this.personnelDetails.dental.diastolicBP ? 'Yes': 'No'
          },
        ];
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
  },
  created() {
    this.items = [
      {
        medHistory: "Diabetes",
        yes: this.personnelDetails.dental.diabetes === null ? '-' : this.personnelDetails.dental.diabetes ? 'Yes' : 'No'
      },
      {
        medHistory: "Bleeding Tendency",
        yes: this.personnelDetails.dental.bleeding === null ? '-' : this.personnelDetails.dental.bleeding ? 'Yes' : 'No'
      },
      {
        medHistory: "Drug Sensitivity",
        yes: this.personnelDetails.dental.drugSensitivity === null ? '-' : this.personnelDetails.dental.drugSensitivity ? 'Yes': 'No'
      },
      {
        medHistory: "History of Hypertension",
        yes: this.personnelDetails.dental.historyOfHypertension === null ? '-' : this.personnelDetails.dental.historyOfHypertension ? 'Yes': 'No'
      },
      {
        medHistory: "Asthma",
        yes: this.personnelDetails.dental.asthma === null ?  '-' : this.personnelDetails.dental.asthma ? 'Yes': 'No'
      },
      {
        medHistory: "Food Allergy",
        yes: this.personnelDetails.dental.foodAllergy === null ? '-' : this.personnelDetails.dental.foodAllergy ? 'Yes': 'No'
      },
      {
        medHistory: "BP Systollic",
        yes: this.personnelDetails.dental.systolicBP === null ? '-' : this.personnelDetails.dental.systolicBP ? 'Yes': 'No'
      },
      {
        medHistory: "Diastolic",
        yes: this.personnelDetails.dental.diastolicBP === null ? '-' : this.personnelDetails.dental.diastolicBP ? 'Yes': 'No'
      },
    ];
  },
};
</script>

<style>
</style>