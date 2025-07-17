import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's most awarded online library platfrom</h1>
            <h2>
              Find your dream book with <span className="purple"></span>Library
            </h2>
            <Link to="/books">
              <button className="btn">Browse Books</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
