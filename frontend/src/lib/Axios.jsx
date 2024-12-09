import axios from "axios";

const url = "http://localhost:4000";
export const axiosInstance = axios.create({
  baseURL: `${url}/api/v1`,
  withCredentials: true,
});
// "https://flowerandfirewood.onrender.com/api/v1"
// "http://localhost:3000/api/v1"
