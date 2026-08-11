import { ImageSourcePropType } from "react-native";

export interface SocialAuthButtonProps {
  title: string;
  icon: ImageSourcePropType;

  onPress: () => void;

  loading?: boolean;
  disabled?: boolean;

  accessibilityLabel?: string;
}
