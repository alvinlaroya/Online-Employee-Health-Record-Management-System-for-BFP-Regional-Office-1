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

export const addPersonnels = ({ commit }, payload) => {
    console.log("PAYLOAD FROM VUEX ACTION: ", payload)

    EventService.addPersonnels(payload)
        .then((response) => {
            console.log(response.data.personnel)
            commit("ADD_PERSONNELS", payload)
        })
        .catch((error) => {
            console.log(error);
        });
}
