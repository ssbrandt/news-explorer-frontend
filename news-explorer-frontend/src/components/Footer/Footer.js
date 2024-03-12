import "./Footer.css";
import React from "react";

function Footer({}) {
  return (
    <footer className="footer">
      <h2 className="footer__title">2024 Supersite, Powered by News API</h2>
      <ul className="footer__items">
        <li className="footer__item">Home</li>
        <li className="footer_item">Practicum</li>
        <li className="footer_item">Github</li>
        <li className="footer_item">Facebook</li>
      </ul>
    </footer>
  );
}

export default Footer;
