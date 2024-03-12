import "./Header.css";
import React from "react";

function Header({}) {
  return (
    <header className="header">
      <h2 className="header__title">NewsExplorer</h2>
      <ul className="header__items">
        <li className="header__item">Home</li>
        <li className="header_item">Sign In</li>
      </ul>
    </header>
  );
}

export default Header;
