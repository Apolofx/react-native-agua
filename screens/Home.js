import React from "react";

import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import Form from "../components/form/index";
import BottomBar from "../components/action-bar/index";
export default function Home() {
  return (
    <View>
      <Form />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
