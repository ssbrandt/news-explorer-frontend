import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({ onSignInModal, loggedIn, darkMode }) {
  return (
    <header className={darkMode ? "header-dark" : "header"}>
      <Navigation
        onSignInModal={onSignInModal}
        loggedIn={loggedIn}
        darkMode={darkMode}
      />
    </header>
  );
}

export default Header;
