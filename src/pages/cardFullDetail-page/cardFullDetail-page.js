import { cardFullDetail } from "../../templates/cardFullDetail/cardFullDetail";
import { El } from "../../utils/create-element";

export function cardFullDetailPage() {
  return El({
    element: "div",
    className: "",
    children: [cardFullDetail()],
  });
}
