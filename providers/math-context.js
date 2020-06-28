import React, { useState } from "react";
const pi = Math.PI;

export const MathContext = React.createContext();

export default function Provider(props) {
  const [tension, setTension] = useState(null);
  const [corriente, setCorriente] = useState(null);
  const [AB, setAB] = useState(null);
  const [MN, setMN] = useState(null);
  const [Res, setRes] = useState(null);
  const calcResist = async () => {
    let R = (tension / corriente) * Math.pow(AB / 2, 2) * pi;
    await setRes(R.toFixed(3));
  };

  const functions = {
    AB,
    tension,
    corriente,
    MN,
    Res,
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
