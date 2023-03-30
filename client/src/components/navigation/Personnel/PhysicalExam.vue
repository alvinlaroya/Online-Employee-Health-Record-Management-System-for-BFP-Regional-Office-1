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
          </div>
        </v-col>
        <v-col cols="1" class="py-0 d-flex justify-end">
          <v-btn small>Update</v-btn>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> ADDRESS : </span>
            <strong> Agoo, La Union </strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> SEX : </span>
            <strong> FEMALE</strong>
            <span class="body-2 pl-5"> CIVIL STATUS : </span>
            <strong> SINGLE</strong>
            <span class="body-2 pl-5"> AGE : </span>
            <strong> 41</strong>
            <span class="body-2 pl-5"> MOBILE NO. : </span>
            <strong> 0906587452</strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> DATE AND PLACE OF BIRTH  : </span>
            <strong> 15 Sept 1981 | Naga City, Cam Sur</strong>
            <span class="body-2 pl-5"> Date of Examination : </span>
            <strong> N/A</strong>
            
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2 "> DESIGNATION/ UNIT ASSIGNMENT : </span>
            <strong>  HS Staff | Unit Assignment Provider </strong>
            <span class="body-2 pl-5"> MOBILE NO. : </span>
            <strong> 0906587452</strong>
            
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2 "> PURPOSE OF EXAMINATION : </span>
            <strong>  N/A </strong>

          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <PhysicalTable/>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="">
          <div class="d-flex flex-column">
            <span class="body-2 "> SIGNIFICANT MEDICAL HISTORY : </span>
            <strong>  N/A </strong>
            <span class="body-2 "> OVERALL PHYSICAL EVALUATION : </span>
            <strong>  N/A </strong>
            <span class="body-2 "> RECOMMENDATION : </span>
            <strong>  N/A </strong>
          </div>
        </v-col>
        <v-col>
          <div class="d-flex flex-column">
            <strong>OFFICIAL DESIGNATION : </strong>
            <span>N/A</span>
            <strong>OFFICIAL DESIGNATION : </strong>
            <span>N/A</span>
            <strong>MEDICAL OFFICER NAME : </strong>
            <span>N/A</span>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>OCCUPATIONAL HISTORY</strong>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import PhysicalTable from "@/components/navigation/Personnel/Physical/PhysicalTable";
export default {
  props: ["data"],
  components:{
    PhysicalTable
  },
  computed: {
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
    },
  },
};
</script>

<style></style>
