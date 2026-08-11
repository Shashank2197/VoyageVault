import { StyleSheet } from "react-native";

import { lightTheme } from "../src/theme";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,

      justifyContent: "center",

      gap: lightTheme.spacing.md,

      paddingHorizontal: lightTheme.spacing.xl,

      backgroundColor: lightTheme.colors.background,
    },
    socialButtons: {
      width: "100%",

      flexDirection: "row",

      gap: lightTheme.spacing.md,
    },
  });
