<template>
  <v-card elevation="0">
    <v-container class="pa-8">
      <v-row>
        <h1>PT Notes</h1>
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
