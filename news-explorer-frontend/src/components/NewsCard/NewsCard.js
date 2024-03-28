import "./NewsCard.css";
import "./NewsCard.css";
import React from "react";
import bookmark from "../../images/bookmark.svg";
import trashcan from "../../images/trash.svg";

function NewsCard({ loggedIn, card }) {
  const [showBadgeMessage, setShowBadgeMessage] = React.useState(
    "card__select-hidden"
  );

  const handleBadgeClick = () => {
    showBadgeMessage === "card__select-hidden"
      ? setShowBadgeMessage("card__select")
      : setShowBadgeMessage("card__select-hidden");
  };
  return (
    <li className="card">
      <img src={card.image} alt="news" className="card__image" />
      <div className="card__info">
        <p className="card__date">{card.date}</p>
        <h2 className="card__title">{card.title}</h2>
        <p className="card__description">{card.description}</p>
        <p className="card__source">{card.source}</p>
      </div>
      <div className="card__badge" onClick={handleBadgeClick}>
        <img src={loggedIn ? bookmark : trashcan} alt="bookmark" />
      </div>
      <div className={showBadgeMessage}>
        <p className="card__select_text">
          {loggedIn ? "Sign in to save Article" : "Removed from Save"}
        </p>
      </div>
      <div
        className={loggedIn ? "card__keyword-hidden" : "card__keyword-visible"}
      >
        <p className="card__keyword_text">{card.keyword}</p>
      </div>
    </li>
  );
}

export default NewsCard;
