import axios from "../../node_modules/axios";

export const instance = axios.create({
  baseURL: "http://161.35.27.123/",
});
