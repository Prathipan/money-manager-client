import axios from "axios";

const BASE_URL = "https://money-manager-api-p22q.onrender.com/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
