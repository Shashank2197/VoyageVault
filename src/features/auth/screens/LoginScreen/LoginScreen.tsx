import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Button } from "../../../../components/Button";
import { DividerWithText } from "../../../../components/DividerWithText";
import { Input } from "../../../../components/Input";
import { SocialAuthButton } from "../../../../components/SocialAuthButton";
import { LoginFormData, loginSchema } from "../../schemas/login.schema";

import { lightTheme } from "../../../../theme";

import { createStyles } from "./LoginScreen.styles";

export function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });
  const theme = lightTheme;
  const styles = createStyles(theme);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    console.log("Valid login data:", data);
  };

  const handleGoogleLogin = () => {
    console.log("Google login pressed");
  };

  const handleAppleLogin = () => {
    console.log("Apple login pressed");
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  const handleSignUp = () => {
    router.push("/register");
  };

  return (
    <>
      <StatusBar style="dark" />
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.mainContent}>
            <View style={styles.header}>
              <Image
                source={require("../../../../../assets/branding/voyagevault-logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />

              <Text style={styles.title}>Welcome Back</Text>

              <Text style={styles.subtitle}>
                Log in to continue your next adventure
              </Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange, onBlur } }) => (
                  <Input
                    label="Email Address"
                    value={value}
                    placeholder="user@voyagevault.com"
                    onChangeText={onChange}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    error={errors.email?.message}
                    leftIcon={
                      <Mail size={20} color={theme.colors.textSecondary} />
                    }
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Password"
                    value={value}
                    placeholder="Enter your password"
                    onChangeText={onChange}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                    error={errors.password?.message}
                    onSubmitEditing={handleSubmit(onSubmit)}
                    leftIcon={
                      <LockKeyhole
                        size={20}
                        color={theme.colors.textSecondary}
                      />
                    }
                    rightIcon={
                      showPassword ? (
                        <EyeOff size={20} color={theme.colors.textSecondary} />
                      ) : (
                        <Eye size={20} color={theme.colors.textSecondary} />
                      )
                    }
                    onRightIconPress={() =>
                      setShowPassword((previous) => !previous)
                    }
                  />
                )}
              />

              <Pressable
                style={styles.forgotPassword}
                onPress={handleForgotPassword}
                hitSlop={8}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </Pressable>

              <Button
                title="Log In"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit(onSubmit)}
              />

              <DividerWithText />

              <View style={styles.socialRow}>
                <SocialAuthButton
                  title="Google"
                  icon={require("../../../../../assets/icons/social/google.png")}
                  onPress={handleGoogleLogin}
                />

                <SocialAuthButton
                  title="Apple"
                  icon={require("../../../../../assets/icons/social/apple.png")}
                  onPress={handleAppleLogin}
                />
              </View>
            </View>
          </View>
          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>

            <Pressable onPress={handleSignUp} hitSlop={8}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
