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
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            name: "Toileting",
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            name: "Eating",
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            name: "Upper extermity dressing",
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            name: "Lower extremity dressing",
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            name: "Bed Mobility",
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            name: "Scoot towards head of head",
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
          },
          {
            FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
            PartiallyDependent:
              item.status === "Partially Dependent" ? "Yes" : "",
            Independent: item.status === "Independent" ? "Yes" : "",
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
  //     fullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
  //     partiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
  //     independent: item.status === "Independent" ? "Yes" : "",
  //   }));
  // },
  created() {
    this.items = [
      {
        name: "Bathing",
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        name: "Toileting",
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        name: "Eating",
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        name: "Upper extermity dressing",
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        name: "Lower extremity dressing",
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        name: "Bed Mobility",
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        name: "Scoot towards head of head",
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
      {
        FullyDependent: item.status === "Fully Dependent" ? "Yes" : "",
        PartiallyDependent: item.status === "Partially Dependent" ? "Yes" : "",
        Independent: item.status === "Independent" ? "Yes" : "",
      },
    ];
  },
};
</script>

<style>
</style>