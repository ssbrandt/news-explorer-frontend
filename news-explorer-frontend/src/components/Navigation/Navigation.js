import "./Navigation.css";
import React from "react";

function Navigation({ onSignInModal }) {
  return (
    <div className="nav">
      <ul className="nav__items">
        <li className="nav__item">Home</li>
        <li className="nav_item">
          <button type="text" className="nav__button" onClick={onSignInModal}>
            Sign In
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
