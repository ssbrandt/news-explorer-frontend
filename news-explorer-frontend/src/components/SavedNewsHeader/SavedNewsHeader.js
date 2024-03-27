import "./SavedNewsHeader.css";
import React from "react";

function SavedNewsHeader() {
  return (
    <section className="saved-news">
      <p>Saved articles</p>
      <h1>Elise, you have 5 saved articles</h1>
      <p>By keywords: Word, Word, Word</p>
    </section>
  );
}

export default SavedNewsHeader;
