import { ReactNode } from "react";
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from "react-native";

export interface InputProps {
  label?: string;

  value: string;

  placeholder?: string;

  onChangeText: (text: string) => void;

  secureTextEntry?: boolean;

  keyboardType?: KeyboardTypeOptions;

  returnKeyType?: ReturnKeyTypeOptions;

  autoCapitalize?: "none" | "sentences" | "words" | "characters";

  autoCorrect?: boolean;

  disabled?: boolean;

  error?: string;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;

  onRightIconPress?: () => void;

  onSubmitEditing?: () => void;

  accessibilityLabel?: string;
}
