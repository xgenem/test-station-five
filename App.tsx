import { StatusBar } from "expo-status-bar";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { RadioButtonApp } from "./src/RadioButtonApp";

export default function App() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <RadioButtonApp />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}
