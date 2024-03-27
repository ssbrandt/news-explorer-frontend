import "./SavedNewsHeader.css";
import React from "react";

function SavedNewsHeader() {
  return (
    <section className="saved-news">
      <p className="saved-news__subheader">Saved articles</p>
      <h1 className="saved-news__header">Elise, you have 5 saved articles</h1>
      <div className="saved-news__keywords">
        <p className="keywords__intro">By keywords: </p>
        <p className="keywords__items">Word, Word, Word</p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
