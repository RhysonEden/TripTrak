const apiRouter = require("express");

const airlineRouter = apiRouter.Router();
const { showAirlines } = require("../db");

airlineRouter.get("/", async (req, res, next) => {
  try {
    console.log("A WORD");
    const airlines = await showAirlines();
    res.send({ airlines });
  } catch (err) {
    next(err);
  }
});

module.exports = airlineRouter;
