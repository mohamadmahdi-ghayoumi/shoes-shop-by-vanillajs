import { buttonBrand } from "../components/homePage/button/button";
import { El } from "../utils/create-element";

export function buttonsBrand() {
  return El({
    element: "div",
    className:
      "flex gap-[28px] flex-col h-[234px] justify-center items-center p-[24px]",
    children: [
      El({
        element: "div",
        className: "flex gap-[41px] mt-[12px] mx[9px]",
        children: [
          buttonBrand({
            logo: "icon-[simple-icons--nike]",
            brand: "Nike",
            className: "items-center justify-center",
          }),
          buttonBrand({
            logo: "icon-[gg--adidas]",
            brand: "Adidas",
            className: "items-center justify-center",
          }),
          buttonBrand({
            logo: "icon-[simple-icons--puma]",
            brand: "Puma",
            className: "items-center justify-center",
          }),
          buttonBrand({
            logo: "icon-[simple-icons--reebok]",
            brand: "Asics",
            className: "items-center justify-center",
          }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-[41px] mb-[12px] mx[9px]",
        children: [
          buttonBrand({
            logo: "icon-[simple-icons--nike]",
            brand: "Reebok",
            className: "items-center justify-center",
          }),
          buttonBrand({
            logo: "icon-[simple-icons--newbalance]",
            brand: "New Balance",
            className: " justify-center",
          }),
          buttonBrand({
            logo: "icon-[gg--adidas]",
            brand: "Converse",
            className: "items-center justify-center",
          }),

          buttonBrand({
            logo: "icon-[icon-park-outline--more-two]",
            brand: "more",
            className: "items-center justify-center",
          }),
        ],
      }),
    ],
  });
}
