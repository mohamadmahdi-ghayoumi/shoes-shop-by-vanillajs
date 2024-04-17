
import { ModalOverlay } from "../../components/Successful/ModalOverlay";
import { Successful } from "../../components/Successful/Successful";
import { El } from "../../utils/create-element";

export function successfulPage() {
  return El({
    element: "div",
    className: "relative px-[24px]  flex justify-center items-center h-screen",
    inntText: "gdfg",
    children: [ModalOverlay(), Successful()],
  });
}
