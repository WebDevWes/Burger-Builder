import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary";
import Burger from "../../components/Burger";
import BuildControls from "../../components/Burger/BuildControls";

export default class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Auxilary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Auxilary>
    );
  }
}
