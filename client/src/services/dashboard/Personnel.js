/* import apiClient from '../' */
import axios from "axios";

/* const apiUrl = "http://127.0.0.1:8000/api"; */
const apiUrl = "http://localhost:8000/api/personnel";

export default {
    async getPersonnels() {
        return await axios.get(
            `${apiUrl}/getALlPersonnels`,
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

    async viewPersonnelDetails(personnelId) {
        return await axios.get(
            `${apiUrl}/viewDetails/${personnelId}`,
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

    async addPersonnels(payload) {
        return await axios.post(
            `${apiUrl}/addPersonnel`, payload,
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
    async deletePersonnel(payload) {
        await axios.delete(
            `${apiUrl}/deletePersonnel/${payload}`,
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
    async backupData() {
        window.location.href = `${apiUrl}/backupPersonnelsData`;
        /* setTimeout(() => {
            window.location.href = `${apiUrl}/backupDentalsData`;
        }, 1000);
        setTimeout(() => {
            window.location.href = `${apiUrl}/backupMedicalOccupationalHistoryData`;
        }, 1000);
        setTimeout(() => {
            window.location.href = `${apiUrl}/backupMedicalPersonalHistoryData`;
        }, 1000);
        setTimeout(() => {
            window.location.href = `${apiUrl}/backupPhysicalExaminationsData`;
        }, 1000); */
    },
};
