import axios from "axios";

// const url = "https://myresturant-1.onrender.com";
const url = "http://localhost:4000";
export const axiosInstance = axios.create({
  baseURL: `${url}/api/v1`,
  withCredentials: true,
});
