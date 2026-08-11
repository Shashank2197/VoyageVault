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
      marginBottom: theme.spacing.lg,
    },

    title: {
      fontFamily: theme.typography.fontFamily.displayBold,
      fontSize: theme.typography.fontSize.headingLarge,
      lineHeight: theme.typography.lineHeight.headingLarge,
      color: theme.colors.textPrimary,
    },

    subtitle: {
      marginTop: theme.spacing.xxs,
      fontFamily: theme.typography.fontFamily.bodyRegular,
      fontSize: theme.typography.fontSize.sm,
      lineHeight: theme.typography.lineHeight.sm,
      color: theme.colors.textSecondary,
    },

    form: {
      width: "100%",
      gap: theme.spacing.sm,
    },

    strengthContainer: {
      marginTop: theme.spacing.xs,
    },

    strengthBars: {
      flexDirection: "row",
      gap: theme.spacing.xxs,
    },

    strengthBar: {
      flex: 1,
      height: 3,
      borderRadius: theme.radius.full,
      backgroundColor: theme.colors.border,
    },

    strengthText: {
      marginTop: theme.spacing.xxs,
      fontFamily: theme.typography.fontFamily.bodyMedium,
      fontSize: theme.typography.fontSize.xs,
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

    loginText: {
      fontFamily: theme.typography.fontFamily.bodySemiBold,
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.primary,
    },
  });
