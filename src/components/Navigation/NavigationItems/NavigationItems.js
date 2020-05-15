import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationItems = () => (
  <Navbar expand="lg" variant="dark" bg="dark">
    <Navbar.Brand href="/">@zmoukit</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavigationItem link="/" exact>
          Home
        </NavigationItem>
        <NavigationItem link="/about">About Zakaria</NavigationItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationItems;
