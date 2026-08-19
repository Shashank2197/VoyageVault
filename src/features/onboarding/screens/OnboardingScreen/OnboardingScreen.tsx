import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Screen } from "../../../../components/Screen";

import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Button } from "../../../../components/Button";

import { gradients, lightTheme } from "../../../../theme";

import { OnboardingSlide, onboardingSlides } from "../../data/onboardingSlides";

import { createStyles } from "./OnboardingScreen.styles";

export function OnboardingScreen() {
  const theme = lightTheme;
  const styles = createStyles(theme);

  const { width } = useWindowDimensions();

  const flatListRef = useRef<FlatList<OnboardingSlide>>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonTitle, setButtonTitle] = useState("Next");

  const buttonOpacity = useRef(new Animated.Value(1)).current;

  const buttonTranslateY = useRef(new Animated.Value(0)).current;

  const isLastSlide = currentIndex === onboardingSlides.length - 1;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(buttonOpacity, {
        toValue: 0,
        duration: 100,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),

      Animated.timing(buttonTranslateY, {
        toValue: 4,
        duration: 100,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setButtonTitle(isLastSlide ? "Get Started" : "Next");

      buttonTranslateY.setValue(-4);

      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 180,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.timing(buttonTranslateY, {
          toValue: 0,
          duration: 180,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    });
  }, [isLastSlide, buttonOpacity, buttonTranslateY]);

  const handleCompleteOnboarding = () => {
    console.log("Onboarding completed");

    /*
      Later:

      await completeOnboarding();

      hasCompletedOnboarding = true

      router.replace("/home");
    */

    router.replace("/login");
  };

  const handleSkip = () => {
    handleCompleteOnboarding();
  };

  const handleNext = () => {
    if (isLastSlide) {
      handleCompleteOnboarding();
      return;
    }

    const nextIndex = currentIndex + 1;

    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    const index = Math.round(offsetX / width);

    setCurrentIndex(index);
  };

  const renderSlide = ({ item }: { item: OnboardingSlide }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            width,
          },
        ]}
      >
        <View style={styles.slideInner}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.textContent}>
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Screen edges={["top", "bottom", "left", "right"]}>
      <StatusBar style="dark" />

      <View style={styles.topBar}>
        {!isLastSlide ? (
          <Pressable
            onPress={handleSkip}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel="Skip onboarding"
          >
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        ) : (
          <View />
        )}
      </View>

      <FlatList
        ref={flatListRef}
        data={onboardingSlides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />

      <View style={styles.bottomContent}>
        <View style={styles.pagination}>
          {onboardingSlides.map((_, index) => {
            const isActive = index === currentIndex;

            if (isActive) {
              return (
                <LinearGradient
                  key={index}
                  colors={gradients.primary}
                  start={{
                    x: 0,
                    y: 0.5,
                  }}
                  end={{
                    x: 1,
                    y: 0.5,
                  }}
                  style={styles.activeIndicator}
                />
              );
            }

            return <View key={index} style={styles.inactiveIndicator} />;
          })}
        </View>

        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: buttonOpacity,

              transform: [
                {
                  translateY: buttonTranslateY,
                },
              ],
            },
          ]}
        >
          <Button title={buttonTitle} fullWidth onPress={handleNext} />
        </Animated.View>
      </View>
    </Screen>
  );
}
