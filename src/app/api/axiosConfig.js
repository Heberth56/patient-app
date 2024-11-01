import axios from "axios";
const createAxios = axios.create({
  baseURL: "http://127.0.0.1:8000",
});
createAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("chiri_token");
  if (token) config.headers.Authorization = `Bearer ${token || ""}`;
  return config;
});

export default createAxios;
