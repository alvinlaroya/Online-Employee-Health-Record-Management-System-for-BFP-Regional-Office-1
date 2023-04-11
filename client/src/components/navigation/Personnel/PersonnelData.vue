<template>
  <div class="w-100">
    <v-data-table :headers="headers" :items="personnels" :items-per-page="20" :search="search"
      class="elevation-1 no-wrap">
      <template v-slot:item.photo="{ item }">
        <v-avatar size="40">
          <img :src="renderPhoto(item.personnelImage)" alt="John" style="object-fit: cover;">
        </v-avatar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-icon small class="mr-5 cursor-pointer" @click="openDialog(item)">mdi-file-eye-outline</v-icon>
            <v-icon small v-on="on">mdi-dots-vertical</v-icon>
          </template>
          <v-list dense>
            <v-list-item v-for="(option, i) in options" :key="option.title" @click="open(item, option, i)">
              <v-list-item-title>
                {{ option.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <v-row justify="center">
      <v-dialog v-model="dialog" width="70vw" transition="dialog-bottom-transition">
        <v-card style="min-height: 80vh">
          <v-toolbar dense>
            <v-tabs v-model="tab">
              <v-tab v-for="(item, i) in Object.keys(component)" :key="i" @click="[(tab = i), (currentTab = item)]">{{
                item.replaceAll("-", " ") }}</v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <keep-alive>
            <component :is="component[currentTab]" :data="selectedItem" :dialogVisible="dialog" />
          </keep-alive>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("navigation");

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
    component: {
      "view-detail": ViewDetails,
      "medical-profile": MedicalProfile,
      "dental-record": DentalRecord,
      "physical-exam": PhysicalExam,
      "pt-notes": PtNotes,
      "neuro-psych": NeuroPsych,
    },
    tab: 0,
    /* tabs: [
      "view-detail",
      "medical-profile",
      "dental-record",
      "physical-exam",
      "pt-notes",
      "neuro-psych",
    ], */
    currentTab: "view-detail",
    dialog: false,
    selectedItem: {},
    headers: [
      {
        text: "Photo",
        value: "photo",
        align: "start",
        sortable: false,
      },
      {
        text: "Account #",
        value: "accountNo",
        align: "start",
        sortable: false,
      },
      { text: "Rank", value: "rank" },
      { text: "Last Name", value: "lname" },
      { text: "First Name", value: "fname" },
      { text: "Middle Name", value: "mname" },

      { text: "Ext Name", value: "extName" },
      { text: "Unit Assignment", value: "unit" },
      { text: "Designation", value: "designation" },
      { text: "Mobile", value: "mobile" },
      { text: "Civil Status", value: "civilStatus" },

      { text: "Action", value: "action" },
    ],
    options: [
      { title: "Medical Profile" },
      { title: "Dental Record" },
      { title: "Physical Exam" },
      { title: "PT Notes" },
      { title: "Neuro Psych" },
    ],
  }),
  methods: {
    ...mapActions(["getPersonnels", "viewDetails"]),
    renderPhoto(src) {
      if(src) return `http://localhost:8000/${src}`

      return "https://png.pngitem.com/pimgs/s/137-1370051_avatar-generic-avatar-hd-png-download.png"
    },
    async open(item, option, i) {
      await this.viewDetails(item.id);
      this.tab = i + 1;
      this.dialog = true;
      this.selectedItem = item;
      const titleLowerCase = option.title.toLowerCase();
      const kebebCase = titleLowerCase.replaceAll(" ", "-"); // setting default tab in dialog
      this.currentTab = kebebCase;
    },
    async openDialog(item) {
      await this.viewDetails(item.id);
      this.tab = 0;
      this.currentTab = "view-detail";
      this.selectedItem = item;
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
  computed: {
    ...mapGetters(["personnels"]),
  },
  created() {
    this.getPersonnels({
      name: "Alvin",
    });
  },
  props: ["search"],
};
</script>

<style>
.no-wrap th,
td {
  white-space: nowrap;
}

.cursor-pointer {
  cursor: pointer;
}

.w-100 {
  width: 100%;
}

.w-40 {
  width: 200px;
}
</style>
