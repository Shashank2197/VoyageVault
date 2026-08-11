import { useState } from "react";

import { Platform, Pressable, ScrollView, Text, View } from "react-native";

import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react-native";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Button } from "../../../../components/Button";
import { DividerWithText } from "../../../../components/DividerWithText";
import { Input } from "../../../../components/Input";
import { SocialAuthButton } from "../../../../components/SocialAuthButton";

import { lightTheme } from "../../../../theme";

import {
  RegisterFormData,
  registerSchema,
} from "../../schemas/register.schema";

import { getPasswordStrength } from "../../utils/passwordStrength";

import { createStyles } from "./RegisterScreen.styles";

export function RegisterScreen() {
  const theme = lightTheme;
  const styles = createStyles(theme);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password");

  const passwordStrength = getPasswordStrength(password);

  const getStrengthColor = () => {
    switch (passwordStrength.strength) {
      case "weak":
        return theme.colors.error;

      case "fair":
        return theme.colors.warning;

      case "good":
      case "strong":
        return theme.colors.success;

      default:
        return theme.colors.border;
    }
  };

  const strengthColor = getStrengthColor();

  const onSubmit = async (data: RegisterFormData) => {
    console.log("Valid registration data:", data);
  };

  const handleGoogleRegister = () => {
    console.log("Google registration pressed");
  };

  const handleAppleRegister = () => {
    console.log("Apple registration pressed");
  };

  const handleLogin = () => {
    router.replace("/login");
  };

  return (
    <>
      <StatusBar style="dark" />

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode={Platform.OS === "ios" ? "interactive" : "on-drag"}
        automaticallyAdjustKeyboardInsets={Platform.OS === "ios"}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.mainContent}>
            <View style={styles.header}>
              <Text style={styles.title}>Create Account</Text>

              <Text style={styles.subtitle}>
                Sign up to start planning with your group
              </Text>
            </View>

            <View style={styles.form}>
              {/* Full Name */}
              <Controller
                control={control}
                name="fullName"
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Full Name"
                    value={value}
                    placeholder="Alex Rivers"
                    onChangeText={onChange}
                    autoCapitalize="words"
                    error={errors.fullName?.message}
                    leftIcon={
                      <UserRound size={20} color={theme.colors.textSecondary} />
                    }
                  />
                )}
              />

              {/* Email */}
              <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Email Address"
                    value={value}
                    placeholder="alex@voyagevault.com"
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

              {/* Password */}
              <View>
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
                      error={errors.password?.message}
                      leftIcon={
                        <LockKeyhole
                          size={20}
                          color={theme.colors.textSecondary}
                        />
                      }
                      rightIcon={
                        showPassword ? (
                          <EyeOff
                            size={20}
                            color={theme.colors.textSecondary}
                          />
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

                {password.length > 0 && (
                  <View style={styles.strengthContainer}>
                    <View style={styles.strengthBars}>
                      {[1, 2, 3, 4].map((item) => (
                        <View
                          key={item}
                          style={[
                            styles.strengthBar,

                            item <= passwordStrength.score && {
                              backgroundColor: strengthColor,
                            },
                          ]}
                        />
                      ))}
                    </View>

                    <Text
                      style={[
                        styles.strengthText,
                        {
                          color: strengthColor,
                        },
                      ]}
                    >
                      {passwordStrength.label}
                    </Text>
                  </View>
                )}
              </View>

              {/* Confirm Password */}
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { value, onChange } }) => (
                  <Input
                    label="Confirm Password"
                    value={value}
                    placeholder="Repeat your password"
                    onChangeText={onChange}
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                    error={errors.confirmPassword?.message}
                    onSubmitEditing={handleSubmit(onSubmit)}
                    leftIcon={
                      <LockKeyhole
                        size={20}
                        color={theme.colors.textSecondary}
                      />
                    }
                    rightIcon={
                      showConfirmPassword ? (
                        <EyeOff size={20} color={theme.colors.textSecondary} />
                      ) : (
                        <Eye size={20} color={theme.colors.textSecondary} />
                      )
                    }
                    onRightIconPress={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                  />
                )}
              />

              <Button
                title="Create Account"
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
                  onPress={handleGoogleRegister}
                />

                <SocialAuthButton
                  title="Apple"
                  icon={require("../../../../../assets/icons/social/apple.png")}
                  onPress={handleAppleRegister}
                />
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>

            <Pressable onPress={handleLogin} hitSlop={8}>
              <Text style={styles.loginText}>Log In</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
