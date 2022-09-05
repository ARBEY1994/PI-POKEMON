import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const GET_TYPES = "GET_TYPES";
export const FILTER_CREATEDB_OR_API = "FILTER_CREATEDB_OR_API";
export const ORDER_ALPHABETICAL = "ORDER_ALPHABETICAL";
export const GET_NAME_POKEMON = "GET_NAME_POKEMON";
export const GET_DETAIL = "GET_DETAIL";
export const ATTACK_POWER_LEVEL = "ATTACK_POWER_LEVEL";

export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get("/pokemons");
    return dispatch({
      type: "GET_POKEMONS",
      payload: json.data,
    });
  };
}

export function getTypes() {
  return async function (dispatch) {
    var typesP = await axios.get("/type");

    return dispatch({
      type: "GET_TYPES",
      payload: typesP.data,
    });
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    const resp = await axios.post("/pokemons", payload);
    return resp;
  };
}

export function getPokemonByName(payload) {
  return {
    type: "GET_NAME_POKEMON",
    payload,
  };
}
export function GetDetail(id) {
  return async function (dispatch) {
    try {
      var info = await axios.get(`/pokemons/${id}`);
      return dispatch({
        type: "GET_DETAIL",
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function TypeOfPokemon(payload) {
  console.log(payload);
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function FilterCreateDbOrApi(payload) {
  return {
    type: "FILTER_CREATEDB_OR_API",
    payload,
  };
}

export function alphabeticalOrder(payload) {
  return {
    type: "ORDER_ALPHABETICAL",
    payload,
  };
}

export function AttackPower(payload) {
  return {
    type: "ATTACK_POWER_LEVEL",
    payload,
  };
}
