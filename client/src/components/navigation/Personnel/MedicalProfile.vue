<template>
  <v-card elevation="0">
    <v-container class="pa-8">
      <v-row>
        <span>
          Full Name :
          <strong>
            {{ data.fname }} {{ data.mname }} {{ data.lname }}
            {{ data.extName }}
          </strong>
        </span>
      </v-row>
      <v-row>
        <span
          >Date Of Birth :
          <strong>15 sep 1981</strong>
        </span>
      </v-row>
      <v-row><span>Family History</span></v-row>

      <v-card-text>
        <MedicalDetails />
        <!-- <PersonalHistory/> -->
      </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
// import PersonalHistory from '@/components/navigation/Personnel/Medical/PersonalHistory';
import MedicalDetails from "@/components/navigation/Personnel/Medical/MedicalDetails";

export default {
  props: ["data"],
  components: {
    MedicalDetails,
    // PersonalHistory
  },
  computed: {
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
    },
  },
  
};
</script>

<style>
ul li {
  list-style: none;
}
.custom {
  font-size: 12px;
}
</style>