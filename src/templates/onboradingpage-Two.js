import { El } from "../utils/create-element";

export function onboradingPageTwo() {
  const Element = El({
    element: "div",
    className:
      "bg-[url(./src/assets/image/background-onboarding-two.png)] w-full h-screen flex flex-col gap-6",
    children: [
      El({
        element: "p",
        className: "pt-[629px] ml-7 text-white  text-3xl font-bold",
        innerText: "Welcome to 👋",
      }),
      El({
        element: "p",
        className: " ml-7 text-white text-7xl font-bold",
        innerText: "Shoea",
      }),
      El({
        element: "p",
        className: " ml-7 text-white  text-lg pr-4",
        innerText:
          "The best sneakers & shoes e-commerse app of the century for your fashion needs!",
      }),
    ],
  });

  setTimeout(() => {
    window.location.href = "/slider";
  }, "3000");

  return Element;
}
