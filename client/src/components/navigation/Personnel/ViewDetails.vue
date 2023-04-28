<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="end" class="pa-2">
        <UpdateDetails />
        <!-- <v-btn v-print="'#print'" class="ml-3" small>print</v-btn> -->
      </v-row>
    </v-container>
    <v-container id="print" class="pa-10">
      <v-row>
        <v-col cols="4">
          <v-row>
            <v-avatar size="300" tile>
              <img
                :src="`http://localhost:8000/${personnel.personnelImage}`"
                alt="John"
                style="object-fit: cover"
              />
            </v-avatar>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row class="py-3 text-h6">
            <span>
              Account Number : <strong>{{ personnel.accountNo }}</strong>
            </span>
          </v-row>
          <v-row class="py-3 text-h6">
            <span>
              Rank : <strong> {{ personnel.rank }}</strong>
            </span>
          </v-row>
          <v-row class="py-3 text-h6">
            <span>
              Full Name :
              <strong
                >{{ personnel.fname ? personnel.fname : "" }}
                {{ personnel.mname ? personnel.mname : "" }}
                {{ personnel.lname ? personnel.lname : "" }}
                {{ personnel.extName ? personnel.extName : "" }}</strong
              ></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Gender :
              <strong>
                {{ personnel.gender ? personnel.gender : "" }}</strong
              ></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Mobile Number :
              <strong
                >+639{{ personnel.mobile ? personnel.mobile : "" }}</strong
              ></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Address :
              <strong>
                {{ personnel.address ? personnel.address : "" }}</strong
              ></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Date of Birth : <strong> {{ birthDate }}</strong></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Age : <strong> {{ birthDate | computeAge }}</strong></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Civil Status :
              <strong>
                {{ personnel.civilStatus ? personnel.civilStatus : "" }}</strong
              ></span
            >
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row class="py-3 text-h6">
            <span
              >Philhealth :
              <strong>
                {{ personnel.philhealth ? personnel.philhealth : "" }}</strong
              ></span
            >
          </v-row>

          <v-row class="py-3 text-h6">
            <span
              >Unit :
              <strong> {{ personnel.unit ? personnel.unit : "" }}</strong></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Designation :
              <strong>
                {{ personnel.designation ? personnel.designation : "" }}</strong
              ></span
            >
          </v-row>
          <v-row class="py-3 text-h6">
            <span
              >Remarks :
              <strong>{{
                personnel.remarks ? personnel.remarks : ""
              }}</strong></span
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UpdateDetails from "@/components/navigation/Personnel/ViewDetail/UpdateDetails";
const { mapGetters } = createNamespacedHelpers("navigation");

export default {
  props: ["data"],
  components: {
    UpdateDetails,
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    personnel() {
      return this.personnelDetails.personnel || "";
    },
    birthDate() {
      return this.data?.dateOfBirth?.substr(0, 10);
    },
  },
};
</script>

<style></style>
