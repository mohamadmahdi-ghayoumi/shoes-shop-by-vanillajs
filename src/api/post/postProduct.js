import axios from "axios";
import { BASE_URL } from "../const";


export async function addToCart(data) {
  const { data: userData } = await axios.get(`${BASE_URL}/users/1`);
  const cart = userData.cart.concat(data);
  let response = await axios.patch(`${BASE_URL}/users/1`, { cart });
  return response.data;
}

export async function addToWishlist(data) {
  const { data: userData } = await axios.get(`${BASE_URL}/users/1`);

  const wishlist = userData.wishlist.concat(data);
  let response = await axios.patch(`${BASE_URL}/users/1`, { wishlist });

  return response.data;
}




export async function addToOrder(orders) {

    const res = await axios.get(`${BASE_URL}/users`);
    const response = res.data[0].orders;
  
    // const dataDelete = response.filter((item) => item.value != value);
    // const cart = [...dataDelete];
    let responseOrder = await axios.patch(`${BASE_URL}/users/1`, { orders });
  
    return responseOrder;
  }
  

// export async function postProductWhislist(data) {
//   const response = await axios.post(`${BASE_URL}/wishlist`, data);
//   // console.log(response.data)
//   return response;
// }



