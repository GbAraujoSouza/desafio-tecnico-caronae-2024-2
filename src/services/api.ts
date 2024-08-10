import axios from "axios";

const api = axios.create({
  baseURL: "https://mocki.io/v1/753cf50d-4bec-427f-bd07-e49387240ee3",
});

export default api;
