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
  console.log(data)

  // const res = await axios.get(`${BASE_URL}/users/1`);

  // const userData = res;
  // console.log(res.data.wishlist)
  // userData.data.wishlist.push(...data);
  // let response = await axios.patch(`${BASE_URL}/users/1`, {
  //   wishlist: userData.wishlist,
  // });
  // return response.data;
}

export async function editCart(value, operation) {
  // const { data } = await axios.get(`${BASE_URL}/users/1`);
  const response = await axios.get(`${BASE_URL}/users/1`);
  const data = response.data;
  console.log(data);
  const cart = data.cart;

  if (cart.find((item) => item.value === value)) {
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
  // const { data: userData } = await axios.get(`${BASE_URL}/users/1`);
  // const res = await axios.get(`${BASE_URL}/users/1`);
  // const userData = res.data;

  // console.log(`data: ${data}`);
  // const orders = userData.orders.concat(data);
  // let response = await axios.patch(`${BASE_URL}/users/1`, { orders });

  const res = await axios.get(`${BASE_URL}/users/1`);
  const userData = res.data;
  console.log(`data: ${userData}`);
  userData.orders.push(...data);
  let response = await axios.patch(`${BASE_URL}/users/1`, {
    orders: userData.orders,
  });
  return response.data;
}
