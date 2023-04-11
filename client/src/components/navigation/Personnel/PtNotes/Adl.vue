<template>
  <v-data-table
    :headers="headers"
    :items="items"
    dense
    hide-default-footer
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
        text: "Self-Care",
        value: "name",
        divider: true,
      },
      { text: "Fully Dependent", value: "FullyDependent", divider: true },
      {
        text: "Partially Dependent",
        value: "PartiallyDependent",
        divider: true,
      },
      { text: "Independent", value: "Independent", divider: true },
    ],
    items: [],
  }),
  watch: {
    personnelDetails: {
      handler(val) {
        this.items = [
          {
            name: "Bathing",
            FullyDependent:
              this.personnelDetails.ptNotes.adlBathing === null
                ? ""
                : this.personnelDetails.ptNotes.adlBathing
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Toileting",
            FullyDependent:
              this.personnelDetails.ptNotes.adlToileting === null
                ? ""
                : this.personnelDetails.ptNotes.adlToileting
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Eating",
            FullyDependent:
              this.personnelDetails.ptNotes.adlEating === null
                ? ""
                : this.personnelDetails.ptNotes.adlEating
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Upper extermity dressing",
            FullyDependent:
              this.personnelDetails.ptNotes.adlUpperExtermityDressing === null
                ? ""
                : this.personnelDetails.ptNotes.adlUpperExtermityDressing
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Lower extremity dressing",
            FullyDependent:
              this.personnelDetails.ptNotes.adlLowerExtermityDressing === null
                ? ""
                : this.personnelDetails.ptNotes.adlLowerExtermityDressing
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Bed Mobility",
            FullyDependent:
              this.personnelDetails.ptNotes.adlBedMobility === null
                ? ""
                : this.personnelDetails.ptNotes.adlBedMobility
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Scoot towards head of head",
            FullyDependent:
              this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === null
                ? ""
                : this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Scoot towards foot of head",
            FullyDependent:
              this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === null
                ? ""
                : this.personnelDetails.ptNotes.adlScootTowardsFootOfHead
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Side to side scooting",
            FullyDependent:
              this.personnelDetails.ptNotes.adlSideToSideScooting === null
                ? ""
                : this.personnelDetails.ptNotes.adlSideToSideScooting
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Supine to long sitting",
            FullyDependent:
              this.personnelDetails.ptNotes.adlSupineToLongSitting === null
                ? ""
                : this.personnelDetails.ptNotes.adlSupineToLongSitting
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Rolling",
            FullyDependent:
              this.personnelDetails.ptNotes.adlRolling === null
                ? ""
                : this.personnelDetails.ptNotes.adlRolling
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Transfers",
            FullyDependent:
              this.personnelDetails.ptNotes.adlTransfers === null
                ? ""
                : this.personnelDetails.ptNotes.adlTransfers
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Wheelchair to Mat",
            FullyDependent:
              this.personnelDetails.ptNotes.adlWheelChairToMat === null
                ? ""
                : this.personnelDetails.ptNotes.adlWheelChairToMat
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Bed to Wheelchair",
            FullyDependent:
              this.personnelDetails.ptNotes.adlBedToWheelChair === null
                ? ""
                : this.personnelDetails.ptNotes.adlBedToWheelChair
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
          {
            name: "Ambulation",
            FullyDependent:
              this.personnelDetails.ptNotes.adlAmbulation === null
                ? ""
                : this.personnelDetails.ptNotes.adlAmbulation
                ? "Yes"
                : "No",
            PartiallyDependent: "",
            Independent: "",
          },
        ];
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
  },
  created() {
    this.items = [
      {
        name: "Bathing",
        FullyDependent:
          this.personnelDetails.ptNotes.adlBathing === null
            ? "-"
            : this.personnelDetails.ptNotes.adlBathing
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Toileting",
        FullyDependent:
          this.personnelDetails.ptNotes.adlToileting === null
            ? "-"
            : this.personnelDetails.ptNotes.adlToileting
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Eating",
        FullyDependent:
          this.personnelDetails.ptNotes.adlEating === null
            ? "-"
            : this.personnelDetails.ptNotes.adlEating
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Upper extermity dressing",
        FullyDependent:
          this.personnelDetails.ptNotes.adlUpperExtermityDressing === null
            ? "-"
            : this.personnelDetails.ptNotes.adlUpperExtermityDressing
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Lower extremity dressing",
        FullyDependent:
          this.personnelDetails.ptNotes.adlLowerExtermityDressing === null
            ? "-"
            : this.personnelDetails.ptNotes.adlLowerExtermityDressing
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Bed Mobility",
        FullyDependent:
          this.personnelDetails.ptNotes.adlBedMobility === null
            ? "-"
            : this.personnelDetails.ptNotes.adlBedMobility
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Scoot towards head of head",
        FullyDependent:
          this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === null
            ? "-"
            : this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Scoot towards foot of head",
        FullyDependent:
          this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === null
            ? "-"
            : this.personnelDetails.ptNotes.adlScootTowardsFootOfHead
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Side to side scooting",
        FullyDependent:
          this.personnelDetails.ptNotes.adlSideToSideScooting === null
            ? "-"
            : this.personnelDetails.ptNotes.adlSideToSideScooting
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Supine to long sitting",
        FullyDependent:
          this.personnelDetails.ptNotes.adlSupineToLongSitting === null
            ? "-"
            : this.personnelDetails.ptNotes.adlSupineToLongSitting
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Rolling",
        FullyDependent:
          this.personnelDetails.ptNotes.adlRolling === null
            ? "-"
            : this.personnelDetails.ptNotes.adlRolling
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Transfers",
        FullyDependent:
          this.personnelDetails.ptNotes.adlTransfers === null
            ? "-"
            : this.personnelDetails.ptNotes.adlTransfers
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Wheelchair to Mat",
        FullyDependent:
          this.personnelDetails.ptNotes.adlWheelChairToMat === null
            ? "-"
            : this.personnelDetails.ptNotes.adlWheelChairToMat
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Bed to Wheelchair",
        FullyDependent:
          this.personnelDetails.ptNotes.adlBedToWheelChair === null
            ? "-"
            : this.personnelDetails.ptNotes.adlBedToWheelChair
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Ambulation",
        FullyDependent:
          this.personnelDetails.ptNotes.adlAmbulation === null
            ? "-"
            : this.personnelDetails.ptNotes.adlAmbulation
            ? "Yes"
            : "No",
        PartiallyDependent: "-",
        Independent: "-",
      },
    ];
  },
};
</script>

<style>
</style>