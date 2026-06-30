import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api";

export const getHomeUpdates = () => axios.get(`${API}/home/updates`);

export const createHomeUpdate = (data) =>
  axios.post(`${API}/home/updates`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateHomeUpdate = (id, data) =>
  axios.put(`${API}/home/updates/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteHomeUpdate = (id) => axios.delete(`${API}/home/updates/${id}`);

export const getHomeAchievements = () => axios.get(`${API}/home/achievements`);

export const createHomeAchievement = (data) =>
  axios.post(`${API}/home/achievements`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateHomeAchievement = (id, data) =>
  axios.put(`${API}/home/achievements/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteHomeAchievement = (id) =>
  axios.delete(`${API}/home/achievements/${id}`);
