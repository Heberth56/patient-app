import axios from "axios";
import { API_URL } from "../../config";
const createAxios = axios.create({
  baseURL: API_URL,
});
createAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("chiri_token");
  if (token) config.headers.Authorization = `Bearer ${token || ""}`;
  return config;
});

export default createAxios;
