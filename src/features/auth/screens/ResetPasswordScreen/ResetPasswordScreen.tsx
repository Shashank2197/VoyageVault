import { useState } from "react";

import { Platform, Pressable, ScrollView, Text, View } from "react-native";

import { ArrowLeft, Eye, EyeOff, LockKeyhole } from "lucide-react-native";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { router } from "expo-router";

import { StatusBar } from "expo-status-bar";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { lightTheme } from "../../../../theme";

import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "../../schemas/resetPassword.schema";

import { getPasswordStrength } from "../../utils/passwordStrength";

import { createStyles } from "./ResetPasswordScreen.styles";

export function ResetPasswordScreen() {
  const theme = lightTheme;
  const styles = createStyles(theme);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),

    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const password = watch("newPassword");

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

  const handleBackToLogin = () => {
    router.replace("/login");
  };

  const onSubmit = async (data: ResetPasswordFormData) => {
    console.log("Valid reset password data:", data);

    // Firebase password reset will
    // be connected later.
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
            <Pressable
              onPress={handleBackToLogin}
              hitSlop={8}
              style={styles.backButton}
              accessibilityRole="button"
              accessibilityLabel="Back to login"
            >
              <ArrowLeft size={20} color={theme.colors.textPrimary} />
            </Pressable>

            <View style={styles.header}>
              <Text style={styles.title}>Reset Password</Text>

              <Text style={styles.description}>
                Secure your VoyageVault account by setting a robust new
                password. Choose a combination of letters, numbers, and symbols.
              </Text>
            </View>

            <View style={styles.form}>
              {/* New Password */}
              <View>
                <Controller
                  control={control}
                  name="newPassword"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      label="New Password"
                      value={value}
                      placeholder="Enter your new password"
                      onChangeText={onChange}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                      error={errors.newPassword?.message}
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
                    placeholder="Repeat your new password"
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
                title="Reset Password"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
