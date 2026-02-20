import axios from "axios";
// UTILS
import { API_URL } from "@/utils/constants";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
