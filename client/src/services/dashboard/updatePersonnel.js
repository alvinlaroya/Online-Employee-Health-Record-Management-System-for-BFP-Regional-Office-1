/* import apiClient from '../' */
import axios from "axios";

/* const apiUrl = "http://127.0.0.1:8000/api"; */
const apiUrl = "http://localhost:8000/api/personnel";

export default {
    async updatePersonnel({ personnelId, data }) {
        console.log("Service", { personnelId, data})
        await axios.patch(
            `${apiUrl}/updatePersonnel/${personnelId}`, data,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                },
            }
        );
    }
};
