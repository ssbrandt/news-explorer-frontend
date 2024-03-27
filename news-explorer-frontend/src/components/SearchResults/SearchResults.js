import "./SearchResults.css";
import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults() {
  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search Results</h2>
        <NewsCardList />
        <button type="button" className="search-results__button">
          Show more
        </button>{" "}
      </div>
    </section>
  );
}

export default SearchResults;
