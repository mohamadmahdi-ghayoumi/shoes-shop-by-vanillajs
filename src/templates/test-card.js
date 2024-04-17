// import { getProductByBrand } from "../api/get/getProducts";
import { RenderProducts } from "../components/Home/RenderProducts/RenderProducts";
import { El } from "../utils/create-element";
import { brandPage } from "./brandPage";
// import { ProductDetails } from "./test-card";

export function brandchange(brand) {
  getProductByBrand(brand.brand).then((brandData) => {
    const brand_data = JSON.parse(JSON.stringify(brandData)).data;
    console.log(brand_data);
    element
      .querySelector("#product-details")
      .append(RenderProducts({ brand_data }));
  });
  const element = El({
    element: "div",
    children: [
      El({ element: "div", id: "product-details" }),
    ],
  });

  return element;
}
