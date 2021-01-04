import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import style from "./index.css";

export default function sideDrawer(props) {
  return (
    <div className={style.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}
