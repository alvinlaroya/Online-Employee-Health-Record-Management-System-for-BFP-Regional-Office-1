<template>
  <div>
    <v-row>
      <v-col>
        <span class="py-3">OCCUPATIONAL HISTORY</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>
          Do you have been advised to undergo any surgical operation ?</span
        >
        <strong> {{ occupationalHistory.isAdvised ? "Yes" : "NO" }}</strong>
      </v-col>
      <v-col v-if="occupationalHistory.isAdvised" class="py-1 ">
        <span> If Yes, describe what type and what age it was done ?</span>
        <strong>
          {{
            occupationalHistory.advisedAnswer
              ? occupationalHistory.advisedAnswer
              : "N/A"
          }}</strong
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>
          Have you had accidents or injuries other than those listed ?</span
        >
        <strong> {{ occupationalHistory.isAccident ? "Yes" : "NO" }}</strong>
      </v-col>
      <v-col v-if="occupationalHistory.isAccident" class="py-1 ">
        <span> If Yes, give Details and Data ?</span>
        <strong>
          {{
            occupationalHistory.accidentAnswer
              ? occupationalHistory.accidentAnswer
              : "N/A"
          }}</strong
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col class="py-1 ">
        <span> Have you ever been hospitalized ?</span>
        <strong>
          {{ occupationalHistory.isHospitalized ? "Yes" : "NO" }}</strong
        >
      </v-col>
      <v-col v-if="occupationalHistory.isHospitalized" class="py-1 ">
        <span> Where ?</span>
        <strong>
          {{
            occupationalHistory.hospitalizedIn
              ? occupationalHistory.hospitalizedIn
              : "N/A"
          }}</strong
        >
      </v-col>
      <v-col v-if="occupationalHistory.isHospitalized" class="py-1 ">
        <span> Why ?</span>
        <strong>
          {{
            occupationalHistory.hospitalizedReason
              ? occupationalHistory.hospitalizedReason
              : "N/A"
          }}</strong
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <v-data-table
          :headers="headers"
          :items="items"
          dense
          hide-default-footer
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Are you Right Handed ?</span>
        <strong> {{ occupationalHistory.isRightHanded ? "Yes" : "NO" }}</strong>
      </v-col>
      <v-col class="py-1 ">
        <span>Are you Left Handed ?</span>
        <strong> {{ occupationalHistory.isLeftHanded ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Have you ever worked with Radioactive Materials ?</span>
        <strong> {{ occupationalHistory.isRadioactive ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="py-1 ">
        <span>Have you ever refused employment with BFP because of your Health / Other Reason ?</span>
        <strong> {{ occupationalHistory.isRefuseEmployment ? "Yes" : "NO" }}</strong>
      </v-col>
      
    </v-row>
    <v-row>
      <v-col v-if="occupationalHistory.isRefuseEmployment" class="py-0 ">
        <span>Give details : </span>
        <strong> {{ occupationalHistory.refuseEmploymentDetails
              ? occupationalHistory.refuseEmploymentDetails
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Sensitive to Chemical , Dust , Sunlight ?</span>
        <strong> {{ occupationalHistory.isSensitiveToChemical  ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Inability to assume certain positions ?</span>
        <strong> {{ occupationalHistory.isInabilityAssumePosition   ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Other medical reasons ?</span>
        <strong> {{ occupationalHistory.isOtherMedicalReason    ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="" class="py-1 ">
        <span>Have you ever been disqualified from work due to physical or mental reason ?</span>
        <strong> {{ occupationalHistory.isDisqualifiedFromWork     ? "Yes" : "NO" }}</strong>
      </v-col>
      
    </v-row>
    <v-row>
      <v-col v-if="occupationalHistory.isDisqualifiedFromWork" class="py-0 ">
        <span>If Yes, Give reasons : </span>
        <strong> {{ occupationalHistory.disqualifiedWorkDetail
              ? occupationalHistory.disqualifiedWorkDetail
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Number of Jobs in the Past Three Years ?</span>
        <strong> {{ occupationalHistory.numberOfJobsPastThreeYears 
              ? occupationalHistory.numberOfJobsPastThreeYears 
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Longest Period in Job ?</span>
        <strong> {{ occupationalHistory.longestPeriodJob  
              ? occupationalHistory.longestPeriodJob  
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>What is your usual Occupation ?</span>
        <strong> {{ occupationalHistory.usualOccupation  
              ? occupationalHistory.usualOccupation  
              : "N/A" }}</strong>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="" class="py-1 ">
        <span>Have you ever consulted/ been treated by Physician or other practitioners within the last 5 years?</span>
        <strong> {{ occupationalHistory.isConsultedByPhysician      ? "Yes" : "NO" }}</strong>
      </v-col>
      
    </v-row>
    <v-row>
      <v-col v-if="occupationalHistory.isConsultedByPhysician " class="py-1 ">
        <span>If Yes, Give Details and Data : </span>
        <strong> {{ occupationalHistory.consultedPhysicianDetail 
              ? occupationalHistory.consultedPhysicianDetail 
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Have you tried Self Medications ?</span>
        <strong> {{ occupationalHistory.hasSelfMedication ? "Yes" : "NO" }}</strong>
      </v-col>
      
    </v-row>
    <v-row>
      <v-col v-if="occupationalHistory.hasSelfMedication" class="py-0 my-0">
        <span>If Yes, Give Details : </span>
        <strong> {{ occupationalHistory.selfMedicationDetail  
              ? occupationalHistory.selfMedicationDetail  
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Have you had any Physical or Mental Complaints at presents ?</span>
        <strong> {{ occupationalHistory.hasMentalComplaints  ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="occupationalHistory.hasMentalComplaints " class="py-0 my-0">
        <span>If Yes, Give Details and Durations : </span>
        <strong> {{ occupationalHistory.mentalComplaintsDetail   
              ? occupationalHistory.mentalComplaintsDetail   
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Have you ever Applied to BFP ?</span>
        <strong> {{ occupationalHistory.isAppliedAtBFP   ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="occupationalHistory.isAppliedAtBFP " class="py-0 my-0">
        <span> Have you been Examined by a Medical Officer   : </span>
        <strong> {{ occupationalHistory.isExaminedByMedical   ? "Yes" : "NO" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="occupationalHistory.isAppliedAtBFP " class="py-0 my-0">
        <span>Date of Last Examination Done : </span>
        <strong> {{ occupationalHistory.dateOfLastExamination     
              ? occupationalHistory.dateOfLastExamination     
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col  class="py-0 my-0">
        <span>Neuropsychiatric Exam </span>
        <strong> {{ occupationalHistory.neuropsychiatricExam      
              ? occupationalHistory.neuropsychiatricExam       
              : "N/A" }}</strong>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="py-1 ">
        <span>Neuropsychiatric Exam Result : </span>
        <strong> {{ occupationalHistory.neuropsychiatricExamResult  ? "Passed" : "Failed" }}</strong>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    occupationalHistory: {
      isAdvised: true,
      advisedAnswer: "",
      isAccident: true,
      accidentAnswer: "",
      isHospitalized: true,
      hospitalizedIn: "",
      hospitalizedReason: "",

      isRightHanded: false,
      isLeftHanded: false,
      isRadioactive: false,
      isRefuseEmployment: true,

      refuseEmploymentDetails: "",

      isSensitiveToChemical: false,
      isInabilityAssumePosition: false,
      isOtherMedicalReason: false,

      isDisqualifiedFromWork: true,
      disqualifiedWorkDetail: "",

      numberOfJobsPastThreeYears: "",
      longestPeriodJob: "",
      usualOccupation: "",

      isConsultedByPhysician: true,
      consultedPhysicianDetail: "",

      hasSelfMedication: true,
      selfMedicationDetail: "",

      hasMentalComplaints: true,
      mentalComplaintsDetail: "",

      isAppliedAtBFP: true,
      isExaminedByMedical: true,

      dateOfLastExamination: "",
      neuropsychiatricExam: "",
      neuropsychiatricExamResult: "",
    },
    headers: [
      {
        text: "Disease",
        value: "disease",
      },
      {
        text: "Yes/No",
        value: "yesOrNo",
      },
      {
        text: "Year",
        value: "year",
      },
    ],
    items: [],
  }),
  watch: {
    personnelDetails: {
      handler(val) {
        this.items = [
          {
            disease: "Cholera",
            yesOrNo:
              this.occupationalHistory.isCholera === null
                ? ""
                : this.occupationalHistory.isCholera
                ? "Yes"
                : "No",
            year: this.choleraAt,
          },
          {
            disease: "Influenza",
            yesOrNo:
              this.occupationalHistory.isInfluenza === null
                ? ""
                : this.occupationalHistory.isInfluenza
                ? "Yes"
                : "No",
            year: this.influenzaAt,
          },
          {
            disease: "Tetanus",
            yesOrNo:
              this.occupationalHistory.isTetanus === null
                ? ""
                : this.occupationalHistory.isTetanus
                ? "Yes"
                : "No",
            year: this.tetanusAt,
          },
          {
            disease: "Typhoid",
            yesOrNo:
              this.occupationalHistory.isTyphoid === null
                ? ""
                : this.occupationalHistory.isTyphoid
                ? "Yes"
                : "No",
            year: this.typhoidAt,
          },
          {
            disease: "Hepatitis B",
            yesOrNo:
              this.occupationalHistory.isHepatitis === null
                ? ""
                : this.occupationalHistory.isHepatitis
                ? "Yes"
                : "No",
            year: this.hepatitisAt,
          },
          {
            disease: "Mumps",
            yesOrNo:
              this.occupationalHistory.isMumps === null
                ? ""
                : this.occupationalHistory.isMumps
                ? "Yes"
                : "No",
            year: this.mumpsAt,
          },
        ];
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    occupationalHistory() {
      return this.personnelDetails.medicalRecord.occupationalHistory;
    },
    choleraAt() {
      if (!this.occupationalHistory.choleraAt) {
        return "N/A";
      }
      return this.occupationalHistory.choleraAt.substr(0, 10);
    },
    influenzaAt() {
      if (!this.occupationalHistory.influenzaAt) {
        return "N/A";
      }
      return this.occupationalHistory.influenzaAt.substr(0, 10);
    },
    tetanusAt() {
      if (!this.occupationalHistory.tetanusAt) {
        return "N/A";
      }
      return this.occupationalHistory.tetanusAt.substr(0, 10);
    },
    typhoidAt() {
      if (!this.occupationalHistory.typhoidAt) {
        return "N/A";
      }
      return this.occupationalHistory.typhoidAt.substr(0, 10);
    },
    hepatitisAt() {
      if (!this.occupationalHistory.hepatitisAt) {
        return "N/A";
      }
      return this.occupationalHistory.hepatitisAt.substr(0, 10);
    },
    mumpsAt() {
      if (!this.occupationalHistory.mumpsAt) {
        return "N/A";
      }
      return this.occupationalHistory.mumpsAt.substr(0, 10);
    },
  },
  created() {
    this.items = [
      {
        disease: "Cholera",
        yesOrNo:
          this.occupationalHistory.isCholera === null
            ? ""
            : this.occupationalHistory.isCholera
            ? "Yes"
            : "No",
        year: this.choleraAt,
      },
      {
        disease: "Influenza",
        yesOrNo:
          this.occupationalHistory.isInfluenza === null
            ? ""
            : this.occupationalHistory.isInfluenza
            ? "Yes"
            : "No",
        year: this.influenzaAt,
      },
      {
        disease: "Tetanus",
        yesOrNo:
          this.occupationalHistory.isTetanus === null
            ? ""
            : this.occupationalHistory.isTetanus
            ? "Yes"
            : "No",
        year: this.tetanusAt,
      },
      {
        disease: "Typhoid",
        yesOrNo:
          this.occupationalHistory.isTyphoid === null
            ? ""
            : this.occupationalHistory.isTyphoid
            ? "Yes"
            : "No",
        year: this.typhoidAt,
      },
      {
        disease: "Hepatitis B",
        yesOrNo:
          this.occupationalHistory.isHepatitis === null
            ? ""
            : this.occupationalHistory.isHepatitis
            ? "Yes"
            : "No",
        year: this.hepatitisAt,
      },
      {
        disease: "Mumps",
        yesOrNo:
          this.occupationalHistory.isMumps === null
            ? ""
            : this.occupationalHistory.isMumps
            ? "Yes"
            : "No",
        year: this.mumpsAt,
      },
    ];
  },
};
</script>

<style></style>
