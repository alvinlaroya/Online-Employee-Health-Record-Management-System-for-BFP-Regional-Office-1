<template>
  <v-data-table
    :headers="headers"
    :items="items"
    dense
    hide-default-header
    hide-default-footer
    :disable-pagination="true"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
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
    items: [
      {
        label: "10: HEIGHT (bare Foot) ",
        label2: "31 : UPPER EXTREMITIES ",
        answer: "-",
        answer2: "-",
      },
      {
        label: "11: HEIGHT (Stripped) in kilos ",
        label2: "32 : LOWER EXTREMITIES ",
        answer: "-",
        answer2: "-",
      },
      {
        label: "12: BUILD ",
        label2: "33 : SPINE & MSK SYSTEM",
        answer: "-",
        answer2: "-",
      },
      {
        label: "13: SKIN ",
        label2: "34 : PELVIC",
        answer: "-",
        answer2: "-",
      },
      {
        label: "14: COLOR OF EYES ",
        label2: "35 : PSYCHIATRIC",
        answer: "-",
        answer2: "-",
      },
      {
        label: "15: COLOR OF HAIR ",
        label2: "36 : BLOOD PRESSURE",
        answer: "-",
        answer2: "-",
      },
      {
        label: "16: HEAD & FACE ",
        label2: "37 : CARDIAC RATE",
        answer: "-",
        answer2: "-",
      },
      {
        label: "17: NECK ",
        label2: "38 : DRUG TEST",
        answer: "-",
        answer2: "-",
      },
      {
        label: "18: NOSE & AND SINUSES ",
        label2: "39 : URINALYSIS",
        answer: "-",
        answer2: "-",
      },

      {
        label: "19: MOUTH & THROAT ",
        label2: "40 : FBS",
        answer: "-",
        answer2: "-",
      },
      {
        label: "20: EARS & EARDRUMS ",
        label2: "41 : Hepa-B Screening",
        answer: "-",
        answer2: "-",
      },
      {
        label: "21: WHISPER VOICE TEST ",
        label2: "42 : CBC",
        answer: "-",
        answer2: "-",
      },
      {
        label: "22: EYES / PUPILS ",
        label2: "43 : BLOOD TYPE",
        answer: "-",
        answer2: "-",
      },
      {
        label: "23: VISION ",
        label2: "44 : PREGNANCY TEST",
        answer: "-",
        answer2: "-",
      },
      {
        label: "24: COLOR VISION ",
        label2: "45 : CHOLESTEROL",
        answer: "-",
        answer2: "-",
      },
      {
        label: "25: HEART ",
        label2: "46 : ECG",
        answer: "-",
        answer2: "-",
      },
      {
        label: "26: VASCULAR SYSTEM ",
        label2: "47 : CHEST X-RAY",
        answer: "-",
        answer2: "-",
      },
      {
        label: "27: LUNGS AND CHEST ",
        answer: "-",
      },
      {
        label: "28: ABDOMEN VISCERA ",
        answer: "-",
      },
      {
        label: "29: ANUS AND RECTUM ",
        answer: "-",
      },
      {
        label: "30: GENITAL ",
        answer: "-",
      },
    ],
  }),
};
</script>

<style>
</style>