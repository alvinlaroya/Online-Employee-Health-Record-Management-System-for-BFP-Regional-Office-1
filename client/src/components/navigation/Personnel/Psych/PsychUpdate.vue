<template>
  <div>
    <v-dialog v-model="dialog" max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn  v-on="on" tile small> Update </v-btn>
      </template>
      <v-card>
        <v-card-title> Update Form </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <div>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    v-model="psych.currentHealthCondition"
                    label="Current Health Condition"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="psych.historyOfMentalHealthCondition"
                    label="History of Mental Health Condition"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    v-model="psych.currentMentalHealthCondition"
                    label="Current Mental Health Condition"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <v-btn color="primary" @click="submitHandler">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import validateString from "@/_common/helpers/validateString.js";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");
const { mapGetters: mapAuthGetters } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    psych: {
      currentHealthCondition: "",
      historyOfMentalHealthCondition: "",
      currentMentalHealthCondition: "",
    },
  }),
  methods: {
    ...mapActions(["updatePsych"]),
    async submitHandler() {
      await this.updatePsych({
        personnelId: this.personnelId,
        data: this.psych,
      });

      this.dialog = false;
    },
    validateString(e) {
      validateString(e);
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    ...mapAuthGetters(["userRoles"]),
    personnelId() {
      return this.personnelDetails.personnel.id;
    },
  },
  mounted() {
    this.psych = this.personnelDetails.neuroPsych;
  },
};
</script>

<style></style>
