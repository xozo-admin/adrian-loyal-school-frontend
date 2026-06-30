import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api";

export const getGallery = () => {
  return axios.get(`${API}/gallery`);
};

export const uploadGallery = (data) => {
  return axios.post(`${API}/gallery`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateGallery = (id, data) => {
  return axios.put(`${API}/gallery/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteGallery = (id) => {
  return axios.delete(`${API}/gallery/${id}`);
};
