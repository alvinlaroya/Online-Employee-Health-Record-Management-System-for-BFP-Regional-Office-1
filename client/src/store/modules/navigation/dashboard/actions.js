import EventService from "@/services/dashboard/Personnel.js";
import PsychEventService from "@/services/dashboard/Psych.js";
import DentalEventService from "@/services/dashboard/Dental";
import PhysicalEventService from "@/services/dashboard/Physical";
import FamilyEventService from "@/services/dashboard/MedicalProfile";
import PersonalEventService from "@/services/dashboard/MedicalProfile";
import UpdatePersonnelEventService from "@/services/dashboard/updatePersonnel";


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
export const updatePersonal= async ({ commit, dispatch }, payload) => {
    await PersonalEventService.updatePersonal(payload)
    await dispatch("viewDetails", payload.personnelId)
}
export const updatePersonnel= async ({ commit, dispatch }, payload) => {
    await UpdatePersonnelEventService.updatePersonnel(payload)
    await dispatch("viewDetails", payload.personnelId)
}

// get cases

// export const getCases = ({ commit }, payload) => {
//     console.log("PAYLOAD FROM VUEX ACTION: ", payload)


//     EventService.getCases()
//         .then((response) => {
//             console.log(response.data.cases)
//             commit("SET_CASES", response.data.cases)
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };