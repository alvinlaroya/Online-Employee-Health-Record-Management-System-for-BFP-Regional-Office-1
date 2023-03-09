<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>Dashboard</h1>
      </v-col>
      
    </v-row>
    
    <CardItems/>
  </v-container>
</template> 

<script>
import CardItems from "@/components/navigation/dashboard/cards/CardItems";
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapGettersAuth } = createNamespacedHelpers("auth");
const { mapGetters: mapGettersNavigation, mapActions: mapActionsNavigation } =
  createNamespacedHelpers("navigation");

export default {
  components:{
    CardItems
  },
  data: () => ({
    name: "",
    
  }),

  computed: {
    ...mapGettersAuth(["currentUser"]),
    ...mapGettersNavigation([
      "pendingClearance",
      "issuedClearance",
      "badges",
      "issuedClearanceCount",
      "relatedCase",
      "hasRelatedCase",
    ]),

  },
};
</script>

<style>
@import "../../assets/css/style.css";
</style>
