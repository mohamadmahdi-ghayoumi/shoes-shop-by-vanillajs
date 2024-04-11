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
  if (brand == "all") {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
    return response.data;
  }
};

export const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

export const getProductsWishlist = async (brand) => {
  if (brand == "all") {
    const response = await axios.get(`${BASE_URL}/wishlist`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/wishlist?brand=${brand}`);
    return response.data;
  }
};


export async function getWishlistProduct(filter) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].wishlist;
  // console.log(filter);
  if (filter != 'all') {
  const final = response.filter((item) => item.brand == filter);
  return final;
  } else {
  return response;
  }
  }