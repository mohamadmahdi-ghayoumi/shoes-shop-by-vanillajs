import { marginButton } from "../components/homePage/marginButton/marginButton";
import { El } from "../utils/create-element";

export function marginButtons() {

  const elemenet =  El({
    element: "div",
    className: "flex overflow-y-auto  gap-[12px] pl-[24px] hideScroll	 ",
    children: [
      marginButton({ Brand: "All" , classname : "bg-[#343A40] text-white" }),
      marginButton({ Brand: "Nike" }),
      marginButton({ Brand: "Adidas" }),
      marginButton({ Brand: "Puma" }),
      marginButton({ Brand: "Asics" }),
      marginButton({ Brand: "Reebok" }),
      marginButton({ Brand: "New Balance" }),
      marginButton({ Brand: "Converse" }),
    ],
  });
  // mozs.addEventListener("click" , (e)=>{
  //   console.log(e.target)})
  
    return elemenet
}
