import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, ButtonGroup, Icon } from "@ui-kitten/components";
import { MathContext } from "../../providers/math-context";
export default function ActionBar() {
  const { clearData, calcResist, Res, incrementAB, decrementAB } = useContext(
    MathContext
  );

  useEffect(() => {
    Res ? informResult(Res) : null;
  }, [Res]);

  const Siguiente = (props) => (
    <Icon name="arrowhead-right-outline" {...props} />
  );
  const Anterior = (props) => <Icon name="arrowhead-left-outline" {...props} />;
  const Calcular = (props) => <Icon name="refresh" {...props} />;

  const updateRes = () => {
    calcResist();
    clearData();
  };

  const informResult = (Res) => {
    return Alert.alert(
      "Resultado",
      `${Res} mOhm`,
      [
        {
          text: "Repetir",
          onPress: () => console.log("Repetir medicion"),
          style: "cancel",
        },
        { text: "Siguiente", onPress: () => incrementAB() },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <ButtonGroup appearance="outline" size="giant">
        <Button accessoryRight={Anterior} onPress={decrementAB} />
        <Button accessoryRight={Calcular} onPress={updateRes} />
        <Button accessoryRight={Siguiente} onPress={incrementAB} />
      </ButtonGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
