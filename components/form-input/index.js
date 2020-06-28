import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { Input } from "@ui-kitten/components";
import { styles } from "./styles";
import PropTypes from "react-native";
export default function CustomInput(props) {
  const [value, setValue] = useState("");
  const updateState = (props, value) => {
    let parsedValue = parseFloat(value.replace(",", "."));
    props.onChangeText(parsedValue);
    setValue(props.value);
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
          textStyle={styles.input}
          value={String(props.value)}
        ></Input>
      </KeyboardAvoidingView>
    </View>
  );
}

const types = PropTypes.createElement;
