import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-application-back-end-3q12.onrender.com/api",
  withCredentials: true,
});