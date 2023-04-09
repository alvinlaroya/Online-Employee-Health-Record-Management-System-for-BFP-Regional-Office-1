<template>
  <!-- <v-data-table :items="items" :headers="headers"  hide-default-footer>

  </v-data-table> -->
  <div class="pa-4">
    <div>
      <p class="font-weight-bold">
        Current Health Condition (e.g. Diabetic, Hypertensive):
      </p>
      <span>{{ neuroPsych ? neuroPsych.currentHealthCondition : "N/A" }}</span>
    </div>
    <div class="mt-9">
      <p class="font-weight-bold">
        History of Mental Health Condition (e.g. Depression Insomnia, Anxiety):
      </p>
      <span>{{ neuroPsych ? neuroPsych.historyOfMentalHealthCondition : "N/A" }}</span>
    </div>
    <div class="mt-9">
      <p class="font-weight-bold">
       Current Mental Health Condition (Indicate if consulting professional or with medication otherwise indicate None):
      </p>
      <span>{{ neuroPsych ? neuroPsych.currentMentalHealthCondition : "N/A" }}</span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  computed: {
    ...mapGetters(["personnelDetails"]),
    neuroPsych() {
      return this.personnelDetails.neuroPsych;
    },
  },
};
</script>

<style></style>
