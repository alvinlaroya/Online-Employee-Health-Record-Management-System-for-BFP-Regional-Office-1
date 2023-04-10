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
    items: []
  }),
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
        answer: this.physicalExam.height,
        answer2: this.physicalExam.upperExtremities ,
      },
      {
        label: "WEIGHT (Stripped) in kilos ",
        label2: "LOWER EXTREMITIES ",
        answer: this.physicalExam.weight,
        answer2: this.physicalExam.lowerExtremities
      },
      {
        label: "BUILD ",
        label2: "SPINE & MSK SYSTEM",
        answer: this.physicalExam.build,
        answer2: this.physicalExam.spineAndMskSystem
      },
      {
        label: "SKIN ",
        label2: "PELVIC",
        answer: this.physicalExam.skin,
        answer2: this.physicalExam.pelvic
      },
      {
        label: "COLOR OF EYES ",
        label2: "PSYCHIATRIC",
        answer: this.physicalExam.colorOfEyes,
        answer2: this.physicalExam.psychiatric
      },
      {
        label: "COLOR OF HAIR ",
        label2: "BLOOD PRESSURE",
        answer: this.physicalExam.colorOfHair,
        answer2: this.physicalExam.bloodPressure,
      },
      {
        label: " HEAD & FACE ",
        label2: "CARDIAC RATE",
        answer: this.physicalExam.headAndFace,
        answer2: this.physicalExam.cardiacRate,
      },
      {
        label: "NECK ",
        label2: "DRUG TEST",
        answer: this.physicalExam.neck,
        answer2: this.physicalExam.drugTest,
      },
      {
        label: "NOSE & AND SINUSES ",
        label2: "URINALYSIS",
        answer: this.physicalExam.noseAndSinuses,
        answer2: this.physicalExam.urinalysis,
      },
      {
        label: "MOUTH & THROAT ",
        label2: "FBS",
        answer: this.physicalExam.mouthAndThroat,
        answer2: this.physicalExam.fbs,
      },
      {
        label: "EARS & EARDRUMS ",
        label2: "Hepa-B Screening",
        answer: this.physicalExam.earsAndEardrums,
        answer2: this.physicalExam.hepaScreening,
      },
      {
        label: "WHISPER VOICE TEST ",
        label2: "CBC",
        answer: this.physicalExam.whisperVoiceTest,
        answer2: this.physicalExam.cbc,
      },
      {
        label: "EYES / PUPILS ",
        label2: "BLOOD TYPE",
        answer: this.physicalExam.eyesOrPupils,
        answer2: this.physicalExam.bloodType,
      },
      {
        label: "VISION ",
        label2: "PREGNANCY TEST",
        answer: this.physicalExam.vision,
        answer2: this.physicalExam.pregnancyTest,
      },
      {
        label: "COLOR VISION ",
        label2: "CHOLESTEROL",
        answer: this.physicalExam.colorVision,
        answer2: this.physicalExam.cholesterol,
      },
      {
        label: "HEART ",
        label2: "ECG",
        answer: this.physicalExam.heart,
        answer2: this.physicalExam.ecg,
      },
      {
        label: "VASCULAR SYSTEM ",
        label2: "CHEST X-RAY",
        answer: this.physicalExam.vascularSystem,
        answer2: this.physicalExam.chestXray,
      },
      {
        label: "LUNGS AND CHEST ",
        answer: this.physicalExam.lungsAndChest,
      },
      {
        label: "ABDOMEN VISCERA ",
        answer: this.physicalExam.abdomenViscera,
      },
      {
        label: "ANUS AND RECTUM ",
        answer: this.physicalExam.anusAndRectum
      },
      {
        label: "GENITAL ",
        answer: this.physicalExam.genital
      },
    ];
  },
};
</script>

<style>
</style>