import { ViewStyle } from "react-native";

import { colors } from "./colors";

type ShadowStyle = ViewStyle;

export const shadows: Record<
  "none" | "small" | "medium" | "large",
  ShadowStyle
> = {
  none: {
    shadowOpacity: 0,
    elevation: 0,
  },

  small: {
    shadowColor: colors.neutral.darkNavy,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,

    elevation: 2,
  },

  medium: {
    shadowColor: colors.neutral.darkNavy,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,

    elevation: 4,
  },

  large: {
    shadowColor: colors.neutral.darkNavy,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.14,
    shadowRadius: 18,

    elevation: 8,
  },
};
