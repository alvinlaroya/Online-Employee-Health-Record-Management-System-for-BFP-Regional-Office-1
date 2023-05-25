<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="6" md="4" align-self="center">
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
      <v-col cols="auto">
        <v-btn @click="sortDescending" class="mr-1">
          <v-icon small> mdi-arrow-down </v-icon>
        </v-btn>
        <v-btn @click="sortAscending">
          <v-icon small> mdi-arrow-up </v-icon>
        </v-btn>
      </v-col>

      <v-col cols="1">
        <v-menu
          ref="menuFrom"
          v-model="menuFrom"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="fromDate"
              label="From"
              readonly
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="fromDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menuFrom = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.menuFrom.save(fromDate)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="auto" style="padding-top: 10px"><div>~</div></v-col>
      <v-col cols="1">
        <v-menu
          ref="menuTo"
          v-model="menuTo"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="toDate"
              label="To"
              readonly
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="toDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menuTo = false"> Cancel </v-btn>
            <v-btn
              text
              color="primary"
              @click="[$refs.menuTo.save(toDate), filterHandler()]"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <v-row v-if="!loading">
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
    <v-row v-else>
      <v-col cols="12">
        <h1 class="mx-auto">Loading</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    loading: false,
    search: "",
    selectedItem: null,
    items: [],
    cardItem: [],
    sortDirection: "asc", // "asc" for ascending, "desc" for descending

    menuFrom: false,
    menuTo: false,
    fromDate: "",
    toDate: "",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
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

      return this.sortItems(filteredItems).reverse();
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
    filterHandler() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style></style>
