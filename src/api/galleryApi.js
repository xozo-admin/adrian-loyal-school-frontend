import axios from "axios";

const API = axios.create({
  baseURL: "https://arun9361499299.pythonanywhere.com/api",
});

export const getGallery = () => API.get("/gallery");
