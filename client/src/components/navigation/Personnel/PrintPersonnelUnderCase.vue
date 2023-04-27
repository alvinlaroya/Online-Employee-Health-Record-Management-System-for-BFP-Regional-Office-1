<template>
  <div>
    <v-dialog v-model="dialog" max-width="1200">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" tile style="margin-right: 20px; margin-bottom: -15px">
          <v-icon left> mdi-printer </v-icon>
          Print
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn v-print="'#personnels'">PRINT</v-btn>
        </v-card-title>
        <v-simple-table id="personnels">
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  style="font-size: 10px"
                  class="text-left"
                  v-for="(header, i) in headers"
                  :key="i"
                >
                  {{ header.text }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in personnelCases" :key="i">
                <td style="font-size: 10px">{{ item.accountNo }}</td>
                <td style="font-size: 10px">{{ item.rank }}</td>
                <td style="font-size: 10px">{{ item.lname }}</td>
                <td style="font-size: 10px">{{ item.fname }}</td>
                <td style="font-size: 10px">{{ item.mname }}</td>
                <td style="font-size: 10px">{{ item.extName }}</td>
                <td style="font-size: 10px">{{ item.unit }}</td>
                <td style="font-size: 10px">{{ item.designation }}</td>
                <td style="font-size: 10px">{{ item.mobile }}</td>
                <td style="font-size: 10px">{{ item.civilStatus }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,

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
    ],
  }),

  computed: {
    ...mapGetters(["personnelCases"]),
  },
};
</script>
