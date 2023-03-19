<template>
  <div class="w-100">
    <v-data-table
      dense
      :headers="headers"
      :items="personnels"
      :items-per-page="20"
      :search="search"
      class="elevation-1 no-wrap"
    >
      <template v-slot:item.action="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-icon small class="mr-5 cursor-pointer">mdi-eye</v-icon>
            <v-icon small v-on="on">mdi-dots-vertical</v-icon>
          </template>
          <v-list dense>
            <v-list-item
              v-for="option in options"
              :key="option.title"
              @click="open(item, option)"
            >
              <v-list-item-title>
                {{ option.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    headers: [
      {
        text: "Account #",
        value: "accountNo",
        align: "start",
        sortable: false,
      },
      { text: "Rank", value: "rank" },
      { text: "Last Name", value: "lname" },
      { text: "First Name", value: "fname" },
      { text: "Middle Name", value: "mname" },

      { text: "Ext Name", value: "extName" },
      { text: "Unit Assignment", value: "unit" },
      { text: "Designation", value: "designation" },
      { text: "Mobile", value: "mobile" },
      { text: "Civil Status", value: "civilStatus" },

      { text: "Action", value: "action" },
    ],
    options: [
      { title: "Medical Profile" },
      { title: "Dental Record" },
      { title: "Physical Exam" },
      { title: "PT Notes" },
      { title: "Neuro Psych" },
    ],
  }),
  methods: {
    ...mapActions(["getPersonnels"]),
    open(item, option) {
      console.log("etits");
    },
  },
  computed: {
    ...mapGetters(["personnels"]),
  },
  created() {
    this.getPersonnels({
      name: "Alvin",
    });
  },
  props: ["search"],
};
</script>

<style>
.no-wrap th,
td {
  white-space: nowrap;
}
.cursor-pointer {
  cursor: pointer;
}
.w-100 {
  width: 100%;
}
.w-40 {
  width: 200px;
}
</style>
