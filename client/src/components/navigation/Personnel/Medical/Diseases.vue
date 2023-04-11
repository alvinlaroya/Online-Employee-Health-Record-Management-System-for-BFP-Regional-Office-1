<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      hide-default-header
      hide-default-footer
      :items-per-page="100"
      class="elevation-1 mt-5"
      dense
    ></v-data-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");
export default {
  data: () => ({
    headers: [
      {
        text: "Diseases",
        align: "start",
        value: "name",
        divider: true,
      },
      { text: "Answer", value: "Answer", divider: true },
      { text: "More Dieases", value: "moreDisease", divider: true },
      { text: "Answer2", value: "Answer2", divider: true },
    ],
    items: []
  }),
  computed: {
    ...mapGetters(["personnelDetails"]),
    personalHistory() {
      return this.personnelDetails.medicalRecord.medicalPersonalHistory
    },
  },
  watch: {
    personnelDetails: {
      handler(val){
        this.items = [
          {
            name: "Worn Eye Glass",
            moreDisease: "Worn Brace or Back Support",
            Answer: this.personalHistory.wornEyeglasses ? 'Yes' : 'No',
            Answer2: this.personalHistory.wornBrace ? 'Yes' : 'No',
          },
          {
            name: "Worn Hearing Aid",
            moreDisease: "Worn Artificial Eyes",
            Answer: this.personalHistory.wornHearingAid ? 'Yes' : 'No',
            Answer2: this.personalHistory.wornArtificialEyes ? 'Yes' : 'No',
          },
          {
            name: "Had Syphillis",
            moreDisease: "Had Paralysis / Infantile",
            Answer: this.personalHistory.syphillis ? 'Yes' : 'No',
            Answer2: this.personalHistory.paralysis ? 'Yes' : 'No',
          },
          {
            name: "Had Fracture",
            moreDisease: "Had Serum reaction",
            Answer: this.personalHistory.fracture ? 'Yes' : 'No',
            Answer2: this.personalHistory.serumReaction ? 'Yes' : 'No',
          },
          {
            name: "Attempted Suicide",
            moreDisease: "Lived with person with Tubercolosis",
            Answer: this.personalHistory.suicide ? 'Yes' : 'No',
            Answer2: this.personalHistory.liveWithTuberculosis ? 'Yes' : 'No',
          },
          {
            name: "Had Foot trouble",
            moreDisease: "Had Stuttered or Stammered speech",
            Answer: this.personalHistory.footTrouble ? 'Yes' : 'No',
            Answer2: this.personalHistory.stuttered ? 'Yes' : 'No',
          },
          {
            name: "Diphtheria",
            moreDisease: "Gall bladder disease",
            Answer: this.personalHistory.diphtheria ? 'Yes' : 'No',
            Answer2: this.personalHistory.gallBladder ? 'Yes' : 'No',
          },
          {
            name: "Rheumatic fever",
            moreDisease: "Frequent / Severe headache",
            Answer: this.personalHistory.rheumaticFever ? 'Yes' : 'No',
            Answer2: this.personalHistory.severeHeadache ? 'Yes' : 'No',
          },
          {
            name: "Measles",
            moreDisease: "Dizziness/ fainting spell",
            Answer: this.personalHistory.measles ? 'Yes' : 'No',
            Answer2: this.personalHistory.dizziness ? 'Yes' : 'No',
          },
          {
            name: "Mumps",
            moreDisease: "Chronic / Frequent colds",
            Answer: this.personalHistory.mumps ? 'Yes' : 'No',
            Answer2: this.personalHistory.chronic ? 'Yes' : 'No',
          },
          {
            name: "Chicken pox",
            moreDisease: "Palpitation / Pounding heart",
            Answer: this.personalHistory.chickenPox ? 'Yes' : 'No',
            Answer2: this.personalHistory.palpitation ? 'Yes' : 'No',
          },
          {
            name: "Whooping Cough",
            moreDisease: "Tumor , Cyst or Cancer",
            Answer: this.personalHistory.whoopingCough ? 'Yes' : 'No',
            Answer2: this.personalHistory.cyst ? 'Yes' : 'No',
          },
          {
            name: "Tuberculosis",
            moreDisease: "Frequent / paintful urination",
            Answer: this.personalHistory.tuberculosis ? 'Yes' : 'No',
            Answer2: this.personalHistory.painfulUrination ? 'Yes' : 'No',
          },
          {
            name: "Pneumonia",
            moreDisease: "Sugar / Albumin in urine",
            Answer: this.personalHistory.pneumonia ? 'Yes' : 'No',
            Answer2: this.personalHistory.albuminUrine ? 'Yes' : 'No',
          },
          {
            name: "Asthma",
            moreDisease: "Recent  weight gain / weight loss",
            Answer: this.personalHistory.asthma ? 'Yes' : 'No',
            Answer2: this.personalHistory.weightLoss ? 'Yes' : 'No',
          },
          {
            name: "Jaundice",
            moreDisease: "Bone / joint deformity",
            Answer: this.personalHistory.jaundice ? 'Yes' : 'No',
            Answer2: this.personalHistory.jointDeformity ? 'Yes' : 'No',
          },
          {
            name: "Ear Discharge",
            moreDisease: "Loss of arm, finger , toe",
            Answer: this.personalHistory.earDischarge ? 'Yes' : 'No',
            Answer2: this.personalHistory.lossOfArm ? 'Yes' : 'No',
          },
          {
            name: "Goiter",
            moreDisease: "Pain in Shoulder",
            Answer: this.personalHistory.goiter ? 'Yes' : 'No',
            Answer2: this.personalHistory.painInShoulder ? 'Yes' : 'No',
          },
          {
            name: "Epilepsy",
            moreDisease: "Motion Sickness",
            Answer: this.personalHistory.epilepsy ? 'Yes' : 'No',
            Answer2: this.personalHistory.motionSickness ? 'Yes' : 'No',
          },
          {
            name: "Veneral disease",
            moreDisease: "Shortness of breath",
            Answer: this.personalHistory.veneralDisease ? 'Yes' : 'No',
            Answer2: this.personalHistory.shortnessOfBreath ? 'Yes' : 'No',
          },
          {
            name: "Knocked-knee",
            moreDisease: "Stomach, Liver or intestinal disorder",
            Answer: this.personalHistory.knockedKnee ? 'Yes' : 'No',
            Answer2: this.personalHistory.liverDisorder ? 'Yes' : 'No',
          },
          {
            name: "Depression",
            moreDisease: "Terrefying Nightmare",
            Answer: this.personalHistory.depression ? 'Yes' : 'No',
            Answer2: this.personalHistory.terrifyingNightmare ? 'Yes' : 'No',
          },
          {
            name: "Pyorrhea / bleeding gums",
            moreDisease: "Sleeping Trouble",
            Answer: this.personalHistory.pyorrhea ? 'Yes' : 'No',
            Answer2: this.personalHistory.sleepingTrouble ? 'Yes' : 'No',
          },
          {
            name: "Arthritis",
            moreDisease: "Drug, Narcotic-habit or alcoholism",
            Answer: this.personalHistory.arthritis ? 'Yes' : 'No',
            Answer2: this.personalHistory.alcoholism ? 'Yes' : 'No',
          },
          {
            name: "Loss of memory",
            moreDisease: "Pain or pressure in the chest",
            Answer: this.personalHistory.lossOfMemory ? 'Yes' : 'No',
            Answer2: this.personalHistory.painInTheChest ? 'Yes' : 'No',
          },
          {
            name: "Nervousness",
            moreDisease: "Frequent or Severe Indigestion",
            Answer: this.personalHistory.nervousness ? 'Yes' : 'No',
            Answer2: this.personalHistory.severeIndigestion ? 'Yes' : 'No',
          },
          {
            name: "Sinusitis",
            moreDisease: "Piles or rectal disease",
            Answer: this.personalHistory.sinusitis ? 'Yes' : 'No',
            Answer2: this.personalHistory.rectalDisease ? 'Yes' : 'No',
          },
          {
            name: "Bedwetting",
            moreDisease: "Diarrhea",
            Answer: this.personalHistory.bedWetting ? 'Yes' : 'No',
            Answer2: this.personalHistory.diarrhea ? 'Yes' : 'No',
          },
        ];
      },
      deep: true
    }
  },
  created() {
    this.items = [
      {
        name: "Worn Eye Glass",
        moreDisease: "Worn Brace or Back Support",
        Answer: this.personalHistory.wornEyeglasses ? 'Yes' : 'No',
        Answer2: this.personalHistory.wornBrace ? 'Yes' : 'No',
      },
      {
        name: "Worn Hearing Aid",
        moreDisease: "Worn Artificial Eyes",
        Answer: this.personalHistory.wornHearingAid ? 'Yes' : 'No',
        Answer2: this.personalHistory.wornArtificialEyes ? 'Yes' : 'No',
      },
      {
        name: "Had Syphillis",
        moreDisease: "Had Paralysis / Infantile",
        Answer: this.personalHistory.syphillis ? 'Yes' : 'No',
        Answer2: this.personalHistory.paralysis ? 'Yes' : 'No',
      },
      {
        name: "Had Fracture",
        moreDisease: "Had Serum reaction",
        Answer: this.personalHistory.fracture ? 'Yes' : 'No',
        Answer2: this.personalHistory.serumReaction ? 'Yes' : 'No',
      },
      {
        name: "Attempted Suicide",
        moreDisease: "Lived with person with Tubercolosis",
        Answer: this.personalHistory.suicide ? 'Yes' : 'No',
        Answer2: this.personalHistory.liveWithTuberculosis ? 'Yes' : 'No',
      },
      {
        name: "Had Foot trouble",
        moreDisease: "Had Stuttered or Stammered speech",
        Answer: this.personalHistory.footTrouble ? 'Yes' : 'No',
        Answer2: this.personalHistory.stuttered ? 'Yes' : 'No',
      },
      {
        name: "Diphtheria",
        moreDisease: "Gall bladder disease",
        Answer: this.personalHistory.diphtheria ? 'Yes' : 'No',
        Answer2: this.personalHistory.gallBladder ? 'Yes' : 'No',
      },
      {
        name: "Rheumatic fever",
        moreDisease: "Frequent / Severe headache",
        Answer: this.personalHistory.rheumaticFever ? 'Yes' : 'No',
        Answer2: this.personalHistory.severeHeadache ? 'Yes' : 'No',
      },
      {
        name: "Measles",
        moreDisease: "Dizziness/ fainting spell",
        Answer: this.personalHistory.measles ? 'Yes' : 'No',
        Answer2: this.personalHistory.dizziness ? 'Yes' : 'No',
      },
      {
        name: "Mumps",
        moreDisease: "Chronic / Frequent colds",
        Answer: this.personalHistory.mumps ? 'Yes' : 'No',
        Answer2: this.personalHistory.chronic ? 'Yes' : 'No',
      },
      {
        name: "Chicken pox",
        moreDisease: "Palpitation / Pounding heart",
        Answer: this.personalHistory.chickenPox ? 'Yes' : 'No',
        Answer2: this.personalHistory.palpitation ? 'Yes' : 'No',
      },
      {
        name: "Whooping Cough",
        moreDisease: "Tumor , Cyst or Cancer",
        Answer: this.personalHistory.whoopingCough ? 'Yes' : 'No',
        Answer2: this.personalHistory.cyst ? 'Yes' : 'No',
      },
      {
        name: "Tuberculosis",
        moreDisease: "Frequent / paintful urination",
        Answer: this.personalHistory.tuberculosis ? 'Yes' : 'No',
        Answer2: this.personalHistory.painfulUrination ? 'Yes' : 'No',
      },
      {
        name: "Pneumonia",
        moreDisease: "Sugar / Albumin in urine",
        Answer: this.personalHistory.pneumonia ? 'Yes' : 'No',
        Answer2: this.personalHistory.albuminUrine ? 'Yes' : 'No',
      },
      {
        name: "Asthma",
        moreDisease: "Recent  weight gain / weight loss",
        Answer: this.personalHistory.asthma ? 'Yes' : 'No',
        Answer2: this.personalHistory.weightLoss ? 'Yes' : 'No',
      },
      {
        name: "Jaundice",
        moreDisease: "Bone / joint deformity",
        Answer: this.personalHistory.jaundice ? 'Yes' : 'No',
        Answer2: this.personalHistory.jointDeformity ? 'Yes' : 'No',
      },
      {
        name: "Ear Discharge",
        moreDisease: "Loss of arm, finger , toe",
        Answer: this.personalHistory.earDischarge ? 'Yes' : 'No',
        Answer2: this.personalHistory.lossOfArm ? 'Yes' : 'No',
      },
      {
        name: "Goiter",
        moreDisease: "Pain in Shoulder",
        Answer: this.personalHistory.goiter ? 'Yes' : 'No',
        Answer2: this.personalHistory.painInShoulder ? 'Yes' : 'No',
      },
      {
        name: "Epilepsy",
        moreDisease: "Motion Sickness",
        Answer: this.personalHistory.epilepsy ? 'Yes' : 'No',
        Answer2: this.personalHistory.motionSickness ? 'Yes' : 'No',
      },
      {
        name: "Veneral disease",
        moreDisease: "Shortness of breath",
        Answer: this.personalHistory.veneralDisease ? 'Yes' : 'No',
        Answer2: this.personalHistory.shortnessOfBreath ? 'Yes' : 'No',
      },
      {
        name: "Knocked-knee",
        moreDisease: "Stomach, Liver or intestinal disorder",
        Answer: this.personalHistory.knockedKnee ? 'Yes' : 'No',
        Answer2: this.personalHistory.liverDisorder ? 'Yes' : 'No',
      },
      {
        name: "Depression",
        moreDisease: "Terrefying Nightmare",
        Answer: this.personalHistory.depression ? 'Yes' : 'No',
        Answer2: this.personalHistory.terrifyingNightmare ? 'Yes' : 'No',
      },
      {
        name: "Pyorrhea / bleeding gums",
        moreDisease: "Sleeping Trouble",
        Answer: this.personalHistory.pyorrhea ? 'Yes' : 'No',
        Answer2: this.personalHistory.sleepingTrouble ? 'Yes' : 'No',
      },
      {
        name: "Arthritis",
        moreDisease: "Drug, Narcotic-habit or alcoholism",
        Answer: this.personalHistory.arthritis ? 'Yes' : 'No',
        Answer2: this.personalHistory.alcoholism ? 'Yes' : 'No',
      },
      {
        name: "Loss of memory",
        moreDisease: "Pain or pressure in the chest",
        Answer: this.personalHistory.lossOfMemory ? 'Yes' : 'No',
        Answer2: this.personalHistory.painInTheChest ? 'Yes' : 'No',
      },
      {
        name: "Nervousness",
        moreDisease: "Frequent or Severe Indigestion",
        Answer: this.personalHistory.nervousness ? 'Yes' : 'No',
        Answer2: this.personalHistory.severeIndigestion ? 'Yes' : 'No',
      },
      {
        name: "Sinusitis",
        moreDisease: "Piles or rectal disease",
        Answer: this.personalHistory.sinusitis ? 'Yes' : 'No',
        Answer2: this.personalHistory.rectalDisease ? 'Yes' : 'No',
      },
      {
        name: "Bedwetting",
        moreDisease: "Diarrhea",
        Answer: this.personalHistory.bedWetting ? 'Yes' : 'No',
        Answer2: this.personalHistory.diarrhea ? 'Yes' : 'No',
      },
    ];
  },

};
</script>

<style>
</style>