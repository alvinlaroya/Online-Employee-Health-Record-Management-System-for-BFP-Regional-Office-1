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
    items: [
      {
        name: "Sitting Balance",
        Checklist: "N/A",
      },
      {
        name: "Sitting Tolerance",
        Checklist: "N/A",
      },
      {
        name: "Standing Balance",
        Checklist: "N/A",
      },
      {
        name: "Standing Tolerance",
        Checklist: "N/A",
      },
    ],
  }),
};
</script>
  
  <style>
</style>