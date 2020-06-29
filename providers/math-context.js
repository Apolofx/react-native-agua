import React, { useState, useEffect } from "react";
import helpers from "../helpers/math-helpers";

const { pi, vectorAB } = helpers;

export const MathContext = React.createContext();
export default function Provider(props) {
  const [tension, setTension] = useState("");
  const [corriente, setCorriente] = useState("");
  const [AB, setAB] = useState("2");
  const [MN, setMN] = useState("");
  const [Res, setRes] = useState(0);
  const [indexAB, setIndexAB] = useState(0);
  let index = 0;
  const incrementAB = () => {
    setIndexAB((prev) => prev + 1);
  };
  const decrementAB = () => {
    setIndexAB((prev) => prev - 1);
  };

  useEffect(() => {
    try {
      setAB(vectorAB[indexAB].toString());
    } catch (e) {
      console.warn(e);
    }
  }, [indexAB]);

  const resetAB = () => {};

  const calcResist = () => {
    const parsedMN = parseFloat(MN.replace(",", "."));
    const parsedAB = parseFloat(AB.replace(",", "."));
    const parsedCorriente = parseFloat(corriente.replace(",", "."));
    const parsedTension = parseFloat(tension.replace(",", "."));
    let R = (parsedTension / parsedCorriente) * Math.pow(parsedAB, 2) * pi;
    setRes(R.toFixed(3));
  };

  const clearData = () => {
    // setMN("");
    // setAB("");
    setTension("");
    setCorriente("");
    return 1;
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
    incrementAB,
    decrementAB,
  };

  console.log("\nEstoy en context actualizando context: ", functions);

  return (
    <MathContext.Provider value={functions}>
      {props.children}
    </MathContext.Provider>
  );
}
