import "./NewsCard.css";
import "./NewsCard.css";
import React from "react";
import cardimage from "../../images/cardimage.png";
import bookmark from "../../images/bookmark.svg";
import trashcan from "../../images/trash.svg";

function NewsCard({ loggedIn }) {
  return (
    <li className="card">
      <img src={cardimage} alt="news" className="card__image" />
      <div className="card__info">
        <p className="card__date">November 4, 2020</p>
        <h2 className="card__title">
          Everyone Needs A Special Sit Spot In Nature.
        </h2>
        <p className="card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="card__source">National Geographic</p>
      </div>
      <div className="card__badge">
        <img src={loggedIn ? bookmark : trashcan} alt="bookmark" />
      </div>
      <div className="card__select">
        <p className="card__select_text">
          {loggedIn ? "Sign in to save Article" : "Removed from Save"}
        </p>
      </div>
      <div
        className={loggedIn ? "card__keyword-hidden" : "card__keyword-visible"}
      >
        <p className="card__keyword_text">Keyword</p>
      </div>
    </li>
  );
}

export default NewsCard;
