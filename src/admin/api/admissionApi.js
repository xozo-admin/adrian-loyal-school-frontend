import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api";

export const getAdmissions = () => axios.get(`${API}/admissions`);
export const deleteAdmission = (id) => axios.delete(`${API}/admissions/${id}`);
