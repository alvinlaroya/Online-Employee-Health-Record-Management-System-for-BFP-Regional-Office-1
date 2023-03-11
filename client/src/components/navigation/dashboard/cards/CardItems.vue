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
        lg="2"
        v-for="(item, i) in filteredItems"
        :key="i"
      >
        <v-card
          height="125"
          max-width="305"
          class="d-flex flex-column align-center justify-center"
          rounded
          @click="open(item)"
        >
          <v-card-subtitle class="pb-0"> {{ item.title }} </v-card-subtitle>
          <v-card-title class="green--text text-h4">
            {{ item.total }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: "",
    selectedItem: null,
    items: [],
    cardItem: [
      {
        title: "Underweight",
        total: "1",
      },
      {
        title: "Normal",
        total: "33",
      },
      {
        title: "Overweight",
        total: "53",
      },
      {
        title: "Obese 1",
        total: "0",
      },
      {
        title: "Obese 2",
        total: "0",
      },
      {
        title: "Allergy/Hives",
        total: "10",
      },
      {
        title: "Arthritis",
        total: "4",
      },
      {
        title: "Asthma",
        total: "7",
      },
      {
        title: "Cancer",
        total: "0",
      },
      {
        title: "Chicken Pox",
        total: "58",
      },
      {
        title: "Cyst/Tumor",
        total: "10",
      },
      {
        title: "Diabetes",
        total: "4",
      },
      {
        title: "Epilepsy",
        total: "7",
      },
      {
        title: "Gall Stone",
        total: "0",
      },
      {
        title: "Goiter",
        total: "58",
      },
      {
        title: "Hepatitis",
        total: "10",
      },
      {
        title: "Hypertenstion",
        total: "4",
      },
      {
        title: "Heart Disease",
        total: "7",
      },
      {
        title: "Kidney Disease",
        total: "0",
      },
      {
        title: "Measles",
        total: "58",
      },
      {
        title: "Mumps",
        total: "10",
      },
      {
        title: "Pneumonia",
        total: "4",
      },
      {
        title: "Stroke",
        total: "7",
      },
      {
        title: "Tuberculosis",
        total: "0",
      },
      {
        title: "Vertigo",
        total: "58",
      },
    ],
  }),
  computed: {
    filteredItems() {
      if (this.search === "" && this.selectedItem === null) {
        return this.cardItem;
      } else {
        let filteredItems = this.cardItem;
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
        return filteredItems;
      }
    },
  },

  created() {
    this.items = ["All"].concat(this.cardItem.map((item) => item.title));
  },
  methods: {
    open(item) {
      // this.$router.push("/case/" + title.toLowerCase());
      this.$router.push({
        name: "navigation/case",
        params:{
          title: item.title.toLowerCase(),
          total: item.total
        }
      });
    },
  },
};
</script>

<style>
</style>