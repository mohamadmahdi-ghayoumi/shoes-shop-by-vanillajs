import { El } from "../../../utils/create-element";
import { BorderButtonWishlist } from "../BorderButtonWishlist/BorderButtonWishlist";


export function BorderButtonsWishlist() {

  const elemenet =  El({
    element: "div",
    className: "flex overflow-y-auto  gap-[12px] pl-[24px] hideScroll	 ",
    children: [
      BorderButtonsWishlist({ Brand: "All" , classname : "bg-[#343A40] text-white" }),
      BorderButtonWishlist({ Brand: "Nike" }),
      BorderButtonWishlist({ Brand: "Adidas" }),
      BorderButtonWishlist({ Brand: "Puma" }),
      BorderButtonWishlist({ Brand: "Asics" }),
      BorderButtonWishlist({ Brand: "Reebok" }),
      BorderButtonWishlist({ Brand: "New Balance" }),
      BorderButtonWishlist({ Brand: "Converse" }),
    ],
  });
  // mozs.addEventListener("click" , (e)=>{
  //   console.log(e.target)})
  
    return elemenet
}
