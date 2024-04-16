import { OnboardingTwo } from "../../templates/onboarding/onborading-Two";
import { El } from "../../utils/create-element";

export function onboardingTwoPage() {
  return El({
    element: "div",
    className: "",
    children: [OnboardingTwo()],
  });
}
