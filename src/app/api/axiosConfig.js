import axios from "axios";
const createAxios = axios.create({
  baseURL: "https://pattient-api.onrender.com",
});
createAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("chiri_token");
  if (token) config.headers.Authorization = `Bearer ${token || ""}`;
  return config;
});

export default createAxios;
