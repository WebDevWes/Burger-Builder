import React from "react";
import style from "./index.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";

export default function toolbar(props) {
  return (
    <header className={style.Toolbar}>
      <div>MENU</div>
      <Logo height="80%" />
      <nav className={style.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}
