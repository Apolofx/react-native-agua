import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.actionBar}></View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  form1: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  form2: {
    flexDirection: "column",
  },
  actionBar: {
    flexDirection: "row",
  },
});
