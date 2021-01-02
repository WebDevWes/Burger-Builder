import React from "react";
import burgerLogo from "../../assets/images/original.png";
import style from "./index.css";

export default function logo() {
  return (
    <div className={style.Logo}>
      <img src={burgerLogo} alt="BurgerLogo" />
    </div>
  );
}
