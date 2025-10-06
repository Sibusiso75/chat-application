import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-back-end-3q12.onrender.com/api" : "/api",
  withCredentials: true,
});