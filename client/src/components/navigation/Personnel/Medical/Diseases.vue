<template>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-default-header
    hide-default-footer
    disable-pagination
    class="elevation-1 mt-5"
    dense
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Diseases",
          align: "start",
          value: "name",
          divider: true 
        },
        { text: "Yes/No", value: "yesNo", divider: true },
        { text: "More Dieases", value: "moreDisease", divider: true },
        { text: "Yes/No", value: "moreYesNo", divider: true },
      ],
      items: [
        {
          name: "Worn Eye Glass",
          moreDisease: "Worn Brace or Back Support",
          yesNo: "YES",
          moreYesNo: "NO",
        },
        {
          name: "Worn Hearing Aid",
          moreDisease: "Worn Artificial Eyes",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Had Syphillis",
          moreDisease: "Had Paralysis / Infantile",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Had Fracture",
          moreDisease: "Had Serum reaction",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Attempted Suicide",
          moreDisease: "Lived with person with Tubercolosis",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Had Foot trouble",
          moreDisease: "Had Stuttered or Stammered speech",
          yesNo: "yes",
          moreYesNo: "NO",
        },
        {
          name: "Diphtheria",
          moreDisease: "Gall bladder disease",
          yesNo: "NO",
          moreYesNo: "YES",
        },
        {
          name: "Rheumatic fever",
          moreDisease: "Frequent / Severe headache",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Measles",
          moreDisease: "Dizziness/ fainting spell",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Mumps",
          moreDisease: "Chronic / Frequent colds",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Chicken pox",
          moreDisease: "Palpitation / Pounding heart",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Whooping Cough",
          moreDisease: "Tumor , Cyst or Cancer",
          yesNo: "NO",
          moreYesNo: "YES",
        },
        {
          name: "Tuberculosis",
          moreDisease: "Frequent / paintful urination",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Pneumonia",
          moreDisease: "Sugar / Albumin in urine",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Asthma",
          moreDisease: "Recent  weight gain / weight loss",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Jaundice",
          moreDisease: "Bone / joint deformity",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Ear Discharge",
          moreDisease: "Loss of arm, finger , toe",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Goiter",
          moreDisease: "Pain in Shoulder",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Epilepsy",
          moreDisease: "Motion Sickness",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Veneral disease",
          moreDisease: "Shortness of breath",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Knocked-knee",
          moreDisease: "Stomach, Liver or intestinal disorder",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Depression",
          moreDisease: "Terrefying Nightmare",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Pyorrhea / bleeding gums",
          moreDisease: "Sleeping Trouble",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Arthritis",
          moreDisease: "Drug, Narcotic-habit or alcoholism",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Loss of memory",
          moreDisease: "Pain or pressure in the chest",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Nervousness",
          moreDisease: "Frequent or Severe Indigestion",
          yesNo: "NO",
          moreYesNo: "NO",
        },
        {
          name: "Sinusitis",
          moreDisease: "Piles or rectal disease",
          yesNo: "yes",
          moreYesNo: "NO",
        },
        {
          name: "Bedwetting",
          moreDisease: "Diarrhea",
          yesNo: "yes",
          moreYesNo: "NO",
        },
      ],
    };
  },
};
</script>

<style>
</style>