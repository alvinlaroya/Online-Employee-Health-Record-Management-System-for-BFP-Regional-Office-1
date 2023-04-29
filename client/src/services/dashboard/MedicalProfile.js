/* import apiClient from '../' */
import axios from "axios";

/* const apiUrl = "http://127.0.0.1:8000/api"; */
const apiUrl = "http://localhost:8000/api/medical-history";

export default {
    async updateFamily({ personnelId, data }) {
        console.log("Service", { personnelId, data })
        await axios.put(
            `${apiUrl}/updateMedicalFamilyHistory/${personnelId}`, data,
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
    async updatePersonal({ personnelId, data }) {
        console.log("Service", { personnelId, data })
        await axios.put(
            `${apiUrl}/updateMedicalPersonalHistory/${personnelId}`, data,
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
    async updateOccupational({ personnelId, data }) {
        console.log("Service", { personnelId, data })
        await axios.put(
            `${apiUrl}/updateMedicalOccupationalHistory/${personnelId}`, data,
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
};
