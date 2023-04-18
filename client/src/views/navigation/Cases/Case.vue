<template>
  <v-container>
    <h1>Case: {{ title }}</h1>
    <h2>Total: {{ total }}</h2>
    <div class="mt-5">
      <v-card>
        <v-card-title>
          Personnels
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:item.mobile="{ item }">
            <span>+639{{ item.mobile }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="openDialog(item)">
              mdi-eye
            </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </div>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        width="80vw"
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-toolbar dense>
            <v-tabs v-model="tab">
              <v-tab
                v-for="(item, i) in Object.keys(component)"
                :key="i"
                @click="[(tab = i), (currentTab = item)]"
                >{{ item.replaceAll("-", " ") }}</v-tab
              >
            </v-tabs>
            <v-spacer></v-spacer>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <keep-alive>
            <component
              :is="component[currentTab]"
              :data="selectedItem"
              :dialogVisible="dialog"
            />
          </keep-alive>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");

// components
import ViewDetails from "@/components/navigation/Personnel/ViewDetails";
import MedicalProfile from "@/components/navigation/Personnel/MedicalProfile";
import DentalRecord from "@/components/navigation/Personnel/DentalRecord";
import PhysicalExam from "@/components/navigation/Personnel/PhysicalExam";
import PtNotes from "@/components/navigation/Personnel/PtNotes";
import NeuroPsych from "@/components/navigation/Personnel/NeuroPsych";

export default {
  components: {
    ViewDetails,
  },
  data: () => ({
    search: "",
    component: {
      "view-detail": ViewDetails,
      "medical-profile": MedicalProfile,
      "dental-record": DentalRecord,
      "physical-exam": PhysicalExam,
      "pt-notes": PtNotes,
      "neuro-psych": NeuroPsych,
    },
    tab: 0,
    currentTab: "view-detail",
    dialog: false,
    selectedItem: {},

    title: null,
    headers: [
      {
        text: "Account #",
        align: "start",
        sortable: false,
        value: "accountNo",
      },
      { text: "Rank", value: "rank" },
      { text: "First Name", value: "fname" },
      { text: "Middle Name", value: "mname" },
      { text: "Last Name", value: "lname" },
      { text: "Ext Name", value: "extName" },
      { text: "Unit", value: "unit" },
      { text: "Designation", value: "designation" },
      { text: "Mobile", value: "mobile" },
      { text: "Civil Status", value: "civilStatus" },
      { text: "Gender", value: "gender" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  methods: {
    ...mapActions(["viewDetails", "getAllPersonnelsByCase"]),
    async openDialog(item) {
      await this.viewDetails(item.personnelId);
      this.tab = 0;
      this.currentTab = "view-detail";
      this.selectedItem = item;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
  mounted() {
    // Retrieve the title and total values from the route parameters
    this.title = this.$route.params.title;
    this.getAllPersonnelsByCase(this.$route.params.title);
  },
  computed: {
    ...mapGetters(["personnelCases"]),
    items() {
      return this.personnelCases;
    },
    total() {
      return this.personnelCases.length;
    },
  },
};
</script>

<style></style>
