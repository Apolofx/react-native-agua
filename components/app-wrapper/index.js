import React, { Fragment } from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { Layout } from "@ui-kitten/components";
export default function AppContainer(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={props.style}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Layout style={props.style} level="3">
          {props.children}
        </Layout>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
