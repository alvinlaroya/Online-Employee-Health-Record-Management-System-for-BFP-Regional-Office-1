<template>
  <div>
    <v-row>
      <v-col class="py-0">
        <v-row>
          <v-col cols="6" md="4">
            <v-text-field
              v-model="search"
              dense
              solo
              rounded
              label="Search Case"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4" lg="2">
            <v-select
              v-model="selectedItem"
              :items="items"
              label="All"
              dense
              rounded
              solo
            ></v-select>
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
  }),
  computed: {
    ...mapGetters(['cases']),
    filteredItems() {
      if(this.cases === []) return []

      if (this.search === "" && this.selectedItem === null) {
        return this.sortCaseTitle(this.cases);
      } else {
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
        return this.sortCaseTitle(filteredItems);
      }
    },
  },

  created() {
    this.fetchAllCases();
    this.items = ["All"].concat(this.cases.map((item) => item.title));
  },
  methods: {
    ...mapActions(['getAllCases', 'getAllPersonnelsByCase']),
    async fetchAllCases() {
      await this.getAllCases();
    },
    open(item) {
      // this.$router.push("/case/" + title.toLowerCase());
      this.getAllPersonnelsByCase(item.title)
      this.$router.push({
        name: "navigation/case",
        params: {
          title: item.title,
          total: item.total,
        },
      });
    },
    sortCaseTitle(arr) {
      return arr.sort(function (a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    },
  },
};
</script>

<style></style>
