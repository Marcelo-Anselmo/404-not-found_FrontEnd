import axios from "axios";

export const Api = axios.create({
    baseURL: "https://autentica-ulife.onrender.com/api",
    timeout: 5000,
});
