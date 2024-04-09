import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";
import { buttonsColor } from "../widget/cardfull/buttonsColor/buttonsColor";
import { buttonsSize } from "../widget/cardfull/buttonsSize/buttonsSize";
import { colorSizeBtn } from "../widget/cardfull/color-Size-btns/colorSizeBtn";
import { descriptionCard } from "../widget/cardfull/descriptionCard/descriptionCard";
import { favoriteCard } from "../widget/cardfull/favoriteCard/favoriteCard";
import { priceCard } from "../widget/cardfull/price-card/priceCard";
import { quantityCard } from "../widget/cardfull/quantityCard/quantityCard";
import { swiperCard } from "../widget/cardfull/swiperCard/swiperCard";

export function cardFullDetail() {


  const Element = El({
    element: "div",
    className: "flex flex-col ",
    children: [
      headerBack(""),
      swiperCard(),
      favoriteCard(),
      descriptionCard(),
      colorSizeBtn(),
      quantityCard(),
      priceCard(),
    ],
  });

  return Element;
}
