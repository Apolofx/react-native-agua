import React, { useContext, useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import FormInput from "../form-input/index";
import {
  Input,
  Select,
  SelectItem,
  IndexPath,
  Layout,
} from "@ui-kitten/components";
import { styles } from "./styles";
import { MathContext } from "../../providers/math-context";
export default function Form() {
  const [index, setIndex] = useState(new IndexPath(0));
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
    <Layout style={styles.container}>
      <View style={styles.row}>
        <FormInput
          value={AB}
          onChangeText={setAB}
          placeholder="AB/2"
        ></FormInput>
        <FormInput value={MN} onChangeText={setMN} placeholder="MN"></FormInput>
      </View>

      <FormInput
        value={corriente}
        onChangeText={setCorriente}
        placeholder="Corriente"
      ></FormInput>
      <FormInput
        value={tension}
        onChangeText={setTension}
        placeholder="Tension"
      ></FormInput>
    </Layout>
  );
}
