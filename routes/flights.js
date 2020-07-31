const apiRouter = require("express");

const flightRouter = apiRouter.Router();
const { showFlights } = require("../db");

flightRouter.get("/", async (req, res, next) => {
  try {
    console.log("A WORD");
    const flights = await showFlights();
    res.send({ flights });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = flightRouter;
