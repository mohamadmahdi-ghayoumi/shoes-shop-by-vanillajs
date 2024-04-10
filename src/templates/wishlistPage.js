import { renderProducts } from "../components/homePage/renderProducts/renderProducts";
import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";

export function WishlistPage(){
  
            const Elemenet = El({
              element: "div",
              className: "",
              children: [headerBack("My Wishlist"), renderProducts("reebok")],
            });
          
return Elemenet

}