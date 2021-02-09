import axios from "axios";

export const instance = axios.create({
  baseURL: "https://burger-builder-reac-default-rtdb.firebaseio.com",
});
