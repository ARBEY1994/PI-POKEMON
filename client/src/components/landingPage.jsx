import React from "react";
import { Link } from "react-router-dom";
import "../components/Styles/landingPage.css";

export default function landinPage() {
  return (
    <div className="background">
      <main className="border">
        <div className="title">
          <h1 className="degradado">
            Search for your favorite pokemon here...<span>&#160;</span>{" "}
          </h1>
        </div>
      </main>

      <Link to="/home">
        <button className="button">
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          Press Start
        </button>
      </Link>
    </div>
  );
}
