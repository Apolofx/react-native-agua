import React, { useContext, useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import FormInput from "../form-input/index";
import { Input } from "@ui-kitten/components";
import { styles } from "./styles";
import { MathContext } from "../../providers/math-context";
export default function Form() {
  const {
    setMN,
    setAB,
    setCorriente,
    setTension,
    AB,
    MN,
    corriente,
    tension,
  } = useContext(MathContext);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FormInput
          label="AB/2"
          style={{ width: 150 }}
          value={AB}
          onChangeText={setAB}
          placeholder="AB/2"
        />
        <FormInput
          label="MN"
          style={{ width: 150 }}
          value={MN}
          onChangeText={setMN}
          placeholder="MN"
        />
      </View>
      <FormInput
        label="Corriente (mA)"
        value={corriente}
        onChangeText={setCorriente}
        placeholder="Corriente"
      />
      <FormInput
        label="Tensión (mV)"
        value={tension}
        onChangeText={setTension}
        placeholder="Tensión"
      />
    </View>
  );
}
