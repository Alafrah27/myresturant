import axios from "axios";

const url = import.meta.env.VITE_API_URL;
export const axiosInstance = axios.create({
  baseURL: `${url}/api/v1`,
  withCredentials: true,
});
// "https://flowerandfirewood.onrender.com/api/v1"
// "http://localhost:3000/api/v1"
