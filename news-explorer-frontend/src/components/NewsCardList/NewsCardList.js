import "./NewsCardList.css";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ loggedIn, cards }) {
  return (
    <div className="cards">
      <ul className="cards__list">
        {cards.map((item) => (
          <NewsCard loggedIn={loggedIn} card={item} />
        ))}
        {/* <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} /> */}
      </ul>
    </div>
  );
}

export default NewsCardList;
