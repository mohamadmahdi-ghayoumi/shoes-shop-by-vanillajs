import { onBordingPageOne } from "../templates/onboradingpage-one";
import { El } from "../utils/create-element";

export function onboardingOnePage() {
  return El({
    element: "div",
    className: "",
    children: [onBordingPageOne()],
  });
}
