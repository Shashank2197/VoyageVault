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
    header: {
      alignItems: "center",
      marginBottom: theme.spacing.xxl,
    },

    logo: {
      width: 56,
      height: 56,

      marginBottom: theme.spacing.md,
    },

    title: {
      fontFamily: theme.typography.fontFamily.displayBold,

      fontSize: theme.typography.fontSize.headingLarge,

      lineHeight: theme.typography.lineHeight.headingLarge,

      color: theme.colors.textPrimary,

      textAlign: "center",
    },

    subtitle: {
      marginTop: theme.spacing.xxs,

      fontFamily: theme.typography.fontFamily.bodyRegular,

      fontSize: theme.typography.fontSize.sm,

      lineHeight: theme.typography.lineHeight.sm,

      color: theme.colors.textSecondary,

      textAlign: "center",
    },

    form: {
      width: "100%",

      gap: theme.spacing.md,
    },

    forgotPassword: {
      alignSelf: "flex-end",

      marginTop: -theme.spacing.xs,
    },

    forgotPasswordText: {
      fontFamily: theme.typography.fontFamily.bodySemiBold,

      fontSize: theme.typography.fontSize.sm,

      lineHeight: theme.typography.lineHeight.sm,

      color: theme.colors.primary,
    },

    socialRow: {
      width: "100%",

      flexDirection: "row",

      gap: theme.spacing.md,
    },

    footer: {
      flexDirection: "row",

      alignItems: "center",
      justifyContent: "center",

      paddingTop: theme.spacing.xxl,
    },

    footerText: {
      fontFamily: theme.typography.fontFamily.bodyRegular,

      fontSize: theme.typography.fontSize.sm,

      color: theme.colors.textSecondary,
    },

    signUpText: {
      fontFamily: theme.typography.fontFamily.bodySemiBold,

      fontSize: theme.typography.fontSize.sm,

      color: theme.colors.primary,
    },
  });
