import "./NewsCardList.css";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({}) {
  return (
    <div className="cards">
      <h2 className="cards__title">Search Results</h2>
      <ul className="cards__list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
      <button type="button" className="cards__button">
        Show more
      </button>
    </div>
  );
}

export default NewsCardList;
