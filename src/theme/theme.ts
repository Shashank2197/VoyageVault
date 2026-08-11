import { darkColors, lightColors } from "./colors";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { fontFamily, fontSize, lineHeight } from "./typography";

const baseTheme = {
  spacing,
  radius,
  shadows,

  typography: {
    fontFamily,
    fontSize,
    lineHeight,
  },
} as const;

export const lightTheme = {
  ...baseTheme,
  colors: lightColors,
} as const;

export const darkTheme = {
  ...baseTheme,
  colors: darkColors,
} as const;

export type ThemeColors = typeof lightColors | typeof darkColors;

export type AppTheme = {
  colors: ThemeColors;

  spacing: typeof spacing;
  radius: typeof radius;
  shadows: typeof shadows;

  typography: {
    fontFamily: typeof fontFamily;
    fontSize: typeof fontSize;
    lineHeight: typeof lineHeight;
  };
};

export type ThemeMode = "light" | "dark";
