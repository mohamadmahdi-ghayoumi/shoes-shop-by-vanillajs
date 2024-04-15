import { locations } from "../../components/shippingAddress/locations/locations";
import { modalOverlay } from "../../components/successful/modalOverlay";
import { successful } from "../../components/successful/successful";
import { El } from "../../utils/create-element";

export function successfulPage() {
  return El({
    element: "div",
    className: "relative px-[24px]  flex justify-center items-center h-screen",
    inntText: "gdfg",
    children: [ modalOverlay(),successful()],
  });
}
