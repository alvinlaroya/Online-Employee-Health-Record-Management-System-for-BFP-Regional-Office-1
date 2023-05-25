<template>
  <v-container>
    <v-card>
      <v-card-title>Transaction Logs</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="transactionLogs"
          class="elevation-1"
          disable-pagination
          hide-default-footer
        ></v-data-table>
      </v-card-text>
      <pre>{{ transactionLog }}</pre>
    </v-card>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");
export default {
  data: () => ({
    headers: [
      { text: "Name", value: "name" },
      { text: "Log", value: "log" },
      { text: "Log Created", value: "createdAt" },
    ],
    items: [],
  }),
  computed: {
    ...mapGetters(["transactionLogs"]),
  },
  methods: {
    ...mapActions(["getAllTransactionLogs"]),
  },
  created() {
    this.getAllTransactionLogs();
  },
};
</script>
