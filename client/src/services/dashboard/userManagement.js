/* import apiClient from '../' */
import axios from "axios";

/* const apiUrl = "http://127.0.0.1:8000/api"; */
const apiUrl = "http://localhost:8000/api/user/";

export default {
    async getTransactionLog() {
        return await axios.get(
            `${apiUrl}/transaction-logs`,
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
