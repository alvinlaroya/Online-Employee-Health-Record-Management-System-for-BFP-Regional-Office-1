export default {
    SET_PERSONNELS(state, data) {
        state.personnels = data
    },
    SET_PERSONNEL_DETAILS(state, data) {
        state.personnelDetails = data;
    },
    ADD_PERSONNELS(state, payload) {
        state.personnels.unshift(payload)
    },

    // SET_CASES(state, data) {
    //     state.cases = data
    // },



}