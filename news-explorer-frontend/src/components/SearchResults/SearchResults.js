import "./SearchResults.css";
import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import NotFound from "../NotFound/NotFound";

function SearchResults({ loggedIn, cards }) {
  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search Results</h2>
        {cards.length > 0 ? (
          <>
            <NewsCardList loggedIn={loggedIn} cards={cards} />
            <button type="button" className="search-results__button">
              Show more
            </button>
          </>
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
}

export default SearchResults;
