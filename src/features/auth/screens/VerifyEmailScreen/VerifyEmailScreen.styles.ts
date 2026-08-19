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

    verifyContent: {
      width: "100%",

      alignItems: "center",
    },

    header: {
      width: "100%",

      alignItems: "center",

      marginTop: theme.spacing.xl,

      marginBottom: theme.spacing.xl,
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

      fontFamily: theme.typography.fontFamily.bodyRegular,

      fontSize: theme.typography.fontSize.sm,

      lineHeight: theme.typography.lineHeight.sm,

      textAlign: "center",

      color: theme.colors.textSecondary,
    },

    emailText: {
      fontFamily: theme.typography.fontFamily.bodySemiBold,

      color: theme.colors.textPrimary,
    },

    actions: {
      width: "100%",

      gap: theme.spacing.sm,
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
