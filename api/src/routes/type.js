const { Router } = require("express");
const { getAllInfo } = require("./funtions");
const { Types } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let infoAll = await getAllInfo();
    let typesPokes = infoAll.map((e) => e.types);

    let listPokes = typesPokes.flat();

    listPokes.forEach((e) => {
      Types.findOrCreate({
        where: { name: e },
      });
    });
    let typesPokemon = await Types.findAll();
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).send(typesPokemon);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
