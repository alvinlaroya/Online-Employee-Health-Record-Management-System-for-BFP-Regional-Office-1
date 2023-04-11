<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      dense
      hide-default-header
      hide-default-footer
      :disable-pagination="true"
      class="elevation-1"
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
        text: "label",
        value: "label",
        divider: true,
      },
      {
        text: "answer",
        value: "answer",
        divider: true,
      },
      {
        text: "label2",
        value: "label2",
        divider: true,
      },
      {
        text: "answer2",
        value: "answer2",
        divider: true,
      },
    ],
    items: [],
  }),
  watch: {
    personnelDetails: {
      handler(val) {
        this.items = [
          {
            label: "HEIGHT (bare Foot) ",
            label2: "UPPER EXTREMITIES ",
            answer: this.physicalExam.height ? this.physicalExam.height : "",
            answer2: this.physicalExam.upperExtremities
              ? this.physicalExam.upperExtremities
              : "",
          },
          {
            label: "WEIGHT (Stripped) in kilos ",
            label2: "LOWER EXTREMITIES ",
            answer: this.physicalExam.weight ? this.physicalExam.weight : "",
            answer2: this.physicalExam.lowerExtremities
              ? this.physicalExam.lowerExtremities
              : "",
          },
          {
            label: "BUILD ",
            label2: "SPINE & MSK SYSTEM",
            answer: this.physicalExam.build ? this.physicalExam.build : "",
            answer2: this.physicalExam.spineAndMskSystem
              ? this.physicalExam.spineAndMskSystem
              : "",
          },
          {
            label: "SKIN ",
            label2: "PELVIC",
            answer: this.physicalExam.skin ? this.physicalExam.skin : "",
            answer2: this.physicalExam.pelvic ? this.physicalExam.pelvic : "",
          },
          {
            label: "COLOR OF EYES ",
            label2: "PSYCHIATRIC",
            answer: this.physicalExam.colorOfEyes
              ? this.physicalExam.colorOfEyes
              : "",
            answer2: this.physicalExam.psychiatric
              ? this.physicalExam.psychiatric
              : "",
          },
          {
            label: "COLOR OF HAIR ",
            label2: "BLOOD PRESSURE",
            answer: this.physicalExam.colorOfHair
              ? this.physicalExam.colorOfHair
              : "",
            answer2: this.physicalExam.bloodPressure
              ? this.physicalExam.bloodPressure
              : "",
          },
          {
            label: " HEAD & FACE ",
            label2: "CARDIAC RATE",
            answer: this.physicalExam.headAndFace
              ? this.physicalExam.headAndFace
              : "",
            answer2: this.physicalExam.cardiacRate
              ? this.physicalExam.cardiacRate
              : "",
          },
          {
            label: "NECK ",
            label2: "DRUG TEST",
            answer: this.physicalExam.neck ? this.physicalExam.neck : "",
            answer2: this.physicalExam.drugTest
              ? this.physicalExam.drugTest
              : "",
          },
          {
            label: "NOSE & AND SINUSES ",
            label2: "URINALYSIS",
            answer: this.physicalExam.noseAndSinuses
              ? this.physicalExam.noseAndSinuses
              : "",
            answer2: this.physicalExam.urinalysis
              ? this.physicalExam.urinalysis
              : "",
          },
          {
            label: "MOUTH & THROAT ",
            label2: "FBS",
            answer: this.physicalExam.mouthAndThroat
              ? this.physicalExam.mouthAndThroat
              : "",
            answer2: this.physicalExam.fbs ? this.physicalExam.fbs : "",
          },
          {
            label: "EARS & EARDRUMS ",
            label2: "Hepa-B Screening",
            answer: this.physicalExam.earsAndEardrums
              ? this.physicalExam.earsAndEardrums
              : "",
            answer2: this.physicalExam.hepaScreening
              ? this.physicalExam.hepaScreening
              : "",
          },
          {
            label: "WHISPER VOICE TEST ",
            label2: "CBC",
            answer: this.physicalExam.whisperVoiceTest
              ? this.physicalExam.whisperVoiceTest
              : "",
            answer2: this.physicalExam.cbc ? this.physicalExam.cbc : "",
          },
          {
            label: "EYES / PUPILS ",
            label2: "BLOOD TYPE",
            answer: this.physicalExam.eyesOrPupils
              ? this.physicalExam.eyesOrPupils
              : "",
            answer2: this.physicalExam.bloodType
              ? this.physicalExam.bloodType
              : "",
          },
          {
            label: "VISION ",
            label2: "PREGNANCY TEST",
            answer: this.physicalExam.vision ? this.physicalExam.vision : "",
            answer2: this.physicalExam.pregnancyTest
              ? this.physicalExam.pregnancyTest
              : "",
          },
          {
            label: "COLOR VISION ",
            label2: "CHOLESTEROL",
            answer: this.physicalExam.colorVision
              ? this.physicalExam.colorVision
              : "",
            answer2: this.physicalExam.cholesterol
              ? this.physicalExam.cholesterol
              : "",
          },
          {
            label: "HEART ",
            label2: "ECG",
            answer: this.physicalExam.heart ? this.physicalExam.heart : "",
            answer2: this.physicalExam.ecg ? this.physicalExam.ecg : "",
          },
          {
            label: "VASCULAR SYSTEM ",
            label2: "CHEST X-RAY",
            answer: this.physicalExam.vascularSystem
              ? this.physicalExam.vascularSystem
              : "",
            answer2: this.physicalExam.chestXray
              ? this.physicalExam.chestXray
              : "",
          },
          {
            label: "LUNGS AND CHEST ",
            answer: this.physicalExam.lungsAndChest
              ? this.physicalExam.lungsAndChest
              : "",
          },
          {
            label: "ABDOMEN VISCERA ",
            answer: this.physicalExam.abdomenViscera
              ? this.physicalExam.abdomenViscera
              : "",
          },
          {
            label: "ANUS AND RECTUM ",
            answer: this.physicalExam.anusAndRectum
              ? this.physicalExam.anusAndRectum
              : "",
          },
          {
            label: "GENITAL ",
            answer: this.physicalExam.genital ? this.physicalExam.genital : "",
          },
        ];
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    physicalExam() {
      return this.personnelDetails.physicalExamination;
    },
  },
  created() {
    this.items = [
          {
            label: "HEIGHT (bare Foot) ",
            label2: "UPPER EXTREMITIES ",
            answer: this.physicalExam.height ? this.physicalExam.height : "",
            answer2: this.physicalExam.upperExtremities
              ? this.physicalExam.upperExtremities
              : "",
          },
          {
            label: "WEIGHT (Stripped) in kilos ",
            label2: "LOWER EXTREMITIES ",
            answer: this.physicalExam.weight ? this.physicalExam.weight : "",
            answer2: this.physicalExam.lowerExtremities
              ? this.physicalExam.lowerExtremities
              : "",
          },
          {
            label: "BUILD ",
            label2: "SPINE & MSK SYSTEM",
            answer: this.physicalExam.build ? this.physicalExam.build : "",
            answer2: this.physicalExam.spineAndMskSystem
              ? this.physicalExam.spineAndMskSystem
              : "",
          },
          {
            label: "SKIN ",
            label2: "PELVIC",
            answer: this.physicalExam.skin ? this.physicalExam.skin : "",
            answer2: this.physicalExam.pelvic ? this.physicalExam.pelvic : "",
          },
          {
            label: "COLOR OF EYES ",
            label2: "PSYCHIATRIC",
            answer: this.physicalExam.colorOfEyes
              ? this.physicalExam.colorOfEyes
              : "",
            answer2: this.physicalExam.psychiatric
              ? this.physicalExam.psychiatric
              : "",
          },
          {
            label: "COLOR OF HAIR ",
            label2: "BLOOD PRESSURE",
            answer: this.physicalExam.colorOfHair
              ? this.physicalExam.colorOfHair
              : "",
            answer2: this.physicalExam.bloodPressure
              ? this.physicalExam.bloodPressure
              : "",
          },
          {
            label: " HEAD & FACE ",
            label2: "CARDIAC RATE",
            answer: this.physicalExam.headAndFace
              ? this.physicalExam.headAndFace
              : "",
            answer2: this.physicalExam.cardiacRate
              ? this.physicalExam.cardiacRate
              : "",
          },
          {
            label: "NECK ",
            label2: "DRUG TEST",
            answer: this.physicalExam.neck ? this.physicalExam.neck : "",
            answer2: this.physicalExam.drugTest
              ? this.physicalExam.drugTest
              : "",
          },
          {
            label: "NOSE & AND SINUSES ",
            label2: "URINALYSIS",
            answer: this.physicalExam.noseAndSinuses
              ? this.physicalExam.noseAndSinuses
              : "",
            answer2: this.physicalExam.urinalysis
              ? this.physicalExam.urinalysis
              : "",
          },
          {
            label: "MOUTH & THROAT ",
            label2: "FBS",
            answer: this.physicalExam.mouthAndThroat
              ? this.physicalExam.mouthAndThroat
              : "",
            answer2: this.physicalExam.fbs ? this.physicalExam.fbs : "",
          },
          {
            label: "EARS & EARDRUMS ",
            label2: "Hepa-B Screening",
            answer: this.physicalExam.earsAndEardrums
              ? this.physicalExam.earsAndEardrums
              : "",
            answer2: this.physicalExam.hepaScreening
              ? this.physicalExam.hepaScreening
              : "",
          },
          {
            label: "WHISPER VOICE TEST ",
            label2: "CBC",
            answer: this.physicalExam.whisperVoiceTest
              ? this.physicalExam.whisperVoiceTest
              : "",
            answer2: this.physicalExam.cbc ? this.physicalExam.cbc : "",
          },
          {
            label: "EYES / PUPILS ",
            label2: "BLOOD TYPE",
            answer: this.physicalExam.eyesOrPupils
              ? this.physicalExam.eyesOrPupils
              : "",
            answer2: this.physicalExam.bloodType
              ? this.physicalExam.bloodType
              : "",
          },
          {
            label: "VISION ",
            label2: "PREGNANCY TEST",
            answer: this.physicalExam.vision ? this.physicalExam.vision : "",
            answer2: this.physicalExam.pregnancyTest
              ? this.physicalExam.pregnancyTest
              : "",
          },
          {
            label: "COLOR VISION ",
            label2: "CHOLESTEROL",
            answer: this.physicalExam.colorVision
              ? this.physicalExam.colorVision
              : "",
            answer2: this.physicalExam.cholesterol
              ? this.physicalExam.cholesterol
              : "",
          },
          {
            label: "HEART ",
            label2: "ECG",
            answer: this.physicalExam.heart ? this.physicalExam.heart : "",
            answer2: this.physicalExam.ecg ? this.physicalExam.ecg : "",
          },
          {
            label: "VASCULAR SYSTEM ",
            label2: "CHEST X-RAY",
            answer: this.physicalExam.vascularSystem
              ? this.physicalExam.vascularSystem
              : "",
            answer2: this.physicalExam.chestXray
              ? this.physicalExam.chestXray
              : "",
          },
          {
            label: "LUNGS AND CHEST ",
            answer: this.physicalExam.lungsAndChest
              ? this.physicalExam.lungsAndChest
              : "",
          },
          {
            label: "ABDOMEN VISCERA ",
            answer: this.physicalExam.abdomenViscera
              ? this.physicalExam.abdomenViscera
              : "",
          },
          {
            label: "ANUS AND RECTUM ",
            answer: this.physicalExam.anusAndRectum
              ? this.physicalExam.anusAndRectum
              : "",
          },
          {
            label: "GENITAL ",
            answer: this.physicalExam.genital ? this.physicalExam.genital : "",
          },
        ];
  },
};
</script>

<style>
</style>