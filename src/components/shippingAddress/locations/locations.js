import { El } from "../../../utils/create-element";
import { OneLocation } from "../OneLocation/OneLocation";

export function Locations() {

function addAddress(){
  window.location.href = "/checkout"
}



  return El({
    element: "div",
    className: "mx-[24px] flex flex-col  gap-10 mt-[50px]",
    children: [
      OneLocation("Home", "61480 Sunbrook Park PC 5679", "home" , "checked"),
      OneLocation("Office", "6993 Meadow Valley Terra. PC 3637", "office"),
      OneLocation("Apartment", "21833 Clyde Gallagher. PC 4662", "apartment"),
      OneLocation("Parent's House", "5259 Blue Bill Park. PC 4627", "parent"),

      El({
        element: "button",
        className:
          "bg-gray-200  w-[90%] rounded-[60px] text-[20px] m-auto w-[60px] h-[60px] font-semibold",
        innerText: "Add New Address",
        id: "btnAddToCard",
        // onclick: addToOrders,
      }),
      El({
        element: "button",
        className:
          "bg-black text-white w-[90%] rounded-[60px] mt-[210px]  text-[20px] m-auto h-[60px]",
        innerText: "Apply",
        onclick : addAddress

      }),
    ],
  });
}
