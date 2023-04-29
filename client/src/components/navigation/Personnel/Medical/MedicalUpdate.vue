<template>
  <div>
    <v-dialog v-model="dialog" max-width="900">
      <template v-slot:activator="{ on }">
        <v-btn v-if="userRoles.updateMedical" v-on="on" tile small>
          Update
        </v-btn>
      </template>
      <v-card>
        <v-card-title> Update Form </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <div>
              <v-row>
                <v-col>
                  <small>Family History</small>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <strong class="">Father Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Mother Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Spouse Information</strong>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherName"
                    label="Name"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherName"
                    label="Name"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseName"
                    label="Name"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherAge"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherAge"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseAge"
                    label="Age"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherStateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherStateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseStateOfHealth"
                    label="State of health"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.fatherCauseOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.motherCauseOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.spouseCauseOfDeath"
                    label="Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row><v-divider></v-divider></v-row>
              <v-row>
                <v-col>
                  <strong class="">Brothers Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Sister Information</strong>
                </v-col>
                <v-col>
                  <strong class="">Children Information</strong>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1Name"
                    label="Brother 1 Name"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1Name"
                    label="Sister 1 Name"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1Name"
                    label="Children 1 Name"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1Age"
                    label="Brother 1 Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1Age"
                    label="Sister 1 Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1Age"
                    label="Children 1 Age"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1StateOfHealth"
                    label="Brother 1 State of Health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1StateOfHealth"
                    label="Sister 1 State of Health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1StateOfHealth"
                    label="Children 1 State of Health"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother1CauseOfDeath"
                    label="Brother 1 Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister1CauseOfDeath"
                    label="Siter 1 Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children1CauseOfDeath"
                    label="Children 1 Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- 2 -->
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2Name"
                    label="Brother 2 Name"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2Name"
                    label="Sister 2 Name"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2Name"
                    label="Children 2 Name"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2Age"
                    label="Brother 2 Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2Age"
                    label="Sister 2 Age"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2Age"
                    label="Children 2 Age"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2StateOfHealth"
                    label="Brother 2 State of Health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2StateOfHealth"
                    label="Sister 2 State of Health"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2StateOfHealth"
                    label="Children 2State of Health"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.brother2CauseOfDeath"
                    label="Brother 2 Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.sister2CauseOfDeath"
                    label="Sister 2 Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="familyHistory.children2CauseOfDeath"
                    label="Children 2 Cause of Death"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.syphillis"
                    label="Syphillis"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.kidneyTrouble"
                    label="Kidney Trouble"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.committedSuicide"
                    label="Committed Suicide"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.kidney"
                    label="Kidney"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.cancer"
                    label="Cancer"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.asthma"
                    label="Asthma"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.hypertension"
                    label="Hypertension"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="familyHistory.psychiatric"
                    label="Psychiatric"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-checkbox
                    v-model="familyHistory.epilepsy"
                    label="Epilepsy"
                    dense
                  />
                </v-col>
                <v-col cols="4">
                  <v-checkbox
                    v-model="familyHistory.allergy"
                    label="Allergy"
                    dense
                  />
                </v-col>
                <v-col cols="4">
                  <v-checkbox
                    v-model="familyHistory.diabetes"
                    label="Diabetes"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <small>Personal History</small>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-for="(value, key) in personalHistory"
                  :key="key"
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <template
                    v-if="
                      key === 'numberOfTimesPregnant' ||
                      key === 'numberOfChildren' ||
                      key === 'numberOfAbortion'
                    "
                  >
                    <v-text-field
                      v-model="personalHistory[key]"
                      :label="formatLabel(key)"
                      type="text"
                    ></v-text-field>
                  </template>
                  <template v-else>
                    <v-checkbox
                      v-model="personalHistory[key]"
                      :label="formatLabel(key)"
                      :value="true"
                    ></v-checkbox>
                  </template>
                </v-col>
              </v-row>
              <!-- Occupational History Update -->
              <v-row>
                <v-col>
                  <small>Occupational History</small>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-checkbox
                    v-model="occupationalHistory.isAdvised"
                    label="Advised"
                    dense
                  />
                </v-col>
                <v-col v-if="occupationalHistory.isAdvised" cols="6">
                  <v-text-field
                    v-model="occupationalHistory.advisedAnswer"
                    label="If yes Describe"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-checkbox
                    v-model="occupationalHistory.isAccident"
                    label="Have you had accidents or injuries"
                    dense
                  />
                </v-col>
                <v-col v-if="occupationalHistory.isAccident" cols="6">
                  <v-text-field
                    v-model="occupationalHistory.accidentAnswer"
                    label="If Yes, Give details"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="5">
                  <v-checkbox
                    v-model="occupationalHistory.isHospitalized"
                    label="Have you ever been hospitalized ?"
                    dense
                  />
                </v-col>
                <v-col v-if="occupationalHistory.isHospitalized" cols="3">
                  <v-text-field
                    v-model="occupationalHistory.hospitalizedIn"
                    label="Where ?"
                    dense
                  ></v-text-field>
                </v-col>
                <v-col v-if="occupationalHistory.isHospitalized" cols="4">
                  <v-text-field
                    v-model="occupationalHistory.hospitalizedReason"
                    label="Why ? "
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="occupationalHistory.isCholera"
                    label="Cholera"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-menu
                    ref="menuCholera"
                    v-model="menuCholera"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="occupationalHistory.choleraAt"
                        label="Cholera Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="occupationalHistory.choleraAt"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menuCholera = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.menuCholera.save(occupationalHistory.choleraAt)
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="occupationalHistory.isInfluenza"
                    label="Influenza"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-menu
                    ref="menuInfluenza"
                    v-model="menuInfluenza"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="occupationalHistory.influenzaAt"
                        label="Influenza Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="occupationalHistory.influenzaAt"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menuInfluenza = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.menuInfluenza.save(
                            occupationalHistory.influenzaAt
                          )
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="occupationalHistory.isTetanus"
                    label="Tetanus"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-menu
                    ref="menuTetanus"
                    v-model="menuTetanus"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="occupationalHistory.tetanusAt"
                        label="Tetanus Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="occupationalHistory.tetanusAt"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menuTetanus = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.menuTetanus.save(occupationalHistory.tetanusAt)
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="occupationalHistory.isTyphoid"
                    label="Typhoid"
                    dense
                  />
                </v-col>
                <!-- typhoid -->
                <v-col cols="3">
                  <v-menu
                    ref="menuTyphoid"
                    v-model="menuTyphoid"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="occupationalHistory.typhoidAt"
                        label="Typhoid Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="occupationalHistory.typhoidAt"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menuTyphoid = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.menuTyphoid.save(occupationalHistory.typhoidAt)
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <!-- /typhoid -->
              <v-row>
                <v-col cols="3">
                  <v-checkbox
                    v-model="occupationalHistory.isHepatitis"
                    label="Hepatitis"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-menu
                    ref="menuHepatitis"
                    v-model="menuHepatitis"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="occupationalHistory.hepatitisAt"
                        label="Hepatitis Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="occupationalHistory.hepatitisAt"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menuHepatitis = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.menuHepatitis.save(
                            occupationalHistory.hepatitisAt
                          )
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="3">
                  <v-checkbox
                    v-model="occupationalHistory.isMumps"
                    label="Mumps"
                    dense
                  />
                </v-col>
                <v-col cols="3">
                  <v-menu
                    ref="menuMumps"
                    v-model="menuMumps"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="occupationalHistory.mumpsAt"
                        label="Mumps Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="occupationalHistory.mumpsAt"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menuMumps = false">
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.menuMumps.save(occupationalHistory.mumpsAt)
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>

              <!--  -->
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="occupationalHistory.isRightHanded"
                    label="Right Handed?"
                    dense
                  />
                </v-col>
                <v-col>
                  <v-checkbox
                    v-model="occupationalHistory.isLeftHanded"
                    label="Left Handed?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="occupationalHistory.isRadioactive"
                    label="Have you ever worked with Radioactive Materials ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="py-0">
                  <v-checkbox
                    v-model="occupationalHistory.isRefuseEmployment"
                    label="Have you ever refused employment with BFP because of your Health / Other Reason ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="occupationalHistory.isRefuseEmployment"
                  class="py-0"
                >
                  <v-text-field
                    v-model="occupationalHistory.refuseEmploymentDetails"
                    label="If yes, Give details :"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="occupationalHistory.isSensitiveToChemical"
                    label="Sensitive to Chemical , Dust , Sunlight ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="occupationalHistory.isInabilityAssumePosition"
                    label="Inability to assume certain positions ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="occupationalHistory.isOtherMedicalReason"
                    label="Other medical reasons ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="py-0">
                  <v-checkbox
                    v-model="occupationalHistory.isDisqualifiedFromWork"
                    label="Have you ever been disqualified from work due to physical or mental reason ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="occupationalHistory.isDisqualifiedFromWork"
                  class="py-0"
                >
                  <v-text-field
                    v-model="occupationalHistory.disqualifiedWorkDetail"
                    label="If Yes, Give reasons : "
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="occupationalHistory.numberOfJobsPastThreeYears"
                    label="Number of Jobs in the Past Three Years ?"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="occupationalHistory.longestPeriodJob"
                    label="Longest Period in Job ?"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="occupationalHistory.usualOccupation"
                    label="What is your usual Occupation ?"
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="py-0">
                  <v-checkbox
                    v-model="occupationalHistory.isConsultedByPhysician"
                    label="Have you ever consulted/ been treated by Physician or other practitioners within the last 5 years?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="occupationalHistory.isConsultedByPhysician"
                  class="py-0"
                >
                  <v-text-field
                    v-model="occupationalHistory.consultedPhysicianDetail"
                    label="If Yes, Give Details and Data : "
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="py-0">
                  <v-checkbox
                    v-model="occupationalHistory.hasSelfMedication"
                    label="Have you tried Self Medications ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="occupationalHistory.hasSelfMedication"
                  class="py-0"
                >
                  <v-text-field
                    v-model="occupationalHistory.selfMedicationDetail"
                    label="If Yes, Give Details : "
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="py-0">
                  <v-checkbox
                    v-model="occupationalHistory.hasMentalComplaints"
                    label="Have you had any Physical or Mental Complaints at presents ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="occupationalHistory.hasMentalComplaints"
                  class="py-0"
                >
                  <v-text-field
                    v-model="occupationalHistory.mentalComplaintsDetail"
                    label="If Yes, Give Details : "
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="">
                  <v-checkbox
                    v-model="occupationalHistory.isAppliedAtBFP"
                    label="Have you ever Applied to BFP ?"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col v-if="occupationalHistory.isAppliedAtBFP" class="">
                  <v-checkbox
                    v-model="occupationalHistory.isExaminedByMedical"
                    label="Have you been Examined by a Medical Officer"
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col v-if="occupationalHistory.isAppliedAtBFP" class="">
                  <v-menu
                    ref="menuOfLastExam"
                    v-model="menuOfLastExam"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="occupationalHistory.dateOfLastExamination"
                        label="Date Of Last Examination"
                        prepend-icon="mdi-calendar"
                        readonly
                        dense
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="occupationalHistory.dateOfLastExamination"
                      no-title
                      scrollable
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="menuOfLastExam = false"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="
                          $refs.menuOfLastExam.save(
                            occupationalHistory.dateOfLastExamination
                          )
                        "
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="occupationalHistory.neuropsychiatricExam"
                    label="Neuropsychiatric Exam  "
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    v-model="occupationalHistory.neuropsychiatricExamResult"
                    label="Neuropsychiatric Exam Result (Check if Passed)"
                    dense
                  />
                </v-col>
              </v-row>
            </div>
            <v-btn @click="submitHandler" color="primary">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// helpers
import validateString from "@/_common/helpers/validateString.js";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("navigation");
const { mapGetters: mapAuthGetters } = createNamespacedHelpers("auth");

export default {
  data: () => ({
    dialog: false,
    menu: false,
    menuCholera: false,
    menuInfluenza: false,
    menuTetanus: false,
    menuTyphoid: false,
    menuHepatitis: false,
    menuMumps: false,
    menuOfLastExam: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    familyHistory: {
      fatherName: "",
      fatherAge: "",
      fatherStateOfHealth: "",
      fatherCauseOfDeath: "",
      motherName: "",
      motherAge: "",
      motherStateOfHealth: "",
      motherCauseOfDeath: "",
      spouseName: "",
      spouseAge: "",
      spouseStateOfHealth: "",
      spouseCauseOfDeath: "",

      brother1Name: "",
      brother1Age: "",
      brother1StateOfHealth: "",
      brother1CauseOfDeath: "",

      brother2Name: "",
      brother2Age: "",
      brother2StateOfHealth: "",
      brother2CauseOfDeath: "",

      sister1Name: "",
      sister1Age: "",
      sister1StateOfHealth: "",
      sister1CauseOfDeath: "",

      sister2Name: "",
      sister2Age: "",
      sister2StateOfHealth: "",
      sister2CauseOfDeath: "",

      children1Name: "",
      children1Age: "",
      children1StateOfHealth: "",
      children1CauseOfDeath: "",

      children2Name: "",
      children2Age: "",
      children2StateOfHealth: "",
      children2CauseOfDeath: "",

      syphillis: false,
      cancer: false,
      epilepsy: false,
      kidney: false,
      kidneyTrouble: false,
      asthma: false,
      allergy: false,
      psychiatric: false,
      committedSuicide: false,
      hypertension: false,
      diabetes: false,
    },
    personalHistory: {
      haveBeenPregnant: false,
      numberOfTimesPregnant: 0,
      numberOfChildren: 0,
      hadAbortion: false,
      numberOfAbortion: 0,
      wornEyeglasses: false,
      wornHearingAid: false,
      syphillis: false,
      fracture: false,
      suicide: false,
      footTrouble: false,
      diphtheria: false,
      rheumaticFever: false,
      measles: false,
      mumps: false,
      chickenPox: false,
      whoopingCough: false,
      tuberculosis: false,
      pneumonia: false,
      asthma: false,
      jaundice: false,
      earDischarge: false,
      goiter: false,
      epilepsy: false,
      veneralDisease: false,
      knockedKnee: false,
      depression: false,
      pyorrhea: false,
      arthritis: false,
      lossOfMemory: false,
      nervousness: false,
      sinusitis: false,
      bedWetting: false,
      wornBrace: false,
      wornArtificialEyes: false,
      paralysis: false,
      serumReaction: false,
      liveWithTuberculosis: false,
      stuttered: false,
      gallBladder: false,
      severeHeadache: false,
      dizziness: false,
      chronic: false,
      palpitation: false,
      cyst: false,
      painfulUrination: false,
      albuminUrine: false,
      weightLoss: false,
      jointDeformity: false,
      lossOfArm: false,
      painInShoulder: false,
      motionSickness: false,
      shortnessOfBreath: false,
      liverDisorder: false,
      terrifyingNightmare: false,
      sleepingTrouble: false,
      alcoholism: false,
      painInTheChest: false,
      severeIndigestion: false,
      rectalDisease: false,
      diarrhea: false,
    },
    occupationalHistory: {
      isAdvised: true,
      advisedAnswer: "",
      isAccident: true,
      accidentAnswer: "",
      isHospitalized: true,
      hospitalizedIn: "",
      hospitalizedReason: "",

      isCholera: false,
      choleraAt: "",
      isInfluenza: false,
      fluenzaAt: "",
      isTetanus: false,
      tetanusAt: "",
      isTyphoid: false,
      typhoidAt: "",
      isHepatitis: false,
      hepatitisAt: "",
      isMumps: false,
      mumpsAt: "",

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
  }),
  methods: {
    ...mapActions(["updatePersonal", "updateFamily", "updateOccupational"]),
    async submitHandler() {
      await this.updateFamily({
        personnelId: this.personnelId,
        data: this.familyHistory,
      });
      await this.updatePersonal({
        personnelId: this.personnelId,
        data: this.personalHistory,
      });
      await this.updateOccupational({
        personnelId: this.personnelId,
        data: this.occupationalHistory,
      });
      this.dialog = false;
    },
    open() {
      this.dialog = !this.dialog;
    },

    validateString(e) {
      validateString(e);
    },
    formatLabel(key) {
      // format label from camelCase to sentence case
      return key.replace(/([A-Z])/g, " $1").toLowerCase();
    },
  },
  computed: {
    ...mapGetters(["personnelDetails"]),
    ...mapAuthGetters(["userRoles"]),
    personnelId() {
      return this.personnelDetails.personnel.id;
    },
  },
  mounted() {
    this.familyHistory =
      this.personnelDetails.medicalRecord.medicalFamilyHistory;
    this.personalHistory =
      this.personnelDetails.medicalRecord.medicalPersonalHistory;
    delete this.personalHistory.id;
    delete this.personalHistory.personnelId;
    delete this.personalHistory.accountNo;
    delete this.personalHistory.rank;
    delete this.personalHistory.lname;
    delete this.personalHistory.fname;
    delete this.personalHistory.mname;
    delete this.personalHistory.extName;
    delete this.personalHistory.unit;
    delete this.personalHistory.designation;
    delete this.personalHistory.mobile;
    delete this.personalHistory.civilStatus;
    delete this.personalHistory.gender;
    delete this.personalHistory.createdAt;
    delete this.personalHistory.updatedAt;
  },
};
</script>

<style></style>
