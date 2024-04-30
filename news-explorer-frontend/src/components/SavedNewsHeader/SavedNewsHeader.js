import "./SavedNewsHeader.css";
import React from "react";

function SavedNewsHeader() {
  return (
    <section className="saved-news">
      <p className="saved-news__subheader">Saved articles</p>
      <h1 className="saved-news__header">Elise, you have 5 saved articles</h1>
      <div className="saved-news__keywords-container">
        <p className="saved-news__keywords-intro">By keywords: </p>
        <p className="saved-news__keywords-items">Word, Word, Word</p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
