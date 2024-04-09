import { headerHomePage } from "../layout/header/header-homepage";
import { footerHomePage } from "../layout/footer/footerHomePage";
import { El } from "../utils/create-element";
import { buttonsBrand } from "../widget/buttonsBrand";
import { marginButtons } from "../widget/marginButtons";
import { home } from "../components/homePage/renderProducts/renderProducts";
export function homePage() {
  return El({
    element: "div",
    className: "",
    children: [
      headerHomePage(),
      El({
        element: "input",
        className: " w-[380px] m-auto ml-[30px] relative mt-[16px] pl-[28px]",
        placeholder: "Search",
      }),
      El({
        element: "span",
        className:
          "icon-[iconamoon--search-thin] absolute top-[100px] w-[16px] h-[16px] start-[37px]",
      }),
      buttonsBrand(),

      El({
        element: "div",
        className: "flex justify-between items-center mx-[24px] mt-[19px]",
        children: [
          El({
            element: "span",
            className: "font-bold",
            innerText: "Most Popular",
          }),
          El({
            element: "span",
            className: "font-bold",
            innerText: "See All",
          }),
        ],
      }),

      marginButtons(),
      // home(),
      El({
        element: "div",
        id: "home",
        // children: home("all"),
      }),
      footerHomePage(),
    ],
  });
}
