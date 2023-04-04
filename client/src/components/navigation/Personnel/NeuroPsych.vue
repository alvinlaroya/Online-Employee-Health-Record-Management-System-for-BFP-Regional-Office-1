<template>
  <v-card elevation="0">
    <v-container class="pa-8">
      <v-row justify="space-between">
        <v-col class="mb-2" >
          <span>
            Date :
            <strong>
              March 31, 2022
            </strong>
          </span>
        </v-col>
        <v-col cols="6" class="py-0 d-flex justify-end" >
          <PsychUpdate/>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <PsychTable/>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
import PsychTable from "@/components/navigation/Personnel/Psych/PsychTable";
import PsychUpdate from "@/components/navigation/Personnel/Psych/PsychUpdate";
export default {
  props: ["data"],
  components:{
    PsychTable,
    PsychUpdate
  },
  computed: {
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    open() {
      this.dialogVisible =! this.dialogVisible;
    },
    close() {
      this.dialogVisible = false;
    },
    
  },
};
</script>

<style></style>
