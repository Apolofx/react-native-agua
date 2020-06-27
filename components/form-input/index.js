import React, { useState } from "react";
import { TextInput, Text, View, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";

export default function Input(props) {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <TextInput
          keyboardType="decimal-pad"
          placeholder={props.placeholder}
          onChangeTexts={(value) => setValue(value)}
          value={value}
        ></TextInput>
      </KeyboardAvoidingView>
    </View>
  );
}
