import React from "react";
import style from "./index.css";

export default function backdrop(props) {
  return props.show ? (
    <div className={style.Backdrop} onClick={props.clicked}></div>
  ) : null;
}
