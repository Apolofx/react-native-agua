import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import Input from "../form-input/index";
import { styles } from "./styles";

export default function Form() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.row}>
        <Input placeholder="AB/2"></Input>
        <Input placeholder="MN"></Input>
      </View>

      <Input placeholder="Corriente"></Input>
      <Input placeholder="Tension"></Input>
    </KeyboardAvoidingView>
  );
}
