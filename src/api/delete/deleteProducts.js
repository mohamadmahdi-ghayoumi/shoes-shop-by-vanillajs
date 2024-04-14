import axios from "axios";
import { BASE_URL } from "../const";

export async function deleteCardProduct(id) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;
  const dataDelete = response.filter((item) => item.id == id);
  console.log(res.data[0].cart);
  // if (filter != "all") {
  //   const final = response.filter((item) => item.brand == filter);
  //   return final;
  // } else {
  //   return response;
  // }
  return dataDelete;
}
