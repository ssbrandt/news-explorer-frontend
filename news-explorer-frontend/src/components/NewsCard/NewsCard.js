import "./NewsCard.css";
import "./NewsCard.css";
import React from "react";
import cardimage from "../../images/cardimage.png";

function NewsCard({}) {
  return (
    <li className="card">
      <img src={cardimage} alt="new image" className="card__image" />
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
    </li>
  );
}

export default NewsCard;
