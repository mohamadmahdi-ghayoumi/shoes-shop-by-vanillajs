import { El } from "../../../utils/create-element";
import { BorderBtnWishlist } from "../BorderBtnWishlist/BorderBtnWishlist";


export function BorderBtnsWishlist() {

  const elemenet =  El({
    element: "div",
    className: "flex overflow-y-auto  gap-[12px] pl-[24px] hideScroll	 ",
    children: [
      BorderBtnWishlist({ Brand: "All" , classname : "bg-[#343A40] text-white" }),
      BorderBtnWishlist({ Brand: "Nike" }),
      BorderBtnWishlist({ Brand: "Adidas" }),
      BorderBtnWishlist({ Brand: "Puma" }),
      BorderBtnWishlist({ Brand: "Asics" }),
      BorderBtnWishlist({ Brand: "Reebok" }),
      BorderBtnWishlist({ Brand: "New Balance" }),
      BorderBtnWishlist({ Brand: "Converse" }),
    ],
  });
  // mozs.addEventListener("click" , (e)=>{
  //   console.log(e.target)})
  
    return elemenet
}
