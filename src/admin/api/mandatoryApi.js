import axios from "axios";

const API = "https://arun9361499299.pythonanywhere.com/api";

export const getMandatoryDocuments = () =>
  axios.get(`${API}/mandatory-documents`);

export const createMandatoryDocument = (data) =>
  axios.post(`${API}/mandatory-documents`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateMandatoryDocument = (id, data) =>
  axios.put(`${API}/mandatory-documents/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deleteMandatoryDocument = (id) =>
  axios.delete(`${API}/mandatory-documents/${id}`);
