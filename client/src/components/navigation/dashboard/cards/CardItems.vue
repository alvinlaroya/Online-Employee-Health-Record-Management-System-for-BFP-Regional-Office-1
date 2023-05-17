<template>
  <div>
    <v-row>
      <v-col class="">
        <v-row dense >
          <v-col  cols="6" md="4" align-self="center">
            <v-text-field
              v-model="search"
              dense
              solo
              rounded
              label="Search Case"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4" lg="2" align-self="center">
            <v-select
              v-model="selectedItem"
              :items="items"
              label="All"
              dense
              rounded
              solo
            ></v-select>
          </v-col>
          <v-col cols="6" md="4" lg="2" >
            <v-btn  @click="sortDescending" class="mr-1">
              <v-icon small> mdi-arrow-down </v-icon>
            </v-btn>
            <v-btn @click="sortAscending">
              <v-icon small > mdi-arrow-up </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="6"
        sm="4"
        md="4"
        lg="3"
        v-for="(item, i) in filteredItems"
        :key="i"
      >
        <v-card
          height="125"
          class="d-flex flex-column align-center justify-center"
          rounded
          @click="open(item)"
        >
          <v-card-subtitle class="pb-0"> {{ item.title }} </v-card-subtitle>
          <v-card-title class="green--text text-h3">
            {{ item.total }}
            
          </v-card-title>
        </v-card>
        
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    search: "",
    selectedItem: null,
    items: [],
    cardItem: [],
    sortDirection: "asc", // "asc" for ascending, "desc" for descending
  }),
  computed: {
    ...mapGetters(["cases"]),
    filteredItems() {
      if (this.cases === []) return [];

      let filteredItems = this.cases;
      const search = this.search.toLowerCase();
      if (search !== "") {
        filteredItems = filteredItems.filter((item) =>
          item.title.toLowerCase().includes(search)
        );
      }
      if (this.selectedItem !== null && this.selectedItem !== "All") {
        filteredItems = filteredItems.filter(
          (item) => item.title === this.selectedItem
        );
      }

      return this.sortItems(filteredItems);
    },
  },

  created() {
    this.fetchAllCases();
    this.items = ["All"].concat(this.cases.map((item) => item.title));
  },
  methods: {
    ...mapActions(["getAllCases", "getAllPersonnelsByCase"]),
    async fetchAllCases() {
      await this.getAllCases();
    },
    open(item) {
      this.getAllPersonnelsByCase(item.title);
      this.$router.push({
        name: "navigation/case",
        params: {
          title: item.title,
          total: item.total,
        },
      });
    },
    sortItems(arr) {
      const direction = this.sortDirection === "asc" ? 1 : -1;
      return arr.sort(function (a, b) {
        return direction * (a.total - b.total);
      });
    },
    sortAscending() {
      this.sortDirection = "asc";
    },
    sortDescending() {
      this.sortDirection = "desc";
    },
  },
};
</script>

<style></style>
