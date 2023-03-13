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

export const addPersonnel = ({ commit }, payload) => {

}
