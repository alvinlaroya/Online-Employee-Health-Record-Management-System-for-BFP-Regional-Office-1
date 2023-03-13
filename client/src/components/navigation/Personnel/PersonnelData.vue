<template>
  <v-data-table
  dense
    :headers="headers"
    :items="items"
    :items-per-page="5"
    
    class="elevation-1 no-wrap"
  >
    <template v-slot:item.action="{ item }">
      <v-menu offset-y>
        <template v-slot:activator="{ on } ">
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
</template>
  <script>
export default {
  data: () => ({
    headers: [
      { text: "Account #", value: "account" },
      { text: "Rank", value: "rank" },
      { text: "Last Name", value: "lastName" },
      { text: "First Name", value: "firstName" },
      { text: "Middle Name", value: "middleName" },

      { text: "Ext Name", value: "extName" },
      { text: "Unit Assignment", value: "unitAssignment" },
      { text: "Designation", value: "designation" },
      { text: "Mobile", value: "mobile" },
      { text: "Civil Status", value: "civilStatus" },
      { text: "Action", value: "action" },
    ],
    items: [
      {
        account: "A13015",
        rank: "SF01",
        lastName: "Cruz",
        firstName: "Juan",
        middleName: "Dela",
        extName: "",
        unitAssignment: "BFP RHQs",
        designation: "Regional Supply Management Section Personnel",
        mobile: "09123456789",
        civilStatus: "Single",
        
      },
    ],
    options: [
      { title: 'Medical Profile'},
      { title: 'Dental Record'},
      { title: 'Physical Exam'},
      { title: 'PT Notes'},
      { title: 'Neuro Psych'},
    ],
  }),
  methods:{
    open(item, option) {
      console.log('etits');
    },
  }
};
</script>


<style>
.no-wrap th,td {
  white-space: nowrap;
}
</style>