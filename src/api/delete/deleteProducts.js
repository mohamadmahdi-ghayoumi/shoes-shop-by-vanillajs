import axios from "axios";
import { BASE_URL } from "../const";

// export async function deleteCardProduct(id) {
//   const res = await axios.get(`${BASE_URL}/users`);
//   const response = res.data[0].cart;
//   const dataDelete = response.filter((item) => item.id != id);
//   console.log(res.data[0].cart);
//   // if (filter != "all") {
//   //   const final = response.filter((item) => item.brand == filter);
//   //   return final;
//   // } else {
//   //   return response;
//   // }
//   return dataDelete;
// }

// export async function deleteCardProduct(id) {

//     const { data: userData } = await axios.get(`${BASE_URL}/users/1`);

//     const cart = userData.cart.concat(data);
//     let response = await axios.patch(`${BASE_URL}/users/1`, { cart });

//     return response.data;

// // console.log(`id = ${id}`)

// //   const res = await axios.get(`${BASE_URL}/users`);
// //   const response = res.data[0].wishlist;
// //     console.log(`response = ${response}`);

// //   // const dataDelete = response.filter((item) => item.id != id);
// //   console.log(`deletedata = ${dataDelete}`);
// //     let dataNew = await axios.patch(`${BASE_URL}/users/1`, { dataDelete });

// //   console.log(dataNew.data);
// //   // // if (filter != "all") {
// //   // //   const final = response.filter((item) => item.brand == filter);
// //   // //   return final;
// //   // // } else {
// //   // //   return response;
// //   // // }
// //   return dataNew.data;
// }

export async function deleteCardProduct(id) {
  console.log(`id = ${id}`);

  const res = await axios.get(`${BASE_URL}/users`);
  // console.log(res.data[0].cart);

  const response = res.data[0].cart;

  const dataDelete = response.filter((item) => item.id != id);
const cart =  [...dataDelete]


  // const { data: userData } = await axios.get(`${BASE_URL}/users/1`);

  // const cart = userData.cart.concat(data);
  let responseNew = await axios.patch(`${BASE_URL}/users/1`, { cart });


  return  responseNew;
}
