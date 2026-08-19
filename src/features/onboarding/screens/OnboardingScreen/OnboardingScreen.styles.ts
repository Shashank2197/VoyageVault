import { StyleSheet } from "react-native";

import { AppTheme } from "../../../../theme";

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    screen: {
      flex: 1,

      backgroundColor: theme.colors.background,
    },

    topBar: {
      minHeight: 52,
      alignItems: "flex-end",
      justifyContent: "center",
      paddingHorizontal: theme.spacing.xl,
    },

    skipText: {
      fontFamily: theme.typography.fontFamily.bodyMedium,

      fontSize: theme.typography.fontSize.sm,

      color: theme.colors.textSecondary,
    },

    slide: {
      flex: 1,

      justifyContent: "center",
    },

    slideInner: {
      flex: 1,

      justifyContent: "center",

      paddingHorizontal: theme.spacing.xl,
    },

    image: {
      width: "100%",

      height: 280,

      borderRadius: 20,
    },

    textContent: {
      alignItems: "center",

      marginTop: theme.spacing.xl,
    },

    title: {
      fontFamily: theme.typography.fontFamily.displayBold,

      fontSize: theme.typography.fontSize.headingLarge,

      lineHeight: theme.typography.lineHeight.headingLarge,

      textAlign: "center",

      color: theme.colors.textPrimary,
    },

    description: {
      marginTop: theme.spacing.sm,

      paddingHorizontal: theme.spacing.xs,

      fontFamily: theme.typography.fontFamily.bodyRegular,

      fontSize: theme.typography.fontSize.sm,

      lineHeight: theme.typography.lineHeight.sm,

      textAlign: "center",

      color: theme.colors.textSecondary,
    },

    bottomContent: {
      width: "100%",

      paddingHorizontal: theme.spacing.xl,

      paddingBottom: theme.spacing.md,

      gap: theme.spacing.lg,
    },

    pagination: {
      flexDirection: "row",

      alignItems: "center",
      justifyContent: "center",

      height: 12,

      gap: theme.spacing.xs,
    },

    activeIndicator: {
      width: 20,
      height: 5,

      borderRadius: 999,
    },

    inactiveIndicator: {
      width: 5,
      height: 5,

      borderRadius: 999,

      backgroundColor: theme.colors.border,
    },

    buttonContainer: {
      width: "100%",
    },
  });
