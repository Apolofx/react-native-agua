import React, { useState, useEffect } from "react";
import { Text, View, KeyboardAvoidingView } from "react-native";
import { Input } from "@ui-kitten/components";
import { styles } from "./styles";
import PropTypes from "react-native";
export default function CustomInput(props) {
  const [value, setValue] = useState("");
  const updateState = (props, value) => {
    props.onChangeText(value);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Input
          label={props.label}
          style={props.style}
          keyboardType="numeric"
          size="large"
          placeholder={props.placeholder}
          placeholderTextColor="#C7C7CD"
          onChangeText={(value) => updateState(props, value)}
          textStyle={styles.input}
          value={props.value}
        ></Input>
      </KeyboardAvoidingView>
    </View>
  );
}

const types = PropTypes.createElement;
