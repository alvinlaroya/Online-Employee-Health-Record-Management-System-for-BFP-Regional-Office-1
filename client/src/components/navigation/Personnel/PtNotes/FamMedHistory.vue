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
export default {
  data: () => ({
    items: [
      {
        name: "Hypertension",
        father: "YES",
        mother: "",
      },
      {
        name: "Diabetes Mellitus",
        father: "YES",
        mother: "",
      },
      {
        name: "Asthma",
        father: "",
        mother: "",
      },
      {
        name: "Arthritis",
        father: "YES",
        mother: "",
      },
      {
        name: "Cerebral Vascular Accident",
        father: "YES",
        mother: "YES",
      },
      {
        name: "Others",
        father: "",
        mother: "",
      },
    ],
    headers: [
      {
        text: "Medical History",
        align: "start",
        sortable: false,
        value: "name", divider: true
      },
      { text: "Father", value: "father", divider: true },
      { text: "Mother", value: "mother", divider: true },
    ],
  }),
};
</script>

<style>
</style>