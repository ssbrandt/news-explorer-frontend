import "./NewsCardList.css";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({}) {
  return (
    <div className="cards">
      <ul className="cards__list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
    </div>
  );
}

export default NewsCardList;
