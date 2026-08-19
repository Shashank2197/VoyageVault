import { ImageSourcePropType } from "react-native";

export interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: "plan-journey",

    title: "Plan the Journey",

    description:
      "Collaborate with friends in real-time. Map out itineraries, pinpoint destinations, and design your perfect travel route together.",

    image: require("../../../../assets/onboarding/plan-journey.png"),
  },

  {
    id: "split-expenses",

    title: "Split the Expenses",

    description:
      "Keep budget worries away. Add expenses on-the-go, automatically calculate splits, and settle balances seamlessly with your group.",

    image: require("../../../../assets/onboarding/split-expenses.png"),
  },

  {
    id: "keep-memories",

    title: "Keep the Memories",

    description:
      "Save every shared smile. Build group photo albums tied directly to your travel timeline, capturing your journey from plans to memories.",

    image: require("../../../../assets/onboarding/keep-memories.png"),
  },
];
