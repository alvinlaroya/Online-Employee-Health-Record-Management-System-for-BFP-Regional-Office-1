<template>
  <v-container fluid class="px-5">
    <v-row>
      <v-col cols="12">
        <h1>Personnel</h1>
      </v-col>
    </v-row>
    <v-col>
      <v-row justify="end" class="pa-2">
        <AddPersonnelData />
      </v-row>

      <v-row >
        <PersonnelData />
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import PersonnelData from "@/components/navigation/Personnel/PersonnelData";
import AddPersonnelData from "@/components/navigation/Personnel/AddPersonnelData";

export default {
  components: {
    PersonnelData,
    AddPersonnelData,
  },
};
</script>

<style>
</style>