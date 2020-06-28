import React, { useContext } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import Input from "../form-input/index";
import { styles } from "./styles";
import { MathContext } from "../../providers/math-context";
export default function Form() {
  const functions = useContext(MathContext);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Input onChangeText={functions.setAB} placeholder="AB/2"></Input>
        <Input onChangeText={functions.setMN} placeholder="MN"></Input>
      </View>

      <Input
        onChangeText={functions.setCorriente}
        placeholder="Corriente"
      ></Input>
      <Input onChangeText={functions.setTension} placeholder="Tension"></Input>
    </View>
  );
}
