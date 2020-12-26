import React from "react";
import style from "./index.css";
import BuildControl from "./BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export default function buildControls(props) {
  return (
    <div className={style.BuildControls}>
      {controls.map((ctrl) => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
}
