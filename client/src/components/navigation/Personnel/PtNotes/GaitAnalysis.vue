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
        text: "Stance Phase : ",
        value: "name",
        divider: true,
      },
      { text: "Right", value: "ans", divider: true },
    ],
    items: [],
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
  },
  watch: {
    personnelDetails: {
      handler(val) {},
      deep: true,
    },
  },
  created() {
    this.items = [
      {
        name: "Initial Contact",
        ans:
          this.personnelDetails.ptNotes.initialContact === null
            ? "-"
            : this.personnelDetails.ptNotes.initialContact
            ? "Right"
            : "Left",
      },
      {
        name: "Loading Response",
        ans:
          this.personnelDetails.ptNotes.loadingResponse === null
            ? "-"
            : this.personnelDetails.ptNotes.loadingResponse
            ? "Right"
            : "Left",
      },
      {
        name: "Midstance",
        ans:
          this.personnelDetails.ptNotes.midstance === null
            ? "-"
            : this.personnelDetails.ptNotes.midstance
            ? "Right"
            : "Left",
      },
      {
        name: "Terminal Stance",
        ans:
          this.personnelDetails.ptNotes.terminalStance === null
            ? "-"
            : this.personnelDetails.ptNotes.terminalStance
            ? "Right"
            : "Left",
      },
      {
        name: "Swing Phase",
        ans:
          this.personnelDetails.ptNotes.swingPhase === null
            ? "-"
            : this.personnelDetails.ptNotes.swingPhase
            ? "Right"
            : "Left",
      },
      {
        name: "Preswing",
        ans:
          this.personnelDetails.ptNotes.preSwing === null
            ? "-"
            : this.personnelDetails.ptNotes.preSwing
            ? "Right"
            : "Left",
      },
      {
        name: "Initial Swing",
        ans:
          this.personnelDetails.ptNotes.initialSwing === null
            ? "-"
            : this.personnelDetails.ptNotes.initialSwing
            ? "Right"
            : "Left",
      },
      {
        name: "Midswing",
        ans:
          this.personnelDetails.ptNotes.midSwing === null
            ? "-"
            : this.personnelDetails.ptNotes.midSwing
            ? "Right"
            : "Left",
      },
      {
        name: "Terminal Swing",
        ans:
          this.personnelDetails.ptNotes.terminalSwing === null
            ? "-"
            : this.personnelDetails.ptNotes.terminalSwing
            ? "Right"
            : "Left",
      },
      {
        name: "Cadence",
        ans:
          this.personnelDetails.ptNotes.cadence === null
            ? "-"
            : this.personnelDetails.ptNotes.cadence
            ? "Right"
            : "Left",
      },
      {
        name: "Arm Swing",
        ans:
          this.personnelDetails.ptNotes.armSwing === null
            ? "-"
            : this.personnelDetails.ptNotes.armSwing
            ? "Right"
            : "Left",
      },
      {
        name: "Stride Length",
        ans:
          this.personnelDetails.ptNotes.strideLength === null
            ? "-"
            : this.personnelDetails.ptNotes.strideLength
            ? "Right"
            : "Left",
      },
      {
        name: "Step Width",
        ans:
          this.personnelDetails.ptNotes.stepWidth === null
            ? "-"
            : this.personnelDetails.ptNotes.stepWidth
            ? "Right"
            : "Left",
      },
    ];
  },
};
</script>

<style>
</style>