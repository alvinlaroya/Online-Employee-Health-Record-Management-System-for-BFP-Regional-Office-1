import EventService from "@/services/dashboard/Personnel.js";
import PsychEventService from "@/services/dashboard/Psych.js";
import DentalEventService from "@/services/dashboard/Dental";
import PhysicalEventService from "@/services/dashboard/Physical";
import FamilyEventService from "@/services/dashboard/MedicalProfile";
import PersonalEventService from "@/services/dashboard/MedicalProfile";
import OccupationalEventService from "@/services/dashboard/MedicalProfile";
import UpdatePersonnelEventService from "@/services/dashboard/updatePersonnel";
import PtNotesEventService from "@/services/dashboard/PtNotes";
import CaseEventService from "@/services/dashboard/Case";


/* import * as types from "@/store/mutation-types"; */



// Personnel
export const getPersonnels = ({ commit }, payload) => {
    console.log("PAYLOAD FROM VUEX ACTION: ", payload)


    EventService.getPersonnels()
        .then((response) => {
            console.log(response.data.personnels.rows)
            commit("SET_PERSONNELS", response.data.personnels.rows)
        })
        .catch((error) => {
            console.log(error);
        });
};

export const viewDetails = ({ commit }, payload) => {
    EventService.viewPersonnelDetails(payload)
        .then((response) => {
            console.log("RESPONSE DETAILS", response.data)
            commit("SET_PERSONNEL_DETAILS", response.data.data)
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addPersonnels = ({ commit }, payload) => {
    const { formData, data } = payload
    console.log("PAYLOAD FROM VUEX ACTION: ", formData)

    EventService.addPersonnels(formData)
        .then((response) => {
            console.log(response.data.personnel)
            commit("ADD_PERSONNELS", data)
        })
        .catch((error) => {
            console.log(error);
        });
}
// End of Personnel actions



// Neuro Psych
export const updatePsych = async ({ commit, dispatch }, payload) => {
    await PsychEventService.updatePsych(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updateDental = async ({ commit, dispatch }, payload) => {
    await DentalEventService.updateDental(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updatePhysical = async ({ commit, dispatch }, payload) => {
    await PhysicalEventService.updatePhysical(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updateFamily = async ({ commit, dispatch }, payload) => {
    await FamilyEventService.updateFamily(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updatePersonal = async ({ commit, dispatch }, payload) => {
    await PersonalEventService.updatePersonal(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updateOccupational = async ({ commit, dispatch }, payload) => {
    await OccupationalEventService.updateOccupational(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updatePersonnel = async ({ commit, dispatch }, payload) => {
    await UpdatePersonnelEventService.updatePersonnel(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updatePtNotes = async ({ commit, dispatch }, payload) => {
    console.log("ACTION PAYLOAD", payload)
    await PtNotesEventService.updatePtNotes(payload)
    await dispatch("viewDetails", payload.personnelId)
}

export const getAllCases = async ({ commit }) => {
    const response = await CaseEventService.getAllCases()
    console.log("CASE RESPONSE", response.data.data)
    commit("SET_ALL_CASES", response.data.data)
}

export const getAllPersonnelsByCase = ({ commit }, payload) => {
    console.log("PAYLOAD FROM VUEX ACTION: ", payload)
    CaseEventService.getAllPersonnelsByCase(payload)
        .then((response) => {
            console.log(response.data.data.rows)
            commit("SET_ALL_PERSONNEL_CASES", response.data.data.rows)
        })
        .catch((error) => {
            console.log(error);
        });
};

