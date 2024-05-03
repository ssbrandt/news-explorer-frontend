import "./NewsCard.css";
import "./NewsCard.css";
import React from "react";

function NewsCard({ loggedIn, card }) {
  const [showBadgeMessage, setShowBadgeMessage] = React.useState(
    " card__select card__select_hidden"
  );

  const handleBadgeClick = () => {
    showBadgeMessage === "card__select card__select_visible"
      ? setShowBadgeMessage("card__select card__select_hidden")
      : setShowBadgeMessage("card__select card__select_visible");
  };
  return (
    <li className="card">
      <img src={card.urlToImage} alt="news" className="card__image" />
      <div className="card__info">
        <p className="card__date">{card.publishedAt}</p>
        <h2 className="card__title">{card.title}</h2>
        <p className="card__description">{card.description}</p>
        <p className="card__source">{card.source.name}</p>
      </div>
      <div
        className={
          loggedIn
            ? "card__badge card__badge_bookmark"
            : "card__badge card__badge_trash"
        }
        onClick={handleBadgeClick}
      ></div>
      <div className={showBadgeMessage}>
        <p className="card__select-text">
          {loggedIn ? "Sign in to save article" : "Removed from save"}
        </p>
      </div>
      <div
        className={
          loggedIn
            ? "card__keyword card__keyword_hidden"
            : "card__keyword card__keyword_visible"
        }
      >
        <p className="card__keyword-text">{card.keyword}</p>
      </div>
    </li>
  );
}

export default NewsCard;
