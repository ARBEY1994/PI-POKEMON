import React from "react";
import "../components/Styles/paginado.css";

export default function Paginado({ pokemonForPage, AllPokemons, paginado }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(AllPokemons / pokemonForPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <nav className="paginado">
        {pageNumber &&
          pageNumber.map((number) => (
            <ul key={number}>
              <button
                className="botonPaginado"
                onClick={() => paginado(number)}
              >
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                ...{number}
              </button>
            </ul>
          ))}
      </nav>
    </div>
  );
}
