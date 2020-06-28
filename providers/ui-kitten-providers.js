import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  useTheme,
  IconRegistry,
  Icon,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

export default function Providers(props) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {props.children}
      </ApplicationProvider>
    </>
  );
}
