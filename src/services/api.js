import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-fm4p.onrender.com"
})