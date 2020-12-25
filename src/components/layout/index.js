import React from "react";
import Auxilary from "../../hoc/Auxilary";
import style from "./index.css";

export default function layout(props) {
  return (
    <Auxilary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={style.Content}>{props.children}</main>
    </Auxilary>
  );
}
