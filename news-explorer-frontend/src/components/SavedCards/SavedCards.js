import "./SavedCards.css";
import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedCards() {
  return (
    <section className="saved-cards">
      <div className="saved-cards__container">
        <NewsCardList />
      </div>
    </section>
  );
}

export default SavedCards;
