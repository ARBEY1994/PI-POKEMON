import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../redux/actions";
import "../components/Styles/searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputCh(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getPokemonByName(name));
  }
  return (
    <div className="search">
      <input
        type="text"
        id="name"
        value={name}
        placeholder="Buscar..."
        onChange={(e) => handleInputCh(e)}
      />

      <button
        className="botonsearh"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
        <span id="span4"></span>
        Buscar
      </button>
    </div>
  );
}
