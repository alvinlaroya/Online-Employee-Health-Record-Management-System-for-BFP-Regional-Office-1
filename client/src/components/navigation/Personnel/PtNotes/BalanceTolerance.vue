<template>
  <v-data-table
    :headers="headers"
    :items="items"
    dense
    hide-default-footer
    hide-default-header
    class="elevation-1"
  ></v-data-table>
</template>
  
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    headers: [
      {
        text: "List",
        value: "name",
        divider: true,
      },
      { text: "Checklist", value: "Checklist", divider: true },
    ],
    items: [],
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
  },
  watch: {
    personnelDetails: {
      handler(val) {
        this.items = [
          {
            name: "Sitting Balance",
            Checklist:
              this.personnelDetails.ptNotes.balanceToleranceSittingBalance ===
              null
                ? "-"
                : this.personnelDetails.ptNotes.balanceToleranceSittingBalance
                ? "Yes"
                : "No",
          },
          {
            name: "Sitting Tolerance",
            Checklist:
              this.personnelDetails.ptNotes.balanceToleranceSittingTolerance ===
              null
                ? "-"
                : this.personnelDetails.ptNotes.balanceToleranceSittingTolerance
                ? "Yes"
                : "No",
          },
          {
            name: "Standing Balance",
            Checklist:
              this.personnelDetails.ptNotes.balanceToleranceStandingBalance ===
              null
                ? "-"
                : this.personnelDetails.ptNotes.balanceToleranceStandingBalance
                ? "Yes"
                : "No",
          },
          {
            name: "Standing Tolerance",
            Checklist:
              this.personnelDetails.ptNotes
                .balanceToleranceStandingTolerance === null
                ? "-"
                : this.personnelDetails.ptNotes
                    .balanceToleranceStandingTolerance
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
        name: "Sitting Balance",
        Checklist:
          this.personnelDetails.ptNotes.balanceToleranceSittingBalance === null
            ? "-"
            : this.personnelDetails.ptNotes.balanceToleranceSittingBalance
            ? "Yes"
            : "No",
      },
      {
        name: "Sitting Tolerance",
        Checklist:
          this.personnelDetails.ptNotes.balanceToleranceSittingTolerance ===
          null
            ? "-"
            : this.personnelDetails.ptNotes.balanceToleranceSittingTolerance
            ? "Yes"
            : "No",
      },
      {
        name: "Standing Balance",
        Checklist:
          this.personnelDetails.ptNotes.balanceToleranceStandingBalance === null
            ? "-"
            : this.personnelDetails.ptNotes.balanceToleranceStandingBalance
            ? "Yes"
            : "No",
      },
      {
        name: "Standing Tolerance",
        Checklist:
          this.personnelDetails.ptNotes.balanceToleranceStandingTolerance ===
          null
            ? "-"
            : this.personnelDetails.ptNotes.balanceToleranceStandingTolerance
            ? "Yes"
            : "No",
      },
    ];
  },
};
</script>
  
  <style>
</style>