import { StyleSheet } from "react-native";

import { AppTheme } from "../../theme";

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      width: "100%",
    },

    label: {
      marginBottom: theme.spacing.xs,

      fontFamily: theme.typography.fontFamily.bodySemiBold,

      fontSize: theme.typography.fontSize.sm,
      lineHeight: theme.typography.lineHeight.sm,

      color: theme.colors.textPrimary,
    },

    inputWrapper: {
      minHeight: 52,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.radius.md,
      backgroundColor: theme.colors.surface,
    },

    inputWrapperFocused: {
      borderColor: theme.colors.primary,
    },

    inputWrapperError: {
      borderColor: theme.colors.error,
    },

    inputWrapperDisabled: {
      opacity: 0.5,
    },

    input: {
      flex: 1,
      fontFamily: theme.typography.fontFamily.bodyRegular,
      fontSize: theme.typography.fontSize.md,
      color: theme.colors.textPrimary,
      paddingVertical: 0,
      textAlignVertical: "center",
    },

    leftIcon: {
      marginRight: theme.spacing.sm,

      alignItems: "center",
      justifyContent: "center",
    },

    rightIconButton: {
      marginLeft: theme.spacing.sm,

      alignItems: "center",
      justifyContent: "center",
    },

    error: {
      marginTop: theme.spacing.xs,

      fontFamily: theme.typography.fontFamily.bodyRegular,

      fontSize: theme.typography.fontSize.xs,
      lineHeight: theme.typography.lineHeight.xs,

      color: theme.colors.error,
    },
  });
