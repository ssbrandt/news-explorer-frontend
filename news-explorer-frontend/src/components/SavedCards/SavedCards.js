import "./SavedCards.css";
import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedCards() {
  return (
    <div className="saved-cards">
      <NewsCardList />
    </div>
  );
}

export default SavedCards;
