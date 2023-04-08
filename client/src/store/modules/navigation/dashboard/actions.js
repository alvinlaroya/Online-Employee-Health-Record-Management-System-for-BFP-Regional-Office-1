import EventService from "@/services/dashboard/Personnel.js";
/* import * as types from "@/store/mutation-types"; */

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
