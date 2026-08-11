import { StyleSheet } from "react-native";

import { AppTheme } from "../../theme";

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    pressable: {
      alignSelf: "flex-start",
    },

    fullWidth: {
      width: "100%",
    },

    pressed: {
      opacity: 0.88,
    },

    disabled: {
      opacity: 0.5,
    },

    base: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.xs,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.radius.lg,
    },

    large: {
      minHeight: 52,
    },

    medium: {
      minHeight: 46,
    },

    small: {
      minHeight: 38,
      paddingHorizontal: theme.spacing.md,
    },

    secondary: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },

    label: {
      fontFamily: theme.typography.fontFamily.bodySemiBold,

      textAlign: "center",
    },

    labelLarge: {
      fontSize: theme.typography.fontSize.md,
      lineHeight: theme.typography.lineHeight.md,
    },

    labelMedium: {
      fontSize: theme.typography.fontSize.sm,
      lineHeight: theme.typography.lineHeight.sm,
    },

    labelSmall: {
      fontSize: theme.typography.fontSize.sm,
      lineHeight: theme.typography.lineHeight.sm,
    },

    primaryLabel: {
      color: theme.colors.surface,
    },

    secondaryLabel: {
      color: theme.colors.textPrimary,
    },

    content: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing.xs,
    },
  });
