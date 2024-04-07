import "./Footer.css";
import React from "react";
import github from "../../images/github.svg";
import facebook from "../../images/facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        &copy; 2024 Supersite, Powered by News API
      </h2>
      <ul className="footer__items">
        <div className="footer__text">
          <li className="footer__item">
            <Link to="/" className="footer__link">
              Home
            </Link>
          </li>
          <li className="footer__item">
            <a
              href="https://practicum.com"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Practicum
            </a>
          </li>
        </div>
        <div className="footer__images">
          <li className="footer_item">
            <a
              href="https://github.com/ssbrandt"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </li>
          <li className="footer_item">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
