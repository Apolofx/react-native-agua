import React from "react";
import MathContext from "./math-context";
import UIkitten from "./ui-kitten-providers";
import { PropsService } from "@ui-kitten/components/devsupport";
export default function Provider(props) {
  return (
    <UIkitten>
      <MathContext>{props.children}</MathContext>
    </UIkitten>
  );
}
