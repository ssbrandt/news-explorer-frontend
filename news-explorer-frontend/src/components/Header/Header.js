import "./Header.css";
import React from "react";

function Header({ onSignInModal }) {
  return (
    <header className="header">
      <h2 className="header__title">NewsExplorer</h2>
      <ul className="header__items">
        <li className="header__item">Home</li>
        <li className="header_item">
          <button
            type="text"
            className="header__button"
            onClick={onSignInModal}
          >
            Sign In
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
