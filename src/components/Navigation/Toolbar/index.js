import React from "react";
import style from "./index.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";

export default function toolbar(props) {
  return (
    <header className={style.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
}
