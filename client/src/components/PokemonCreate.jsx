import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../redux/actions";
import "./Styles/pokemonCreate.css";

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const Types = useSelector((state) => state.types);
  const [err, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    hp: Number(),
    attack: Number(),
    defense: Number(),
    speed: Number(),
    height: Number(),
    weight: Number(),
    imagen: "",
    types: [],
  });

  function InputValidator(input) {
    let err = {};
    if (!input.name || typeof input.name !== "string") {
      err.name = "please type a name!";
    } else if (!input.hp || input.hp < 0 || input.hp > 100) {
      err.hp = "¡please enter a value between 0 and 100!";
    } else if (!input.attack || input.attack < 0 || input.attack > 100) {
      err.attack = "¡please enter a value between 0 and 100!";
    } else if (!input.defense || input.defense < 0 || input.defense > 100) {
      err.defense = "¡please enter a value between 0 and 100!";
    } else if (!input.speed || input.speed < 0 || input.speed > 100) {
      err.speed = "¡please enter a value between 0 and 100!";
    } else if (!input.height || input.height < 0 || input.height > 100) {
      err.height = "¡please enter a value between 0 and 100!";
    } else if (!input.weight || input.weight < 0 || input.weight > 200) {
      err.weight = "¡please enter a value between 0 and 200!";
    } else if (!input.types) {
      err.types = "¡please enter a type!";
    } else if (!input.imagen) {
      err.imagen = "please enter an image url";
    }
    return err;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      InputValidator({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleSelect(e) {
    if (!input.types.includes(e.target.value)) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
      });
    } else {
      alert("Please select another type!");
    }
  }
  function handleSubmit(e) {
    console.log(input);
    if (!input.name) {
      e.preventDefault();
      return alert("¡please enter a name!");
    } else if (!input.types.length) {
      e.preventDefault();
      alert("¡please select a pokemon from the list!");
    } else if (!input.imagen) {
      e.preventDefault();
      alert("¡please enter a valid url!");
    } else if (!input.hp || input.hp < 0 || input.hp > 100) {
      e.preventDefault();
      alert("¡please enter a valid hp!");
    } else {
      dispatch(postPokemon(input));
      alert("pokemon created successfully!!");
      setInput({
        name: "",
        hp: Number(),
        attack: Number(),
        defense: Number(),
        speed: Number(),
        height: Number(),
        weight: Number(),
        imagen: "",
        types: [],
      });
    }

    history.push("/home");
  }

  function handleDelete(el) {
    setInput({
      ...input,
      types: input.types.filter((e) => e !== el),
    });
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className="backgraundCreate">
      <Link to="/home">
        {" "}
        <button className="homeCreate">Home</button>
      </Link>
      <main className="borderCreate2">
        <div className=" Create2">
          <h1 className="degraCreate2">
            C r e a t e &#160;&#160;y o u r&#160;&#160; p o k e m o n
            &#160;&#160;h e r e...
            <span>&#160;</span>
          </h1>
        </div>
      </main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="formName">
          <strong>
            <label>Name: </label>
          </strong>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {err.name && <span className="errors">{err.name}</span>}
        </div>
        <div className="hpStyle">
          <strong>
            <label>Hp: </label>
          </strong>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={(e) => handleChange(e)}
          />
          {err.hp && <span className="errors">{err.hp}</span>}
        </div>
        <div className="attact2">
          <strong>
            <label>Attack: </label>
          </strong>
          <input
            type="number"
            value={input.attack}
            name="attack"
            onChange={(e) => handleChange(e)}
          />
          {err.attack && <span className="errors">{err.attack}</span>}
        </div>
        <div className="defense">
          <strong>
            <label>Defense: </label>
          </strong>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={(e) => handleChange(e)}
          />
          {err.defense && <span className="errors">{err.defense}</span>}
        </div>
        <div className="speed">
          <strong>
            <label>Speed: </label>
          </strong>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={(e) => handleChange(e)}
          />
          {err.speed && <span className="errors">{err.speed}</span>}
        </div>
        <div className="height">
          <strong>
            <label>Height: </label>
          </strong>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
          />
          {err.height && <span className="errors">{err.height}</span>}
        </div>
        <div className="weight">
          <strong>
            <label>Weight: </label>
          </strong>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
          {err.weight && <span className="errors">{err.weight}</span>}
        </div>
        <div className="imagen">
          <strong>
            <label>Imagen: </label>
          </strong>
          <input
            type="text"
            value={input.imagen}
            name="imagen"
            onChange={(e) => handleChange(e)}
          />
          {err.imagen && <span className="errors">{err.imagen}</span>}
        </div>
        <select className="typesele" onChange={(e) => handleSelect(e)}>
          {Types.map((e) => (
            <option value={e}>{e}</option>
          ))}
          {err.types && <span className="errors">{err.types}</span>}
        </select>
        <ul>
          <li className="ul">
            {input.types.map((e) => (
              <div>
                <h5>
                  {Types?.find((p) => p === e)}
                  <button onClick={() => handleDelete(e)}>X</button>
                </h5>
              </div>
            ))}
          </li>
        </ul>
        <div className="labe">
          <strong>
            <label>Please select the types:</label>
          </strong>
        </div>
        {err.types && <span className="errors">{err.types}</span>}
        <div>
          <button
            className="cretatebutton"
            id="submit"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Create Pokemon
          </button>
        </div>
      </form>
    </div>
  );
}
