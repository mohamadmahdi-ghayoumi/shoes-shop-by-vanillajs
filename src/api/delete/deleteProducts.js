import axios from "axios";
import { BASE_URL } from "../const";



export async function deleteCardProduct( value) {

  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;

  const dataDelete = response.filter((item) => item.value != value);
  const cart = [...dataDelete];
  let responseNew = await axios.patch(`${BASE_URL}/users/1`, { cart });

  return responseNew;
}

export async function deleteCardProductForWishlist(idCard) {
  console.log(idCard)

  const res = await axios.get(`${BASE_URL}/users`);

  const response = res.data[0].wishlist;
  console.log(response)

  const dataDelete = response.filter((item) => item.id != idCard);
  console.log(dataDelete)

  const wishlist = [...dataDelete];
  let responseNew = await axios.patch(`${BASE_URL}/users/1`, { wishlist });

  return responseNew;
}
