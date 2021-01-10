import React from "react";
import style from "./index.css";

export default function drawerToggle(props) {
  return (
    <div className={style.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
}
