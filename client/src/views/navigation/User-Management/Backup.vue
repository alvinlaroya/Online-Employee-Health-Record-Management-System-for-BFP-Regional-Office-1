<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="12">
        <v-card elevation="4">
          <v-card-title class="text-center">Backup</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12"
                ><v-btn
                  large
                  type="submit"
                  color="success"
                  @click="backupPersonnel"
                  >Backup Personnels to CSV</v-btn
                ></v-col
              >
              <v-col cols="12">
                <v-btn large type="submit" color="success" @click="backupDental"
                  >Backup Dentals to CSV</v-btn
                ></v-col
              >
              <v-col cols="12"
                ><v-btn
                  large
                  type="submit"
                  color="success"
                  @click="backupMedicalFamily"
                  >Backup Medical Family History to CSV</v-btn
                ></v-col
              >
              <v-col cols="12"
                ><v-btn
                  large
                  type="submit"
                  color="success"
                  @click="backupMedicalOccupational"
                  >Backup Medical Occupational History to CSV</v-btn
                ></v-col
              >
              <v-col cols="12"
                ><v-btn
                  large
                  type="submit"
                  color="success"
                  @click="backupMedicalPersonal"
                  >Backup Medical Personal History to CSV</v-btn
                ></v-col
              >
              <v-col>
                <v-btn
                  large
                  type="submit"
                  color="success"
                  @click="backupPhysicalExam"
                  >Backup Physical Exam to CSV</v-btn
                ></v-col
              >
              <v-col cols="12">
                <v-btn large type="submit" color="success" @click="backupPsych"
                  >Backup Neuro Pasych to CSV</v-btn
                ></v-col
              >
              <v-col cols="12">
                <v-btn
                  large
                  type="submit"
                  color="success"
                  @click="backupPtNotes"
                  >Backup PT Notes to CSV</v-btn
                ></v-col
              >
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    url: "http://localhost:8000/api/personnel",
  }),
  methods: {
    backupPersonnel() {
      window.location.href = `${this.url}/backupPersonnelsData`;
    },
    backupDental() {
      window.location.href = `${this.url}/backupDentalsData`;
    },
    backupMedicalFamily() {
      window.location.href = `${this.url}/backupMedicalFamilyHistoryData`;
    },
    backupMedicalOccupational() {
      window.location.href = `${this.url}/backupMedicalOccupationalHistoryData`;
    },
    backupMedicalPersonal() {
      window.location.href = `${this.url}/backupMedicalPersonalHistoryData`;
    },
    backupPhysicalExam() {
      window.location.href = `${this.url}/backupPhysicalExaminationsData`;
    },
    backupPsych() {
      window.location.href = `${this.url}/backupPsychsData`;
    },
    backupPtNotes() {
      window.location.href = `${this.url}/backupPtNotesData`;
    },
  },
};
</script>
