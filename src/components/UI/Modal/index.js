import React from "react";
import style from "./index.css";
import Aux from "../../../hoc/Auxilary";
import Backdrop from "./Backdrop";

export default function modal(props) {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalCLosed} />
      <div
        className={style.Modal}
        style={{
          transform: props.show ? "translateY(-20vh)" : "translateY(-150vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
}
