import "./Footer.css";
import React from "react";
import github from "../../images/github.svg";
import facebook from "../../images/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">2024 Supersite, Powered by News API</h2>
      <ul className="footer__items">
        <div className="footer__text">
          <li className="footer__item">Home</li>
          <li className="footer__item">Practicum</li>
        </div>
        <div className="footer__images">
          <li className="footer_item">
            <img src={github} alt="github" />
          </li>
          <li className="footer_item">
            <img src={facebook} alt="facebook" />
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
