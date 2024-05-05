import "./SearchResults.css";
import React from "react";
import NotFound from "../NotFound/NotFound";
import NewsCard from "../NewsCard/NewsCard";

function SearchResults({ loggedIn, cards }) {
  const [cardsDisplayed, setCardsDisplayed] = React.useState(3);

  const loadMoreNews = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  //need to move over NewsCard List css and remove NewsCardList component

  return (
    <section className="search-results">
      <div className="search-results__container">
        <h2 className="search-results__title">Search Results</h2>
        <div className="cards">
          <ul className="cards__list">
            {cards.length > 0 ? (
              <>
                {Object.entries(cards)
                  .slice(0, cardsDisplayed)
                  .map(([key, val], i) => (
                    <NewsCard loggedIn={loggedIn} key={key} card={val} />
                  ))}
              </>
            ) : (
              <NotFound />
            )}
          </ul>
          {cards.length > 0 && cards.length - cardsDisplayed > 0 ? (
            <button
              type="button"
              className="search-results__button"
              onClick={loadMoreNews}
            >
              Show more
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
