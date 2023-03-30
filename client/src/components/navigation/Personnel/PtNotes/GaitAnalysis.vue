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
        text: "Stance Phase : ",
        value: "name", divider: true
      },
      { text: "Right", value: "right", divider: true },
      { text: "Left", value: "left", divider: true },
    ],
    items: [
      {
        name: "Initial Contact",
        left: "",
        right: "",
      },
      {
        name: "Loading Response",
        left: "",
        right: "",
      },
      {
        name: "Midstance",
        left: "",
        right: "",
      },
      {
        name: "Terminal Stance",
        left: "",
        right: "",
      },
      {
        name: "Swing Phase",
        left: "",
        right: "",
      },
      {
        name: "Preswing",
        left: "",
        right: "",
      },
      {
        name: "Initial Swing",
        left: "",
        right: "",
      },
      {
        name: "Midswing",
        left: "",
        right: "",
      },
      {
        name: "Terminal Swing",
        left: "",
        right: "",
      },
      {
        name: "Cadence",
        left: "",
        right: "",
      },
      {
        name: "Arm Swing",
        left: "",
        right: "",
      },
      {
        name: "Stride Length",
        left: "",
        right: "",
      },
      {
        name: "Step Width",
        left: "",
        right: "",
      },
    ],
  }),
};
</script>

<style>
</style>