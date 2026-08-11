import { Text, View } from "react-native";

import { lightTheme } from "../../theme";

import { createStyles } from "./DividerWithText.styles";

interface DividerWithTextProps {
  text?: string;
}

export function DividerWithText({
  text = "or continue with",
}: DividerWithTextProps) {
  const theme = lightTheme;

  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.line} />

      <Text style={styles.text}>{text}</Text>

      <View style={styles.line} />
    </View>
  );
}
