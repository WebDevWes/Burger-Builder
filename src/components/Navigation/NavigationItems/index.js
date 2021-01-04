import React from "react";
import style from "./index.css";
import NavigationItem from "./NavigationItem";

export default function navigationItems() {
  return (
    <ul className={style.NavigationItems}>
      <NavigationItem link="/" active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}
