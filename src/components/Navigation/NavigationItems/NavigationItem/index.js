import React from "react";
import style from "./index.css";

export default function navigationItem(props) {
  return (
    <li className={style.NavigationItem}>
      <a href={props.link} className={props.active ? style.active : null}>
        {props.children}
      </a>
    </li>
  );
}
