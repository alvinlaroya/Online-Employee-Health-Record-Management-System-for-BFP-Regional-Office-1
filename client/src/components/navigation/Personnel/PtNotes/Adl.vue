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
            FullyDependent: this.personnelDetails.ptNotes.adlBathing === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlBathing === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlBathing === "Independent" ? "Yes" : "",
          },
          {
            name: "Toileting",
            FullyDependent: this.personnelDetails.ptNotes.adlToileting === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlToileting === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlToileting === "Independent" ? "Yes" : "",
          },
          {
            name: "Eating",
            FullyDependent: this.personnelDetails.ptNotes.adlEating === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlEating === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlEating === "Independent" ? "Yes" : "",
          },
          {
            name: "Upper extermity dressing",
            FullyDependent: this.personnelDetails.ptNotes.adlUpperExtermityDressing === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlUpperExtermityDressing === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlUpperExtermityDressing === "Independent" ? "Yes" : "",
          },
          {
            name: "Lower extremity dressing",
            FullyDependent: this.personnelDetails.ptNotes.adlLowerExtermityDressing === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlLowerExtermityDressing === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlLowerExtermityDressing === "Independent" ? "Yes" : "",
          },
          {
            name: "Bed Mobility",
            FullyDependent: this.personnelDetails.ptNotes.adlBedMobility === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlBedMobility === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlBedMobility === "Independent" ? "Yes" : "",
          },
          {
            name: "Scoot towards head of head",
            FullyDependent: this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === "Independent" ? "Yes" : "",
          },
          {
            name: "Scoot Towards Foot Of Head",
            FullyDependent: this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === "Independent" ? "Yes" : "",
          },
          {
            name: "Side To Side Scooting",
            FullyDependent: this.personnelDetails.ptNotes.adlSideToSideScooting === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlSideToSideScooting === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlSideToSideScooting === "Independent" ? "Yes" : "",
          },
          {
            name: "Supine To Long Sitting",
            FullyDependent: this.personnelDetails.ptNotes.adlSupineToLongSitting === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlSupineToLongSitting === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlSupineToLongSitting === "Independent" ? "Yes" : "",
          },
          {
            name: "Rolling",
            FullyDependent: this.personnelDetails.ptNotes.adlRolling === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlRolling === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlRolling === "Independent" ? "Yes" : "",
          },
          {
            name: "Transfers",
            FullyDependent: this.personnelDetails.ptNotes.adlTransfers === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlTransfers === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlTransfers === "Independent" ? "Yes" : "",
          },
          {
            name: "Wheel Chair ToMat",
            FullyDependent: this.personnelDetails.ptNotes.adlWheelChairToMat === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlWheelChairToMat === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlWheelChairToMat === "Independent" ? "Yes" : "",
          },
          {
            name: "Bed To Wheel Chair",
            FullyDependent: this.personnelDetails.ptNotes.adlBedToWheelChair === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlBedToWheelChair === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlBedToWheelChair === "Independent" ? "Yes" : "",
          },
          {
            name: "Ambulation",
            FullyDependent: this.personnelDetails.ptNotes.adlAmbulation === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlAmbulation === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlAmbulation === "Independent" ? "Yes" : "",
          },
        ];
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
  },
  // tableData() {
  //   return this.selfCareItems.map((item) => ({
  //     name: item.name,
  //     fullyDependent: this.personnelDetails.ptNotes.adlToileting === "Fully Dependent" ? "Yes" : "",
  //     partiallyDependent: this.personnelDetails.ptNotes.adlToileting === "Partially Dependent" ? "Yes" : "",
  //     independent: this.personnelDetails.ptNotes.adlToileting === "Independent" ? "Yes" : "",
  //   }));

  // },
  // for saving purpose ,dont mind this shit
  // {
  //           name: "Toileting",
  //           FullyDependent:
  //             this.personnelDetails.ptNotes.adlToileting === null
  //               ? ""
  //               : this.personnelDetails.ptNotes.adlToileting
  //               ? "Yes"
  //               : "No",
  //           PartiallyDependent: "",
  //           Independent: "",
  //         },
  created() {
    this.items = [
          {
            name: "Bathing",
            FullyDependent: this.personnelDetails.ptNotes.adlBathing === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlBathing === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlBathing === "Independent" ? "Yes" : "",
          },
          {
            name: "Toileting",
            FullyDependent: this.personnelDetails.ptNotes.adlToileting === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlToileting === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlToileting === "Independent" ? "Yes" : "",
          },
          {
            name: "Eating",
            FullyDependent: this.personnelDetails.ptNotes.adlEating === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlEating === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlEating === "Independent" ? "Yes" : "",
          },
          {
            name: "Upper extermity dressing",
            FullyDependent: this.personnelDetails.ptNotes.adlUpperExtermityDressing === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlUpperExtermityDressing === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlUpperExtermityDressing === "Independent" ? "Yes" : "",
          },
          {
            name: "Lower extremity dressing",
            FullyDependent: this.personnelDetails.ptNotes.adlLowerExtermityDressing === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlLowerExtermityDressing === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlLowerExtermityDressing === "Independent" ? "Yes" : "",
          },
          {
            name: "Bed Mobility",
            FullyDependent: this.personnelDetails.ptNotes.adlBedMobility === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlBedMobility === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlBedMobility === "Independent" ? "Yes" : "",
          },
          {
            name: "Scoot towards head of head",
            FullyDependent: this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlScootTowardsHeadOfHead === "Independent" ? "Yes" : "",
          },
          {
            name: "Scoot Towards Foot Of Head",
            FullyDependent: this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlScootTowardsFootOfHead === "Independent" ? "Yes" : "",
          },
          {
            name: "Side To Side Scooting",
            FullyDependent: this.personnelDetails.ptNotes.adlSideToSideScooting === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlSideToSideScooting === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlSideToSideScooting === "Independent" ? "Yes" : "",
          },
          {
            name: "Supine To Long Sitting",
            FullyDependent: this.personnelDetails.ptNotes.adlSupineToLongSitting === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlSupineToLongSitting === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlSupineToLongSitting === "Independent" ? "Yes" : "",
          },
          {
            name: "Rolling",
            FullyDependent: this.personnelDetails.ptNotes.adlRolling === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlRolling === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlRolling === "Independent" ? "Yes" : "",
          },
          {
            name: "Transfers",
            FullyDependent: this.personnelDetails.ptNotes.adlTransfers === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlTransfers === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlTransfers === "Independent" ? "Yes" : "",
          },
          {
            name: "Wheel Chair ToMat",
            FullyDependent: this.personnelDetails.ptNotes.adlWheelChairToMat === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlWheelChairToMat === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlWheelChairToMat === "Independent" ? "Yes" : "",
          },
          {
            name: "Bed To Wheel Chair",
            FullyDependent: this.personnelDetails.ptNotes.adlBedToWheelChair === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlBedToWheelChair === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlBedToWheelChair === "Independent" ? "Yes" : "",
          },
          {
            name: "Ambulation",
            FullyDependent: this.personnelDetails.ptNotes.adlAmbulation === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              this.personnelDetails.ptNotes.adlAmbulation === "Partially Dependent" ? "Yes" : "",
            Independent: this.personnelDetails.ptNotes.adlAmbulation === "Independent" ? "Yes" : "",
          },
        ];
  },
};
</script>

<style>
</style>