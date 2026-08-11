import { useState } from "react";
import { View } from "react-native";

import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react-native";

import { Button } from "../src/components/Button";
import { DividerWithText } from "../src/components/DividerWithText";
import { Input } from "../src/components/Input";
import { lightTheme } from "../src/theme";

import { SocialAuthButton } from "../src/components/SocialAuthButton";
import { createStyles } from "./index.styles";

export default function Index() {
  const styles = createStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Input
        label="Email Address"
        value={email}
        placeholder="alex@voyagevault.com"
        onChangeText={setEmail}
        keyboardType="email-address"
        leftIcon={<Mail size={20} color={lightTheme.colors.textMuted} />}
      />

      <Input
        label="Password"
        value={password}
        placeholder="Enter your password"
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        leftIcon={<LockKeyhole size={20} color={lightTheme.colors.textMuted} />}
        rightIcon={
          showPassword ? (
            <EyeOff size={20} color={lightTheme.colors.textMuted} />
          ) : (
            <Eye size={20} color={lightTheme.colors.textMuted} />
          )
        }
        onRightIconPress={() => setShowPassword((previous) => !previous)}
      />

      <Button title="Log In" onPress={() => {}} fullWidth />

      <DividerWithText />
      <View style={styles.socialButtons}>
        <SocialAuthButton
          title="Google"
          icon={require("../assets/icons/social/google.png")}
          onPress={() => {
            console.log("Google pressed");
          }}
        />

        <SocialAuthButton
          title="Apple"
          icon={require("../assets/icons/social/apple.png")}
          onPress={() => {
            console.log("Apple pressed");
          }}
        />
      </View>
    </View>
  );
}
