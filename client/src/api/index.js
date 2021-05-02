import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

const loadUser = () => API.get("/api/auth");
const login = (formData) => API.post("/api/auth", formData);
const reg = (formData) => API.post("/api/user", formData);
const getHosps = () => API.get("/api/hospitals");
const addHosp = (formData) => API.post("/api/hospitals", formData);

export { loadUser, login, reg, getHosps, addHosp };
