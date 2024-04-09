import axios from "axios";
import { BASE_URL } from "../const";

export const getUser = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  console.log(response.data[0].id);
  return response.data;
};
