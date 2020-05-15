import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = props => (
  <NavLink
    className="nav-link"
    to={props.link}
    exact={props.exact}
    activeClassName="active"
  >
    {props.children}
  </NavLink>
);

export default NavigationItem;
