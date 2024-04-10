




import { onboradingPageTwo } from "../templates/onboradingpage-Two";
import { El } from "../utils/create-element";

export function onboardingTwoPage() {
  return El({
    element: "div",
    className: "",
    children: [onboradingPageTwo()],
  });
}



