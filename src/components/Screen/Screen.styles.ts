import { StyleSheet } from "react-native";

import { AppTheme } from "../../theme";

export const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    screen: {
      flex: 1,

      backgroundColor: theme.colors.background,
    },
  });
