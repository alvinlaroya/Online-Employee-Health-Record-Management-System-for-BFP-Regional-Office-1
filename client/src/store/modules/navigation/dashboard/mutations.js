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
    SET_ALL_CASES(state, data) {
        state.cases = data
    },
    SET_ALL_PERSONNEL_CASES(state, data) {
        state.personnelCases = data
    },
    ADD_TRANSACTION_LOG(state, data) {
        state.transactionLogs.push(data);
    },
    SET_ALL_TRANSACTION_LOGS(state, data) {
        state.transactionLogs = data
    },
    SET_ALL_USERS(state, data) {
        state.users = data
    },
}