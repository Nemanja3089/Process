import React, { Component } from 'react';
import { Link } from "react-router";
import App from "../App";
import Login from "./Login";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Link to={"/process"} component={App}>Proceeses</Link>
        <br/>
        <Link to={"/login"} component={Login}>Login</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
