import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({ onSignInModal, loggedIn, darkMode }) {
  return (
    <header className={darkMode ? "header-dark" : "header"}>
      <h2 className={darkMode ? "header__title-dark" : "header__title"}>
        NewsExplorer
      </h2>
      <Navigation
        onSignInModal={onSignInModal}
        loggedIn={loggedIn}
        darkMode={darkMode}
      />
    </header>
  );
}

export default Header;
