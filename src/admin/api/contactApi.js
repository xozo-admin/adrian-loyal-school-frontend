import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api";

export const getContactMessages = () => axios.get(`${API}/contact-messages`);
export const deleteContactMessage = (id) => axios.delete(`${API}/contact-messages/${id}`);
