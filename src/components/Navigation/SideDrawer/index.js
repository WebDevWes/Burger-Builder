import React from "react";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import style from "./index.css";
import Backdrop from "../../UI/Modal/Backdrop";
import Aux from "../../../hoc/Auxilary.js";

export default function sideDrawer(props) {
  let attachedClassess = [style.SideDrawer, style.Close];
  if (props.open) {
    attachedClassess = [style.SideDrawer, style.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClassess.join(" ")}>
        <Logo height="11%" marginBottom="32px" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
}
