import axios from "axios";

const url = "https://myresturant-1.onrender.com";
export const axiosInstance = axios.create({
  baseURL: `${url}/api/v1`,
  withCredentials: true,
});
