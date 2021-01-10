import React from "react";
import style from "./index.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

export default function toolbar(props) {
  return (
    <header className={style.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Logo height="80%" />
      <nav className={style.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
}
