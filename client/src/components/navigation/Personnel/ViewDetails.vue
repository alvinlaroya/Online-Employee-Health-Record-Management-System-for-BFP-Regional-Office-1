<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <UpdateDetails />
        <v-btn v-print="'#print'" class="ml-3" small>print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="pa-8">
      <v-row>
        <span>
          Account Number : <strong>{{ personnel.accountNo }}</strong>
        </span>
      </v-row>
      <v-row>
        <span>
          Rank : <strong> {{ personnel.rank }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Full Name :
          <strong
            >{{ personnel.fname }} {{ personnel.mname }} {{ personnel.lname }}
            {{ personnel.extName }}</strong
          ></span
        >
      </v-row>
      <v-row>
        <span
          >Gender : <strong> {{ personnel.gender }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Mobile Number : <strong>{{ personnel.mobile }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Address : <strong> {{ personnel.address }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Date of Birth : <strong> {{ personnel.birthDate }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Age : <strong> {{ personnel.birthDate | computeAge }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Civil Status : <strong> {{ personnel.civilStatus }}</strong></span
        >
      </v-row>

      <v-row>
        <span
          >Philhealth : <strong> {{ personnel.philhealth }}</strong></span
        >
      </v-row>

      <v-row>
        <span
          >Unit : <strong> {{ personnel.unit }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Designation : <strong> {{ personnel.designation }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Remarks : <strong>{{ personnel.remarks }}</strong></span
        >
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UpdateDetails from "./ViewDetail/UpdateDetails.vue";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  props: ["data"],
  components: {
    UpdateDetails,
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    personnel() {
      return this.personnelDetails?.personnel || ''
    },
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
    },
  },
};
</script>

<style></style>
