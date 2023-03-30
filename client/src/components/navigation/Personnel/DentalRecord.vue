<template>
  <v-card elevation="0">
    <v-container class="pa-8">
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> FULL NAME : </span>
            <strong>
              {{ data.fname }} {{ data.mname }} {{ data.lname }}
              {{ data.extName }}
            </strong>
            <span class="body-2 pl-5">RANK : </span>
            <strong>SF02</strong>
            <span class="body-2 pl-5">DATE OF BIRTH : </span>
            <strong>11-21-1998</strong>
          </div>
        </v-col>
        <v-col cols="1" class="py-0 d-flex justify-end">
          <v-btn small>Update</v-btn>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> UNIT ASSIGNMENT : </span>
            <strong> La Union </strong>
            <span class="body-2 pl-5">HOME ADDRESS : </span>
            <strong>Agoo, La Union</strong>
            <span class="body-2 pl-5">CELLPHONE No. : </span>
            <strong>09060650555</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2">INITIAL / CONSULTATION : </span>
            <strong> YES </strong>
            <span class="body-2 pl-5">TRAINING : </span>
            <strong>NO</strong>
            <span class="body-2 pl-5">PROMOTION : </span>
            <strong>NO</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2">DATE : </span>
            <strong> 05 December 2022 </strong>

          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <DentalTable/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>Examining Dentist : </strong>
            <span>Name of Dentist Here</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>Date : </strong>
            <span>Dec 05, 2022</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex flex-column">
            <strong class="text-decoration-underline">SINSP CLAPER A OJASCASTRO, DMD</strong>
            <span class="body-1">Chief, Dental Service Section</span>
            <span class="body-1">BFP Region 1</span>
          </div>
        </v-col> 
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import DentalTable from "@/components/navigation/Personnel/Dental/DentalTable";
export default {
  props: ["data"],
  components:{
    DentalTable
  },
  computed: {
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
    },
  },
};
</script>

<style></style>
