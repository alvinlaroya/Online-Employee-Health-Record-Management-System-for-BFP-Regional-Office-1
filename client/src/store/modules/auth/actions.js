import EventService from "@/services/auth/Register.js";
import * as types from "@/store/mutation-types";
import router from "@/router";

export const getAddresses = ({ commit }) => {
  EventService.getAddressesEvent()
    .then((response) => {
      const barangayList =
        response.data["01"].province_list["PANGASINAN"].municipality_list[
          "SISON"
        ].barangay_list;
      commit(types.SET_ADDRESSES, barangayList);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const register = ({ dispatch, state }, payload) => {

  const name = `${state.user.fname} ${state.user.lname}`

  dispatch('navigation/addTransactionLog', {
    name,
    log: "add user"
  }, { root: true })

  EventService.registerEvent(payload)
    .then((response) => {
      //
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = async ({ commit, dispatch, state }, payload) => {
  /* console.log("DELETE STATE", rootState.navigation.dashboard) */

  const name = `${state.user.fname} ${state.user.lname}`

  dispatch('navigation/addTransactionLog', {
    name,
    log: "delete user"
  }, { root: true })

  await EventService.deleteUser(payload);
  commit("DELETE_USER", payload)
}

export const forgot = async ({ commit, dispatch }, payload) => {

  dispatch('navigation/addTransactionLog', {
    name: payload.email,
    log: `forgot password for ${payload.email}`
  }, { root: true })

  const response = await EventService.forgotEvent(payload);
  commit(types.SET_FORGOT_PASSWORD, response.data.data.newPassword)
};

export const changePassword = async ({ state, dispatch }, payload) => {

  /*  const name = `${state.user.fname} ${state.user.lname}`
 
   dispatch('navigation/addTransactionLog', {
     name,
     log: "change password"
   }, { root: true }) */

  console.log("PAYLOAD EMAIL", payload)
  await EventService.changePassword(payload);
}

export const login = async ({ commit }, payload) => {
  await EventService.loginEvent(payload)
    .then(async (response) => {
      if (response.data == "Not verified user")
        return commit(types.SET_LOGIN_FAILED, true);
      localStorage.setItem("token", response.data.token);
      await EventService.getCurrentUser(response.data.id).then(
        async (currentResponse) => {
          commit(types.SET_AUTH_INFO, currentResponse.data.user);
          commit(types.SET_USER_ROLES, currentResponse.data.roles);
        }
      );
      router.replace("/dashboard");
    })
    .catch((error) => {
      console.log(error);
      commit(types.SET_LOGIN_FAILED, true);
    });
};

export const logOutUser = async ({ commit }) => {
  localStorage.removeItem("token");
  commit(types.LOG_OUT, {});
  router.replace("/");
};

export const getUsers = async ({ commit }) => {
  const response = await EventService.getUsers();
  console.log("RESPOONSE USERS", response)
  commit("GET_ALL_USERS", response.data.data.rows);
}

