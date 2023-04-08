import axios from "axios";

/* const apiUrl = "http://127.0.0.1:8000/api"; */
const apiUrl = "http://localhost:8000/api/dental";

export default {
    async UpdateDental(id, patientData) {
            return await axios.put(
                `${apiUrl}/updateDental/${id}`, patientData,
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
