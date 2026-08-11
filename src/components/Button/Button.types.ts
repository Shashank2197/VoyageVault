import { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  accessibilityLabel?: string;
}
