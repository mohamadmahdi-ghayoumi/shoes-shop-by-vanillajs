import { El } from "../../../utils/create-element";
import { getLocalStorage } from "../../../utils/localStorage";

export function ShippingAddress() {
  const location = getLocalStorage("location");

  // const location = JSON.parse(localStorage.getItem("location"));
  console.log(location);
  function goToAddress() {
    window.location.href = "/shippingaddresspage";
  }

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
              "bg-gray-300 rounded-full px-2 py-2 flex items-center justify-center",
            children: [
              El({
                element: "span",
                className:
                  "icon-[el--map-marker-alt]  w-[60px] h-[60px]  ",
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
