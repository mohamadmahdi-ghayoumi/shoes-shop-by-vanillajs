// import { getProducts } from "../api/get/getProducts";
// import { cartproduct } from "../components/cartproduct/cartproduct";
// import { El } from "../utils/create-element";
// // import { productcarts } from "../widget/productcarts";

// export function home() {
//   const Element = El({
//     element: "div",
//     className: "flex flex-wrap gap-[6px] m-[24px] mb-[6px] justify-center items-center",
//     // className : "grid grid-cols-2 mb-[6px] mt-[24px]"
//   });
//   getProducts().then((carts) => {
//     carts.forEach((product) => {
//       const productCard = cartproduct({ product });
//       Element.append(productCard);
//     });
//     console.log(carts)
//   });
  
//   return Element
//   // return El({
//   //   element: "a",
//   //   className: "",
//   //   href: "/login",
//   //   innerText: "gnfgn",
//   // });
// }
