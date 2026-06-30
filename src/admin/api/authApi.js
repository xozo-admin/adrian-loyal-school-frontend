import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api";

export const loginAdmin = (data) => axios.post(`${API}/auth/login`, data);
