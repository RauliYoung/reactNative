import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import MealsNavigation from "./navigation/MealsNavigation";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <MealsNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AFEEEE",
  },
  text: {
    fontWeight: "bold",
    shadowOpacity: 0.6,
    shadowColor: "black",
    shadowOffset: { height: 4, width: 4 },
  },
});
