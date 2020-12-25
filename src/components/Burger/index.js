import React from "react";
import style from "./index.css";
import BurgerIngredient from "./BurgerIngredient";

export default function burger(props) {
  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}
