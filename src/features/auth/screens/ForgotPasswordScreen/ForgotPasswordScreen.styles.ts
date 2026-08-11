import { StyleSheet } from "react-native";

import { AppTheme } from "../../../../theme";

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    screen: {
      flex: 1,

      backgroundColor: theme.colors.background,
    },

    scrollContent: {
      flexGrow: 1,
    },

    container: {
      flex: 1,

      paddingHorizontal: theme.spacing.xl,

      paddingBottom: theme.spacing.xl,
    },

    mainContent: {
      flex: 1,

      justifyContent: "center",

      paddingTop: theme.spacing.xxl,
    },

    backButton: {
      width: 44,
      height: 36,

      alignItems: "center",
      justifyContent: "center",

      alignSelf: "flex-start",

      marginBottom: theme.spacing.xl,

      borderWidth: 1,
      borderColor: theme.colors.border,

      borderRadius: theme.radius.md,

      backgroundColor: theme.colors.surface,
    },

    header: {
      marginBottom: theme.spacing.xl,
    },

    title: {
      fontFamily: theme.typography.fontFamily.displayBold,

      fontSize: theme.typography.fontSize.headingLarge,

      lineHeight: theme.typography.lineHeight.headingLarge,

      color: theme.colors.textPrimary,
    },

    description: {
      marginTop: theme.spacing.xs,

      fontFamily: theme.typography.fontFamily.bodyRegular,

      fontSize: theme.typography.fontSize.sm,

      lineHeight: theme.typography.lineHeight.sm,

      color: theme.colors.textSecondary,
    },

    form: {
      width: "100%",

      gap: theme.spacing.lg,
    },

    footer: {
      alignSelf: "center",

      paddingTop: theme.spacing.xxl,
    },

    backToLoginText: {
      fontFamily: theme.typography.fontFamily.bodySemiBold,

      fontSize: theme.typography.fontSize.sm,

      color: theme.colors.textPrimary,
    },
  });
