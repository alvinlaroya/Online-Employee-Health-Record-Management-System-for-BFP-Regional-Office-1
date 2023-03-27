<template>
  <div>
    <v-row>
      <h2 class="pb-3">FAMILY HISTORY</h2>
    </v-row>
    <v-data-table
      class="mt-5"
      :headers="headers"
      :items="items"
      dense
      hide-default-footer
      :pagination="false"
      :items-per-page="100"
    >
      <template v-slot:item.name="{ item }">
        <div
          v-if="
            item.name === 'Father' ||
            item.name === 'Mother' ||
            item.name === 'Brothers' ||
            item.name === 'Sisters' ||
            item.name === 'Spouse' ||
            item.name === 'Children'
          "
        >
          {{ item.name }}
          <ul>
            <li v-for="(person, index) in item.people" :key="index">
              {{ person.name }}
            </li>
          </ul>
        </div>
        <div v-else>
          {{ item.name }}
        </div>
      </template>
      <!-- age -->
      <template v-slot:item.age="{ item }">
        &nbsp;
        <div
          v-if="
            item.name === 'Father' ||
            item.name === 'Mother' ||
            item.name === 'Brothers' ||
            item.name === 'Sisters' ||
            item.name === 'Spouse' ||
            item.name === 'Children'
          "
        >
          <div v-for="(person, index) in item.people" :key="index">
            {{ person.age }}
          </div>
        </div>
        <div v-else>
          {{ item.age }}
        </div>
      </template>
      <!-- state of health -->
      <template v-slot:item.stateOfHealth="{ item }">
        &nbsp;
        <div
          v-if="
            item.name === 'Father' ||
            item.name === 'Mother' ||
            item.name === 'Brothers' ||
            item.name === 'Sisters' ||
            item.name === 'Spouse' ||
            item.name === 'Children'
          "
        >
          <div v-for="(person, index) in item.people" :key="index">
            {{ person.stateOfHealth }}
          </div>
        </div>
        <div v-else>
          {{ item.stateOfHealth }}
        </div>
      </template>
      <!-- cause of death -->
      <template v-slot:item.causeOfDeath="{ item }">
        &nbsp;
        <div
          v-if="
            item.name === 'Father' ||
            item.name === 'Mother' ||
            item.name === 'Brothers' ||
            item.name === 'Sisters' ||
            item.name === 'Spouse' ||
            item.name === 'Children'
          "
        >
          <div v-for="(person, index) in item.people" :key="index">
            {{ person.causeOfDeath }}
          </div>
        </div>
        <div v-else>
          {{ item.causeOfDeath }}
        </div>
      </template>
      <!-- diseases -->
      <template v-slot:item.disease="{ item }">
        &nbsp;
        <div
          v-if="
            item.name === 'Father' ||
            item.name === 'Mother' ||
            item.name === 'Brothers' ||
            item.name === 'Sisters' ||
            item.name === 'Spouse' ||
            item.name === 'Children'
          "
        >
          <div v-for="(person, index) in item.people" :key="index">
            {{ person.disease }}
          </div>
        </div>
        <div v-else>
          {{ item.disease }}
        </div>
      </template>
      <!-- yes -->
      <template v-slot:item.yes="{ item }">
        &nbsp;
        <div
          v-if="
            item.name === 'Father' ||
            item.name === 'Mother' ||
            item.name === 'Brothers' ||
            item.name === 'Sisters' ||
            item.name === 'Spouse' ||
            item.name === 'Children'
          "
        >
          <div v-for="(person, index) in item.people" :key="index">
            {{ person.yes }}
          </div>
        </div>
        <div v-else>
          {{ item.yes }}
        </div>
      </template>
      <!-- no -->
      <template v-slot:item.no="{ item }">
        &nbsp;
        <div
          v-if="
            item.name === 'Father' ||
            item.name === 'Mother' ||
            item.name === 'Brothers' ||
            item.name === 'Sisters' ||
            item.name === 'Spouse' ||
            item.name === 'Children'
          "
        >
          <div v-for="(person, index) in item.people" :key="index">
            {{ person.no }}
          </div>
        </div>
        <div v-else>
          {{ item.no }}
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: "Name", value: "name" },
      { text: "Age", value: "age" },
      { text: "State of Health", value: "stateOfHealth" },
      { text: "Cause of Death", value: "causeOfDeath" },
      { text: "Disease", value: "disease" },
      { text: "Yes", value: "yes" },
      { text: "No", value: "no" },
    ],
    items: [
      {
        name: "Father",
        age: "",
        people: [
          {
            name: "Father John",
            age: "200 ",
            stateOfHealth: "Dying",
            causeOfDeath: "flu",
            disease: "diabetes",
            yes: "",
            no: "No",
          },
        ],
      },
      {
        name: "Mother",

        people: [
          {
            name: "Mother Jane",
            age: "50 ",
            stateOfHealth: "Healthy",
            causeOfDeath: "Alive",
            disease: "NA",
            yes: "",
            no: "No",
          },
        ],
      },

      {
        name: "Brothers",
        age: "",
        people: [
          {
            name: "John",
            age: "20 ",
            stateOfHealth: "1",
            causeOfDeath: "1",
            disease: "1",
            yes: "1",
            no: "",
          },
          {
            name: "Jane",
            age: "21",
            stateOfHealth: "1",
            causeOfDeath: "1",
            disease: "1",
            yes: "1",
            no: "",
          },
          {
            name: "Joe",
            age: "22",
            stateOfHealth: "1",
            causeOfDeath: "1",
            disease: "1",
            yes: "1",
            no: "",
          },
        ],
      },
      {
        name: "Sisters",
        age: "",
        people: [
          {
            name: "Lisa",
            age: "20 ",
            stateOfHealth: "1",
            causeOfDeath: "1",
            disease: "1",
            yes: "1",
            no: "",
          },
          {
            name: "Jennie",
            age: "21",
            stateOfHealth: "1",
            causeOfDeath: "1",
            disease: "1",
            yes: "1",
            no: "",
          },
          {
            name: "Rose",
            age: "22",
            stateOfHealth: "1",
            causeOfDeath: "1",
            disease: "1",
            yes: "1",
            no: "",
          },
        ],
      },
      {
        name: "Spouse",
        age: "",
        people: [
          {
            name: "N/A ",
            age: "N/A ",
            stateOfHealth: "N/A",
            causeOfDeath: "N/A",
            disease: "N/A",
            yes: "",
            no: "No",
          },
        ],
      },
      {
        name: "Children",
        age: "",
        people: [
          {
            name: "N/A ",
            age: "N/A ",
            stateOfHealth: "N/A",
            causeOfDeath: "N/A",
            disease: "N/A",
            yes: "",
            no: "No",
          },
        ],
      },
    ],
  }),
};
</script>

<style>
</style>