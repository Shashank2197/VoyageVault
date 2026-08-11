import { useEffect } from "react";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts as useInterFonts,
} from "@expo-google-fonts/inter";

import {
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  useFonts as useOutfitFonts,
} from "@expo-google-fonts/outfit";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 400,
  fade: true,
});

export default function RootLayout() {
  const [interLoaded, interError] = useInterFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [outfitLoaded, outfitError] = useOutfitFonts({
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
  });

  const fontsLoaded = interLoaded && outfitLoaded;
  const fontError = interError || outfitError;
  const appReady = fontsLoaded || Boolean(fontError);

  useEffect(() => {
    if (appReady) {
      SplashScreen.hide();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
