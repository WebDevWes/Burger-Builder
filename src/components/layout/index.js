import React from "react";
import Auxilary from "../../hoc/Auxilary";
import style from "./index.css";
import Toolbar from "../Navigation/Toolbar";

export default function layout(props) {
  return (
    <Auxilary>
      <Toolbar />
      <main className={style.Content}>{props.children}</main>
    </Auxilary>
  );
}
