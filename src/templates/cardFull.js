import { headerBack } from "../layout/header/headerback";
import { El } from "../utils/create-element";
import { buttonsColor } from "../widget/cardfull/buttonsColor/buttonsColor";
import { buttonsSize } from "../widget/cardfull/buttonsSize/buttonsSize";

export function cardFullDetail() {
  function imageCard() {
    const imageCard = El({
      element: "div",
      className: "flex justify-center items-cemter",
      children: [
        El({
          element: "img",
          className: "w-[428px]",
          src: "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
        }),
      ],
    });
    return imageCard;
  }

  function mainCardDetail() {
    const imageCard = El({
      element: "div",
      className: "mx-[24px]",
      children: [
        El({
          element: "div",
          className: "flex justify-between items-center mt-[10px] ",
          children: [
            El({
              element: "p",
              className: "font-bold text-[25px]",
              innerText: "Running Sportwear",
            }),
            El({
              element: "span",
              className: "icon-[ph--heart-light] w-[24px] h-[24px]",
            }),
          ],
        }),
        El({
          element: "div",
          className: "flex items-center mt-3 mb-6",
          children: [
            El({
              element: "div",
              className:
                "bg-gray-300 px-[10px] p-[2px] rounded-xl  mr-[20px] text-[10px]",
              innerText: "5.371 sold",
            }),
            El({
              element: "span",
              className: "icon-[clarity--half-star-solid] w-[20px] h-[20px] ",
            }),
            El({
              element: "p",
              className: "text-gray-700 ml-[10px] font-semibold  text-[10px]",
              innerText: "4.3 (5,389 reviews)",
            }),
          ],
        }),
        El({
          element: "hr",
          className: "",
        }),
        El({
          element: "p",
          className: "text-[15px] font-bold mt-4 mb-2",
          innerText: "Description",
        }),
        El({
          element: "p",
          className: " text-gray-600",
          innerText:
            " lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
        }),
        El({
          element: "div",
          className: "flex mb-3",
          children: [
            El({
              element: "div",
              className: "w-1/2 flex flex-col mt-3",
              children: [
                El({
                  element: "p",
                  className: "font-bold mb-2",
                  innerText: "Size",
                }),
                buttonsSize(),
              ],
            }),
            El({
              element: "div",
              className: "w-1/2 flex flex-col mt-3",
              children: [
                El({
                  element: "p",
                  className: "font-bold mb-2",
                  innerText: "Color",
                }),

                buttonsColor(),
              ],
            }),
          ],
        }),
        El({
          element: "div",
          className: "flex mt-[30px] mb-[60px]",
          children: [
            El({
              element: "div",
              className: "font-bold",
              innerText: "Quantity",
            }),
            El({
              element: "div",
              className: "bg-gray-200 ml-[60px] flex gap-4 px-4 rounded-2xl",
              children: [
                El({
                  element: "span",
                  className: "font-bold",
                  innerText: "-",
                }),
                El({
                  element: "span",
                  className: "font-bold",
                  id: "span",
                  innerText: "0",
                }),
                El({
                  element: "span",
                  className: "font-bold",
                  innerText: "+",
                }),
              ],
            }),
          ],
        }),

        El({
          element: "div",
          className: "flex gap-[40px]",
          children: [
            El({
              element: "div",
              className: "",
              children: [
                El({
                  element: "div",
                  className: "text-gray-500 text-[10px]",
                  innerText: "Total price",
                }),
                El({
                  element: "div",
                  className: "font-bold text-[20px]",
                  innerText: "$240.000",
                }),
              ],
            }),
            El({
              element: "button",
              className:
                "bg-black text-white w-full rounded-3xl relative text-[14px]",
              innerText: "Add to Card",
              children: [
                El({
                  element: "span",
                  className:
                    "icon-[lets-icons--bag-fill] text-white absolute  w-[17px]  h-[17px] start-[60px] top-[14px]",
                }),
              ],
            }),
          ],
        }),
      ],
    });
    return imageCard;
  }

  const Element = El({
    element: "div",
    className: "flex flex-col ",
    children: [headerBack(""), imageCard(), mainCardDetail()],
  });

  return Element;
}
