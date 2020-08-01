const apiRouter = require("express");

const flightRouter = apiRouter.Router();
const { showFlights, showFlightsByCity } = require("../db");

flightRouter.get("/", async (req, res, next) => {
  try {
    console.log("A WORD");
    const flights = await showFlights();
    res.send({ flights });
  } catch ({ name, message }) {
    console.log("Name", name, "message", message);
    next({ name, message });
  }
});

flightRouter.get("/city", async (req, res, next) => {
  try {
    const { city } = req.body;
    console.log("A WORD");
    const flights = await showFlightsByCity(city);
    res.send({ flights });
  } catch ({ name, message }) {
    console.log("Name", name, "message", message);
    next({ name, message });
  }
});

module.exports = flightRouter;
