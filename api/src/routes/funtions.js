const axios = require("axios");
var Promise = require("bluebird");
const { Pokemon, Types } = require("../db");

const getApi = async () => {
  try {
    const ApiInfo = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=40"
    );
    const subApiInfo = await ApiInfo.data.results.map((e) => axios.get(e.url));
    let arrayINfo = [];
    const pokeInfo = await Promise.all(subApiInfo).then((pokem) => {
      pokem.map((e) => {
        arrayINfo.push({
          id: e.data.id,
          imagen: e.data.sprites.other.home.front_shiny,
          name: e.data.name,
          hp: e.data.stats[0].base_stat,
          attack: e.data.stats[1].base_stat,
          defense: e.data.stats[2].base_stat,
          speed: e.data.stats[5].base_stat,
          height: e.data.height,
          weight: e.data.weight,
          types: e.data.types.map((e) => e.type.name),
        });
      });
      return arrayINfo;
    });

    return pokeInfo;
  } catch (error) {
    console.log(error);
  }
};
const getDataBase = async () => {
  try {
    return await Pokemon.findAll({
      include: {
        model: Types,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllInfo = async () => {
  let infoApi = await getApi();
  let infoDataBase = await getDataBase();
  let allInfo = infoApi.concat(infoDataBase);
  return allInfo;
};

module.exports = { getApi, getDataBase, getAllInfo };
