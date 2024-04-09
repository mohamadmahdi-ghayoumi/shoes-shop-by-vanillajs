import axios from "axios";
import { BASE_URL } from "../const";

// export const getProducts = async () => {
//   const response = await axios.get(`${BASE_URL}/products`);
//   // console.log(response.data);
//   return response.data;
// };

// export const getProductsFilter = async (brand) => {
//   const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
//   return response.data;
// };

export const getProducts = async (brand) => {
  if(brand == "all"){
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;

  }
  else {
      const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
      return response.data;
  }
};
