import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api";

export const getFacultyProfiles = () => axios.get(`${API}/about/faculty`);

export const createFacultyProfile = (data) =>
  axios.post(`${API}/about/faculty`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateFacultyProfile = (id, data) =>
  axios.put(`${API}/about/faculty/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteFacultyProfile = (id) =>
  axios.delete(`${API}/about/faculty/${id}`);

export const getCampusTourImages = () =>
  axios.get(`${API}/about/campus-tour`);

export const createCampusTourImage = (data) =>
  axios.post(`${API}/about/campus-tour`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateCampusTourImage = (id, data) =>
  axios.put(`${API}/about/campus-tour/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteCampusTourImage = (id) =>
  axios.delete(`${API}/about/campus-tour/${id}`);
