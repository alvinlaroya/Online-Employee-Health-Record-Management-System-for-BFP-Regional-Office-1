/* import apiClient from '../' */
import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api";

export default {
  async getCaseEvent() {
    return await axios.get(`${apiUrl}/case/getCases`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  },

  async searchCaseEvent(payload) {
    return await axios.post(
      `${apiUrl}/case/searchCase`,
      { search: payload },
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

  async addCaseEvent(payload) {
    return await axios.post(`${apiUrl}/case/addCase`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  },

  async updateCaseEvent(payload) {
    return await axios.put(`${apiUrl}/case/updateCase/${payload.id}`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
  },
};
