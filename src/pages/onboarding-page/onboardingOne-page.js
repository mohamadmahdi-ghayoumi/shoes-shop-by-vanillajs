import { El } from "../../utils/create-element";
import {OnboardingOne} from "../../templates/onboarding/onboarding-One"
export function onboardingOnePage() {
  return El({
    element: "div",
    className: "",
    children: [OnboardingOne()],
  });
}
