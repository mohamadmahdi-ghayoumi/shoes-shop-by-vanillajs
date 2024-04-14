import axios from "axios";
import { BASE_URL } from "../const";

export const getUser = async (brand) => {
  // const response = await axios.get(`${BASE_URL}/users`);
  // console.log(response.data);
  // return response.data;
  if (brand == "all") {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/users/?brand=${brand}`);
    // console.log(response.data[0].wishlist)
    // console.log(brand)

    return response.data;
  }
};
