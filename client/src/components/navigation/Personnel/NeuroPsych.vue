<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <PsychUpdate />
        <v-btn v-print="'#print'" class="ml-3" small>print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="px-8">
      <v-row justify="space-between">
        <v-col class="mb-2">
          <span>
            Date :
            <strong> {{ dateToday}} </strong>
          </span>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <PsychTable />
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

import PsychTable from "@/components/navigation/Personnel/Psych/PsychTable";
import PsychUpdate from "@/components/navigation/Personnel/Psych/PsychUpdate";
export default {
  props: ["data"],
  components: {
    PsychTable,
    PsychUpdate,
  },

  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    open() {
      this.dialogVisible = !this.dialogVisible;
    },
    close() {
      this.dialogVisible = false;
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    dateToday() {
      return this.personnelDetails.personnel.createdAt.substr(0, 10);
    },
  },
};
</script>

<style></style>
