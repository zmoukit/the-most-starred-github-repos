import React from "react";
import appLogo from "../../assets/images/logo.png";
import "./Logo.css";

const Logo = props => (
  <div className="logo" style={{ height: props.height }}>
    <img src={appLogo} alt="Most stared github repo" />
  </div>
);

export default Logo;
