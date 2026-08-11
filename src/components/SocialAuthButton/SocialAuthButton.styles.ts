import { StyleSheet } from "react-native";

import { AppTheme } from "../../theme";

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    button: {
      minHeight: 48,

      flex: 1,

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      gap: theme.spacing.xs,

      paddingHorizontal: theme.spacing.md,

      borderWidth: 1,
      borderColor: theme.colors.border,

      borderRadius: theme.radius.lg,

      backgroundColor: theme.colors.surface,
    },

    pressed: {
      opacity: 0.8,
    },

    disabled: {
      opacity: 0.5,
    },

    icon: {
      width: 20,
      height: 20,
    },

    label: {
      fontFamily: theme.typography.fontFamily.bodySemiBold,

      fontSize: theme.typography.fontSize.md,

      lineHeight: theme.typography.lineHeight.md,

      color: theme.colors.textPrimary,
    },
  });
