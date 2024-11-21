import axios from "axios";

//export const API_BASE_URL = "http://localhost:5454";
//export const API_BASE_URL = "http://ecomverse-backend-production-c9e6.up.railway.app";
export const API_BASE_URL = "https://ecomverse-backend-production-c9e6.up.railway.app";

const jwt = localStorage.getItem("jwt");



export const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})
