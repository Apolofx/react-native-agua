import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import AppContainer from "./components/app-wrapper/index";
import AppProviders from "./providers/index";
export default function App() {
  return (
    <AppProviders>
      <AppContainer style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </AppContainer>
    </AppProviders>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
