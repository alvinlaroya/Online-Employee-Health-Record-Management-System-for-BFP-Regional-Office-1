<template>
  <v-card elevation="0">
    <v-container class="pa-8">
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> FULL NAME : </span>
            <strong>
              {{ data.fname }} {{ data.mname }} {{ data.lname }}
              {{ data.extName }}
            </strong>
            <span class="body-2 pl-5">OCCUPATION : </span>
            <strong>BFP</strong>
            <span class="body-2 pl-5">RANK : </span>
            <strong>SF02</strong>
            <span class="body-2 pl-5">UNIT : </span>
            <strong> BFP Regional Office 1 </strong>
          </div>
        </v-col>
        <v-col cols="1" class="py-0 d-flex justify-end">
          <PtNoteUpdate/>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> ADDRESS : </span>
            <strong> Agoo, La Union </strong>
            <span class="body-2 pl-5">MOBILE NO. : </span>
            <strong>09090980987</strong>
            <span class="body-2 pl-5">SEX : </span>
            <strong>Male</strong>
            <span class="body-2 pl-5">CIVIL STATUS : </span>
            <strong> Single</strong>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="">
            <strong>Referring Doctor : </strong>
            <span>Doctor Mundo</span>
            <v-divider></v-divider>
            <strong>Diagnosis : </strong>
            <span>N/A</span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>Date of initial/Re-evaluation : </strong>
            <span>March 27, 2000</span>
            <v-divider></v-divider>
            <strong>History of Present Illness : </strong>
            <span>N/A</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Medications: </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>Laboratory Exam : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>Diagnostic Procedure : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>PAST MEDICAL HISTORY : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>FAMILY MEDICAL HISTORY</strong>
          <FamMedHistory />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>PERSONAL/SOCIAL HISTORY : </strong>
            <span>N/A</span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>FOOD AND DRUG ALLERGY : </strong>
            <span>N/A</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>SUBJECTIVE : </strong>
            <span>N/A</span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>OBJECTIVE : </strong>
            <span>N/A</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <div>
          <strong>VITAL SIGNS :</strong>
        </div>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>RR : </strong>
            <span> 18 </span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>Blood Pressure : </strong>
            <span> 100/120 </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>Pulse Rate : </strong>
            <span> 80 Bpm </span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>Temperature : </strong>
            <span> 36 </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Ocular Inspection : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>Palpitation : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>ROM : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>MMT : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong> Muscle Bulk Measurement (MBM) : </strong>
            <span> N/A </span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong> Limb Girth Measurement (LGM) : </strong>
            <span> N/A </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Gait Analysis</strong>
          <GaitAnalysis />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong> Findings : </strong>
            <span> N/A </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong> Significance : </strong>
            <span> N/A </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong> Functional Analysis : </strong>
            <span> N/A </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <strong>Balance/Tolerance</strong>
          <BalanceTolerance />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>ADL</strong>
          <Adl />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>ASSESSMENT : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Diagnosis : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>PT Impression : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Problem List : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Short Term Goal : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>PT Management : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Suggested PT Management : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Home Instruction : </strong>
          <span>N/A</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="d-flex flex-column">
            <strong class="mb-5">Examining Physical Therapist</strong>
            <span  class="text-center">Name Here</span>
            <v-divider></v-divider>
            <small  class="text-center">Physical Therapist </small>
          </div>
        </v-col>
        <v-col>
          <div class="d-flex flex-column">
            <strong class="mb-5">Noted by : </strong>
            <span  class="text-center">Name Here</span>
            <v-divider></v-divider>
            <small class="text-center">Acting Chief, Physical Therapy Rehabilitation Service</small>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
PtNoteUpdate
import GaitAnalysis from "@/components/navigation/Personnel/PtNotes/GaitAnalysis";
import FamMedHistory from "@/components/navigation/Personnel/PtNotes/FamMedHistory";
import BalanceTolerance from "@/components/navigation/Personnel/PtNotes/BalanceTolerance";
import Adl from "@/components/navigation/Personnel/PtNotes/Adl";
import PtNoteUpdate from "@/components/navigation/Personnel/PtNotes/PtNoteUpdate";

export default {
  props: ["data"],
  components: {
    GaitAnalysis,
    FamMedHistory,
    BalanceTolerance,
    Adl,
    PtNoteUpdate
  },
  computed: {
    birthDate() {
      return this.data.dateOfBirth.substr(0, 10);
    },
  },
  data: () => ({
    items: [
      {
        name: "Hypertension",
        father: "YES",
        mother: "",
      },
      {
        name: "Diabetes Mellitus",
        father: "YES",
        mother: "",
      },
      {
        name: "Asthma",
        father: "",
        mother: "",
      },
      {
        name: "Arthritis",
        father: "YES",
        mother: "",
      },
      {
        name: "Cerebral Vascular Accident",
        father: "YES",
        mother: "YES",
      },
      {
        name: "Others",
        father: "",
        mother: "",
      },
    ],
    headers: [
      {
        text: "Medical History",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Father", value: "father" },
      { text: "Mother", value: "mother" },
    ],
  }),
};
</script>

