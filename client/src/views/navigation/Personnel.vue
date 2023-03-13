<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>Personnel</h1>
      </v-col>
    </v-row>
    <PersonnelData/>
  </v-container>
</template>

<script>
import PersonnelData from '@/components/navigation/Personnel/PersonnelData';

export default {
  components:{
    PersonnelData
  }
};
</script>

<style>
</style>