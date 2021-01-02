import React from "react";
import style from "./index.css";
import Logo from "../../Logo";

export default function toolbar(props) {
  return (
    <header className={style.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
}
