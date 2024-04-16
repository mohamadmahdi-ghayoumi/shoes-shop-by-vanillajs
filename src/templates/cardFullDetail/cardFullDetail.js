import { colorSizeBtn } from "../../components/cardFull/color-Size-btns/colorSizeBtn";
import { descriptionCard } from "../../components/cardFull/descriptionCard/descriptionCard";
import { favoriteCard } from "../../components/cardFull/favoriteCard/favoriteCard";
import { priceCard } from "../../components/cardFull/price-card/priceCard";
import { quantityCard } from "../../components/cardFull/quantityCard/quantityCard";
import { swiperCard } from "../../components/cardFull/swiperCard/swiperCard";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";


export function cardFullDetail({ product }) {
 
  const Element = El({
    element: "div",
    className: "flex flex-col ",
    children: [
      headerBack(""),
      swiperCard({ product }),
      favoriteCard({ product }),
      descriptionCard(),
      colorSizeBtn(),
      quantityCard({ product }),
      priceCard({ product }),
    ],
  });

  return Element;
}
