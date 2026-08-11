import { StyleSheet } from "react-native";

import { AppTheme } from "../../theme";

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: "100%",

      flexDirection: "row",
      alignItems: "center",

      gap: theme.spacing.md,
    },

    line: {
      flex: 1,

      height: 1,

      backgroundColor: theme.colors.border,
    },

    text: {
      fontFamily: theme.typography.fontFamily.bodyRegular,

      fontSize: theme.typography.fontSize.sm,

      lineHeight: theme.typography.lineHeight.sm,

      color: theme.colors.textSecondary,

      textAlign: "center",
    },
  });
