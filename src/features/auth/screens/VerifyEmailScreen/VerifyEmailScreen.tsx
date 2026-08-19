import { Pressable, ScrollView, Text, View } from "react-native";

import { ArrowLeft, Mail } from "lucide-react-native";

import { router, useLocalSearchParams } from "expo-router";

import { StatusBar } from "expo-status-bar";

import { Button } from "../../../../components/Button";

import { lightTheme } from "../../../../theme";

import { createStyles } from "./VerifyEmailScreen.styles";

export function VerifyEmailScreen() {
  const theme = lightTheme;
  const styles = createStyles(theme);

  const { email } = useLocalSearchParams<{
    email?: string;
  }>();

  const userEmail = typeof email === "string" ? email : "your email address";

  const handleOpenEmailApp = () => {
    console.log("Open email app pressed");
  };

  const handleResendEmail = () => {
    console.log("Resend verification email:", userEmail);
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
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.mainContent}>
            {/* Back Button */}
            <Pressable
              onPress={handleBackToLogin}
              hitSlop={8}
              style={styles.backButton}
              accessibilityRole="button"
              accessibilityLabel="Back to login"
            >
              <ArrowLeft size={20} color={theme.colors.textPrimary} />
            </Pressable>

            {/* Verify Email Content */}
            <View style={styles.verifyContent}>
              <Mail size={52} strokeWidth={1.8} color={theme.colors.primary} />

              <View style={styles.header}>
                <Text style={styles.title}>Verify Your Email</Text>

                <Text style={styles.description}>
                  We have sent a verification code link to{" "}
                  <Text style={styles.emailText}>{userEmail}</Text>. Please
                  click on the link to confirm your account.
                </Text>
              </View>

              <View style={styles.actions}>
                <Button
                  title="Open Email App"
                  fullWidth
                  onPress={handleOpenEmailApp}
                />

                <Button
                  title="Resend Email"
                  variant="secondary"
                  fullWidth
                  onPress={handleResendEmail}
                />
              </View>
            </View>
          </View>

          {/* Bottom Back To Login */}
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
