import axios from "axios";

const API = axios.create({
  baseURL: "https://shopsphere-backend-2-2wa8.onrender.com",
});

export default API;
