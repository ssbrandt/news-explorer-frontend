import "./About.css";
import React from "react";
import authorImage from "../../images/authorimage.jpg";

function About() {
  return (
    <section className="about">
      <img src={authorImage} alt="author" className="about__image" />
      <div className="about__content">
        <h2 className="about__header">About the author</h2>
        <p className="about__description">
          Lots of text so much text. Lots of text so much text. Lots of text so
          much text. Lots of text so much text.
        </p>
      </div>
    </section>
  );
}

export default About;
