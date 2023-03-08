import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo_placeholder.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="50" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink className={styles.NavLink} to="/signin">Sign in</NavLink>
            <NavLink className={styles.NavLink} to="/signup">Sign up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// Replace placeholder logo
// Maybe(?) add FA icons to "Sign in" / "Sign up"
// Add CSS styles, fonts
// Source to help implement ^ above ^: LMS > Moments > Navigation and Authentication > Video 1, 2
