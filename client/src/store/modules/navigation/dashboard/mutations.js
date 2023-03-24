export default {
    SET_PERSONNELS(state, data) {
        state.personnels = data
    },
    ADD_PERSONNELS(state, payload) {
        state.personnels.unshift(payload)
    }

}