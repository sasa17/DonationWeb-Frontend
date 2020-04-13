import axios from "../../node_modules/axios";

export const instance = axios.create({
  baseURL: "http://localhost:8000/",
  // baseURL: "http://localhost:3000/"
});
