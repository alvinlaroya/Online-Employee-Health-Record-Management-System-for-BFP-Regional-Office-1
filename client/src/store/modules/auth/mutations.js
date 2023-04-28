import { SET_AUTH_INFO, SET_USER_ROLES, LOG_OUT, SET_ADDRESSES, SET_LOGIN_FAILED } from '../../mutation-types'

export default {
  [SET_ADDRESSES](state, data) {
    state.addresses = data
  },
  [SET_AUTH_INFO](state, data) {
    state.user = data
    state.loggedIn = true
  },
  [SET_USER_ROLES](state, data) {
    state.roles = data
  },
  [LOG_OUT](state, data) {
    state.user = data;
    state.loggedIn = false
    state.hasLoginFail = false
  },
  [SET_LOGIN_FAILED](state, data) {
    state.hasLoginFail = data
  }
}