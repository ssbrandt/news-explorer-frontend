import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import logOutImage from "../../images/logout.svg";

function Navigation({ onSignInModal, loggedIn, darkMode }) {
  return (
    <div className="nav">
      <ul className="nav__items">
        {loggedIn ? (
          <>
            {" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav__item nav__item-active">Home</li>
            </Link>
            <li className="nav__item">
              <button
                type="text"
                className="nav__button"
                onClick={onSignInModal}
              >
                Sign In
              </button>
            </li>
          </>
        ) : (
          <>
            {" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav__item-dark">Home</li>
            </Link>
            <Link to="/saved-news" style={{ textDecoration: "none" }}>
              <li className="nav__item-dark nav__item-active-dark">
                Saved Articles
              </li>
            </Link>
            <li className="nav__item">
              <button type="text" className="nav__button-dark">
                Elise
                <img src={logOutImage} className="nav__logout" />
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
