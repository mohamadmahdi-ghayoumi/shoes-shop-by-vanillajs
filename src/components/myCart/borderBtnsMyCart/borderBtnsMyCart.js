import { El } from "../../../utils/create-element";
import { BorderBtnMyCart } from "../BorderBtnMyCart/BorderBtnMyCart";


export function BorderBtnsMyCart() {

  const elemenet =  El({
    element: "div",
    className: "flex overflow-y-auto  gap-[12px] pl-[24px] hideScroll	 ",
    children: [
      BorderBtnMyCart({ Brand: "All" }),
      BorderBtnMyCart({ Brand: "Nike" }),
      BorderBtnMyCart({ Brand: "Adidas" }),
      BorderBtnMyCart({ Brand: "Puma" }),
      BorderBtnMyCart({ Brand: "Asics" }),
      BorderBtnMyCart({ Brand: "Reebok" }),
      BorderBtnMyCart({ Brand: "New Balance" }),
      BorderBtnMyCart({ Brand: "Converse" }),
    ],
  });
  // mozs.addEventListener("click" , (e)=>{
  //   console.log(e.target)})
  
    return elemenet
}
