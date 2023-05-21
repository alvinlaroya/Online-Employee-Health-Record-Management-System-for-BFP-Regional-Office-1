<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <v-tabs v-model="medicalType">
          <v-tab @click="medicalType = 0">Entry</v-tab>
          <v-tab @click="medicalType = 1">Training</v-tab>
          <v-tab @click="medicalType = 2">Promotion</v-tab>
        </v-tabs>
        <v-spacer />
        <div style="margin-top: -40px">
          <PsychUpdate :medicalType="medicalType" />
        </div>
        <div style="margin-top: -40px">
          <v-btn v-print="'#print'" class="ml-3" small>print</v-btn>
        </div>
      </v-row>
    </v-container>
    <v-container id="print" class="px-8">
      <v-row class="">
        <v-col class="px-0"> <h1>Neuro Psych</h1></v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> FULL NAME : </span>
            <strong>
              {{ personnelDetails.personnel.fname }}
              {{ personnelDetails.personnel.mname }}
              {{ personnelDetails.personnel.lname }}
              {{ personnelDetails.personnel.extName }}
            </strong>
            <span class="body-2 pl-5">OCCUPATION : </span>
            <strong>{{ personnelDetails.personnel.occupation }}&nbsp;</strong>
            <span class="body-2 pl-5">RANK : </span>
            <strong>{{ personnelDetails.personnel.rank }}&nbsp;</strong>
            <span class="body-2 pl-5">UNIT : </span>
            <strong> {{ personnelDetails.personnel.unit }} </strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> ADDRESS : </span>
            <strong> {{ personnelDetails.personnel.address }} </strong>
            <span class="body-2 pl-5">MOBILE NO. : </span>
            <strong>+639{{ personnelDetails.personnel.mobile }}&nbsp;</strong>
            <span class="body-2 pl-5">SEX : </span>
            <strong>{{ personnelDetails.personnel.gender }}&nbsp;</strong>
            <span class="body-2 pl-5">CIVIL STATUS : </span>
            <strong> {{ personnelDetails.personnel.civilStatus }}&nbsp;</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="mb-2">
          <span>
            Date :
            <strong> {{ dateToday }} </strong>
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
      medicalType: 0,
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
