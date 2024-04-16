import { El } from "../../utils/create-element";
import {OnboardingOne} from "../../templates/onboarding/onborading-One"
export function onboardingOnePage() {
  return El({
    element: "div",
    className: "",
    children: [OnboardingOne()],
  });
}
