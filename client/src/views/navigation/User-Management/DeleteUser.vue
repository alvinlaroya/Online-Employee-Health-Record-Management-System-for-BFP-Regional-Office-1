<template>
  <v-container fluid>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-btn icon small color="error" @click="deleteUsers(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");
export default {
  data: () => ({
    headers: [
      { text: "First Name", value: "fname" },
      { text: "Middle Name", value: "mname" },
      { text: "Last Name", value: "lname" },
      { text: "Address", value: "address" },
      { text: "Phone", value: "phone" },
      { text: "Position", value: "position" },
      { text: "Action", value: "action", sortable: false },
    ],
    // users: [
    //   {
    //     firstName: "John",
    //     middleName: "Doe",
    //     lastName: "Smith",
    //     address: "123 Main St",
    //     phone: "555-1234",
    //     position: "Manager",
    //   },
    //   {
    //     firstName: "Jane",
    //     middleName: "Mary",
    //     lastName: "Johnson",
    //     address: "456 Elm St",
    //     phone: "555-5678",
    //     position: "Supervisor",
    //   },
    //   // Add more employee objects as needed
    // ],
  }),
  methods: {
    ...mapActions(["getUsers", "deleteUser"]),
    async fetchAllUsers() {
      await this.getUsers();
    },
    deleteUsers(item) {
      // Handle delete action
      this.deleteUser(item.id);
    },
  },
  computed: {
    ...mapGetters(["users"]),
  },
  created() {
    this.fetchAllUsers();
  },
};
</script>
