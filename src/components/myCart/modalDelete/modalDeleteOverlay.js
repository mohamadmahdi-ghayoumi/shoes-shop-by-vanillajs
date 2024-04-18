import { El } from "../../../utils/create-element";

export function ModalDeleteOverlay() {
  return El({
    element: "div",
    id: "overlayModal",
    className:
      "hidden absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 fixed w-full h-full bg-gray-500 bg-opacity-70 ",
    children: [],
  });
}
