/**
 * VoyageVault Color System
 *
 * Visual source:
 * VoyageVault Figma Brand System
 *
 * Primary visual direction:
 * Indigo → Violet → Pink
 */

export const colors = {
  brand: {
    indigo: "#5546F5",
    violet: "#8B3FEF",
    pink: "#C13CDE",
  },

  neutral: {
    darkNavy: "#0D1117",
    charcoal: "#1C2333",
    offWhite: "#F8F9FA",
    white: "#FFFFFF",
    black: "#000000",
  },

  semantic: {
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#2387F5",
  },
} as const;

export const gradients = {
  primary: [colors.brand.indigo, colors.brand.violet, colors.brand.pink],
} as const;

export const lightColors = {
  background: colors.neutral.offWhite,
  surface: colors.neutral.white,
  surfaceSecondary: "#F1F2F6",
  textPrimary: colors.neutral.darkNavy,
  textSecondary: "#626A7A",
  textMuted: "#8A91A0",
  border: "#E4E6EC",
  primary: colors.brand.indigo,
  success: colors.semantic.success,
  warning: colors.semantic.warning,
  error: colors.semantic.error,
  info: colors.semantic.info,
} as const;

export const darkColors = {
  background: colors.neutral.darkNavy,
  surface: colors.neutral.charcoal,
  surfaceSecondary: "#252D3D",
  textPrimary: colors.neutral.offWhite,
  textSecondary: "#B0B7C5",
  textMuted: "#7F8798",
  border: "#303848",
  primary: colors.brand.violet,
  success: colors.semantic.success,
  warning: colors.semantic.warning,
  error: colors.semantic.error,
  info: colors.semantic.info,
} as const;
