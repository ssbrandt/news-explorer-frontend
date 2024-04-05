import "./Preloader.css";
import React from "react";

function Preloader() {
  return (
    <div className="circle-preloader__container">
      <div className="circle-preloader"></div>
      <p className="circle-preloader__text">Searching for articles...</p>
    </div>
  );
}

export default Preloader;
