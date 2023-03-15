<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-icon color="success" size="x-large" v-on="on">mdi-plus</v-icon>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Personnel</span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-container fluid>
              <!-- row1 -->
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Account Number"
                    v-model="accountNo"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    label="Rank"
                    v-model="rank"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    label="Ext Name"
                    v-model="extName"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row2 -->
              <v-row>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="Last Name"
                    v-model="lname"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="First Name"
                    v-model="fname"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col class="" cols="12" md="4">
                  <v-text-field
                    label="Middle Name"
                    v-model="mname"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row3 -->
              <v-row>
                <v-col cols="12" md="5">
                  <v-text-field
                    label="Mobile"
                    v-model="mobile"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="7">
                  <v-text-field
                    label="Unit Assignment"
                    v-model="unit"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row4 -->
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Designation"
                    v-model="designation"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="Address"
                    v-model="address"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- row5 -->
              <v-row>
                
                <v-col cols="12" md="4">
                  <v-select
                    label="Civil Status"
                    v-model="civilStatus"
                    :items="['Single', 'Married']"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="4">
                  <v-select
                    label="Gender"
                    v-model="gender"
                    :items="['Male', 'Female']"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="12" md="4">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Date of Birth"
                        prepend-icon="mdi-calendar"
                        readonly dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="4"> 
                  <v-text-field
                    label="Philhealth"
                    v-model="philhealth"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4"> 
                  <v-text-field
                    label="Remarks"
                    v-model="remarks"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="submitPersonnel">ADD</v-btn>
          <v-btn color="secondary">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Data table for displaying personnel goes here -->
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("navigation");

export default {
  data: () => ({
    dialog: false,
    valid: true,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,

    accountNo: "100",
    rank: "SF220",
    lname: "MER",
    fname: "Rea",
    mname: "ligue",
    extName: "",
    unit: "BFP-FPSS",
    designation: "DESISISISIS",
    mobile: "0909090909",
    civilStatus: "Single",
    gender: "Male",
    philhealth: '',
    remarks: '',
    dateOfBirth: '',
    address: ''
  }),
  computed: {
    ...mapGetters(["personnels"]),
  },
  methods: {
    ...mapActions(["addPersonnels"]),
    submitPersonnel() {
      const personnel = {
        accountNo: this.accountNo,
        rank: this.rank,
        lname: this.lname,
        fname: this.fname,
        mname: this.mname,
        extName: this.extName,
        unit: this.unit,
        designation: this.designation,
        mobile: this.mobile,
        civilStatus: this.civilStatus,
        gender: this.gender,
        remarks: this.remarks,
        philhealth: this.philhealth,
        address: this.address,
      };
      this.addPersonnels(personnel);
    },
  },
};
</script>
