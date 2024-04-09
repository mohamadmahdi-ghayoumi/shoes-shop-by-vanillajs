import { El } from "../../../utils/create-element";

export function swiperCard(){
    return El({
        element : "div",
        className : "",
        children : [El({
            element: "div",
            className: "flex justify-center items-cemter",
            children: [
              El({
                element: "img",
                className: "w-[428px]",
                src: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
              }),
            ],
          })]
    })
}