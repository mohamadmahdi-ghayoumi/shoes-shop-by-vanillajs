import { El } from "../../../utils/create-element";
import { setLocalStorage } from "../../../utils/localStorage";
// import { setLocalStorage } from "../../../utils/localStorage";

export function OneLocation(name, address, value, checked,classDefault) {
  function radioLocation(e) {
    console.log("Clicked location: " + this.value);
    const namee =
      e.target.closest("#parentlocation").children[0].children[1].children[0].children[0]
        .innerText;
    const Addresss =
      e.target.closest("#parentlocation").children[0].children[1].children[1]
        .innerText;
    name = namee;
    console.log(document.getElementById("addressLocation"));
    console.log(e.target);

    // localStorage.setItem("location", JSON.stringify(data));
    const data = { name: namee, address: Addresss };
    console.log(data);

    setLocalStorage("location", data);
  }

  return El({
    element: "div",
    className: "flex gap-3 items-center justify-between ",
    id: "parentlocation",
    children: [
      El({
        element: "div",
        className: "flex gap-2",
        children: [
          El({
            element: "div",
            className:
              "ml-7 bg-gray-300 rounded-full w-[60px] h-[60px] relative",
            children: [
              El({
                element: "span",
                className:
                  "icon-[el--map-marker-alt] w-[40px] h-[40px] m-auto absolute bottom-[10px] end-[10px]",
              }),
            ],
          }),

          El({
            element: "div",
            className: "mr-7 flex flex-col gap-3",
            children: [
              El({
                element: "div",
                className: "flex gap-2 items-center font-medium	font-normal	",
                children: [
                  El({
                    element: "div",
                    className: "font-bold text-[20px]",
                    innerText: name,
                  }),
                  El({
                    element: "div",
                    className: `bg-gray-200 p-1 rounded text-xs	${classDefault}`,
                    innerText: "Default",
                  }),
                ],
              }),

              El({
                element: "div",
                className: "text-[14px] whitespace-nowrap",
                innerText: address,
              }),
            ],
          }),
        ],
      }),

      El({
        element: "input",
        type: "radio",
        name: "option",
        value: value,
        checked: checked,

        className: "accent-black w-5 h-5",
        onclick: radioLocation,
      }),
    ],
  });
}
