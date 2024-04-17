import { El } from "../../../utils/create-element";
import { getLocalStorage } from "../../../utils/localStorage";

export function ShippingAddress() {
  const location = getLocalStorage("location");

  // const location = JSON.parse(localStorage.getItem("location"));
  console.log(location);
  function goToAddress() {
    window.location.href = "/shippingaddresspage";
  }

  // console.log();
  // setTimeout(oneLocation, 0);
  return El({
    element: "div",
    className: "mx-[24px] pl-5",
    children: [
      El({
        element: "div",
        className: "font-bold text-[25px] mb-[35px]",
        innerText: "Shipping Address",
      }),
      El({
        element: "div",
        className: "flex gap-3 items-center",
        children: [
          El({
            element: "div",
            className:
              "ml-2 bg-gray-300 rounded-full w-[100px] h-[80px] relative",
            children: [
              El({
                element: "span",
                className:
                  "icon-[el--map-marker-alt]  w-[60px] h-[60px] m-auto absolute bottom-[10px] end-[10px]",
              }),
            ],
          }),

          El({
            element: "div",
            className: "mr-7 flex flex-col gap-3",
            children: [
              El({
                element: "div",
                className: "font-bold text-[20px]",
                id: "nameLocation",
                innerText: location.name,
              }),
              El({
                element: "div",
                className: "text-[14px] whitespace-nowrap",
                id: "addressLocation",
                innerText: location.address,
              }),
            ],
          }),
          El({
            element: "span",
            onclick: goToAddress,

            className: "icon-[eva--edit-2-fill] w-8 h-8 cursor-pointer",
          }),
        ],
      }),
    ],
  });
}
