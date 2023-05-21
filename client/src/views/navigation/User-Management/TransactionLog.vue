<template>
  <v-container>
    <v-card>
      <v-card-title>Transaction Log</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
          disable-pagination
          hide-default-footer
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>
  
  <script>
export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Log", value: "log" },
        { text: "Log Created", value: "logCreated" },
      ],
      items: [
        { name: "John Doe", log: "Added Personnel", logCreated: "2023-05-20" },
        {
          name: "Jane Smith",
          log: "Delete Personnel",
          logCreated: "2023-05-19",
        },
        { name: "Michael Johnson", log: "Logged In", logCreated: "2023-05-18" },
        {
          name: "Michael Johnson",
          log: "Logged Out",
          logCreated: "2023-05-18",
        },
        // Add more items as needed
      ],
    };
  },
};
</script>
  