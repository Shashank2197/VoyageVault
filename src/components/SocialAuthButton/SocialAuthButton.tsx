import { ActivityIndicator, Image, Pressable, Text } from "react-native";

import { lightTheme } from "../../theme";

import { createStyles } from "./SocialAuthButton.styles";
import { SocialAuthButtonProps } from "./SocialAuthButton.types";

export function SocialAuthButton({
  title,
  icon,
  onPress,
  loading = false,
  disabled = false,
  accessibilityLabel,
}: SocialAuthButtonProps) {
  const theme = lightTheme;

  const styles = createStyles(theme);

  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? `Continue with ${title}`}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      style={({ pressed }) => [
        styles.button,

        pressed && !isDisabled && styles.pressed,

        isDisabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.textPrimary} />
      ) : (
        <>
          <Image source={icon} style={styles.icon} resizeMode="contain" />

          <Text style={styles.label}>{title}</Text>
        </>
      )}
    </Pressable>
  );
}
