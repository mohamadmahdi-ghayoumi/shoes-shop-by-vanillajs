import { El } from "../../../utils/create-element";
import { ButtonBrand } from "../ButtonBrand/ButtonBrand";
import { ImageButton } from "../ImageButton/ImageButton";

export function ButtonsBrand() {
  return El({
    element: "div",
    className:
      "flex gap-1 flex-col h-[234px] justify-center items-center mx-[24px]",
    children: [
      El({
        element: "div",
        className: "flex gap-[41px] mt-[12px] mx[9px]",
        children: [
          ButtonBrand({
            logo: "icon-[simple-icons--nike]",
            brand: "Nike",
            className: "items-center justify-center",
          }),
          ButtonBrand({
            logo: "icon-[gg--adidas]",
            brand: "Adidas",
            className: "items-center justify-center",
          }),
          ButtonBrand({
            logo: "icon-[simple-icons--puma]",
            brand: "Puma",
            className: "items-center justify-center",
          }),
          // ButtonBrand({
          //   logo: "icon-[simple-icons--reebok]",
          //   brand: "Asics",
          //   className: "items-center justify-center",
          // }),
          ImageButton({ brand: "Asics", src: "./src/assets/image/asics.svg" , className: "items-center justify-center" }),
        ],
      }),
      El({
        element: "div",
        className: "flex gap-[41px] mt-3 mx[9px]",
        children: [
          ButtonBrand({
            logo: "icon-[simple-icons--reebok]",
            brand: "Reebok",
            className: "items-center justify-center",
          }),
          ButtonBrand({
            logo: "icon-[simple-icons--newbalance]",
            brand: "New Balance",
            className: " justify-center",
          }),
          // ButtonBrand({
          //   logo: "icon-[gg--adidas]",
          //   brand: "Converse",
          //   className: "items-center justify-center",
          // }),
          ImageButton({ brand: "Converse", src: "./src/assets/image/converse.svg" , className: "items-center justify-center" }),
          ButtonBrand({
            logo: "icon-[icon-park-outline--more-two]",
            brand: "more",
            className: "items-center justify-center",
          }),
        ],
      }),
    ],
  });
}
