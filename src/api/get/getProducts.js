import axios from "axios";
import { BASE_URL } from "../const";



export const getProducts = async (brand) => {
  if (brand == "all") {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } else {
    const response = await axios.get(`${BASE_URL}/products?brand=${brand}`);
    return response.data;
  }
};

export const getProductsSearch = async (filter) => {
  const response = await axios.get(`${BASE_URL}/products?q=${filter}`);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};



export async function getWishlistProduct(filter) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].wishlist;
  // console.log(filter);
  if (filter != "all") {
    const final = response.filter((item) => item.brand == filter);
    return final;
  } else {
    return response;
  }
}

export async function getCardProduct(id) {
  if(!id){

    const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;
  // console.log(res.data[0].cart);

    return response;
  }else {
    const res = await axios.get(`${BASE_URL}/users`);
    const response = res.data[0].cart;
    const dataDelete = response.filter((item) => item.id != id);
    // console.log(res.data[0].cart);
    return response;

  }
  
}




export async function getCardProductForOrder() {
  
  const res = await axios.get(`${BASE_URL}/users`);
const response = res.data[0].cart;

  return response;
}


export async function getOrderProduct() {

    const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].orders;
 
    return response;

  }


  export async function getItemForEditCard(value) {
    const res = await axios.get(`${BASE_URL}/users`);
    const response = res.data[0].cart;
    
    const final = response.filter((item) => item.value == value);
    return final[0];
    }