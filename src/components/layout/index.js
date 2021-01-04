import React from "react";
import Auxilary from "../../hoc/Auxilary";
import style from "./index.css";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

export default function layout(props) {
  return (
    <Auxilary>
      <Toolbar />
      <SideDrawer />
      <main className={style.Content}>{props.children}</main>
    </Auxilary>
  );
}
