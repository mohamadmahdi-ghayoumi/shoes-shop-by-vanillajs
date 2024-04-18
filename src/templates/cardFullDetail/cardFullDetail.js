import { DescriptionCard } from "../../components/CardFullDetail/DescriptionCard/DescriptionCard";
import { FavoriteCard } from "../../components/CardFullDetail/FavoriteCard/FavoriteCard";
import { PriceCard } from "../../components/CardFullDetail/PriceCard/PriceCard";
import { QuantityCard } from "../../components/CardFullDetail/QuantityCard/QuantityCard";
import { ImageCard } from "../../components/CardFullDetail/ImageCard/ImageCard";
import { headerBack } from "../../layout/header/headerback";
import { El } from "../../utils/create-element";
import { ColorSizeButtons } from "../../components/CardFullDetail/Color-Size-Bottuns/ColorSizeButtons";

export function cardFullDetail({ product }) {
  const Element = El({
    element: "div",
    className: "flex flex-col",
    children: [
 El({
  element : "div",
  className : "bg-gray-100",
  children : [     headerBack(""),
  ImageCard({ product }),]
 }),
      FavoriteCard({ product }),
      DescriptionCard(),
      ColorSizeButtons({ product }),
      QuantityCard({ product }),
      PriceCard({ product }),
    ],
  });

  return Element;
}
