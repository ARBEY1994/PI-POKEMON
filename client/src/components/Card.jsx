import React from "react";
import { Link } from "react-router-dom";
import "../components/Styles/Card.css";

export default function Card({ id, name, imagen, types }) {
  return (
    <div className="card">
      <div className="face front">
        <img
          src={imagen}
          alt="pokemonImagen not fount"
          width="200px"
          height="200px"
        />
      </div>
      <div className="face back">
        <Link to={`/home/${id}`}>
          <h3>Pokemon: {name}</h3>
        </Link>
        <h3>Type: {types.map((e) => (e.name ? " " + e.name : " " + e))}</h3>
      </div>
    </div>
  );
}
