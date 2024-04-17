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
  console.log(`data: ${data}`);
  const wishlist = userData.wishlist.concat(data);
  let response = await axios.patch(`${BASE_URL}/users/1`, { wishlist });

  return response.data;
}

export async function editCart(value, operation) {
  const { data } = await axios.get(`${BASE_URL}/users/1`);

  if (data.cart.find((item) => item.value === value)) {
    const cart = data.cart;
    const itemIndex = cart.findIndex((item) => item.value === value);
    const newElement = cart[itemIndex];
    newElement.quantity =
      operation === "add"
        ? (+newElement.quantity + 1).toString()
        : (+newElement.quantity - 1).toString();

    newElement.totalPrice =
      operation === "add"
        ? newElement.totalPrice + newElement["price"]
        : newElement.totalPrice - newElement["price"];
    cart[itemIndex] = newElement;
    axios.patch(`${BASE_URL}/users/1`, { cart });
  } else {
    console.error("Product does not exist in cart!!");
  }
}


export async function addToOrder(data) {
  const { data: userData } = await axios.get(`${BASE_URL}/users/1`);
  console.log(`data: ${data}`);
  const orders = userData.orders.concat(data);
  let response = await axios.patch(`${BASE_URL}/users/1`, { orders });

  return response.data;
}



// export async function addToOrder(orders) {
//   let responseOrder = await axios.patch(`${BASE_URL}/users/1`, { orders });

//   return responseOrder;
// }

// export async function postProductWhislist(data) {
//   const response = await axios.post(`${BASE_URL}/wishlist`, data);
//   // console.log(response.data)
//   return response;
// }
