import { El } from "../../utils/create-element";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

export function OnboardingOne() {
  const Element = El({
    element: "div",
    className: "  ",
    children: [
      El({
        element: "div",
        className: "flex gap-[12px] justify-center items-center mt-[392px]",
        children: [
          El({
            element: "img",
            src: "./src/assets/image/logo-onboarding.png",
            className: "w-[59px] h-[59px]",
          }),
          El({
            element: "span",
            innerText: "Shoea",
            className: "font-bold text-[60px]",
          }),
        ],
      }),
      El({
        element: "div",
        className:
          "m-auto items-center h-[60px] w-[60px] animate-spin rounded-full border-[7px]  mt-60  border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1s_linear_infinite] dark:text-white",
        children: [
          El({
            element: "span",
            className:
              "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 m-auto !p-0 ![clip:rect(0,0,0,0)]",
          }),
        ],
      }),
    ],
  });

  // const user = getLocalStorage("user");
  // console.log([...user].length);
  // if ([...user].length != 0) {
  //   console.log([...user].length);

  //   setLocalStorage("user", "b");
  //   window.location.href = "/onboardingpagetwo";

  // } else {
  //   console.log("[...]");
  //   setLocalStorage("user", "b");
    setTimeout(() => {
      window.location.href = "/onboardingpagetwo";
    }, "1000");

  // }
  // console.log(user);
  // console.log(typeof user);
  return Element;
}
