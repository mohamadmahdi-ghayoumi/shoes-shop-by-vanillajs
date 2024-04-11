import { getProductByBrand } from "../api/get/getProducts";
import { renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { El } from "../utils/create-element";
import { brandPage } from "./brandPage";
// import { ProductDetails } from "./test-card";

export function brandchange(brand) {
  getProductByBrand(brand.brand).then((brandData) => {
    const brand_data = JSON.parse(JSON.stringify(brandData)).data;
    console.log(brand_data);

    // console.log(` pro = ${product}`)
    console.log();

    element
      .querySelector("#product-details")
      .append(renderProducts({ brand_data }));
    // getCommentsByProductId(productId).then((comments) => {
    //   element
    //     .querySelector("#comments-details")
    //     .append(ProductComments({ comments }));
    // });
  });
  const element = El({
    element: "div",
    children: [
      El({ element: "div", id: "product-details" }),
      // El({ element: "div", id: "comments-details" }),
      // El({
      //   element: "div",
      //   id: "comment-form",
      //   className: "md:w-1/2 m-6",
      //   children: [
      //     CommentForm({
      //       productId,
      //       querySelectorString: "#comments-details>ul",
      //     }),
      //   ],
      // }),
    ],
  });
  // Promise.all([getProductById(data.id), getCommentsByProductId(data.id)]).then(
  //   (values) => {
  //     element.append(
  //       ProductDetails({ product: values[0] }),
  //       ProductComments({ comments: values[1] })
  //     );
  //   }
  // );
  return element;
}
