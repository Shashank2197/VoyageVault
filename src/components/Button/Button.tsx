import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

import { gradients, lightTheme } from "../../theme";

import { createStyles } from "./Button.styles";
import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "large",
  fullWidth = false,
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  accessibilityLabel,
}: ButtonProps) {
  const theme = lightTheme;

  const styles = createStyles(theme);

  const isDisabled = disabled || loading;

  const sizeStyleMap: Record<ButtonSize, object> = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  const labelSizeStyleMap: Record<ButtonSize, object> = {
    small: styles.labelSmall,
    medium: styles.labelMedium,
    large: styles.labelLarge,
  };

  const labelVariantStyleMap: Record<ButtonVariant, object> = {
    primary: styles.primaryLabel,
    secondary: styles.secondaryLabel,
  };

  const content = (
    <View style={styles.content}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            variant === "primary"
              ? theme.colors.surface
              : theme.colors.textPrimary
          }
        />
      ) : (
        <>
          {leftIcon}

          <Text
            style={[
              styles.label,
              labelSizeStyleMap[size],
              labelVariantStyleMap[variant],
            ]}
          >
            {title}
          </Text>

          {rightIcon}
        </>
      )}
    </View>
  );

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
      style={({ pressed }) => [
        styles.pressable,
        fullWidth && styles.fullWidth,
        pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
      ]}
    >
      {variant === "primary" ? (
        <LinearGradient
          colors={gradients.primary}
          start={{
            x: 0,
            y: 0.5,
          }}
          end={{
            x: 1,
            y: 0.5,
          }}
          style={[
            styles.base,
            sizeStyleMap[size],
            fullWidth && styles.fullWidth,
          ]}
        >
          {content}
        </LinearGradient>
      ) : (
        <View
          style={[
            styles.base,
            styles.secondary,
            sizeStyleMap[size],
            fullWidth && styles.fullWidth,
          ]}
        >
          {content}
        </View>
      )}
    </Pressable>
  );
}
