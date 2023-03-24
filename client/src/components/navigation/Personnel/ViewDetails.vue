<template>
  <v-card elevation="0">
    <v-container class="pa-8">
      <v-row>
        <span>
          Account Number : <strong>{{ data.accountNo }}</strong>
        </span>
      </v-row>
      <v-row>
        <span>
          Rank : <strong> {{ data.rank }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Full Name :
          <strong
            >{{ data.fname }} {{ data.mname }} {{ data.lname }}</strong
          ></span
        >
      </v-row>
      <v-row>
        <span
          >Gender : <strong> {{ data.gender }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Mobile Number : <strong>{{ data.mobile }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Address : <strong> {{ data.address }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Date of Birth : <strong> {{ birthDate }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Civil Status : <strong> {{ data.civilStatus }}</strong></span
        >
      </v-row>

      <v-row>
        <span
          >Philhealth : <strong> {{ data.philhealth }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Ext Name : <strong> {{ data.extName }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Unit : <strong> {{ data.unit }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Designation : <strong> {{ data.designation }}</strong></span
        >
      </v-row>
      <v-row>
        <span
          >Remarks : <strong>{{ data.remarks }}</strong></span
        >
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["data"],

  computed: {
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
    },
  },
};
</script>

<style></style>
