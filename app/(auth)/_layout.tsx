import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import { Slot } from "expo-router";

import { SafeAreaView } from "react-native-safe-area-context";

import { lightTheme } from "../../src/theme";

export default function AuthLayout() {
  const theme = lightTheme;

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: theme.colors.background,
        },
      ]}
      edges={["top", "bottom", "left", "right"]}
    >
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Slot />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,

    // Extra visual breathing room.
    // SafeAreaView adds the real device inset
    // in addition to this padding.
    paddingBottom: 12,
  },

  keyboardView: {
    flex: 1,
  },
});
