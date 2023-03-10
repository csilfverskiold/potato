import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo_placeholder.png";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();

  const addRecipeIcon = (
    <NavLink className={styles.NavLink} to="/recipes/create">
      Add recipe
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink className={styles.NavLink} to="/feed">
        Feed
      </NavLink>
      <NavLink className={styles.NavLink} to="/saved">
        Saved recipes
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={() => {}}>
        Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <img src={currentUser?.profile_image} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink className={styles.NavLink} to="/signin">
        Sign in
      </NavLink>
      <NavLink className={styles.NavLink} to="/signup">
        Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="50" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addRecipeIcon}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            {currentUser ? loggedInIcons : loggedOutIcons}
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
