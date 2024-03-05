import axios from "axios";
console.log(process.env.REACT_APP_BASE_URL)
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // added to fix CORS issue
    },
})