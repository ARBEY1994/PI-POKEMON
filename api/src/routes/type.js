const { Router } = require("express");
const { getAllInfo } = require("./funtions");
const { Types } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  let infoAll = await getAllInfo();
  let typesPokes = infoAll.map((e) => e.types);

  let listPokes = typesPokes.flat();

  listPokes.forEach((e) => {
    Types.findOrCreate({
      where: { name: e },
    });
  });
  let typesPokemon = await Types.findAll();
  res.status(200).send(typesPokemon);
});

module.exports = router;
