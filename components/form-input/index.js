import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { Input } from "@ui-kitten/components";
import { styles } from "./styles";

export default function CustomInput(props) {
  const [value, setValue] = useState("");
  const updateState = (props, value) => {
    props.onChangeText(value);
    setValue(value);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Input
          keyboardType="numeric"
          size="large"
          placeholder={props.placeholder}
          placeholderTextColor="#C7C7CD"
          onChangeText={(value) => updateState(props, value)}
          value={value}
          textStyle={styles.input}
        ></Input>
      </KeyboardAvoidingView>
    </View>
  );
}
