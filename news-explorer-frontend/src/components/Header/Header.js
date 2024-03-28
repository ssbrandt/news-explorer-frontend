import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";

function Header({ onSignInModal }) {
  return (
    <header className="header">
      <h2 className="header__title">NewsExplorer</h2>
      <Navigation onSignInModal={onSignInModal} />
    </header>
  );
}

export default Header;
