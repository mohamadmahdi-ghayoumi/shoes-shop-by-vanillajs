import { ButtnAddToCard } from "../components/MyCart/ButtonAddToCard/ButtonAddToCard";
import { ModalDelete } from "../components/MyCart/ModalDelete/ModalDelete";
import { ModalDeleteOverlay } from "../components/MyCart/ModalDelete/ModalDeleteOverlay";
import { RenderMyCart } from "../components/MyCart/RenderMyCart/RenderMyCart";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { headerMyCart } from "../layout/header/headerMyCart";
import { El } from "../utils/create-element";
import { setLocalStorage } from "../utils/localStorage";

export function myCart() {
  const data = { name: "Home", address: "61480 Sunbrook Park PC 5679" };
  setLocalStorage("location", data);

  const dataShipping = {
    name: "",
    address: "",
    price: " 0",
    parent: "hidden",
    iconBack: "show",
  };
  setLocalStorage("shipping", dataShipping);

  const Elemenet = El({
    element: "div",
    className: "",
    children: [
      // borderBtnsMyCart(),
      El({
        element: "div",
        id: "home1",
        children: [],
      }),
      El({
        element: "div",
        id: "home",
        children: [RenderMyCart()],
      }),
      ButtnAddToCard(),

      ModalDeleteOverlay(),
      ModalDelete(),
    ],
  });

  return Elemenet;
}
