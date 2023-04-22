<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <PtNoteUpdate />
        <v-btn  v-print="'#print'" class="ml-3" small>print</v-btn>
      </v-row>
    </v-container>
    <v-container id="print" class="px-8">
      <v-row class="">
        <v-col class="px-0"> <h1>PT notes</h1></v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> FULL NAME : </span>
            <strong>
              {{ personnelDetails.personnel.fname }} {{ personnelDetails.personnel.mname }} {{ personnelDetails.personnel.lname }}
              {{ personnelDetails.personnel.extName }}
            </strong>
            <span class="body-2 pl-5">OCCUPATION : </span>
            <strong>{{personnelDetails.personnel.occupation}}</strong>
            <span class="body-2 pl-5">RANK : </span>
            <strong>{{ personnelDetails.personnel.rank }}</strong>
            <span class="body-2 pl-5">UNIT : </span>
            <strong> {{personnelDetails.personnel.unit}} </strong>
          </div>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col class="pa-0">
          <div class="">
            <span class="body-2"> ADDRESS : </span>
            <strong> {{personnelDetails.personnel.address}} </strong>
            <span class="body-2 pl-5">MOBILE NO. : </span>
            <strong>+639{{personnelDetails.personnel.mobile}}</strong>
            <span class="body-2 pl-5">SEX : </span>
            <strong>{{personnelDetails.personnel.gender}}</strong>
            <span class="body-2 pl-5">CIVIL STATUS : </span>
            <strong> {{personnelDetails.personnel.civilStatus}}</strong>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="">
            <strong>Referring Doctor : </strong>
            <span>{{ ptNotes.refDoctor ? ptNotes.refDoctor : 'N/A' }}</span>
            <v-divider></v-divider>
            <strong>Diagnosis : </strong>
            <span>{{ ptNotes.diagnosis ? ptNotes.diagnosis : 'N/A' }}</span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>Initial/Re-evaluation : </strong>
            <span>{{ ptNotes.initialEvaluation ? ptNotes.initialEvaluation : 'N/A'  }}</span>
            <v-divider></v-divider>
            <strong>History of Present Illness : </strong>
            <span>{{ ptNotes.hpi ? ptNotes.hpi : 'N/A' }}</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Medications: </strong>
          <span>{{ ptNotes.medication ? ptNotes.medication : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>Laboratory Exam : </strong>
          <span>{{ ptNotes.labExams ? ptNotes.labExams : 'N/A' }}</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>Diagnostic Procedure : </strong>
          <span>{{ ptNotes.diagnosticProcedure ? ptNotes.diagnosticProcedure : 'N/A' }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>PAST MEDICAL HISTORY : </strong>
          <span>{{ptNotes.pmh ? ptNotes.pmh : 'N/A' }}</span>
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
            <span>{{ptNotes.psh ? ptNotes.psh : 'N/A' }}</span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>FOOD AND DRUG ALLERGY : </strong>
            <span>{{ptNotes.fda ? ptNotes.fda : 'N/A' }}</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>SUBJECTIVE : </strong>
            <span>{{ptNotes.subjective ? ptNotes.subjective : 'N/A' }}</span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>OBJECTIVE : </strong>
            <span>{{ptNotes.objective ? ptNotes.objective : 'N/A' }}</span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>Vital Signs : </strong>
            <span> {{ptNotes.vitalSigns ? ptNotes.vitalSigns : 'N/A' }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>Special Test Input : </strong>
            <span> {{ptNotes.specialTest ? ptNotes.specialTest : 'N/A' }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>RR : </strong>
            <span> {{ptNotes.rr ? ptNotes.rr : 'N/A' }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>Blood Pressure : </strong>
            <span> {{ptNotes.bloodPressure ? ptNotes.bloodPressure : 'N/A' }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong>Pulse Rate : </strong>
            <span> {{ptNotes.pulseRate ? ptNotes.pulseRate : 'N/A' }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong>Temperature : </strong>
            <span> {{ptNotes.temperature ? ptNotes.temperature : 'N/A' }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Ocular Inspection : </strong>
          <span>{{ptNotes.ocularInspection ? ptNotes.ocularInspection : 'N/A' }}</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>Palpation : </strong>
          <span>{{ ptNotes.palpation ? ptNotes.palpation : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>ROM : </strong>
          <span>{{ ptNotes.rom ? ptNotes.rom : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
        <v-col>
          <strong>MMT : </strong>
          <span>{{ ptNotes.mmt ? ptNotes.mmt : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong> Muscle Bulk Measurement (MBM) : </strong>
            <span> {{ ptNotes.mbm ? ptNotes.mbm : 'N/A'  }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
        <v-col>
          <div>
            <strong> Limb Girth Measurement (LGM) : </strong>
            <span> {{ ptNotes.lgm ? ptNotes.lgm : 'N/A'  }} </span>
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
            <span> {{ ptNotes.findings ? ptNotes.findings : 'N/A'  }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong> Significance : </strong>
            <span> {{ ptNotes.significance ? ptNotes.significance : 'N/A'  }} </span>
            <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <strong> Functional Analysis : </strong>
            <span> {{ ptNotes.functionalAnalysis ? ptNotes.functionalAnalysis : 'N/A'  }} </span>
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
          <span>{{ ptNotes.assessment ? ptNotes.assessment : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Diagnosis : </strong>
          <span>{{ ptNotes.diagnosis ? ptNotes.diagnosis : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>PT Impression : </strong>
          <span>{{ ptNotes.ptImpression ? ptNotes.ptImpression : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Problem List : </strong>
          <span>{{ ptNotes.problemList ? ptNotes.problemList : 'N/A'  }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Short Term Goal : </strong>
          <span>{{ ptNotes.shortTermGoal ? ptNotes.shortTermGoal : 'N/A' }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>PT Management : </strong>
          <span>{{ ptNotes.ptManagement ? ptNotes.ptManagement : 'N/A' }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Suggested PT Management : </strong>
          <span>{{ ptNotes.suggestedPtManagement ? ptNotes.suggestedPtManagement : 'N/A' }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong>Home Instruction : </strong>
          <span>{{ ptNotes.homeInstruction ? ptNotes.homeInstruction : 'N/A' }}</span>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <strong class="mb-4">Examining Physical Therapist : </strong>
          <div class="text-center  mt-5">{{ ptNotes.examiningPhysicalTherapist ? ptNotes.examiningPhysicalTherapist : 'N/A' }}</div>
          <v-divider></v-divider>
          <div class="text-center">Physical Therapist </div>
          
        </v-col>

        <v-col>
          <strong class="mb-4">Noted By : </strong>
          <div class="text-center mt-5">{{ ptNotes.notedBy ? ptNotes.notedBy : 'N/A' }}</div>
          <v-divider></v-divider>
          <div class="text-center">Acting Chief, Physical Therapy Rehabilitation </div>
          
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");


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
    PtNoteUpdate,
  },
  
  data: () => ({
    items: [
      {
        name: "Hypertension",
        father: "",
        mother: "",
      },
      {
        name: "Diabetes Mellitus",
        father: "",
        mother: "",
      },
      {
        name: "Asthma",
        father: "",
        mother: "",
      },
      {
        name: "Arthritis",
        father: "",
        mother: "",
      },
      {
        name: "Cerebral Vascular Accident",
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
  computed: {
    ...mapGetters(["personnelDetails"]),
    ptNotes() {
      return this.personnelDetails.ptNotes
      
    },
    birthDate() {
      return this.personnelDetails.personnel.dateOfBirth.substr(0, 10);
    },
    
    
  },

};
</script>

