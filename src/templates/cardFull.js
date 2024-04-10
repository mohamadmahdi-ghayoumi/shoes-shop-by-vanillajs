import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";
import { buttonsColor } from "../widget/cardfull/buttonsColor/buttonsColor";
import { buttonsSize } from "../widget/cardfull/buttonsSize/buttonsSize";
import { colorSizeBtn } from "../widget/cardfull/color-Size-btns/colorSizeBtn";
import { descriptionCard } from "../widget/cardfull/descriptionCard/descriptionCard";
import { favoriteCard } from "../widget/cardfull/favoriteCard/favoriteCard";
import { priceCard } from "../widget/cardfull/price-card/priceCard";
// import { quantityCard } from "../widget/cardfull/quantityCard/quantityCard";
import { swiperCard } from "../widget/cardfull/swiperCard/swiperCard";

export function cardFullDetail({ product }) {
  function subtractButton() {
    let quantityCounter = document.getElementById("span-count").innerText;
    if (quantityCounter > 0) {
      quantityCounter--;
      document.getElementById("span-count").innerText = quantityCounter;
      document.getElementById("totalPrice").innerText = `$ ${
        product.price * quantityCounter
      }`;
    }
  }

  function sumButton() {
    let quantityCounter = parseInt(
      document.getElementById("span-count").innerText
    );
    if (quantityCounter < 3) {
      quantityCounter++;
      document.getElementById("span-count").innerText = quantityCounter;
      document.getElementById("totalPrice").innerText = `$ ${
        product.price * quantityCounter
      }`;
    }
  }

  const Element = El({
    element: "div",
    className: "flex flex-col ",
    children: [
      headerBack(""),
      swiperCard({ product }),
      favoriteCard({ product }),
      descriptionCard(),
      colorSizeBtn(),

      El({
        element: "div",
        className: "flex mt-[30px] mb-[60px] mx-[24px]",
        children: [
          El({
            element: "div",
            className: "font-bold",
            innerText: "Quantity",
          }),
          El({
            element: "div",
            className: "bg-gray-200 ml-[60px] flex gap-4 px-4 rounded-2xl",
            children: [
              El({
                element: "span",
                className: "font-bold",
                id: "span-subtract",
                onclick: subtractButton,

                innerText: "-",
              }),
              El({
                element: "span",
                className: "font-bold",
                id: "span-count",
                innerText: "0",
              }),
              El({
                element: "span",
                className: "font-bold",
                id: "span-sum",
                onclick: sumButton,
                innerText: "+",
              }),
            ],
          }),
        ],
      }),
      priceCard({ product }),
    ],
  });

  return Element;
}
