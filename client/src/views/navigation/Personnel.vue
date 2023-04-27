<template>
  <v-container fluid class="px-5">
    <v-row>
      <v-col cols="12">
        <h1>Personnel</h1>
      </v-col>
    </v-row>
    <v-col>
      <v-row justify="space-between" align-items="center" class="pa-2">
        <v-col cols="4">
          <v-text-field
            dense
            class="w-300"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="2">
          <AddPersonnelData />
        </v-col>
      </v-row>

      <v-row>
        <PersonnelData :search="search" />
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
  data: () => ({
    search: "",
  }),
};
</script>

<style></style>
