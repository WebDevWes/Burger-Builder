import React from "react";
import style from "./index.css";

export default function button(props) {
  return (
    <button
      className={[style.Button, style[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
}
