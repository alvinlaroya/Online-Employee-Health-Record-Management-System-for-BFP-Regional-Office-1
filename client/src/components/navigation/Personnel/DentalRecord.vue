<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <DentalUpdate />
        <v-btn v-print="'#print'" class="ml-3" small>print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="pa-8">
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
            <span class="body-2 pl-5">RANK : </span>
            <strong>{{ personnelDetails.personnel.rank }}</strong>
            <span class="body-2 pl-5">DATE OF BIRTH : </span>
            <strong>{{ birthDate }}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> UNIT ASSIGNMENT : </span>
            <strong> {{ personnelDetails.personnel.unit }} </strong>
            <span class="body-2 pl-5">HOME ADDRESS : </span>
            <strong>{{ personnelDetails.personnel.address }}</strong>
            <span class="body-2 pl-5">CELLPHONE No. : </span>
            <strong>{{ personnelDetails.personnel.mobile }}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2">INITIAL / CONSULTATION : </span>
            <strong>
              {{
                personnelDetails.dental.initial
                  ? personnelDetails.dental.initial
                  : "N/A"
              }}
            </strong>
            <span class="body-2 pl-5">TRAINING : </span>
            <strong>{{
              personnelDetails.dental.training
                ? personnelDetails.dental.training
                : "N/A"
            }}</strong>
            <span class="body-2 pl-5">PROMOTION : </span>
            <strong>{{
              personnelDetails.dental.promotion
                ? personnelDetails.dental.promotion
                : "N/A"
            }}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <span class="body-2">INITIAL DATE : </span>
          <strong> {{ initialDate  }} </strong>
          <span class="body-2 pl-5">TRAINING DATE : </span>
          <strong>{{ trainingDate  }}</strong>
          <span class="body-2 pl-5">PROMOTION DATE: </span>
          <strong>{{ promotionDate }}</strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <DentalTable />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div>
            <strong>Examining Date : </strong>
            <!-- <span>{{ personnelDetails.dental.examiningDate }}</span> -->
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex flex-column">
            <strong class="text-decoration-underline"
              >SINSP CLAPER A OJASCASTRO, DMD</strong
            >
            <span class="body-1">Chief, Dental Service Section</span>
            <span class="body-1">BFP Region 1</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

import DentalTable from "@/components/navigation/Personnel/Dental/DentalTable";
import DentalUpdate from "@/components/navigation/Personnel/Dental/DentalUpdate";
export default {
  props: ["data"],
  components: {
    DentalTable,
    DentalUpdate,
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
    birthDate() {
      return this.personnelDetails.personnel.dateOfBirth.substr(0, 10);
    },
    dateToday() {
      return this.personnelDetails.personnel.createdAt.substr(0, 10);
    },
    initialDate() {
      if (
        !this.personnelDetails.dental ||
        !this.personnelDetails.dental.initialDate
      ) {
        return "N/A";
      }
      return this.personnelDetails.dental.initialDate.substr(0, 10);
    },
    trainingDate() {
      if (
        !this.personnelDetails.dental ||
        !this.personnelDetails.dental.trainingDate
      ) {
        return "N/A";
      }
      return this.personnelDetails.dental.trainingDate.substr(0, 10);
    },
    promotionDate() {
      if (
        !this.personnelDetails.dental ||
        !this.personnelDetails.dental.promotionDate
      ) {
        return "N/A";
      }
      return this.personnelDetails.dental.promotionDate.substr(0, 10);
    },
  },
};
</script>

<style></style>
