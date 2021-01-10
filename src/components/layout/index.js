import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary";
import style from "./index.css";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";

export default class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  SideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  render() {
    return (
      <Auxilary>
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerClosedHandler}
        />
        <main className={style.Content}>{this.props.children}</main>
      </Auxilary>
    );
  }
}
