import React from "react";
import burgerLogo from "../../assets/images/original.png";
import style from "./index.css";

export default function logo(props) {
  return (
    <div
      className={style.Logo}
      style={{ height: props.height, marginBottom: props.marginBottom }}
    >
      <img src={burgerLogo} alt="BurgerLogo" />
    </div>
  );
}
