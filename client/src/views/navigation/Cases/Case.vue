<template>
  <v-container>
    {{ title }}
    <h2>{{ total }}</h2>
  </v-container>
</template>

<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapGetters } = createNamespacedHelpers("navigation");


export default {
  data: () => ({
    title: null,
    total: null,

    // cases:[
    //   
      // {
      //   title: "Underweight",
      //   total: "1",
      // },
      // {
      //   title: "Normal",
      //   total: "33",
      // },
      // {
      //   title: "Overweight",
      //   total: "53",
      // },
      // {
      //   title: "Obese 1",
      //   total: "0",
      // },
      // {
      //   title: "Obese 2",
      //   total: "0",
      // },
      // {
      //   title: "Allergy/Hives",
      //   total: "10",
      // },
      // {
      //   title: "Arthritis",
      //   total: "4",
      // },
      // {
      //   title: "Asthma",
      //   total: "7",
      // },
      // {
      //   title: "Cancer",
      //   total: "0",
      // },
      // {
      //   title: "Chicken Pox",
      //   total: "58",
      // },
      // {
      //   title: "Cyst/Tumor",
      //   total: "10",
      // },
      // {
      //   title: "Diabetes",
      //   total: "4",
      // },
      // {
      //   title: "Epilepsy",
      //   total: "7",
      // },
      // {
      //   title: "Gall Stone",
      //   total: "0",
      // },
      // {
      //   title: "Goiter",
      //   total: "58",
      // },
      // {
      //   title: "Hepatitis",
      //   total: "10",
      // },
      // {
      //   title: "Hypertenstion",
      //   total: "4",
      // },
      // {
      //   title: "Heart Disease",
      //   total: "7",
      // },
      // {
      //   title: "Kidney Disease",
      //   total: "0",
      // },
      // {
      //   title: "Measles",
      //   total: "58",
      // },
      // {
      //   title: "Mumps",
      //   total: "10",
      // },
      // {
      //   title: "Pneumonia",
      //   total: "4",
      // },
      // {
      //   title: "Stroke",
      //   total: "7",
      // },
      // {
      //   title: "Tuberculosis",
      //   total: "0",
      // },
      // {
      //   title: "Vertigo",
      //   total: "58",
      // },
    // ]
  }),
  mounted() {
    // Retrieve the title and total values from the route parameters
    this.title = this.$route.params.title;
    this.total = this.$route.params.total;
  },
  // computed: {
  //   ...mapGetters(["getCases"]),
  // },
};
</script>

<style>
</style>