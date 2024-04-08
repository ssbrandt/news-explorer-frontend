import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({ onSignInModal, loggedIn, darkMode }) {
  return (
    <header
      className={darkMode ? " header header_dark" : "header header_light"}
    >
      <Navigation
        onSignInModal={onSignInModal}
        loggedIn={loggedIn}
        darkMode={darkMode}
      />
    </header>
  );
}

export default Header;
