import "./NewsCardList.css";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ loggedIn }) {
  return (
    <div className="cards">
      <ul className="cards__list">
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
        <NewsCard loggedIn={loggedIn} />
      </ul>
    </div>
  );
}

export default NewsCardList;
