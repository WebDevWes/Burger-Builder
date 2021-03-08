import React, { Component } from "react";
import style from "./index.css";
import Aux from "../../../hoc/auxilary";
import Backdrop from "./Backdrop";

export default class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={style.Modal}
          style={{
            transform: this.props.show
              ? "translateY(-20vh)"
              : "translateY(-150vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
