import { ReactNode } from "react";

import { StyleProp, ViewStyle } from "react-native";

import { Edge } from "react-native-safe-area-context";

export interface ScreenProps {
  children: ReactNode;

  edges?: Edge[];

  style?: StyleProp<ViewStyle>;
}
