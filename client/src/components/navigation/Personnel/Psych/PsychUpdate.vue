<template>
  <div>
    <v-dialog v-model="dialog" max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" tile small> Update </v-btn>
      </template>
      <v-card>
        <v-card-title> Update Form </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <div>
              <v-row>
                <v-col v-for="(neuro, index) in neuroPsych" :key="index">
                  <span>{{ neuro.title }}</span>
                  <v-form>
                    <v-text-field

                      v-for="(item, i) in neuro.items"
                      :key="i"
                      :label="item.name"
                      dense
                    ></v-text-field>
                  </v-form>
                </v-col>
              </v-row>
            </div>
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import validateString from "@/_common/helpers/validateString.js";
export default {
  data: () => ({
    dialog: false,
    menu: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    // healthCondition: [
    //   {
    //     title: 'Current Health',
    //     name: "disease",
    //   },
    //   {
    //     name: "disease1",
    //   },
    // ],
    // historyMentalHealth: [
    //   {
    //     title: 'History of Mental Health',
    //     name: "disease",
    //   },
    //   {
    //     name: "disease1",
    //   },
    // ],
    // currentMentalHealth: [
    //   {
    //     title: 'Current Mental Health',
    //     name: "disease",
    //   },
    //   {
    //     name: "disease1",
    //   },
    // ],

    neuroPsych: [
      {
        title: "Current Health Condition",
        items: [
          { name: "" },
          { name: "" },
          { name: "" },
        ],
      },
      {
        title: "History of Mental Health Condition",
        items: [
          { name: "" },
          { name: "" },
          { name: "" },
        ],
      },
      {
        title: "Current Mental Health Condition",
        items: [
          { name: "" },
          { name: "" },
          { name: "" },
        ],
      },
    ],
  }),
  methods: {
    submit() {
      console.log("submitted");
    },
    validateString(e) {
      validateString(e);
    },
  },
};
</script>

<style>
</style>