<template>
  <div>
    <v-container v-for="(item, i) in items" :key="i">
      <v-row>
        <h2 class="pb-3">PERSONAL HISTORY</h2>
      </v-row>
      <v-row>
        <strong class="pr-5">OB History: </strong>
        <span class="pr-5"
          >Have you been Pregnant ?
          <strong class="text-decoration-underline">{{
            item.pregnant
          }}</strong></span
        >
        <span class="pr-5"
          >How many times ?
          <strong class="text-decoration-underline">{{
            item.howManyTimes
          }}</strong></span
        >
      </v-row>
      <v-row>
        <span class="pr-5"
          >How many Children do you have ?
          <strong class="text-decoration-underline">{{
            item.childrenCount
          }}</strong></span
        >
        <span class="pr-5"
          >Have you have an Abortion ?
          <strong class="text-decoration-underline">
            {{ item.abortionCount }}</strong
          ></span
        >
        <span class="pr-5"
          >if yes, quantify
          <strong class="text-decoration-underline">{{
            item.ifAbortionCount
          }}</strong></span
        >
      </v-row>
    </v-container>
    <Diseases />
  </div>
</template>

<script>
import Diseases from "@/components/navigation/Personnel/Medical/Diseases";
export default {
  components: {
    Diseases,
  },
  data: () => ({
    items: [
      {
        pregnant: "No",
        howManyTimes: "0",
        childrenCount: "0",
        abortionCount: "0",
        ifAbortionCount: "0",
      },
    ],
  }),
};
</script>

<style>
</style>