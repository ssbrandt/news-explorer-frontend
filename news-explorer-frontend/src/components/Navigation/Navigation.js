import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import logOutImage from "../../images/logout.svg";
import hamburger from "../../images/hamburger.svg";
import hamburgerDark from "../../images/hamburger-dark.svg";
import closeSmall from "../../images/close-small.svg";

function Navigation({ onSignInModal, loggedIn, darkMode }) {
  const [menuState, setMenuState] = React.useState("nav__items");
  const [headerState, setHeaderState] = React.useState("header__title-dark");
  const [headerDarkState, setHeaderDarkState] = React.useState("header__title");
  const [navOverlay, setNavOverlay] = React.useState("nav");

  const handleMenuClick = () => {
    menuState === "nav__items-active"
      ? setMenuState("nav__items")
      : setMenuState("nav__items-active");

    navOverlay === "nav" ? setNavOverlay("nav-active") : setNavOverlay("nav");

    headerState === "header__title-dark"
      ? setHeaderState("header__title-active")
      : setHeaderState("header__title-dark");

    headerDarkState === "header__title"
      ? setHeaderDarkState("header__title-active")
      : setHeaderDarkState("header__title");
  };

  return (
    <nav className={navOverlay}>
      {loggedIn ? (
        <>
          <h2 className={headerState}>NewsExplorer</h2>
          <div className="nav__hamburger" onClick={handleMenuClick}>
            <img
              src={
                menuState === "nav__items"
                  ? loggedIn
                    ? hamburger
                    : hamburgerDark
                  : closeSmall
              }
              alt="menucontrol"
            />
          </div>

          <ul className={menuState}>
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
          </ul>
        </>
      ) : (
        <>
          <h2 className={headerDarkState}>NewsExplorer</h2>
          <div className="nav__hamburger" onClick={handleMenuClick}>
            <img
              src={
                menuState === "nav__items"
                  ? loggedIn
                    ? hamburger
                    : hamburgerDark
                  : closeSmall
              }
              alt="menucontrol"
            />
          </div>

          <ul className={menuState}>
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
                  <img src={logOutImage} className="nav__logout" alt="logout" />
                </button>
              </li>
            </>
          </ul>
        </>
      )}
    </nav>
  );
}

export default Navigation;
