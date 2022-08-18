const { Router } = require("express");

const { getAllInfo } = require("./funtions");
const { Pokemon, Types } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  let infoP = await getAllInfo();
  if (name) {
    let namePoke = infoQuery.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );

    namePoke.length
      ? res.status(200).send(namePoke)
      : res.status(400).send("the pokemon was not found");
  } else {
    res.status(200).send(infoP);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let info = await getAllInfo();

  let Id = info.filter((e) => e.id == id);

  Id.length
    ? res.status(200).send(Id)
    : res.status(404).send({ error: "pokemon id not found" });
});

router.post("/", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, types } = req.body;

  let NewPoke = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });
  let typesPoke = await Types.findAll({
    where: { name: types },
  });
  NewPoke.addTypes(typesPoke);
  res.status(200).send(NewPoke);
});

module.exports = router;
