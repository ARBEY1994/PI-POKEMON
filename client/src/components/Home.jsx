import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  alphabeticalOrder,
  AttackPower,
  FilterCreateDbOrApi,
  getPokemons,
  getTypes,
  TypeOfPokemon,
} from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "../components/Styles/Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const AllPokemons = useSelector((state) => state.pokemons);

  const AllTypes = useSelector((state) => state.types);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("");
  const [pokemonForPage, setPokemonForPage] = useState(12);
  const lastPokemonIndex = currentPage * pokemonForPage;
  const firstPokemonIndex = lastPokemonIndex - pokemonForPage;
  const currentPokemons = AllPokemons.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  const paginado = (PageNumber) => {
    setCurrentPage(PageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(TypeOfPokemon(e.target.value));
  }
  function handleFilterCreateOrExis(e) {
    e.preventDefault();
    dispatch(FilterCreateDbOrApi(e.target.value));
  }
  function handleOrder(e) {
    e.preventDefault();
    dispatch(alphabeticalOrder(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }
  function handleOrderAttack(e) {
    e.preventDefault();
    dispatch(AttackPower(e.target.value));
    setCurrentPage(1);
    setOrder(`Òrdenado ${e.target.value}`);
  }

  return (
    <div className="backgroundHome">
      <div>
        <Link to="/pokemon">
          <button className="textCreate"> Create Pokemon...</button>
        </Link>
      </div>
      <main className="borderHome">
        <div className="titleHome">
          <h1 className="degradadoHome">
            P o k e m o n &#160; W e b s i t e<span>&#160;</span>
          </h1>
        </div>
      </main>
      <div>
        <button
          className="botonreload"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          Reload all pokemons
        </button>
      </div>
      <div>
        <div>
          <select className="select4" onChange={(e) => handleFilterType(e)}>
            <option value="all">pokemon types</option>
            {AllTypes?.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <select
            className="select3"
            onChange={(e) => handleFilterCreateOrExis(e)}
          >
            <option value="All">created or existing pokemon</option>
            <option value="db">Created</option>
            <option value="api">existing</option>
          </select>
          <select className="select1" onChange={(e) => handleOrder(e)}>
            <option value="All">Alphabetical Order</option>
            <option value="asc">Ascending order</option>
            <option value="desc">Descending order</option>
          </select>
          <select className="select2" onChange={(e) => handleOrderAttack(e)}>
            <option value="All">Attack Power Order</option>
            <option value="asc"> - attack power</option>
            <option value="desc"> + attack power</option>
          </select>
        </div>
        <SearchBar className="searchBar" />

        <div className="homeCard">
          {currentPokemons?.map((e) => {
            return (
              <div>
                <Card
                  id={e.id}
                  name={e.name}
                  imagen={e.imagen}
                  types={e.types.name ? e.types.name : e.types}
                />
              </div>
            );
          })}
        </div>
        <Paginado
          pokemonForPage={pokemonForPage}
          AllPokemons={AllPokemons.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
