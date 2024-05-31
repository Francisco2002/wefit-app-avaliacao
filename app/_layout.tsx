import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RepositoriesProvider from '@/contexts/RepositoriesProvider';
import { fontsToLoad } from '@/constants/Typography';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const [loaded] = useFonts(fontsToLoad);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ paddingTop: insets.top }}>
      <StatusBar style='dark' backgroundColor="#FFF" />
      <RepositoriesProvider value={null}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='details/index' options={{ headerShown: false }} />
        </Stack>
      </RepositoriesProvider>
    </SafeAreaProvider>
  );
}
