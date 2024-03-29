/* import apiClient from '../' */
import axios from "axios";
import store from "../../store";

const apiUrl = "http://localhost:8000/api";

export default {
  async getAddressesEvent() {
    return await axios.get(
      `https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json`
    );
  },
  async registerEvent(payload) {
    await axios.post(`${apiUrl}/user/register`, payload, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  },
  async loginEvent(payload) {
    return await axios.post(`${apiUrl}/user/login`, payload, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  },
  async deleteUser(payload) {
    await axios.delete(
      `${apiUrl}/user/deleteUser/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
  },
  async forgotEvent(payload) {
    return await axios.post(`${apiUrl}/user/forgot`, payload, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  },
  async changePassword(payload) {
    console.log(payload)
    await axios.post(`${apiUrl}/user/changePassword`, payload, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  },
  async getCurrentUser(payload) {
    console.log("TOKEN", localStorage.getItem("token"));
    return await axios.post(
      `${apiUrl}/user/currentUser`,
      { id: payload },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
  },
  async getUsers() {
    return await axios.get(
      `${apiUrl}/user/getUsers`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
  },
  async isAuthenticated() {
    if (store.state.auth.auth.loggedIn) return true;
  },
};
