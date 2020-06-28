import React, { useState } from "react";
import { parse } from "react-native-svg";
const pi = Math.PI;

export const MathContext = React.createContext();

export default function Provider(props) {
  const [tension, setTension] = useState("");
  const [corriente, setCorriente] = useState("");
  const [AB, setAB] = useState("");
  const [MN, setMN] = useState("");
  const [Res, setRes] = useState("");
  const calcResist = () => {
    let R = (tension / corriente) * Math.pow(AB / 2, 2) * pi;
    setRes(parseFloat(R.toFixed(3)));
    return Res;
  };
  const clearData = () => {
    setTension("");
    setCorriente("");
    setAB("");
    setMN("");
  };

  const functions = {
    AB,
    tension,
    corriente,
    MN,
    Res,
    clearData,
    calcResist,
    setTension,
    setCorriente,
    setAB,
    setMN,
    setRes,
  };

  console.log("\nEstoy en form actualizando context: ", functions);

  return (
    <MathContext.Provider value={functions}>
      {props.children}
    </MathContext.Provider>
  );
}
