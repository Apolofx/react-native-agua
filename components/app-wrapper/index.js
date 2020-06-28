import React from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

export default function AppContainer(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={props.style}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>{props.children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
