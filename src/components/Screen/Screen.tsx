import { SafeAreaView } from "react-native-safe-area-context";

import { lightTheme } from "../../theme";

import { ScreenProps } from "./Screen.types";

import { createStyles } from "./Screen.styles";

export function Screen({
  children,

  edges = ["top", "bottom", "left", "right"],

  style,
}: ScreenProps) {
  const theme = lightTheme;

  const styles = createStyles(theme);

  return (
    <SafeAreaView edges={edges} style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
}
