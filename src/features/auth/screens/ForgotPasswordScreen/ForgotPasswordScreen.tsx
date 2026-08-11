import { Platform, Pressable, ScrollView, Text, View } from "react-native";

import { ArrowLeft, Mail } from "lucide-react-native";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { lightTheme } from "../../../../theme";

import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "../../schemas/forgotPassword.schema";

import { createStyles } from "./ForgotPasswordScreen.styles";

export function ForgotPasswordScreen() {
  const theme = lightTheme;
  const styles = createStyles(theme);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),

    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    console.log("Password reset email:", data.email);
  };

  const handleBack = () => {
    router.back();
  };

  const handleBackToLogin = () => {
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
            <Pressable
              onPress={handleBack}
              hitSlop={8}
              style={styles.backButton}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <ArrowLeft size={20} color={theme.colors.textPrimary} />
            </Pressable>

            <View style={styles.header}>
              <Text style={styles.title}>Forgot Password</Text>

              <Text style={styles.description}>
                Enter the email address associated with your VoyageVault
                account. We will send you a secure link to reset your password.
              </Text>
            </View>

            <View style={styles.form}>
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
                    returnKeyType="done"
                    error={errors.email?.message}
                    onSubmitEditing={handleSubmit(onSubmit)}
                    leftIcon={
                      <Mail size={20} color={theme.colors.textSecondary} />
                    }
                  />
                )}
              />

              <Button
                title="Send Reset Link"
                fullWidth
                loading={isSubmitting}
                disabled={isSubmitting}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>

          <Pressable
            onPress={handleBackToLogin}
            hitSlop={8}
            style={styles.footer}
          >
            <Text style={styles.backToLoginText}>Back to Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}
