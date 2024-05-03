import "./NewsCardList.css";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ loggedIn, cards }) {
  return (
    <div className="cards">
      <ul className="cards__list">
        {Object.entries(cards).map(([key, val], i) => (
          <NewsCard loggedIn={loggedIn} key={key} card={val} />
        ))}
      </ul>
    </div>
  );
}

export default NewsCardList;
