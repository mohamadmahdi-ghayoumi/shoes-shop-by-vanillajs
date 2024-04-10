import { router } from "json-server";
import { El } from "../../../utils/create-element";


export function Link({ href, ...rest }) {
  return El({
    element: "a",
    href,
    eventListener: [
      {
        event: "click",
        callback: () => {
          router.navigate(href);
        },
      },
    ],
    ...rest,
  });
}
