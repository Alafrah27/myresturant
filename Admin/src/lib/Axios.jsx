import axios from "axios";

const url = import.meta.env.VITE_API_URL;
export const axiosInstance = axios.create({
  baseURL: `${url}/api/v1`,
  withCredentials: true,
});
