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
export default {
  data: () => ({
    headers: [
      {
        text: "Self-Care",
        value: "name",
        divider: true,
      },
      { text: "Fully Dependent", value: "FullyDependent", divider: true },
      { text: "Partially Dependent", value: "PartiallyDependent", divider: true },
      { text: "Independent", value: "Independent", divider: true },
      
    ],
    items: [
      {
        name: "Bathing",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Toileting",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Eating",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Upper extermity dressing",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Lower extremity dressing",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Bed Mobility",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Scoot towards head of head",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Scoot towards foot of head",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Side to side scooting",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Supine to long sitting",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Rolling",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Transfers",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Wheelchair to Mat",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Bed to Wheelchair",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      {
        name: "Ambulation",
        FullyDependent: "-",
        PartiallyDependent: "-",
        Independent: "-",
      },
      
    ],
  }),
};
</script>

<style>
</style>