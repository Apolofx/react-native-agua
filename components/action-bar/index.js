import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, ButtonGroup, Icon } from "@ui-kitten/components";
import { MathContext } from "../../providers/math-context";
export default function ActionBar() {
  const Siguiente = (props) => (
    <Icon name="arrowhead-right-outline" {...props} />
  );
  const Anterior = (props) => <Icon name="arrowhead-left-outline" {...props} />;
  const Calcular = (props) => <Icon name="refresh" {...props} />;
  const { clearData, calcResist, Res, setRes } = useContext(MathContext);

  const updateRes = () => {
    calcResist();
    clearData();
  };
  useEffect(() => {
    Res ? alert(Res) : null;
  }, [Res]);
  return (
    <View style={styles.container}>
      <ButtonGroup appearance="outline" size="giant">
        <Button
          accessoryRight={Anterior}
          onPress={() => alert("medicion anterior")}
        />
        <Button accessoryRight={Calcular} onPress={updateRes} />
        <Button
          accessoryRight={Siguiente}
          onPress={() => alert("medicion siguiente")}
        />
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
