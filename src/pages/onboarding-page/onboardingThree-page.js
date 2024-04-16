import { OnboardingThree } from "../../templates/onboarding/onboarding-Three";
import { El } from "../../utils/create-element";

export function onboardingThreePage() {
  return El({
    element: "div",
    className: "",
    children: [OnboardingThree()],
  });
}
