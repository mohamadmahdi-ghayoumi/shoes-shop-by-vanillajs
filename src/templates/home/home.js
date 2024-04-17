import { headerHomePage } from "../../layout/header/header-homepage";
import { footerHomePage } from "../../layout/footer/footerHomePage";
import { El } from "../../utils/create-element";
import { SearchBox } from "../../components/Home/SearchBox/SearchBox";
import { SeeAll } from "../../components/Home/SeeAll/SeeAll";
import { RenderProducts } from "../../components/Home/RenderProducts/RenderProducts";
import { ButtonsBrand } from "../../components/Home/ButtonsBrand/ButtonsBrand";
import { MarginButtons } from "../../components/Home/MarginButtons/MarginButtons";

document.title = "home page";

export function home() {
  return El({
    element: "div",
    className: "",
    children: [
      headerHomePage(),
      SearchBox(),
      ButtonsBrand(),
      SeeAll(),
      MarginButtons(),
      El({
        element: "div",
        id: "home",
        children: [RenderProducts("all")],
      }),
      footerHomePage(
        "hidden",
        "icon-[ion--home-sharp]",
        "icon-[bi--bag]",
        " icon-[cil--cart]"
      ),
    ],
  });
}
