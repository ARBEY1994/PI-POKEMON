import {
  ATTACK_POWER_LEVEL,
  FILTER_BY_TYPE,
  FILTER_CREATEDB_OR_API,
  GET_DETAIL,
  GET_NAME_POKEMON,
  GET_POKEMONS,
  GET_TYPES,
  ORDER_ALPHABETICAL,
} from "../actions";

const initialState = {
  pokemons: [],
  filterPokemons: [],
  types: [],
  detail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        filterPokemons: action.payload,
      };
    case GET_NAME_POKEMON:
      let pok = state.filterPokemons;
      let act = action.payload;
      let pokeFilter = pok.filter(
        (e) => e.name.toLowerCase() === act.toLowerCase()
      );
      let NoFountPoke = pok;
      return {
        ...state,
        pokemons: pokeFilter.length
          ? pokeFilter
          : NoFountPoke.concat(alert("Your pokemon was not found")),
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case FILTER_BY_TYPE:
      const allPokTypes = state.filterPokemons;
      const FilterPokemonType =
        action.payload === "all"
          ? allPokTypes
          : allPokTypes.filter((e) =>
              e.types.map((e) => (e.name ? e.name : e)).includes(action.payload)
            );

      return {
        ...state,
        pokemons: FilterPokemonType,
      };

    case FILTER_CREATEDB_OR_API:
      let pokems = [];
      if (action.payload === "All") {
        pokems = state.filterPokemons;
      } else if (action.payload === "db") {
        pokems = state.filterPokemons.filter((e) => e.createdInDb);
      } else if (action.payload === "api") {
        pokems = state.filterPokemons.filter((e) => !e.createdInDb);
      }
      return {
        ...state,
        pokemons: pokems,
      };

    case ORDER_ALPHABETICAL:
      let Order = [...state.pokemons];
      if (action.payload === "asc") {
        Order.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
        );
      }
      if (action.payload === "desc") {
        Order.sort((a, b) =>
          a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
        );
      }

      return {
        ...state,
        pokemons: Order,
      };

    case ATTACK_POWER_LEVEL:
      let OrderAttack = [...state.pokemons];
      if (action.payload === "desc") {
        OrderAttack.sort((a, b) => (a.attack > b.attack ? -1 : 1));
      }
      if (action.payload === "asc") {
        OrderAttack.sort((a, b) => (a.attack > b.attack ? 1 : -1));
      }
      return {
        ...state,
        pokemons: OrderAttack,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case "POST_POKEMON":
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default rootReducer;
