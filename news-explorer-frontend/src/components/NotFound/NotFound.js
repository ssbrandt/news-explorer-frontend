import "./NotFound.css";
import React from "react";
import notfound from "../../images/notfound.svg";

function NotFound() {
  return (
    <div className="notfound">
      <img className="notfound__image" src={notfound} alt="not found" />
      <h2 className="notfound__header">Nothing found</h2>{" "}
      <p className="notfound__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NotFound;
