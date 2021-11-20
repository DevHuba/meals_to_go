import { StatusBar } from "expo-status-bar";
import React from "react";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation/index";

import { firebase } from "@firebase/app";
import "@firebase/auth";

//Add custom fonts using expo google fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

const firebaseConfig = {
  apiKey: "AIzaSyCTxuJ0ItZjEuFhvsnQGgrTMbasPOb7nKI",
  authDomain: "mealstogo-49114.firebaseapp.com",
  projectId: "mealstogo-49114",
  storageBucket: "mealstogo-49114.appspot.com",
  messagingSenderId: "621701871950",
  appId: "1:621701871950:web:54872b33ba00d4ac2bc61f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  //Custom fonts
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
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
