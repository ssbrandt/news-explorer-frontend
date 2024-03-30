import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";
import logOutImage from "../../images/logout.svg";
import hamburger from "../../images/hamburger.svg";
import hamburgerDark from "../../images/hamburger-dark.svg";
import close from "../../images/close.svg";

function Navigation({ onSignInModal, loggedIn, darkMode }) {
  const [menuState, setMenuState] = React.useState("nav__items");

  const handleMenuClick = () => {
    console.log("click");
    menuState === "nav__items-active"
      ? setMenuState("nav__items")
      : setMenuState("nav__items-active");

    console.log(menuState);
  };

  return (
    <div className="nav">
      <div className="nav__hamburger" onClick={handleMenuClick}>
        <img src={menuState === "nav__items" ? hamburger : close} />
      </div>

      <ul className={menuState}>
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
