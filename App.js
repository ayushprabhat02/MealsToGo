import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantScreen } from "./src/screens/restaurant.screen";
import { theme } from "./src/components/themes";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
