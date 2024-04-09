import { buttonBrand } from "../components/button/button";
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
          buttonBrand({ logo: "icon-[simple-icons--nike]", brand: "Nike" }),
          buttonBrand({ logo: "icon-[gg--adidas]", brand: "Adidas" }),
          buttonBrand({ logo: "icon-[simple-icons--puma]", brand: "Puma" }),
          buttonBrand({ logo: "icon-[simple-icons--reebok]", brand: "Reebok" }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-[41px] mb-[12px] mx[9px]",
        children: [
          buttonBrand({ logo: "icon-[simple-icons--nike]", brand: "Nike" }),
          buttonBrand({
            logo: "icon-[simple-icons--newbalance]",
            brand: "New Ba..",
          }),
          buttonBrand({ logo: "icon-[gg--adidas]", brand: "Adidas" }),

          buttonBrand({
            logo: "icon-[icon-park-outline--more-two]",
            brand: "more",
          }),
        ],
      }),
    ],
  });
}
