<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <DentalUpdate />
        <v-btn v-print="'#print'" class="ml-3" small @click="isPrint = true">print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="px-8">
      <v-row v-if="isPrint" justify="center" align="center" class="mb-2">
        <img height="190px" width="100%" :src="dentalHeader" style="border-radius: 1rem;">
      </v-row>
      <v-row>
        <v-avatar size="150" class="mb-5" tile>
          <img
            :src="`http://localhost:8000/${personnelDetails.personnel.personnelImage}`"
            alt="John"
            style="object-fit: cover"
          />
        </v-avatar>
      </v-row>
      <v-row
        ><v-col
          ><strong class="mt-2">Section I : PATIENT DATA</strong></v-col
        ></v-row
      >
      <v-row><v-divider class="my-1"></v-divider></v-row>
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
            <strong>{{ personnelDetails.personnel.rank }} </strong>
            <span class="body-2 pl-5"> DATE OF BIRTH : </span>
            <strong> {{ birthDate }}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> UNIT ASSIGNMENT : </span>
            <strong> {{ personnelDetails.personnel.unit }} </strong>
            <span class="body-2 mx-1">HOME ADDRESS : </span>
            <strong>{{ personnelDetails.personnel.address }}</strong>
            <span class="body-2 mx-1"> CELLPHONE No. : </span>
            <strong>+639{{ personnelDetails.personnel.mobile }}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row
        ><v-col
          ><strong class="mt-2">Section II : DENTAL EXAMINATION</strong></v-col
        ></v-row
      >
      <v-row><v-divider class="my-1"></v-divider></v-row>

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
            <span class="body-2 pl-5"> PROMOTION : </span>
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
          <strong> {{ initialDate }} </strong>
          <span class="body-2 pl-5">TRAINING DATE : </span>
          <strong>{{ trainingDate }}</strong>
          <span class="body-2 pl-5">PROMOTION DATE: </span>
          <strong>{{ promotionDate }}</strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <!-- <v-img max-width="400px" height="350px" :src="dentalTeeth" contain></v-img> -->
          <img height="100%" width="100%" :src="dentalTeeth" style="border-radius: 1rem;">
        </v-col>
        <v-col cols="6">
          <strong>A. CALCULUS</strong>
          <v-data-table
            :headers="headers"
            :items="items"
            dense
            hide-default-footer
            class="elevation-1 my-5"
          ></v-data-table>
          <strong class="pt-3">B. ABNORMALITIES</strong>
          <v-card class="mt-2" height="190px" max-height="190px" elevation="0" style="border: 1px solid gray; ">
            <v-card-text>
              <!-- text here -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row
        ><v-col
          ><strong class="mt-2">Section III : CASE HISTORY</strong></v-col
        ></v-row
      >
      <v-row><v-divider class="my-1"></v-divider></v-row>
      <v-row>
        <v-col>
          <span class="body-2"> Oral Complaint : </span>
            <strong>
              <strong>{{
              personnelDetails.dental.oralComplaint
                ? personnelDetails.dental.oralComplaint
                : "N/A"
            }}</strong>
            </strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <DentalTable />
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="4" >
           <strong class="d-flex justify-center"> &nbsp;</strong>
          <v-divider  ></v-divider>
          <small class="d-flex justify-center mt-1" >Signature of Personnel</small>
        </v-col>
        <v-col cols="4" >
          <strong class="d-flex justify-center"> &nbsp;</strong>
          <v-divider  ></v-divider>
          <small class="d-flex justify-center mt-1 text-underlined" >Date</small>
        </v-col>
        <v-col cols="4" >
          <strong class="d-flex justify-center">{{
              personnelDetails.dental.examiningDentist
                ? personnelDetails.dental.examiningDentist
                : "N/A"
            }}</strong>
          <v-divider  ></v-divider>
          <small class="d-flex justify-center mt-1" >Examining Dentist</small>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <!-- <div class="d-flex flex-column">
            <strong class="text-decoration-underline"
              >SINSP CLAPER A OJASCASTRO, DMD</strong
            >
            <span class="body-1">Chief, Dental Service Section</span>
            <span class="body-1">BFP Region 1</span>
          </div> -->
          <strong class="text-decoration-underline"
              >SINSP CLAPER A OJASCASTRO, DMD</strong
            >
        </v-col>
        
      </v-row>
      <v-row>
        <v-col>
          <span class="body-1">Chief, Dental Service Section</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="body-1">BFP Region 1</span>
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
    isPrint: false,
    dialog: false,
    headers: [
      {
        text: "Mild",
        value: "name",
        divider: true,
      },
      {
        text: "Moderate",
        value: "moderate",
        divider: true,
      },
      {
        text: "Heavy",
        value: "heavy",
        divider: true,
      },
    ],
    items: [],
    
    dentalTeeth: require("@/assets/imported-images/Dental-Teeth.jpg"),
    dentalHeader: require("@/assets/imported-images/Dental.jpg"),
    // dentalTeeth: "@/assets/imported-images/Dental-Teeth.jpg",
    caseHistory:{
      oralComplaint: '',
      examiningDentist: ''
    },
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
      if (!this.personnelDetails.dental.initialDate) {
        return "N/A";
      }
      return this.personnelDetails.dental.initialDate.substr(0, 10);
    },
    trainingDate() {
      if (!this.personnelDetails.dental.trainingDate) {
        return "N/A";
      }
      return this.personnelDetails.dental.trainingDate.substr(0, 10);
    },
    promotionDate() {
      if (!this.personnelDetails.dental.promotionDate) {
        return "N/A";
      }
      return this.personnelDetails.dental.promotionDate.substr(0, 10);
    },
  },
  methods:{
    printOpen(){
      this.isPrint =!this.isPrint
    }
  },
  created() {
    this.items = [
      {
        name: "",
        moderate: "",
        heavy: "",
      },
    ];
  },
};
</script>

<style scoped>


</style>
