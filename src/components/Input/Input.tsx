import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { lightTheme } from "../../theme";

import { createStyles } from "./Input.styles";
import { InputProps } from "./Input.types";

export function Input({
  label,

  value,
  placeholder,

  onChangeText,

  secureTextEntry = false,

  keyboardType = "default",
  returnKeyType = "done",

  autoCapitalize = "none",
  autoCorrect = false,

  disabled = false,

  error,

  leftIcon,

  rightIcon,
  onRightIconPress,

  onSubmitEditing,

  accessibilityLabel,
}: InputProps) {
  const theme = lightTheme;

  const styles = createStyles(theme);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputWrapperFocused,
          error && styles.inputWrapperError,
          disabled && styles.inputWrapperDisabled,
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textMuted}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          editable={!disabled}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onSubmitEditing={onSubmitEditing}
          accessibilityLabel={accessibilityLabel ?? label}
          style={styles.input}
        />

        {rightIcon &&
          (onRightIconPress ? (
            <Pressable
              onPress={onRightIconPress}
              hitSlop={8}
              style={styles.rightIconButton}
            >
              {rightIcon}
            </Pressable>
          ) : (
            <View style={styles.rightIconButton}>{rightIcon}</View>
          ))}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
