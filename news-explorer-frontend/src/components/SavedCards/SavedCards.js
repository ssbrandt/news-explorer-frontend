import "./SavedCards.css";
import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedCards({ loggedIn, cards }) {
  return (
    <section className="saved-cards">
      <div className="saved-cards__container">
        <NewsCardList loggedIn={loggedIn} cards={cards} />
      </div>
    </section>
  );
}

export default SavedCards;
