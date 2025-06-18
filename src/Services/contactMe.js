import API from "../api";

export const sendMessage = (formData)=> API.post("/api/contactMe",formData)